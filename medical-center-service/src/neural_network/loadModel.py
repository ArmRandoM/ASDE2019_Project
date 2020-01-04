from keras.preprocessing import image
#import matplotlib.pyplot as plt
#import tensorflow as tf
import numpy as np
from keras.models import load_model
#from keras import Model
from keras.layers import *
#from keras.optimizers import SGD
from keras.metrics import binary_crossentropy, binary_accuracy
from keras import backend as K
import sys, getopt

imageName = sys.argv[1]

# NOTA: TENSORFLOW==1.15.0
dropout = .5

class VariableDropout(Layer):
    def __init__(self, rate=dropout, noise_shape=None, seed=None, **kwargs):
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

def binaryCrossentropy(y_true, y_pred):
    return binary_crossentropy(y_true, K.sigmoid(y_pred))

def binaryAccuracy(y_true, y_pred):
    return binary_accuracy(y_true, K.sigmoid(y_pred))

model = load_model('src/neural_network/model.h5', custom_objects={'VariableDropout': VariableDropout, 'binaryCrossentropy': binaryCrossentropy, 'binaryAccuracy': binaryAccuracy})

img = image.load_img("src/neural_network/"+imageName, target_size=(224, 224))
img_tensor = image.img_to_array(img)
img_tensor /= 127.5-1
img_tensor = np.expand_dims(img_tensor, axis=0)

classes = model.predict(img_tensor)

print(classes)
