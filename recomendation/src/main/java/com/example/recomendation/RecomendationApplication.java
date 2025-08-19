package com.example.recomendation;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class RecomendationApplication {

	public static void main(String[] args) {
		SpringApplication.run(RecomendationApplication.class, args);
	}

}
