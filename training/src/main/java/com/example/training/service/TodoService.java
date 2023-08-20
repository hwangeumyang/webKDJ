package com.example.training;

import org.hibernate.stereotype.Service;
import org.hibernate.beans.factory.annotation.Autowired;
import com.example.training.model.TodoEntity;
import com.example.training.persistence.TodoRepository;
import java.util.List;

@Service
public class TodoService {
    public List<TodoEntity> create(final TodoEntity entity) {
        //validation
        if(entity == null) {
            log.warn("entity cannot be null");
            throw new RuntimeException("entity can't be null");
        }

        if(entity.getUserId() == null) {
            log.warn("Unknown user.");
            throw new RuntimeException("Unknown user");
        }
    }

}