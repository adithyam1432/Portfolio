import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import React from 'react';
import { Contact } from '../Contact';
import { portfolioData } from '../../data/portfolioData';

describe('Contact Component', () => {
  const { personal } = portfolioData;

  beforeEach(() => {
    vi.clearAllMocks();
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders direct recruiter outreach headline and target roles statement', () => {
    render(<Contact />);

    expect(screen.getByText(/Direct Recruiter Outreach/i)).toBeInTheDocument();
    expect(screen.getByText(/Open for Frontend Developer, Software Engineer/i)).toBeInTheDocument();
  });

  it('renders candidate email address and send email action link', () => {
    render(<Contact />);

    const emailLinks = screen.getAllByRole('link', { name: new RegExp(personal.email, 'i') });
    expect(emailLinks.length).toBeGreaterThan(0);
    expect(emailLinks[0]).toHaveAttribute('href', `mailto:${personal.email}`);

    const sendEmailBtn = screen.getByLabelText(/Send Email/i);
    expect(sendEmailBtn).toHaveAttribute('href', `mailto:${personal.email}`);
  });

  it('copies email to clipboard and displays "Copied" temporary visual state feedback', async () => {
    render(<Contact />);

    const copyBtn = screen.getByRole('button', { name: /Copy Email Address/i });
    expect(copyBtn).toBeInTheDocument();

    // Click copy button
    await act(async () => {
      fireEvent.click(copyBtn);
    });

    // Check clipboard writeText was called with personal email
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(personal.email);

    // Feedback "Copied" should be visible
    expect(screen.getByText(/Copied/i)).toBeInTheDocument();

    // Fast-forward timer by 2500ms
    act(() => {
      vi.advanceTimersByTime(2600);
    });

    // State should reset back to "Copy"
    expect(screen.queryByText(/Copied/i)).not.toBeInTheDocument();
    expect(screen.getByText(/Copy/i)).toBeInTheDocument();
  });

  it('renders phone number and direct call action link', () => {
    render(<Contact />);

    expect(screen.getByText(personal.phone)).toBeInTheDocument();

    const callLinks = screen.getAllByRole('link', { name: /Call Now/i });
    expect(callLinks.length).toBeGreaterThan(0);
    expect(callLinks[0]).toHaveAttribute('href', `tel:${personal.phone}`);
  });

  it('renders verified physical location', () => {
    render(<Contact />);

    expect(screen.getByText(personal.location)).toBeInTheDocument();
  });

  it('renders LinkedIn and GitHub social profile links with secure target and rel attributes', () => {
    render(<Contact />);

    const linkedinLink = screen.getByRole('link', { name: /LinkedIn Profile/i });
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute('href', personal.linkedIn);
    expect(linkedinLink).toHaveAttribute('target', '_blank');
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');

    const githubLink = screen.getByRole('link', { name: /GitHub Profile/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', personal.github);
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders 24 business hours response SLA guarantee badge', () => {
    render(<Contact />);

    expect(screen.getByText(/Response SLA/i)).toBeInTheDocument();
    expect(screen.getByText(/within 24 business hours/i)).toBeInTheDocument();
  });
});
