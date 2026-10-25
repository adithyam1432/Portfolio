import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Experience } from '../Experience';
import { portfolioData } from '../../data/portfolioData';

describe('Experience Component', () => {
  const { experience, professionalDevelopment } = portfolioData;

  it('renders section title and introductory summary', () => {
    render(<Experience />);

    expect(screen.getByText(/Professional Work & Simulation/i)).toBeInTheDocument();
    expect(screen.getByText(/Industry Analytics & Engineering Experience/i)).toBeInTheDocument();
  });

  it('renders Vistaar Financial Services internship with company, role, period, and location', () => {
    render(<Experience />);

    const vistaarExp = experience.find(e => e.id === 'vistaar');
    expect(vistaarExp).toBeDefined();

    expect(screen.getByText(vistaarExp.company)).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: vistaarExp.role })).toBeInTheDocument();
    expect(screen.getByText(vistaarExp.period)).toBeInTheDocument();
    expect(screen.getByText(vistaarExp.location)).toBeInTheDocument();
    expect(screen.getByText(vistaarExp.type)).toBeInTheDocument();
  });

  it('renders all internship achievement highlights and technologies', () => {
    render(<Experience />);

    const vistaarExp = experience.find(e => e.id === 'vistaar');

    vistaarExp.highlights.forEach((highlight) => {
      expect(screen.getByText(highlight)).toBeInTheDocument();
    });

    vistaarExp.tech.forEach((t) => {
      expect(screen.getByText(t)).toBeInTheDocument();
    });
  });

  it('renders Deloitte Job Simulation under Professional Development', () => {
    render(<Experience />);

    const sim = professionalDevelopment[0];
    expect(screen.getByRole('heading', { level: 3, name: sim.title })).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`Issued via ${sim.issuer}`, 'i'))).toBeInTheDocument();
    expect(screen.getByText(sim.date)).toBeInTheDocument();
    expect(screen.getByText(sim.description)).toBeInTheDocument();

    sim.skillsApplied.forEach((skill) => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });
  });
});
