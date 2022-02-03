package com.example.pptaskspringboot.rest;

import com.example.pptaskspringboot.rest.controller.MyRestController;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication // same as @Configuration @EnableAutoConfiguration @ComponentScan
//@SpringBootApplication включает аннотации: @Configuration, @EnableAutoConfiguration,
// а также @ComponentScan, однако @ComponentScan будет искать только в пакете,
// в котором сам это класс находится. Поэтому нужно прописать путь к папке рест контроллера

public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
