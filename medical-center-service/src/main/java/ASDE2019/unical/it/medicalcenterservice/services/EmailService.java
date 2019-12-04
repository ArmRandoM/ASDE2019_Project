package ASDE2019.unical.it.medicalcenterservice.services;

import java.util.Properties;

import javax.activation.DataHandler;
import javax.activation.DataSource;
import javax.activation.FileDataSource;
import javax.mail.BodyPart;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;

import org.springframework.stereotype.Service;

@Service
public class EmailService {

	private static String host = "smtp.gmail.com";
	
    private static String htmlWelcomeText = "<!DOCTYPE html>\r\n" + 
    		"<html>\r\n" + 
    		"\r\n" + 
    		"<head>\r\n" + 
    		"	<meta charset=\"utf-8\">\r\n" + 
    		"	<style amp4email-boilerplate>\r\n" + 
    		"		body {\r\n" + 
    		"			visibility: hidden\r\n" + 
    		"		}\r\n" + 
    		"	</style>\r\n" + 
    		"	<script async src=\"https://cdn.ampproject.org/v0.js\"></script>\r\n" + 
    		"\r\n" + 
    		"	<style amp-custom>\r\n" + 
    		"		@media only screen and (max-width:600px) {\r\n" + 
    		"\r\n" + 
    		"			p,\r\n" + 
    		"			ul li,\r\n" + 
    		"			ol li,\r\n" + 
    		"			a {\r\n" + 
    		"				font-size: 16px;\r\n" + 
    		"				line-height: 150%\r\n" + 
    		"			}\r\n" + 
    		"\r\n" + 
    		"			h1 {\r\n" + 
    		"				font-size: 30px;\r\n" + 
    		"				text-align: center;\r\n" + 
    		"				line-height: 120%\r\n" + 
    		"			}\r\n" + 
    		"\r\n" + 
    		"			h2 {\r\n" + 
    		"				font-size: 26px;\r\n" + 
    		"				text-align: center;\r\n" + 
    		"				line-height: 120%\r\n" + 
    		"			}\r\n" + 
    		"\r\n" + 
    		"			h3 {\r\n" + 
    		"				font-size: 20px;\r\n" + 
    		"				text-align: center;\r\n" + 
    		"				line-height: 120%\r\n" + 
    		"			}\r\n" + 
    		"\r\n" + 
    		"			h1 a {\r\n" + 
    		"				font-size: 30px\r\n" + 
    		"			}\r\n" + 
    		"\r\n" + 
    		"			h2 a {\r\n" + 
    		"				font-size: 26px\r\n" + 
    		"			}\r\n" + 
    		"\r\n" + 
    		"			h3 a {\r\n" + 
    		"				font-size: 20px\r\n" + 
    		"			}\r\n" + 
    		"\r\n" + 
    		"			.es-menu td a {\r\n" + 
    		"				font-size: 16px\r\n" + 
    		"			}\r\n" + 
    		"\r\n" + 
    		"			.es-header-body p,\r\n" + 
    		"			.es-header-body ul li,\r\n" + 
    		"			.es-header-body ol li,\r\n" + 
    		"			.es-header-body a {\r\n" + 
    		"				font-size: 16px\r\n" + 
    		"			}\r\n" + 
    		"\r\n" + 
    		"			.es-footer-body p,\r\n" + 
    		"			.es-footer-body ul li,\r\n" + 
    		"			.es-footer-body ol li,\r\n" + 
    		"			.es-footer-body a {\r\n" + 
    		"				font-size: 16px\r\n" + 
    		"			}\r\n" + 
    		"\r\n" + 
    		"			.es-infoblock p,\r\n" + 
    		"			.es-infoblock ul li,\r\n" + 
    		"			.es-infoblock ol li,\r\n" + 
    		"			.es-infoblock a {\r\n" + 
    		"				font-size: 12px\r\n" + 
    		"			}\r\n" + 
    		"\r\n" + 
    		"			*[class=\"gmail-fix\"] {\r\n" + 
    		"				display: none\r\n" + 
    		"			}\r\n" + 
    		"\r\n" + 
    		"			.es-m-txt-c,\r\n" + 
    		"			.es-m-txt-c h1,\r\n" + 
    		"			.es-m-txt-c h2,\r\n" + 
    		"			.es-m-txt-c h3 {\r\n" + 
    		"				text-align: center\r\n" + 
    		"			}\r\n" + 
    		"\r\n" + 
    		"			.es-m-txt-r,\r\n" + 
    		"			.es-m-txt-r h1,\r\n" + 
    		"			.es-m-txt-r h2,\r\n" + 
    		"			.es-m-txt-r h3 {\r\n" + 
    		"				text-align: right\r\n" + 
    		"			}\r\n" + 
    		"\r\n" + 
    		"			.es-m-txt-l,\r\n" + 
    		"			.es-m-txt-l h1,\r\n" + 
    		"			.es-m-txt-l h2,\r\n" + 
    		"			.es-m-txt-l h3 {\r\n" + 
    		"				text-align: left\r\n" + 
    		"			}\r\n" + 
    		"\r\n" + 
    		"			.es-m-txt-r amp-img {\r\n" + 
    		"				float: right\r\n" + 
    		"			}\r\n" + 
    		"\r\n" + 
    		"			.es-m-txt-c amp-img {\r\n" + 
    		"				margin: 0 auto\r\n" + 
    		"			}\r\n" + 
    		"\r\n" + 
    		"			.es-m-txt-l amp-img {\r\n" + 
    		"				float: left\r\n" + 
    		"			}\r\n" + 
    		"\r\n" + 
    		"			.es-button-border {\r\n" + 
    		"				display: block\r\n" + 
    		"			}\r\n" + 
    		"\r\n" + 
    		"			a.es-button {\r\n" + 
    		"				font-size: 20px;\r\n" + 
    		"				display: block;\r\n" + 
    		"				border-width: 10px 0px 10px 0px\r\n" + 
    		"			}\r\n" + 
    		"\r\n" + 
    		"			.es-btn-fw {\r\n" + 
    		"				border-width: 10px 0px;\r\n" + 
    		"				text-align: center\r\n" + 
    		"			}\r\n" + 
    		"\r\n" + 
    		"			.es-adaptive table,\r\n" + 
    		"			.es-btn-fw,\r\n" + 
    		"			.es-btn-fw-brdr,\r\n" + 
    		"			.es-left,\r\n" + 
    		"			.es-right {\r\n" + 
    		"				width: 100%\r\n" + 
    		"			}\r\n" + 
    		"\r\n" + 
    		"			.es-content table,\r\n" + 
    		"			.es-header table,\r\n" + 
    		"			.es-footer table,\r\n" + 
    		"			.es-content,\r\n" + 
    		"			.es-footer,\r\n" + 
    		"			.es-header {\r\n" + 
    		"				width: 100%;\r\n" + 
    		"				max-width: 600px\r\n" + 
    		"			}\r\n" + 
    		"\r\n" + 
    		"			.es-adapt-td {\r\n" + 
    		"				display: block;\r\n" + 
    		"				width: 100%\r\n" + 
    		"			}\r\n" + 
    		"\r\n" + 
    		"			.adapt-img {\r\n" + 
    		"				width: 100%;\r\n" + 
    		"				height: auto\r\n" + 
    		"			}\r\n" + 
    		"\r\n" + 
    		"			.es-m-p0 {\r\n" + 
    		"				padding: 0px\r\n" + 
    		"			}\r\n" + 
    		"\r\n" + 
    		"			.es-m-p0r {\r\n" + 
    		"				padding-right: 0px\r\n" + 
    		"			}\r\n" + 
    		"\r\n" + 
    		"			.es-m-p0l {\r\n" + 
    		"				padding-left: 0px\r\n" + 
    		"			}\r\n" + 
    		"\r\n" + 
    		"			.es-m-p0t {\r\n" + 
    		"				padding-top: 0px\r\n" + 
    		"			}\r\n" + 
    		"\r\n" + 
    		"			.es-m-p0b {\r\n" + 
    		"				padding-bottom: 0\r\n" + 
    		"			}\r\n" + 
    		"\r\n" + 
    		"			.es-m-p20b {\r\n" + 
    		"				padding-bottom: 20px\r\n" + 
    		"			}\r\n" + 
    		"\r\n" + 
    		"			.es-mobile-hidden,\r\n" + 
    		"			.es-hidden {\r\n" + 
    		"				display: none\r\n" + 
    		"			}\r\n" + 
    		"\r\n" + 
    		"			.es-desk-hidden {\r\n" + 
    		"				display: table-row;\r\n" + 
    		"				width: auto;\r\n" + 
    		"				overflow: visible;\r\n" + 
    		"				float: none;\r\n" + 
    		"				max-height: inherit;\r\n" + 
    		"				line-height: inherit\r\n" + 
    		"			}\r\n" + 
    		"\r\n" + 
    		"			.es-desk-menu-hidden {\r\n" + 
    		"				display: table-cell\r\n" + 
    		"			}\r\n" + 
    		"\r\n" + 
    		"			table.es-table-not-adapt,\r\n" + 
    		"			.esd-block-html table {\r\n" + 
    		"				width: auto\r\n" + 
    		"			}\r\n" + 
    		"\r\n" + 
    		"			table.es-social {\r\n" + 
    		"				display: inline-block\r\n" + 
    		"			}\r\n" + 
    		"\r\n" + 
    		"			table.es-social td {\r\n" + 
    		"				display: inline-block\r\n" + 
    		"			}\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		.es-p15 {\r\n" + 
    		"			padding: 15px;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		.es-p35t {\r\n" + 
    		"			padding-top: 35px;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		.es-infoblock,\r\n" + 
    		"		.es-infoblock p,\r\n" + 
    		"		.es-infoblock ul li,\r\n" + 
    		"		.es-infoblock ol li {\r\n" + 
    		"			line-height: 120%;\r\n" + 
    		"			font-size: 12px;\r\n" + 
    		"			color: rgb(204, 204, 204);\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		.es-p15t {\r\n" + 
    		"			padding-top: 15px;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		.es-p35r {\r\n" + 
    		"			padding-right: 35px;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		.es-content-body a {\r\n" + 
    		"			color: rgb(44, 181, 67);\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		.es-header-body p,\r\n" + 
    		"		.es-header-body ul li,\r\n" + 
    		"		.es-header-body ol li {\r\n" + 
    		"			color: rgb(51, 51, 51);\r\n" + 
    		"			font-size: 14px;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		.es-p5 {\r\n" + 
    		"			padding: 5px;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		.es-footer-body {\r\n" + 
    		"			background-color: rgb(255, 255, 255);\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		.es-p35b {\r\n" + 
    		"			padding-bottom: 35px;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		.es-menu td a img {\r\n" + 
    		"			display: inline-block;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		.es-header {\r\n" + 
    		"			background-color: transparent;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		.es-p15r {\r\n" + 
    		"			padding-right: 15px;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		.es-footer {\r\n" + 
    		"			background-color: transparent;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		.es-p35l {\r\n" + 
    		"			padding-left: 35px;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		.es-p15l {\r\n" + 
    		"			padding-left: 15px;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		.es-p20 {\r\n" + 
    		"			padding: 20px;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		.es-p10t {\r\n" + 
    		"			padding-top: 10px;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		.es-p30r {\r\n" + 
    		"			padding-right: 30px;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		.es-p10r {\r\n" + 
    		"			padding-right: 10px;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		.es-button-border {\r\n" + 
    		"			border-style: solid solid solid solid;\r\n" + 
    		"			border-color: rgb(44, 181, 67) rgb(44, 181, 67) rgb(44, 181, 67) rgb(44, 181, 67);\r\n" + 
    		"			background: rgb(44, 181, 67);\r\n" + 
    		"			border-width: 0px 0px 2px 0px;\r\n" + 
    		"			display: inline-block;\r\n" + 
    		"			border-radius: 30px;\r\n" + 
    		"			width: auto;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		.es-p30l {\r\n" + 
    		"			padding-left: 30px;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		p,\r\n" + 
    		"		ul li,\r\n" + 
    		"		ol li {\r\n" + 
    		"			font-size: 14px;\r\n" + 
    		"			font-family: arial, \"helvetica neue\", helvetica, sans-serif;\r\n" + 
    		"			line-height: 150%;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		.es-p15b {\r\n" + 
    		"			padding-bottom: 15px;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		.es-p30t {\r\n" + 
    		"			padding-top: 30px;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		table tr {\r\n" + 
    		"			border-collapse: collapse;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		.es-p30b {\r\n" + 
    		"			padding-bottom: 30px;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		.es-p10b {\r\n" + 
    		"			padding-bottom: 10px;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		h1,\r\n" + 
    		"		h2,\r\n" + 
    		"		h3,\r\n" + 
    		"		h4,\r\n" + 
    		"		h5 {\r\n" + 
    		"			Margin: 0;\r\n" + 
    		"			line-height: 120%;\r\n" + 
    		"			font-family: arial, \"helvetica neue\", helvetica, sans-serif;\r\n" + 
    		"			text-align: center;\r\n" + 
    		"			color: #3f51b5;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		.es-footer-body a {\r\n" + 
    		"			color: rgb(255, 255, 255);\r\n" + 
    		"			font-size: 14px;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		.es-p10l {\r\n" + 
    		"			padding-left: 10px;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		.es-right {\r\n" + 
    		"			float: right;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		h2 a {\r\n" + 
    		"			font-size: 24px;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		.es-p10 {\r\n" + 
    		"			padding: 10px;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		.es-header-body {\r\n" + 
    		"			background-color: rgb(255, 255, 255);\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		a.es-button {\r\n" + 
    		"			border-style: solid;\r\n" + 
    		"			border-color: rgb(49, 203, 75);\r\n" + 
    		"			border-width: 10px 20px 10px 20px;\r\n" + 
    		"			display: inline-block;\r\n" + 
    		"			background: rgb(49, 203, 75);\r\n" + 
    		"			border-radius: 30px;\r\n" + 
    		"			font-size: 18px;\r\n" + 
    		"			font-family: arial, \"helvetica neue\", helvetica, sans-serif;\r\n" + 
    		"			font-weight: normal;\r\n" + 
    		"			font-style: normal;\r\n" + 
    		"			line-height: 120%;\r\n" + 
    		"			color: rgb(255, 255, 255);\r\n" + 
    		"			text-decoration: none;\r\n" + 
    		"			width: auto;\r\n" + 
    		"			text-align: center;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		img {\r\n" + 
    		"			display: block;\r\n" + 
    		"			border: 0;\r\n" + 
    		"			outline: none;\r\n" + 
    		"			text-decoration: none;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		.es-content,\r\n" + 
    		"		.es-header,\r\n" + 
    		"		.es-footer {\r\n" + 
    		"			table-layout: fixed;\r\n" + 
    		"			width: 100%;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		.es-p35 {\r\n" + 
    		"			padding: 35px;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		.es-p25t {\r\n" + 
    		"			padding-top: 25px;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		.es-p25r {\r\n" + 
    		"			padding-right: 25px;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		h1 {\r\n" + 
    		"			font-size: 30px;\r\n" + 
    		"			font-style: normal;\r\n" + 
    		"			font-weight: normal;\r\n" + 
    		"			color: rgb(51, 51, 51);\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		ul li,\r\n" + 
    		"		ol li {\r\n" + 
    		"			Margin-bottom: 15px;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		h2 {\r\n" + 
    		"			font-size: 24px;\r\n" + 
    		"			font-style: normal;\r\n" + 
    		"			font-weight: normal;\r\n" + 
    		"			color: rgb(51, 51, 51);\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		h3 {\r\n" + 
    		"			font-size: 20px;\r\n" + 
    		"			font-style: normal;\r\n" + 
    		"			font-weight: normal;\r\n" + 
    		"			color: rgb(51, 51, 51);\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		p,\r\n" + 
    		"		hr {\r\n" + 
    		"			Margin: 0;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		.es-infoblock a {\r\n" + 
    		"			font-size: 12px;\r\n" + 
    		"			color: rgb(204, 204, 204);\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		.es-wrapper-color {\r\n" + 
    		"			background-color: rgb(246, 246, 246);\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		.es-p25b {\r\n" + 
    		"			padding-bottom: 25px;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		.es-p40 {\r\n" + 
    		"			padding: 40px;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		.es-p25l {\r\n" + 
    		"			padding-left: 25px;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		.es-wrapper {\r\n" + 
    		"			width: 100%;\r\n" + 
    		"			height: 100%;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		html,\r\n" + 
    		"		body {\r\n" + 
    		"			width: 100%;\r\n" + 
    		"			font-family: arial, \"helvetica neue\", helvetica, sans-serif;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		table {\r\n" + 
    		"			border-collapse: collapse;\r\n" + 
    		"			border-spacing: 0px;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		.es-content-body p,\r\n" + 
    		"		.es-content-body ul li,\r\n" + 
    		"		.es-content-body ol li {\r\n" + 
    		"			color: rgb(51, 51, 51);\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		.es-p25 {\r\n" + 
    		"			padding: 25px;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		table td,\r\n" + 
    		"		html,\r\n" + 
    		"		body,\r\n" + 
    		"		.es-wrapper {\r\n" + 
    		"			padding: 0;\r\n" + 
    		"			Margin: 0;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		.es-p20t {\r\n" + 
    		"			padding-top: 20px;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		.es-p40r {\r\n" + 
    		"			padding-right: 40px;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		a {\r\n" + 
    		"			font-family: arial, \"helvetica neue\", helvetica, sans-serif;\r\n" + 
    		"			font-size: 14px;\r\n" + 
    		"			text-decoration: underline;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		a[x-apple-data-detectors] {\r\n" + 
    		"			color: inherit;\r\n" + 
    		"			text-decoration: none;\r\n" + 
    		"			font-size: inherit;\r\n" + 
    		"			font-family: inherit;\r\n" + 
    		"			font-weight: inherit;\r\n" + 
    		"			line-height: inherit;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		.es-footer-body p,\r\n" + 
    		"		.es-footer-body ul li,\r\n" + 
    		"		.es-footer-body ol li {\r\n" + 
    		"			color: rgb(51, 51, 51);\r\n" + 
    		"			font-size: 14px;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		.es-p20r {\r\n" + 
    		"			padding-right: 20px;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		.es-p40l {\r\n" + 
    		"			padding-left: 40px;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		.es-menu td {\r\n" + 
    		"			border: 0;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		.es-left {\r\n" + 
    		"			float: left;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		.es-p5b {\r\n" + 
    		"			padding-bottom: 5px;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		.es-p40t {\r\n" + 
    		"			padding-top: 40px;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		.es-menu td a {\r\n" + 
    		"			text-decoration: none;\r\n" + 
    		"			display: block;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		.es-button {\r\n" + 
    		"			text-decoration: none;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		.es-p40b {\r\n" + 
    		"			padding-bottom: 40px;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		.es-p20b {\r\n" + 
    		"			padding-bottom: 20px;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		.es-p5l {\r\n" + 
    		"			padding-left: 5px;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		.es-desk-hidden {\r\n" + 
    		"			display: none;\r\n" + 
    		"			float: left;\r\n" + 
    		"			overflow: hidden;\r\n" + 
    		"			width: 0;\r\n" + 
    		"			max-height: 0;\r\n" + 
    		"			line-height: 0;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		.es-p20l {\r\n" + 
    		"			padding-left: 20px;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		h1 a {\r\n" + 
    		"			font-size: 30px;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		.es-content-body {\r\n" + 
    		"			background-color: rgb(255, 255, 255);\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		.es-p5t {\r\n" + 
    		"			padding-top: 5px;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		h3 a {\r\n" + 
    		"			font-size: 20px;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		.es-p5r {\r\n" + 
    		"			padding-right: 5px;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		.es-p30 {\r\n" + 
    		"			padding: 30px;\r\n" + 
    		"		}\r\n" + 
    		"\r\n" + 
    		"		.es-header-body a {\r\n" + 
    		"			color: rgb(19, 118, 200);\r\n" + 
    		"			font-size: 14px;\r\n" + 
    		"		}\r\n" + 
    		"	</style>\r\n" + 
    		"</head>\r\n" + 
    		"\r\n" + 
    		"<body>\r\n" + 
    		"	<div class=\"es-wrapper-color\">\r\n" + 
    		"		<table class=\"es-wrapper\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\">\r\n" + 
    		"			<tr>\r\n" + 
    		"				<td valign=\"top\">\r\n" + 
    		"					<table class=\"es-header\" cellspacing=\"0\" cellpadding=\"0\" align=\"center\">\r\n" + 
    		"						<tr>\r\n" + 
    		"							<td align=\"center\">\r\n" + 
    		"								<table class=\"es-header-body\" width=\"600\" cellspacing=\"0\" cellpadding=\"0\"\r\n" + 
    		"									bgcolor=\"#ffffff\" align=\"center\">\r\n" + 
    		"									<tr>\r\n" + 
    		"										<td class=\"es-p20t es-p15b es-p20r es-p20l\" align=\"left\" bgcolor=\"#3f51b5\"\r\n" + 
    		"											style=\"background-color: #3F51B5;\">\r\n" + 
    		"											<table cellspacing=\"0\" cellpadding=\"0\" width=\"100%\">\r\n" + 
    		"												<tr>\r\n" + 
    		"													<td width=\"560\" align=\"left\">\r\n" + 
    		"														<table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\">\r\n" + 
    		"															<tr>\r\n" + 
    		"																<td align=\"center\"><a target=\"_blank\">\r\n" + 
    		"																		<amp-img class=\"adapt-img\"\r\n" + 
    		"																			src=\"https://fokwhi.stripocdn.email/content/guids/CABINET_bd98b282b1491589ab8f71def531bed4/images/13091575465057603.jpeg\"\r\n" + 
    		"																			alt style=\"display: block;\" width=\"560\"\r\n" + 
    		"																			height=\"221\" layout=\"responsive\"></amp-img>\r\n" + 
    		"																	</a></td>\r\n" + 
    		"															</tr>\r\n" + 
    		"														</table>\r\n" + 
    		"													</td>\r\n" + 
    		"												</tr>\r\n" + 
    		"											</table>\r\n" + 
    		"										</td>\r\n" + 
    		"									</tr>\r\n" + 
    		"								</table>\r\n" + 
    		"							</td>\r\n" + 
    		"						</tr>\r\n" + 
    		"					</table>\r\n" + 
    		"					<table class=\"es-content\" cellspacing=\"0\" cellpadding=\"0\" align=\"center\">\r\n" + 
    		"						<tr>\r\n" + 
    		"							<td align=\"center\">\r\n" + 
    		"								<table class=\"es-content-body\" width=\"600\" cellspacing=\"0\" cellpadding=\"0\"\r\n" + 
    		"									bgcolor=\"#ffffff\" align=\"center\">\r\n" + 
    		"									<tr>\r\n" + 
    		"										<td class=\"es-p20t es-p20r es-p20l\" align=\"left\">\r\n" + 
    		"											<table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\">\r\n" + 
    		"												<tr>\r\n" + 
    		"													<td width=\"560\" valign=\"top\" align=\"center\">\r\n" + 
    		"														<table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\">\r\n" + 
    		"															<tr>\r\n" + 
    		"																<td align=\"left\">\r\n" + 
    		"																	<h1>WELCOME!</h1>\r\n" + 
    		"																	<h2>Your journey to a healthier you starts right\r\n" + 
    		"																		now!\r\n" + 
    		"																	</h2>\r\n" + 
    		"																	<p>\r\n" + 
    		"																		Thanks for joining the community, you can now\r\n" + 
    		"																		provide your daily report to our system.\r\n" + 
    		"																	</p>\r\n" + 
    		"																	<p>\r\n" + 
    		"																		The system is based on AI in order to allow you\r\n" + 
    		"																		to interact with other patients or doctors\r\n" + 
    		"																		from all over the world. See you soon in the\r\n" + 
    		"																		system!\r\n" + 
    		"																	</p>\r\n" + 
    		"																	<p>\r\n" + 
    		"																		Best regards,\r\n" + 
    		"																	</p>\r\n" + 
    		"																	<p>\r\n" + 
    		"																		Medical Center with AI Team\r\n" + 
    		"																	</p>\r\n" + 
    		"																</td>\r\n" + 
    		"															</tr>\r\n" + 
    		"														</table>\r\n" + 
    		"													</td>\r\n" + 
    		"												</tr>\r\n" + 
    		"											</table>\r\n" + 
    		"										</td>\r\n" + 
    		"									</tr>\r\n" + 
    		"								</table>\r\n" + 
    		"							</td>\r\n" + 
    		"						</tr>\r\n" + 
    		"					</table>\r\n" + 
    		"					<table cellpadding=\"0\" cellspacing=\"0\" class=\"es-content\" align=\"center\">\r\n" + 
    		"						<tr>\r\n" + 
    		"							<td align=\"center\">\r\n" + 
    		"								<table bgcolor=\"#ffffff\" class=\"es-content-body\" align=\"center\" cellpadding=\"0\"\r\n" + 
    		"									cellspacing=\"0\" width=\"600\">\r\n" + 
    		"									<tr>\r\n" + 
    		"										<td class=\"es-p20t es-p15b es-p20r es-p20l\" align=\"left\">\r\n" + 
    		"											<table cellpadding=\"0\" cellspacing=\"0\" class=\"es-left\" align=\"left\">\r\n" + 
    		"												<tr>\r\n" + 
    		"													<td width=\"174\" class=\"es-m-p0r es-m-p20b\" align=\"center\">\r\n" + 
    		"														<table cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\r\n" + 
    		"															<tr>\r\n" + 
    		"																<td align=\"center\"><a target=\"_blank\">\r\n" + 
    		"																		<amp-img class=\"adapt-img\"\r\n" + 
    		"																			src=\"https://fokwhi.stripocdn.email/content/guids/CABINET_bd98b282b1491589ab8f71def531bed4/images/8641575464481295.jpeg\"\r\n" + 
    		"																			alt style=\"display: block;\" width=\"174\"\r\n" + 
    		"																			height=\"98\" layout=\"responsive\"></amp-img>\r\n" + 
    		"																	</a></td>\r\n" + 
    		"															</tr>\r\n" + 
    		"														</table>\r\n" + 
    		"													</td>\r\n" + 
    		"													<td class=\"es-hidden\" width=\"20\"></td>\r\n" + 
    		"												</tr>\r\n" + 
    		"											</table>\r\n" + 
    		"											<table cellpadding=\"0\" cellspacing=\"0\" class=\"es-left\" align=\"left\">\r\n" + 
    		"												<tr>\r\n" + 
    		"													<td width=\"173\" class=\"es-m-p20b\" align=\"center\">\r\n" + 
    		"														<table cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\r\n" + 
    		"															<tr>\r\n" + 
    		"																<td align=\"center\"><a target=\"_blank\">\r\n" + 
    		"																		<amp-img class=\"adapt-img\"\r\n" + 
    		"																			src=\"https://fokwhi.stripocdn.email/content/guids/CABINET_bd98b282b1491589ab8f71def531bed4/images/49681575464422148.jpg\"\r\n" + 
    		"																			alt style=\"display: block;\" width=\"173\"\r\n" + 
    		"																			height=\"97\" layout=\"responsive\"></amp-img>\r\n" + 
    		"																	</a></td>\r\n" + 
    		"															</tr>\r\n" + 
    		"														</table>\r\n" + 
    		"													</td>\r\n" + 
    		"												</tr>\r\n" + 
    		"											</table>\r\n" + 
    		"											<table cellpadding=\"0\" cellspacing=\"0\" class=\"es-right\" align=\"right\">\r\n" + 
    		"												<tr>\r\n" + 
    		"													<td width=\"173\" align=\"center\">\r\n" + 
    		"														<table cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\r\n" + 
    		"															<tr>\r\n" + 
    		"																<td align=\"center\"><a target=\"_blank\">\r\n" + 
    		"																		<amp-img class=\"adapt-img\"\r\n" + 
    		"																			src=\"https://fokwhi.stripocdn.email/content/guids/CABINET_bd98b282b1491589ab8f71def531bed4/images/40031575464511380.jpeg\"\r\n" + 
    		"																			alt style=\"display: block;\" width=\"173\"\r\n" + 
    		"																			height=\"97\" layout=\"responsive\"></amp-img>\r\n" + 
    		"																	</a></td>\r\n" + 
    		"															</tr>\r\n" + 
    		"														</table>\r\n" + 
    		"													</td>\r\n" + 
    		"												</tr>\r\n" + 
    		"											</table>\r\n" + 
    		"										</td>\r\n" + 
    		"									</tr>\r\n" + 
    		"								</table>\r\n" + 
    		"							</td>\r\n" + 
    		"						</tr>\r\n" + 
    		"					</table>\r\n" + 
    		"					<table class=\"es-footer\" cellspacing=\"0\" cellpadding=\"0\" align=\"center\">\r\n" + 
    		"						<tr>\r\n" + 
    		"							<td align=\"center\">\r\n" + 
    		"								<table class=\"es-footer-body\" width=\"600\" cellspacing=\"0\" cellpadding=\"0\"\r\n" + 
    		"									bgcolor=\"#ffffff\" align=\"center\">\r\n" + 
    		"									<tr>\r\n" + 
    		"										<td class=\"es-p15t es-p15b es-p20r es-p20l\" style=\"background-color: #3F51B5;\"\r\n" + 
    		"											bgcolor=\"#3f51b5\" align=\"left\">\r\n" + 
    		"											<table class=\"es-left\" cellspacing=\"0\" cellpadding=\"0\" align=\"left\">\r\n" + 
    		"												<tr>\r\n" + 
    		"													<td class=\"es-m-p20b\" width=\"295\" align=\"left\">\r\n" + 
    		"														<table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\">\r\n" + 
    		"															<tr>\r\n" + 
    		"																<td align=\"center\"><a target=\"_blank\">\r\n" + 
    		"																		<amp-img class=\"adapt-img\"\r\n" + 
    		"																			src=\"https://fokwhi.stripocdn.email/content/guids/CABINET_bd98b282b1491589ab8f71def531bed4/images/12321575465248049.jpeg\"\r\n" + 
    		"																			alt style=\"display: block;\" width=\"295\"\r\n" + 
    		"																			height=\"103\" layout=\"responsive\"></amp-img>\r\n" + 
    		"																	</a></td>\r\n" + 
    		"															</tr>\r\n" + 
    		"														</table>\r\n" + 
    		"													</td>\r\n" + 
    		"												</tr>\r\n" + 
    		"											</table>\r\n" + 
    		"											<table class=\"es-right\" cellspacing=\"0\" cellpadding=\"0\" align=\"right\">\r\n" + 
    		"												<tr>\r\n" + 
    		"													<td width=\"245\" align=\"left\">\r\n" + 
    		"														<table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\">\r\n" + 
    		"															<tr>\r\n" + 
    		"																<td class=\"es-m-txt-c es-p35t es-p40r\" align=\"right\">\r\n" + 
    		"																	<table class=\"es-table-not-adapt es-social\"\r\n" + 
    		"																		cellspacing=\"0\" cellpadding=\"0\">\r\n" + 
    		"																		<tr>\r\n" + 
    		"																			<td class=\"es-p10r\" valign=\"top\"\r\n" + 
    		"																				align=\"center\"><a target=\"_blank\" href>\r\n" + 
    		"																					<amp-img title=\"Facebook\"\r\n" + 
    		"																						src=\"https://fokwhi.stripocdn.email/content/assets/img/social-icons/logo-white/facebook-logo-white.png\"\r\n" + 
    		"																						alt=\"Fb\" width=\"32\" height=\"32\">\r\n" + 
    		"																					</amp-img>\r\n" + 
    		"																				</a></td>\r\n" + 
    		"																			<td class=\"es-p10r\" valign=\"top\"\r\n" + 
    		"																				align=\"center\"><a target=\"_blank\" href>\r\n" + 
    		"																					<amp-img title=\"Twitter\"\r\n" + 
    		"																						src=\"https://fokwhi.stripocdn.email/content/assets/img/social-icons/logo-white/twitter-logo-white.png\"\r\n" + 
    		"																						alt=\"Tw\" width=\"32\" height=\"32\">\r\n" + 
    		"																					</amp-img>\r\n" + 
    		"																				</a></td>\r\n" + 
    		"																			<td class=\"es-p10r\" valign=\"top\"\r\n" + 
    		"																				align=\"center\"><a target=\"_blank\" href>\r\n" + 
    		"																					<amp-img title=\"Instagram\"\r\n" + 
    		"																						src=\"https://fokwhi.stripocdn.email/content/assets/img/social-icons/logo-white/instagram-logo-white.png\"\r\n" + 
    		"																						alt=\"Inst\" width=\"32\"\r\n" + 
    		"																						height=\"32\"></amp-img>\r\n" + 
    		"																				</a></td>\r\n" + 
    		"																			<td valign=\"top\" align=\"center\"><a\r\n" + 
    		"																					target=\"_blank\" href>\r\n" + 
    		"																					<amp-img title=\"Youtube\"\r\n" + 
    		"																						src=\"https://fokwhi.stripocdn.email/content/assets/img/social-icons/logo-white/youtube-logo-white.png\"\r\n" + 
    		"																						alt=\"Yt\" width=\"32\" height=\"32\">\r\n" + 
    		"																					</amp-img>\r\n" + 
    		"																				</a></td>\r\n" + 
    		"																		</tr>\r\n" + 
    		"																	</table>\r\n" + 
    		"																</td>\r\n" + 
    		"															</tr>\r\n" + 
    		"															<tr>\r\n" + 
    		"																<td align=\"left\" bgcolor=\"transparent\">\r\n" + 
    		"																	<p style=\"color: #ffffff;\">Copyright © Medical\r\n" + 
    		"																		Center With AI 2019</p>\r\n" + 
    		"																</td>\r\n" + 
    		"															</tr>\r\n" + 
    		"														</table>\r\n" + 
    		"													</td>\r\n" + 
    		"												</tr>\r\n" + 
    		"											</table>\r\n" + 
    		"										</td>\r\n" + 
    		"									</tr>\r\n" + 
    		"								</table>\r\n" + 
    		"							</td>\r\n" + 
    		"						</tr>\r\n" + 
    		"					</table>\r\n" + 
    		"				</td>\r\n" + 
    		"			</tr>\r\n" + 
    		"		</table>\r\n" + 
    		"	</div>\r\n" + 
    		"</body>\r\n" + 
    		"\r\n" + 
    		"</html>";
	
