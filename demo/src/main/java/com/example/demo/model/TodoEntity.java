package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class TodoEntity {
	private String id;
	private String userId; //사용자 id
	private String title; // Todo 타이틀
	private boolean done; // Todo Checked
	
}	
