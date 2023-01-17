package com.axis.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.axis.model.Student;
import com.axis.exception.ResourceNotFoundException;
import com.axis.repository.StudentRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/stud")
public class StudentController {
	

		@Autowired
		private StudentRepository studentRepository;

		// get all students
		@GetMapping("/students")
		public List<Student> getAllStudents() {
			return studentRepository.findAll();
		}

		// create student rest api
		@PostMapping("/add")
		public Student createStudent(@RequestBody Student student) {
			return studentRepository.save(student);
		}
				
	/*			
		// get student by id rest api
		@GetMapping("/students/{id}")
		public  ResponseEntity<Student> getStudentById(@PathVariable Long id) {
			Student student = studentRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Student not found with id :" + id));
			return ResponseEntity.ok(student);
		}*/
		
		// get student by id rest api
				@GetMapping("/students/{id}")
				public  ResponseEntity<List<Student>> getStudentById(@PathVariable Long id) {
					Student student = studentRepository.findById(id)
							.orElseThrow(() -> new ResourceNotFoundException("Student not found with id :" + id));
					List<Student> students = new ArrayList<>();
					students.add(student);
					return ResponseEntity.ok(students);
				}

		
		
		// update student rest api
		@PutMapping("/students/{id}")
		public ResponseEntity<Student> updateStudent(@PathVariable Long id, @RequestBody Student studentDetails){
			Student student = studentRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Student not found with id :" + id));
			 student.setName(studentDetails.getName());
			 student.setAge(studentDetails.getAge());
			 student.setGender(studentDetails.getGender());
			 student.setPhoneno(studentDetails.getPhoneno());
			 
			 Student updatedStudent = studentRepository.save(student);
				return ResponseEntity.ok(updatedStudent);
		}
		
		// delete student rest api
		@DeleteMapping("/students/{id}")
		public ResponseEntity<Map<String, Boolean>> deleteStudent(@PathVariable Long id){
			Student student = studentRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
			
			studentRepository.delete(student);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
	}
