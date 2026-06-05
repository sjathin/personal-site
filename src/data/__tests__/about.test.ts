import { describe, expect, it } from 'vitest';

import { aboutMarkdown } from '../about';

describe('about data', () => {
  it('exports aboutMarkdown as a string', () => {
    expect(typeof aboutMarkdown).toBe('string');
    expect(aboutMarkdown.length).toBeGreaterThan(0);
  });

  it('contains the intro section', () => {
    expect(aboutMarkdown).toContain('# Intro');
    expect(aboutMarkdown).toContain('Amazon');
    expect(aboutMarkdown).toContain('Berlin');
  });

  it('contains the what I do section', () => {
    expect(aboutMarkdown).toContain('# What I Do');
    expect(aboutMarkdown).toContain('backend services');
  });

  it('contains the research section', () => {
    expect(aboutMarkdown).toContain('# Research');
    expect(aboutMarkdown).toContain('DLR');
  });

  it('contains the outside work section', () => {
    expect(aboutMarkdown).toContain('# Outside Work');
    expect(aboutMarkdown).toContain('Running');
  });

  it('contains the looking for section', () => {
    expect(aboutMarkdown).toContain("# What I'm Looking For");
    expect(aboutMarkdown).toContain('distributed systems');
  });

  it('contains valid markdown links', () => {
    // Check for markdown link format [text](url)
    const linkRegex = /\[.+?\]\(.+?\)/g;
    const links = aboutMarkdown.match(linkRegex);

    expect(links).not.toBeNull();
    expect(links!.length).toBeGreaterThan(3);
  });

  it('contains properly formatted headers', () => {
    // Check for markdown headers
    const headerRegex = /^#+ .+$/gm;
    const headers = aboutMarkdown.match(headerRegex);

    expect(headers).not.toBeNull();
    expect(headers!.length).toBeGreaterThan(3);
  });
});
