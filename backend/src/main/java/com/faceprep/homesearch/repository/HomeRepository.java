package com.faceprep.homesearch.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.faceprep.homesearch.model.Home;


@Repository
public interface HomeRepository extends JpaRepository<Home, Long> {

}
