package org.example.backend;

import org.springframework.data.repository.CrudRepository;

import java.util.List;
public interface StudentRepository extends CrudRepository<Student, Integer>{
    List<Student> findByNameContainingIgnoreCase(String name);
}
