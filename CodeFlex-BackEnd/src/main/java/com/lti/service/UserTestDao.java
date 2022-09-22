
package com.lti.service;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.lti.entity.AdminLoginDetail;

import com.lti.entity.UserDetails;

@Component
public interface UserTestDao {

	UserDetails addOrUpdateUser(UserDetails user);
	AdminLoginDetail addOrUpdateAdmin(AdminLoginDetail admin);
}