	public String sendEmail(String to, String subject, String body) {
		String from = "checcotrash95";
		String pass = "evtjaljsseptcefn";

		sendFromGMail(from, pass, to, subject, body);
		return null;
	}
	
	private static Properties initializeProps(String from, String pass) {
		Properties props = System.getProperties();
		props.put("mail.smtp.starttls.enable", "true");
		props.put("mail.smtp.host", host);
		props.put("mail.smtp.user", from);
		props.put("mail.smtp.password", pass);
		props.put("mail.smtp.port", "587");
		props.put("mail.smtp.auth", "true");
		return props;
	}

	private static void sendFromGMail(String from, String pass, String to, String subject, String body) {
		Properties props = initializeProps(from, pass);
		Session session = Session.getDefaultInstance(props);
		MimeMessage message = new MimeMessage(session);
		try {
			message.setFrom(new InternetAddress(from));
			InternetAddress toAddress = new InternetAddress();

			toAddress = new InternetAddress(to);

			message.addRecipient(Message.RecipientType.TO, toAddress);

			message.setSubject(subject);
	        MimeMultipart multipart = new MimeMultipart("related");

	         BodyPart messageBodyPart = new MimeBodyPart();
	         messageBodyPart.setContent(htmlWelcomeText, "text/html");

	         multipart.addBodyPart(messageBodyPart);
	         message.setContent(multipart);
			Transport transport = session.getTransport("smtp");
			transport.connect(host, from, pass);
			transport.sendMessage(message, message.getAllRecipients());
			transport.close();
		} catch (AddressException ae) {
			ae.printStackTrace();
		} catch (MessagingException me) {
			me.printStackTrace();
		}
	}
	
	
	


}
