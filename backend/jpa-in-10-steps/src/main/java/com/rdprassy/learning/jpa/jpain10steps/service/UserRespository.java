package com.rdprassy.learning.jpa.jpain10steps.service;
import org.springframework.data.jpa.repository.JpaRepository;

import com.rdprassy.learning.jpa.jpain10steps.entity.User;;

public interface UserRespository extends JpaRepository<User,Long> {

}
