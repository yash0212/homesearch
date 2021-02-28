package com.faceprep.homesearch.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.faceprep.homesearch.model.Home;
import com.faceprep.homesearch.repository.HomeRepository;

@RestController
@RequestMapping("api")
public class homeController {
	
	@Autowired
	private HomeRepository homeRepository;
	
	@GetMapping("homes")
	public List<Home> fetchHomes() {
		return this.homeRepository.findAll();
	}

}
