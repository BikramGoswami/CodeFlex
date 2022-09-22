package com.lti;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.lti.entity.AdminLoginDetail;
import com.lti.service.UserTestDao;

@SpringBootTest
class OnlineExamSystemApplicationTests {

	@Autowired
	UserTestDao userTestDao;
	
	@Test
	public void addOrUpdateAdmin() {
	
		AdminLoginDetail admin = new AdminLoginDetail();
		
		admin.setEmailId("siddheshkokare512@gmail.com");
		admin.setPassword("Admin@123");
		
		AdminLoginDetail admins = userTestDao.addOrUpdateAdmin(admin);
		assertNotNull(admins);
	
}
}