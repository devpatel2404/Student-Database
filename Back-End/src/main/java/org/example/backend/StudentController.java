package org.example.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class StudentController {
    @Autowired
    private StudentRepository studentRepository;

    @PostMapping("/newStudent")
    public ResponseEntity<String> saveStudent(@RequestBody Student student) {
        System.out.println(student.getName());
        studentRepository.save(student);
        return ResponseEntity.ok("Student was saved");
    }

    @GetMapping("/searchStudent")
    public ResponseEntity<List<Student>> searchStudent(@RequestParam String query){
        List<Student> matchingStudents = studentRepository.findByNameContainingIgnoreCase(query);
        return ResponseEntity.ok(matchingStudents);
    }
}
