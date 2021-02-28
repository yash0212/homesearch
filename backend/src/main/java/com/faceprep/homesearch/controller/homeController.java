package com.faceprep.homesearch.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.faceprep.homesearch.model.Home;
import com.faceprep.homesearch.repository.HomeRepository;

@RestController
@RequestMapping("api")
public class homeController {
	
	@Autowired
	private HomeRepository homeRepository;
	
	@GetMapping("homes/")
	@ResponseBody
	@CrossOrigin(origins = "http://localhost:3000")
	public List<Home> fetchHomes(@RequestParam String city) {
		List<Home> homes = this.homeRepository.findAll();
		homes = homes.stream()
				.filter(home -> home.getCity().toLowerCase().contains(city.toLowerCase()))
				.collect(Collectors.toList());
		return homes;
	}

}
