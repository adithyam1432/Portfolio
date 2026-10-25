import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { About } from '../About';
import { portfolioData } from '../../data/portfolioData';

describe('About Component', () => {
  const { about } = portfolioData;

  it('renders about badge, headline, and narrative paragraphs', () => {
    render(<About />);

    expect(screen.getByText(about.badge)).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: about.headline })).toBeInTheDocument();

    about.paragraphs.forEach((p) => {
      expect(screen.getByText(p)).toBeInTheDocument();
    });
  });

  it('renders academic foundation and enterprise experience cards', () => {
    render(<About />);

    expect(screen.getByText(/Academic Foundation/i)).toBeInTheDocument();
    expect(screen.getByText(/Enterprise Experience/i)).toBeInTheDocument();
    expect(screen.getAllByText(/8.3 CGPA/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Vistaar Financial Services/i).length).toBeGreaterThanOrEqual(1);
  });

  it('renders quick metric highlights and target opportunities card', () => {
    render(<About />);

    about.highlights.forEach((h) => {
      expect(screen.getByText(h.label)).toBeInTheDocument();
      expect(screen.getAllByText(h.value).length).toBeGreaterThanOrEqual(1);
    });

    expect(screen.getByText(/Target Opportunities/i)).toBeInTheDocument();
    expect(screen.getByText(about.targetOpportunities)).toBeInTheDocument();
  });
});
