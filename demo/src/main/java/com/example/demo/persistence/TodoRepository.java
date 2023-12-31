package com.example.demo.persistence;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.model.TodoEntity;
import java.util.List;

@Repository
public interface TodoRepository extends JpaRepository<TodoEntity, String>{

    //@Query("select * from Todo t where t.userId = ?1")
    List<TodoEntity> findByUserId(String userId);
}