import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { Skills } from '../Skills';
import { portfolioData } from '../../data/portfolioData';

describe('Skills Component', () => {
  const { categories } = portfolioData.skills;

  it('renders section title, subtitle, and all category filter buttons', () => {
    render(<Skills />);

    expect(screen.getByText(/Verified Technical Stack & Competencies/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /All Categories/i })).toBeInTheDocument();

    categories.forEach((cat) => {
      expect(screen.getByRole('button', { name: cat.name })).toBeInTheDocument();
    });
  });

  it('renders all categories and their skills by default', () => {
    render(<Skills />);

    categories.forEach((cat) => {
      // Category header
      expect(screen.getByRole('heading', { level: 3, name: cat.name })).toBeInTheDocument();

      // Item count badge
      const countBadge = `${cat.skills.length} item${cat.skills.length > 1 ? 's' : ''}`;
      expect(screen.getAllByText(countBadge).length).toBeGreaterThanOrEqual(1);

      // Check skill chips
      cat.skills.forEach((skill) => {
        expect(screen.getAllByText(skill).length).toBeGreaterThanOrEqual(1);
      });
    });
  });

  it('filters skills cards when a specific category is selected', () => {
    render(<Skills />);

    // Click "Web Development"
    const webButton = screen.getByRole('button', { name: 'Web Development' });
    fireEvent.click(webButton);

    // Web Development category should still be in document
    expect(screen.getByRole('heading', { level: 3, name: 'Web Development' })).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('HTML')).toBeInTheDocument();
    expect(screen.getByText('CSS')).toBeInTheDocument();

    // Other categories should not be in the document
    expect(screen.queryByRole('heading', { level: 3, name: 'Databases' })).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { level: 3, name: 'Languages' })).not.toBeInTheDocument();
  });

  it('restores all categories when "All Categories" button is clicked again', () => {
    render(<Skills />);

    // First filter down to Databases
    fireEvent.click(screen.getByRole('button', { name: 'Databases' }));
    expect(screen.queryByRole('heading', { level: 3, name: 'Web Development' })).not.toBeInTheDocument();

    // Now click All Categories
    fireEvent.click(screen.getByRole('button', { name: /All Categories/i }));

    // Both should now be visible again
    expect(screen.getByRole('heading', { level: 3, name: 'Web Development' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: 'Databases' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: 'Languages' })).toBeInTheDocument();
  });
});
