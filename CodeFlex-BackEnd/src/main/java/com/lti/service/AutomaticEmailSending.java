package com.lti.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailSender;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;

@Service
public class AutomaticEmailSending {

	@Autowired
	private MailSender mailSender;
	
	public void forgetPassword(String email) {
		SimpleMailMessage message = new SimpleMailMessage();
		message.setFrom("online.exam.system.by.srsbt@gmail.com");
		message.setTo("tush48545@gmail.com");
		message.setSubject("Test Mail");
		message.setText("Hi Hi Hi");
		mailSender.send(message);
	}
}
