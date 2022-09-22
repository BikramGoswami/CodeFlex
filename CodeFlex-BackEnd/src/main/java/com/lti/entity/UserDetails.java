package com.lti.entity;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

import com.lti.dto.ReportCompKey;

@Entity
@Table(name = "userDetails")
public class UserDetails {

	@Id
	@SequenceGenerator(name ="id" , initialValue = 1, allocationSize = 1)
	@GeneratedValue(generator = "id" , strategy = GenerationType.SEQUENCE)
	private int user_id;
	private String full_name;

	private String email;

	private String password;

	private String mobile;

	private String city;

	private String state;
	private String date_of_birth;

	private String qualification;
	private int year_of_completion;


	@OneToMany(mappedBy="user_id")
	private List<Reports> reports;

	public UserDetails() {
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	public String getFull_name() {
		return full_name;
	}

	public void setFull_name(String full_name) {
		this.full_name = full_name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getDate_of_birth() {
		return date_of_birth;
	}

	public void setDate_of_birth(String date_of_birth) {
		this.date_of_birth = date_of_birth;
	}

	public String getQualification() {
		return qualification;
	}

	public void setQualification(String qualification) {
		this.qualification = qualification;
	}

	public int getYear_of_completion() {
		return year_of_completion;
	}

	public void setYear_of_completion(int year_of_completion) {
		this.year_of_completion = year_of_completion;
	}

	@Override
	public String toString() {
		return "UserDetails [user_id=" + user_id + ", full_name=" + full_name + ", email=" + email + ", password="
				+ password + ", mobile=" + mobile + ", city=" + city + ", state=" + state + ", date_of_birth="
				+ date_of_birth + ", qualification=" + qualification + ", year_of_completion=" + year_of_completion
				+ "]";
	}
	
	

}
