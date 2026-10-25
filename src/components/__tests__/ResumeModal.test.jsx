import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { ResumeModal } from '../ResumeModal';
import { portfolioData } from '../../data/portfolioData';

describe('ResumeModal Component', () => {
  const mockClose = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    document.body.style.overflow = 'unset';
  });

  it('renders nothing when isOpen is false', () => {
    const { container } = render(<ResumeModal isOpen={false} onClose={mockClose} />);
    expect(container.firstChild).toBeNull();
  });

  it('renders modal dialog with candidate title and action buttons when isOpen is true', () => {
    render(<ResumeModal isOpen={true} onClose={mockClose} />);

    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeInTheDocument();
    expect(dialog).toHaveAttribute('aria-modal', 'true');

    expect(screen.getByText(new RegExp(`${portfolioData.personal.name} — Resume`, 'i'))).toBeInTheDocument();
  });

  it('triggers onClose when close icon button or bottom close preview button is clicked', () => {
    render(<ResumeModal isOpen={true} onClose={mockClose} />);

    const closeIconBtn = screen.getByLabelText(/Close Modal/i);
    fireEvent.click(closeIconBtn);
    expect(mockClose).toHaveBeenCalledTimes(1);

    const closePreviewBtn = screen.getByRole('button', { name: /Close Preview/i });
    fireEvent.click(closePreviewBtn);
    expect(mockClose).toHaveBeenCalledTimes(2);
  });

  it('triggers onClose on Escape key press', () => {
    render(<ResumeModal isOpen={true} onClose={mockClose} />);

    fireEvent.keyDown(window, { key: 'Escape' });
    expect(mockClose).toHaveBeenCalledTimes(1);
  });

  it('does not trigger onClose on non-Escape key press', () => {
    render(<ResumeModal isOpen={true} onClose={mockClose} />);

    fireEvent.keyDown(window, { key: 'Enter' });
    expect(mockClose).not.toHaveBeenCalled();
  });

  it('switches between PDF View and Text Resume views via tabs', () => {
    render(<ResumeModal isOpen={true} onClose={mockClose} />);

    // Initially in PDF View
    expect(screen.getByTitle(/Adithya Menashinakai Resume PDF Viewer/i)).toBeInTheDocument();
    expect(screen.queryByText(/PROFESSIONAL SUMMARY/i)).not.toBeInTheDocument();

    // Click "Text Resume" tab
    const textTabBtn = screen.getByRole('button', { name: /Text Resume/i });
    fireEvent.click(textTabBtn);

    // Text Resume document is now rendered
    expect(screen.getByText(/PROFESSIONAL SUMMARY/i)).toBeInTheDocument();
    expect(screen.getByText(/TECHNICAL SKILLS/i)).toBeInTheDocument();
    expect(screen.getByText(/INTERNSHIP \/ WORK EXPERIENCE/i)).toBeInTheDocument();
    expect(screen.queryByTitle(/Adithya Menashinakai Resume PDF Viewer/i)).not.toBeInTheDocument();

    // Switch back to "PDF View" tab
    const pdfTabBtn = screen.getByRole('button', { name: /PDF View/i });
    fireEvent.click(pdfTabBtn);
    expect(screen.getByTitle(/Adithya Menashinakai Resume PDF Viewer/i)).toBeInTheDocument();
  });

  it('renders download PDF button linking to portfolioData.personal.resumePdf', () => {
    render(<ResumeModal isOpen={true} onClose={mockClose} />);

    const downloadLink = screen.getByRole('link', { name: /Download PDF/i });
    expect(downloadLink).toBeInTheDocument();
    expect(downloadLink).toHaveAttribute('href', portfolioData.personal.resumePdf);
    expect(downloadLink).toHaveAttribute('download', 'Adithya_Menashinakai_Resume.pdf');
  });

  it('closes modal on backdrop click but does not close when clicking inside dialog', () => {
    render(<ResumeModal isOpen={true} onClose={mockClose} />);

    const dialog = screen.getByRole('dialog');
    fireEvent.click(dialog);
    expect(mockClose).not.toHaveBeenCalled();

    // Click on outer backdrop wrapper
    const backdrop = dialog.parentElement;
    fireEvent.click(backdrop);
    expect(mockClose).toHaveBeenCalledTimes(1);
  });

  it('sets document.body.style.overflow to hidden when open and restores to unset when closed', () => {
    const { rerender } = render(<ResumeModal isOpen={true} onClose={mockClose} />);
    expect(document.body.style.overflow).toBe('hidden');

    rerender(<ResumeModal isOpen={false} onClose={mockClose} />);
    expect(document.body.style.overflow).toBe('unset');
  });
});
