package com.drewerskine.resume.repository;

import com.drewerskine.resume.model.ContactSubmission;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ContactSubmissionRepository extends JpaRepository<ContactSubmission, Long> {
    
    List<ContactSubmission> findByReadOrderByCreatedAtDesc(boolean read);
    
    List<ContactSubmission> findAllByOrderByCreatedAtDesc();
} 