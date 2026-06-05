import { describe, expect, it } from 'vitest';

import writing from '@/data/writing';
import { SITE_URL } from '@/lib/utils';

import { GET } from '../route';

describe('feed.xml route', () => {
  it('uses the canonical trailing-slash link for the writing channel', async () => {
    const response = await GET();
    const xml = await response.text();

    expect(xml).toContain(`${SITE_URL}/writing/`);
  });

  it('includes every external writing item link', async () => {
    const response = await GET();
    const xml = await response.text();

    for (const item of writing) {
      expect(xml).toContain(item.url);
    }
  });

  it('keeps the feed self link file-like', async () => {
    const response = await GET();
    const xml = await response.text();

    expect(xml).toContain(`${SITE_URL}/feed.xml`);
    expect(xml).not.toContain(`${SITE_URL}/feed.xml/`);
  });
});
