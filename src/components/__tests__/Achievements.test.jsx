import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { Achievements } from '../Achievements';
import { portfolioData } from '../../data/portfolioData';

describe('Achievements Component', () => {
  const { achievements } = portfolioData;

  it('renders section title, subtitle, and hackathon honors', () => {
    render(<Achievements />);

    expect(screen.getByText(/Honors & Achievements/i)).toBeInTheDocument();
    expect(screen.getByText(/National Hackathon Recognition/i)).toBeInTheDocument();
  });

  it('renders MITK AI Vision Hackathon card details, prize money, and tags', () => {
    render(<Achievements />);

    const item = achievements[0];

    expect(screen.getByRole('heading', { level: 3, name: item.title })).toBeInTheDocument();
    expect(screen.getByText(item.organization)).toBeInTheDocument();
    expect(screen.getByText(item.award)).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`Year ${item.year}`, 'i'))).toBeInTheDocument();
    expect(screen.getAllByText(/₹25,000/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/24-hour/i).length).toBeGreaterThanOrEqual(1);

    // Tags
    item.tags.forEach((tag) => {
      expect(screen.getByText(tag)).toBeInTheDocument();
    });
  });

  it('renders hackathon photo with appropriate attributes', () => {
    render(<Achievements />);

    const item = achievements[0];
    const img = screen.getByAltText(item.title);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', item.image);
    expect(img).toHaveAttribute('loading', 'lazy');
  });

  it('opens and closes the photo lightbox modal on user interaction', () => {
    render(<Achievements />);

    // Initially modal is not open
    expect(screen.queryByLabelText(/Close image preview/i)).not.toBeInTheDocument();

    // Click "View Photo" button
    const viewPhotoBtn = screen.getByRole('button', { name: /View Photo/i });
    fireEvent.click(viewPhotoBtn);

    // Lightbox modal should now be visible with close button and image
    const closeBtn = screen.getByLabelText(/Close image preview/i);
    expect(closeBtn).toBeInTheDocument();

    const lightboxImg = screen.getByAltText(/Hackathon Winner Ceremony/i);
    expect(lightboxImg).toBeInTheDocument();
    expect(lightboxImg).toHaveAttribute('src', achievements[0].image);

    // Click close button
    fireEvent.click(closeBtn);
    expect(screen.queryByLabelText(/Close image preview/i)).not.toBeInTheDocument();
  });

  it('closes lightbox modal when clicking the backdrop overlay', () => {
    render(<Achievements />);

    fireEvent.click(screen.getByRole('button', { name: /View Photo/i }));
    expect(screen.getByLabelText(/Close image preview/i)).toBeInTheDocument();

    // Click backdrop
    const backdrop = screen.getByLabelText(/Close image preview/i).closest('.fixed');
    fireEvent.click(backdrop);

    expect(screen.queryByLabelText(/Close image preview/i)).not.toBeInTheDocument();
  });
});
