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
@Table(name = "questions")
public class Questions {

	@Id
	@SequenceGenerator(name ="id" , initialValue = 1, allocationSize = 1)
	@GeneratedValue(generator = "id" , strategy = GenerationType.SEQUENCE)
	private int question_id;
	@Column(name="course_id")
	private int courseId;
	@Column(name="level_id")
	private int levelId;
	
	private String question;
	
	private String option_1;
	
	private String option_2;
	
	private String option_3;
	
	private String option_4;
	
	private String correct_option;

	public Questions() {

	}

	public Questions(int question_id, int course_id, int level_id, String question, String option_1, String option_2,
			String option_3, String option_4, String correct_option) {
		this.question_id = question_id;
		this.courseId = course_id;
		this.levelId = level_id;
		this.question = question;
		this.option_1 = option_1;
		this.option_2 = option_2;
		this.option_3 = option_3;
		this.option_4 = option_4;
		this.correct_option = correct_option;
	}

	public int getQuestion_id() {
		return question_id;
	}

	public void setQuestion_id(int question_id) {
		this.question_id = question_id;
	}

	public int getCourse_id() {
		return courseId;
	}

	public void setCourse_id(int course_id) {
		this.courseId = course_id;
	}

	public int getLevel_id() {
		return levelId;
	}

	public void setLevel_id(int level_id) {
		this.levelId = level_id;
	}

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}

	public String getOption_1() {
		return option_1;
	}

	public void setOption_1(String option_1) {
		this.option_1 = option_1;
	}

	public String getOption_2() {
		return option_2;
	}

	public void setOption_2(String option_2) {
		this.option_2 = option_2;
	}

	public String getOption_3() {
		return option_3;
	}

	public void setOption_3(String option_3) {
		this.option_3 = option_3;
	}

	public String getOption_4() {
		return option_4;
	}

	public void setOption_4(String option_4) {
		this.option_4 = option_4;
	}

	public String getCorrect_option() {
		return correct_option;
	}

	public void setCorrect_option(String correct_option) {
		this.correct_option = correct_option;
	}
	

	@Override
	public String toString() {
		return "Questions [question_id=" + question_id + ", course_id=" + courseId + ", level_id=" + levelId
				+ ", question=" + question + ", option_1=" + option_1 + ", option_2=" + option_2 + ", option_3="
				+ option_3 + ", option_4=" + option_4 + ", correct_option=" + correct_option + "]";
	}

}
