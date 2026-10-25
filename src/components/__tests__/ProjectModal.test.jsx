import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { ProjectModal } from '../ProjectModal';
import { portfolioData } from '../../data/portfolioData';

describe('ProjectModal Component', () => {
  const mockClose = vi.fn();
  const sampleProject = portfolioData.projects[0];

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders nothing when project is null', () => {
    const { container } = render(<ProjectModal project={null} onClose={mockClose} />);
    expect(container.firstChild).toBeNull();
  });

  it('renders modal details, title, and tech stack when project is provided', () => {
    render(<ProjectModal project={sampleProject} onClose={mockClose} />);

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: sampleProject.title })).toBeInTheDocument();
    expect(screen.getByText(sampleProject.category)).toBeInTheDocument();
    expect(screen.getByText(sampleProject.subtitle)).toBeInTheDocument();
    expect(screen.getByText(sampleProject.problem)).toBeInTheDocument();
    expect(screen.getByText(sampleProject.contribution)).toBeInTheDocument();

    sampleProject.tech.forEach((t) => {
      expect(screen.getByText(t)).toBeInTheDocument();
    });
  });

  it('triggers onClose when close button is clicked', () => {
    render(<ProjectModal project={sampleProject} onClose={mockClose} />);

    const closeBtn = screen.getByLabelText(/Close Project Modal/i);
    fireEvent.click(closeBtn);
    expect(mockClose).toHaveBeenCalledTimes(1);

    const closeWindowBtn = screen.getByRole('button', { name: /Close Window/i });
    fireEvent.click(closeWindowBtn);
    expect(mockClose).toHaveBeenCalledTimes(2);
  });
});
