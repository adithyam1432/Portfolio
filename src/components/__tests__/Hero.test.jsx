import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { Hero } from '../Hero';
import { portfolioData } from '../../data/portfolioData';

describe('Hero Component', () => {
  const mockOpenResumeModal = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders applicant full name, professional title, and recruiter summary', () => {
    render(<Hero onOpenResumeModal={mockOpenResumeModal} />);

    // Candidate Name
    expect(screen.getByRole('heading', { level: 1, name: portfolioData.personal.name })).toBeInTheDocument();

    // Professional Title
    expect(screen.getByText('Frontend Developer & Software Engineer')).toBeInTheDocument();

    // Greeting & Summary
    expect(screen.getByText(portfolioData.personal.greeting)).toBeInTheDocument();
    expect(screen.getByText(portfolioData.personal.summary)).toBeInTheDocument();
  });

  it('displays availability status and location tags', () => {
    render(<Hero onOpenResumeModal={mockOpenResumeModal} />);

    expect(screen.getByText(portfolioData.personal.availability)).toBeInTheDocument();
    expect(screen.getByText(portfolioData.personal.location)).toBeInTheDocument();
    expect(screen.getByText(portfolioData.personal.email)).toBeInTheDocument();
  });

  it('renders download resume link with direct PDF asset target and download attribute', () => {
    render(<Hero onOpenResumeModal={mockOpenResumeModal} />);

    const downloadLink = screen.getByRole('link', { name: /Download Resume/i });
    expect(downloadLink).toBeInTheDocument();
    expect(downloadLink).toHaveAttribute('href', portfolioData.personal.resumePdf);
    expect(downloadLink).toHaveAttribute('download', 'Adithya_Menashinakai_Resume.pdf');
  });

  it('triggers onOpenResumeModal when Online Resume Preview button is clicked', () => {
    render(<Hero onOpenResumeModal={mockOpenResumeModal} />);

    const previewBtn = screen.getByRole('button', { name: /Online Resume Preview/i });
    expect(previewBtn).toBeInTheDocument();

    fireEvent.click(previewBtn);
    expect(mockOpenResumeModal).toHaveBeenCalledTimes(1);
  });

  it('renders social proof links for LinkedIn and GitHub with secure attributes', () => {
    render(<Hero onOpenResumeModal={mockOpenResumeModal} />);

    const linkedinLink = screen.getByRole('link', { name: /LinkedIn Profile/i });
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute('href', portfolioData.personal.linkedIn);
    expect(linkedinLink).toHaveAttribute('target', '_blank');
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');

    const githubLink = screen.getByRole('link', { name: /GitHub Repos/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', portfolioData.personal.github);
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders profile image and handles image load fallback', () => {
    render(<Hero onOpenResumeModal={mockOpenResumeModal} />);

    const img = screen.getByAltText(/Adithya Ashok Menashinakai Profile Photo/i);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', portfolioData.personal.profilePhoto);

    // Simulate image error event to test fallback
    fireEvent.error(img);
    expect(img.dataset.fallbackTried).toBe('true');
  });

  it('renders floating achievement badges', () => {
    render(<Hero onOpenResumeModal={mockOpenResumeModal} />);

    expect(screen.getByText(/Winner, MITK Hackathon '26/i)).toBeInTheDocument();
    expect(screen.getByText(/Python, React & AWS \(S3\)/i)).toBeInTheDocument();
  });
});
