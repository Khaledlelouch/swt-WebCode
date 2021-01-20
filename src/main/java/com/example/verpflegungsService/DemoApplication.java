package com.example.verpflegungsService;

import com.example.verpflegungsService.model.Patient;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.Scope;

@SpringBootApplication
@Scope("prototype")
public class DemoApplication {
	public static void main(String[] args) {
		//SpringApplication.run(DemoApplication.class, args);
		ConfigurableApplicationContext context = SpringApplication.run(DemoApplication.class, args);
		Patient patient = context.getBean(Patient.class);
	}
}
