package com.axis.eurekaserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@EnableEurekaServer
@SpringBootApplication
public class Eurekaserver1Application {

	public static void main(String[] args) {
		SpringApplication.run(Eurekaserver1Application.class, args);
	}

}
