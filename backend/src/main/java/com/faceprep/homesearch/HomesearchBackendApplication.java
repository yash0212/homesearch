package com.faceprep.homesearch;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.faceprep.homesearch.model.Home;
import com.faceprep.homesearch.repository.HomeRepository;

@SpringBootApplication
public class HomesearchBackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(HomesearchBackendApplication.class, args);
	}

	@Autowired
	private HomeRepository homeRepository;
	
	@Override
	public void run(String... args) throws Exception {
		this.homeRepository.save(new Home(1, "Raw House", "HSR Layout", "Bangalore", "17,000", "Rental" ));
		this.homeRepository.save(new Home(2, "Flat", "Electronic City Phase 1", "Bangalore", "17,00,000", "Flat" ));
	}

}
