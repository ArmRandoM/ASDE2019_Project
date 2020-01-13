from keras.preprocessing import image
import matplotlib.pyplot as plt
import tensorflow as tf
import numpy as np
from keras import Model
from keras.layers import *
from keras.optimizers import SGD
from keras.metrics import binary_crossentropy, binary_accuracy
from keras import backend as K
import sys, getopt

dropout = .5
epochs = 100
batch_size = 64
seed = 1234
imageName = sys.argv[1]

# NOTA: TENSORFLOW==1.15.0


class VariableDropout(Layer):
    def __init__(self, rate, noise_shape=None, seed=None, **kwargs):
        self.rate = K.variable(min(1., max(0., rate)))
        self.noise_shape = noise_shape
        self.seed = seed
        super(VariableDropout, self).__init__(**kwargs)

    def call(self, x, training=None):
        def dropout():
            return K.dropout(x,
                             self.rate,
                             self._get_noise_shape(x),
                             seed=self.seed)

        return K.in_train_phase(dropout, x,
                                training=training)

    def compute_output_shape(self, input_shape):
        return input_shape

    def set_rate(self, rate):
        K.set_value(self.rate, min(1, max(0., rate)))

    def _get_noise_shape(self, inputs):
        if self.noise_shape is None:
            return self.noise_shape

        symbolic_shape = K.shape(inputs)
        noise_shape = [symbolic_shape[axis] if shape is None else shape
                       for axis, shape in enumerate(self.noise_shape)]

        return tuple(noise_shape)

    def get_config(self):
        config = {'rate': self.rate, 'noise_shape': self.noise_shape, 'seed':self.seed}
        base_config = super(VariableDropout, self).get_config()
        return dict(list(base_config.items()) + list(config.items()))

def trainDataGenerator():
    global alpha, train_steps, batch_size, benign_train_dir, malign_train_dir
    files = [benign_train_dir+f for f in listdir(benign_train_dir)]+\
            [malign_train_dir+f for f in listdir(malign_train_dir)]
    np.random.shuffle(files)

    for i in range(train_steps):
        result = [[], []]

        for f in files[i*batch_size:(i+1)*batch_size]:
            image = img.open(f)
            image = np.array(image).astype('float32')

            if np.random.choice([True, False]): # 50% chance of flipping the image horizontally.
                image = image[:, ::-1]
            if np.random.choice([True, False]): # 50% chance of flipping the image vertically.
                image = image[::-1, :]

            image = image/127.5-1 # Map values between -1 and 1.
            result[0].append(image)
            result[1].append(np.array([0]) if 'benign' in f else np.array([1]))

        result[0] = np.array(result[0])
        result[1] = np.array(result[1])
        yield result

def valDataGenerator():
    global benign_val_dir, malign_val_dir

    for f in listdir(benign_val_dir):
        result = [[], []]
        image = img.open(benign_val_dir+f)
        image = np.array(image).astype('float32')/127.5-1

        result[0].append(image)
        result[1].append(np.array([0]))

        result[0] = np.array(result[0])
        result[1] = np.array(result[1])
        yield result

    for f in listdir(malign_val_dir):
        result = [[], []]
        image = img.open(malign_val_dir+f)
        image = np.array(image).astype('float32')/127.5-1

        result[0].append(image)
        result[1].append(np.array([1]))

        result[0] = np.array(result[0])
        result[1] = np.array(result[1])
        yield result

def lrGenerator(min_lr, max_lr, step):
    flag = False
    lr = max_lr

    while True:
        lr = lr+step if flag else lr-step
        flag = False if lr >= max_lr else True if lr <= min_lr else flag

        yield lr


lr = lrGenerator(.005, .025, .005)

def model():
    x = Input((224, 224, 3))
    y = Conv2D(16, 3, activation='relu')(x)
    y = MaxPool2D()(y)
    y = BatchNormalization()(y)
    y = Conv2D(32, 3, activation='relu')(y)
    y = MaxPool2D()(y)
    y = BatchNormalization()(y)
    y = Conv2D(64, 3, activation='relu')(y)
    y = MaxPool2D()(y)
    y = BatchNormalization()(y)
    y = Conv2D(128, 3, activation='relu')(y)
    y = MaxPool2D()(y)
    y = BatchNormalization()(y)
    y = Conv2D(256, 3, activation='relu')(y)
    y = MaxPool2D()(y)
    y = BatchNormalization()(y)
    y = Conv2D(512, 3, activation='relu')(y)
    y = GlobalAvgPool2D()(y)
    y = Dense(512, activation='relu')(y)
    y = VariableDropout(dropout, seed=seed, name='dropout')(y)
    y = Dense(1)(y)

    return Model(x, y)

def binaryCrossentropy(y_true, y_pred):
    return binary_crossentropy(y_true, K.sigmoid(y_pred))
def binaryAccuracy(y_true, y_pred):
    return binary_accuracy(y_true, K.sigmoid(y_pred))

model = model()
model.compile(SGD(next(lr), .9, nesterov=True), binaryCrossentropy, metrics=[binaryAccuracy])

model.load_weights('src/neural_network/modelWeights.h5')

img = image.load_img("src/neural_network/"+imageName, target_size=(224, 224))
img_tensor = image.img_to_array(img)
img_tensor /= 127.5-1
img_tensor = np.expand_dims(img_tensor, axis=0)

classes = model.predict(img_tensor)

print(classes)


"""
model = load_model("C:\\Users\\Alessandro\\ASDE2019_Project\\medical-center-service\\src\\neural_network\\Model_1.h5")

img = image.load_img("C:\\Users\\Alessandro\\ASDE2019_Project\\medical-center-service\\src\\neural_network\\neoM.jpg", target_size=(224, 224))
img_tensor = image.img_to_array(img)
img_tensor /= 127.5-1
img_tensor = np.expand_dims(img_tensor, axis=0)

classes = model.predict(img_tensor)

print(classes)
"""