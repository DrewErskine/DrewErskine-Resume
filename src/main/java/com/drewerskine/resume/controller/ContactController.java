package com.drewerskine.resume.controller;

import com.drewerskine.resume.dto.ContactFormDTO;
import com.drewerskine.resume.model.ContactSubmission;
import com.drewerskine.resume.service.ContactService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/contact")
@RequiredArgsConstructor
public class ContactController {

    private final ContactService contactService;

    @PostMapping
    public ResponseEntity<ContactSubmission> submitContactForm(@Valid @RequestBody ContactFormDTO contactFormDTO) {
        ContactSubmission savedSubmission = contactService.saveSubmission(contactFormDTO);
        return new ResponseEntity<>(savedSubmission, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<ContactSubmission>> getAllSubmissions() {
        return ResponseEntity.ok(contactService.getAllSubmissions());
    }

    @GetMapping("/unread")
    public ResponseEntity<List<ContactSubmission>> getUnreadSubmissions() {
        return ResponseEntity.ok(contactService.getUnreadSubmissions());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ContactSubmission> getSubmissionById(@PathVariable Long id) {
        return contactService.getSubmissionById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}/read")
    public ResponseEntity<ContactSubmission> markAsRead(@PathVariable Long id) {
        try {
            ContactSubmission updatedSubmission = contactService.markAsRead(id);
            return ResponseEntity.ok(updatedSubmission);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSubmission(@PathVariable Long id) {
        try {
            contactService.deleteSubmission(id);
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
} 