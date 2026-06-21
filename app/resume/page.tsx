import type { Metadata } from 'next';
import Link from 'next/link';

import Education from '@/components/Resume/Education';
import Experience from '@/components/Resume/Experience';
import References from '@/components/Resume/References';
import ResumeNav from '@/components/Resume/ResumeNav';
import Skills from '@/components/Resume/Skills';
import PageWrapper from '@/components/Template/PageWrapper';
import degrees from '@/data/resume/degrees';
import { categories, skills } from '@/data/resume/skills';
import work from '@/data/resume/work';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Resume',
  description:
    "Jathin Sreenivas's Resume. Software Development Engineer at Amazon, Berlin. M.Sc. High Integrity Systems, ex-DLR, ex-NTT Data.",
  path: '/resume/',
});

export default function ResumePage() {
  return (
    <PageWrapper>
      <section className="resume-page">
        <header className="resume-header">
          <h1 className="resume-title">Resume</h1>
          <p className="resume-summary">
            Software Development Engineer at Amazon, Berlin, with ~4 years
            building and operating distributed backend systems on AWS that serve
            millions of requests worldwide. I specialize in event-driven
            architecture, high availability, and reliability engineering —
            root-causing the incidents others work around and re-architecting
            fragile systems so they stop paging. I also work hands-on with AI
            coding agents like Claude and Kiro — grounding them with service
            context and reusable skills to automate on-call triage and
            engineering workflows, and contributing to{' '}
            <Link href="/opensource">OpenHands</Link>, an open-source AI agent
            platform where I&apos;ve built LLM-integrated features. M.Sc. in
            High Integrity Systems from Frankfurt UAS, with prior research in
            real-time systems at DLR.
          </p>
        </header>

        <ResumeNav />

        <div className="resume-content">
          <section id="experience" className="resume-section">
            <Experience data={work} />
          </section>

          <section id="education" className="resume-section">
            <Education data={degrees} />
          </section>

          <section id="skills" className="resume-section">
            <Skills skills={skills} categories={categories} />
          </section>

          <section id="references" className="resume-section">
            <References />
          </section>
        </div>
      </section>
    </PageWrapper>
  );
}
