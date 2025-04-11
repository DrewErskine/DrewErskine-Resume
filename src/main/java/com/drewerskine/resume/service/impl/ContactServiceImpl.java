package com.drewerskine.resume.service.impl;

import com.drewerskine.resume.dto.ContactFormDTO;
import com.drewerskine.resume.model.ContactSubmission;
import com.drewerskine.resume.repository.ContactSubmissionRepository;
import com.drewerskine.resume.service.ContactService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ContactServiceImpl implements ContactService {

    private final ContactSubmissionRepository contactSubmissionRepository;

    @Override
    @Transactional
    public ContactSubmission saveSubmission(ContactFormDTO contactFormDTO) {
        ContactSubmission submission = new ContactSubmission();
        submission.setName(contactFormDTO.getName());
        submission.setEmail(contactFormDTO.getEmail());
        submission.setMessage(contactFormDTO.getMessage());
        submission.setRead(false);
        
        return contactSubmissionRepository.save(submission);
    }

    @Override
    @Transactional(readOnly = true)
    public List<ContactSubmission> getAllSubmissions() {
        return contactSubmissionRepository.findAllByOrderByCreatedAtDesc();
    }

    @Override
    @Transactional(readOnly = true)
    public List<ContactSubmission> getUnreadSubmissions() {
        return contactSubmissionRepository.findByReadOrderByCreatedAtDesc(false);
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<ContactSubmission> getSubmissionById(Long id) {
        return contactSubmissionRepository.findById(id);
    }

    @Override
    @Transactional
    public ContactSubmission markAsRead(Long id) {
        ContactSubmission submission = contactSubmissionRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Contact submission not found with id: " + id));
        
        submission.setRead(true);
        return contactSubmissionRepository.save(submission);
    }

    @Override
    @Transactional
    public void deleteSubmission(Long id) {
        contactSubmissionRepository.deleteById(id);
    }
} 