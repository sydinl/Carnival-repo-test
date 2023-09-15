package com.statestr.carnival;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
@MapperScan("com.statestr.carnival.mapper")
public class CarnivalApplication {

	public static void main(String[] args) {
		SpringApplication.run(CarnivalApplication.class, args);
	}

	@GetMapping("/getEnv")
	@ResponseBody
	public String getEnv() {

		return "qa";
	}
}
