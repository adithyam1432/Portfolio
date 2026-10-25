import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { Navbar } from '../Navbar';
import { portfolioData } from '../../data/portfolioData';

describe('Navbar Component', () => {
  const mockOpenResumeModal = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders brand identity, initials, and links to #hero', () => {
    render(<Navbar activeSection="hero" onOpenResumeModal={mockOpenResumeModal} />);

    // Brand initials and display name
    expect(screen.getByText('AM')).toBeInTheDocument();
    expect(screen.getByText(portfolioData.personal.displayName)).toBeInTheDocument();
    expect(screen.getByText(/Frontend & Software/i)).toBeInTheDocument();

    const brandLink = screen.getByLabelText(/Adithya Menashinakai Portfolio Home/i);
    expect(brandLink).toHaveAttribute('href', '#hero');
  });

  it('renders accessibility skip-to-content link', () => {
    render(<Navbar activeSection="hero" onOpenResumeModal={mockOpenResumeModal} />);

    const skipLink = screen.getByText(/Skip to main content/i);
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute('href', '#main-content');
  });

  it('renders all primary desktop navigation links with correct numbers and hrefs', () => {
    render(<Navbar activeSection="about" onOpenResumeModal={mockOpenResumeModal} />);

    const expectedNav = [
      { id: 'about', label: 'About', num: '01' },
      { id: 'skills', label: 'Skills', num: '02' },
      { id: 'projects', label: 'Projects', num: '03' },
      { id: 'experience', label: 'Experience', num: '04' },
      { id: 'achievements', label: 'Achievements', num: '05' },
      { id: 'education', label: 'Education', num: '06' },
      { id: 'contact', label: 'Contact', num: '07' },
    ];

    expectedNav.forEach(({ id, label, num }) => {
      const desktopLinks = screen.getAllByRole('link', { name: new RegExp(`^${num}.*${label}$`, 'i') });
      expect(desktopLinks.length).toBeGreaterThan(0);
      expect(desktopLinks[0]).toHaveAttribute('href', `#${id}`);
    });
  });

  it('applies active styling to the currently active section link', () => {
    const { rerender } = render(<Navbar activeSection="skills" onOpenResumeModal={mockOpenResumeModal} />);

    const skillsLinks = screen.getAllByRole('link', { name: /^02.*Skills$/i });
    expect(skillsLinks[0].className).toContain('bg-slate-900');
    expect(skillsLinks[0].className).toContain('text-white');

    // Rerender with different active section
    rerender(<Navbar activeSection="projects" onOpenResumeModal={mockOpenResumeModal} />);
    const projectsLinks = screen.getAllByRole('link', { name: /^03.*Projects$/i });
    expect(projectsLinks[0].className).toContain('bg-slate-900');
    expect(projectsLinks[0].className).toContain('text-white');
  });

  it('triggers onOpenResumeModal callback when desktop preview button is clicked', () => {
    render(<Navbar activeSection="hero" onOpenResumeModal={mockOpenResumeModal} />);

    const previewButton = screen.getByRole('button', { name: /Preview Resume/i });
    expect(previewButton).toBeInTheDocument();

    fireEvent.click(previewButton);
    expect(mockOpenResumeModal).toHaveBeenCalledTimes(1);
  });

  it('renders download resume PDF link with correct attributes', () => {
    render(<Navbar activeSection="hero" onOpenResumeModal={mockOpenResumeModal} />);

    const downloadLink = screen.getByRole('link', { name: /Resume PDF/i });
    expect(downloadLink).toBeInTheDocument();
    expect(downloadLink).toHaveAttribute('href', portfolioData.personal.resumePdf);
    expect(downloadLink).toHaveAttribute('download', 'Adithya_Menashinakai_Resume.pdf');
  });

  it('toggles mobile drawer on hamburger button click and triggers resume modal from drawer', () => {
    render(<Navbar activeSection="hero" onOpenResumeModal={mockOpenResumeModal} />);

    const hamburgerBtn = screen.getByLabelText(/Open Navigation Menu/i);
    expect(hamburgerBtn).toHaveAttribute('aria-expanded', 'false');

    // Click hamburger to open
    fireEvent.click(hamburgerBtn);
    expect(hamburgerBtn).toHaveAttribute('aria-expanded', 'true');

    // Check mobile preview resume button is present
    const mobilePreviewBtn = screen.getByRole('button', { name: /Preview Resume Online/i });
    expect(mobilePreviewBtn).toBeInTheDocument();

    fireEvent.click(mobilePreviewBtn);
    expect(mockOpenResumeModal).toHaveBeenCalledTimes(1);

    // After clicking, mobile drawer closes
    expect(screen.queryByRole('button', { name: /Preview Resume Online/i })).not.toBeInTheDocument();
  });

  it('closes mobile drawer when a mobile navigation item is clicked', () => {
    render(<Navbar activeSection="hero" onOpenResumeModal={mockOpenResumeModal} />);

    const hamburgerBtn = screen.getByLabelText(/Open Navigation Menu/i);
    fireEvent.click(hamburgerBtn);

    // Drawer is open - mobile link contains arrow "→"
    const mobileAboutLink = screen.getByRole('link', { name: /01.*About.*→/i });
    fireEvent.click(mobileAboutLink);

    // Drawer is now closed
    expect(screen.queryByRole('link', { name: /01.*About.*→/i })).not.toBeInTheDocument();
  });

  it('updates scroll progress and header styling on window scroll', () => {
    const { container } = render(<Navbar activeSection="hero" onOpenResumeModal={mockOpenResumeModal} />);

    const progressBar = container.querySelector('#scroll-progress');
    expect(progressBar).toBeInTheDocument();

    // Trigger scroll
    fireEvent.scroll(window, { target: { scrollY: 100 } });
    expect(progressBar).toBeInTheDocument();
  });
});
