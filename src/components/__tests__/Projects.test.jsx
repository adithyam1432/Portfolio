import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { Projects } from '../Projects';
import { portfolioData } from '../../data/portfolioData';

describe('Projects Component', () => {
  const mockSelectProject = vi.fn();
  const { projects } = portfolioData;

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders section headline, description, and all project cards', () => {
    render(<Projects onSelectProject={mockSelectProject} />);

    expect(screen.getByText(/Demonstrated Data Engineering & Full-Stack Work/i)).toBeInTheDocument();

    projects.forEach((proj) => {
      expect(screen.getByRole('heading', { level: 3, name: proj.title })).toBeInTheDocument();
      expect(screen.getByText(proj.subtitle)).toBeInTheDocument();
      expect(screen.getByText(proj.description)).toBeInTheDocument();
      expect(screen.getByText(proj.problem)).toBeInTheDocument();
      expect(screen.getByText(proj.contribution)).toBeInTheDocument();
      expect(screen.getByText(proj.metrics)).toBeInTheDocument();

      // Tech stack items
      proj.tech.forEach((t) => {
        const matchingTech = screen.getAllByText(t);
        expect(matchingTech.length).toBeGreaterThan(0);
      });
    });
  });

  it('renders live application links when liveUrl is present and private message when absent', () => {
    render(<Projects onSelectProject={mockSelectProject} />);

    // Candle Miner has liveUrl
    const liveAppLink = screen.getByRole('link', { name: /Launch Live Application/i });
    expect(liveAppLink).toBeInTheDocument();
    expect(liveAppLink).toHaveAttribute('href', 'https://stock-movement-predictor.vercel.app/');
    expect(liveAppLink).toHaveAttribute('target', '_blank');

    // AntiQues has null liveUrl
    expect(screen.getByText(/Live Demo Private \/ Local Database/i)).toBeInTheDocument();
  });

  it('renders GitHub repository links with proper security attributes', () => {
    render(<Projects onSelectProject={mockSelectProject} />);

    const githubLinks = screen.getAllByRole('link', { name: /Inspect GitHub Repository/i });
    expect(githubLinks.length).toBe(projects.length);

    githubLinks.forEach((link) => {
      expect(link).toHaveAttribute('href', 'https://github.com/adithyam1432');
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  it('triggers onSelectProject modal callback with project data on button click', () => {
    render(<Projects onSelectProject={mockSelectProject} />);

    const breakdownButtons = screen.getAllByRole('button', { name: /Read Technical Breakdown →/i });
    expect(breakdownButtons.length).toBe(projects.length);

    // Click first project breakdown button
    fireEvent.click(breakdownButtons[0]);
    expect(mockSelectProject).toHaveBeenCalledTimes(1);
    expect(mockSelectProject).toHaveBeenCalledWith(projects[0]);

    // Click second project breakdown button
    fireEvent.click(breakdownButtons[1]);
    expect(mockSelectProject).toHaveBeenCalledTimes(2);
    expect(mockSelectProject).toHaveBeenCalledWith(projects[1]);
  });
});
