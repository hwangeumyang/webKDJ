package com.example.training.persistence;

import com.example.training.model.TodoEntity;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface TodoRepository extends JpaRepository<TodoEntity, String> {

}