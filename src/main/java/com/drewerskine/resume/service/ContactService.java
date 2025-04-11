package com.drewerskine.resume.service;

import com.drewerskine.resume.dto.ContactFormDTO;
import com.drewerskine.resume.model.ContactSubmission;

import java.util.List;
import java.util.Optional;

public interface ContactService {
    
    ContactSubmission saveSubmission(ContactFormDTO contactFormDTO);
    
    List<ContactSubmission> getAllSubmissions();
    
    List<ContactSubmission> getUnreadSubmissions();
    
    Optional<ContactSubmission> getSubmissionById(Long id);
    
    ContactSubmission markAsRead(Long id);
    
    void deleteSubmission(Long id);
} 