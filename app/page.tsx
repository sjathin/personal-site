import type { Metadata } from 'next';

import { PersonSchema } from '@/components/Schema';
import Hero from '@/components/Template/Hero';
import PageWrapper from '@/components/Template/PageWrapper';

export const metadata: Metadata = {
  description:
    'Software Development Engineer at Amazon, Berlin. Building cloud-native microservices on AWS at scale. M.Sc. in High Integrity Systems, ex-German Aerospace Center (DLR).',
};

export default function HomePage() {
  return (
    <PageWrapper>
      <PersonSchema />
      <Hero />
    </PageWrapper>
  );
}
