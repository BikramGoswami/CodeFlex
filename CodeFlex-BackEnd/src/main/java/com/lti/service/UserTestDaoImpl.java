
package com.lti.service;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.lti.entity.AdminLoginDetail;
import com.lti.entity.UserDetails;

@Component
public class UserTestDaoImpl implements UserTestDao {

	@Autowired
	UserTestDao userTestDao;

	@PersistenceContext
	EntityManager em; // EntityManagerFactory emf; // EntityTransaction tx;

	public UserTestDaoImpl() { //

	}

	@Transactional
	public AdminLoginDetail addOrUpdateAdmin(AdminLoginDetail admin) {

		AdminLoginDetail adminData = em.merge(admin);
		return adminData;

	}

	@Override
	public UserDetails addOrUpdateUser(UserDetails user) {
		
		return null;
	}

}
