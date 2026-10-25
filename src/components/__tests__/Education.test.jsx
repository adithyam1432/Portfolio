import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Education } from '../Education';
import { portfolioData } from '../../data/portfolioData';

describe('Education Component', () => {
  const { education } = portfolioData;

  it('renders section title and introductory summary', () => {
    render(<Education />);

    expect(screen.getByText(/Academic Background/i)).toBeInTheDocument();
    expect(screen.getByText(/Formal Computer Science Education/i)).toBeInTheDocument();
  });

  it('renders MCA and BCA degree cards with accurate degree names, institutions, and periods', () => {
    render(<Education />);

    education.forEach((edu) => {
      expect(screen.getByRole('heading', { level: 3, name: edu.degree })).toBeInTheDocument();
      expect(screen.getByText(edu.institution)).toBeInTheDocument();
      expect(screen.getByText(edu.period)).toBeInTheDocument();
      expect(screen.getByText(edu.detail)).toBeInTheDocument();
    });
  });

  it('displays the 8.3 CGPA distinction score for BCA degree', () => {
    render(<Education />);

    const bcaItem = education.find(e => e.id === 'bca');
    expect(bcaItem).toBeDefined();
    expect(screen.getByText(bcaItem.score)).toBeInTheDocument();
  });

  it('renders enrollment status tags ("Pursuing" and "Completed")', () => {
    render(<Education />);

    expect(screen.getByText('Pursuing')).toBeInTheDocument();
    const completedBadges = screen.getAllByText('Completed');
    expect(completedBadges.length).toBeGreaterThanOrEqual(1);
  });
});
