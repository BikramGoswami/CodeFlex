package com.lti.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name = "adminLogin")
public class AdminLoginDetail {

	@Id
	@SequenceGenerator(name ="id" , initialValue = 1, allocationSize = 1)
	@GeneratedValue(generator = "id" , strategy = GenerationType.SEQUENCE)
	@Column(name="admin_id")
	private int id;
	
	private String email;
	
	private String password;
		
	public AdminLoginDetail() {
	}

	public AdminLoginDetail(int adminId, String emailId, String password) {
		this.id = adminId;
		this.email = emailId;
		this.password = password;
	}

	public int getAdminId() {
		return id;
	}

	public void setAdminId(int adminId) {
		this.id = adminId;
	}

	public String getEmailId() {
		return email;
	}

	public void setEmailId(String emailId) {
		this.email = emailId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	
}
