import type { Metadata } from 'next';
import Image from 'next/image';

import PageWrapper from '@/components/Template/PageWrapper';
import data from '@/data/opensource';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Open Source',
  description:
    'Open source contributions to OpenHands (AI agent platform) and OpenRefine (data transformation tool).',
  path: '/opensource/',
});

export default function OpenSourcePage() {
  return (
    <PageWrapper>
      <section className="opensource-page">
        <header className="opensource-header">
          <h1 className="page-title">Open Source</h1>
          <p className="page-subtitle">
            Contributing to projects that push developer tooling forward
          </p>
        </header>

        <div className="opensource-grid">
          {data.map((project) => (
            <article key={project.project} className="opensource-card">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="opensource-card-image-link"
              >
                <div className="opensource-card-image">
                  <Image
                    src={project.image}
                    alt={project.project}
                    width={600}
                    height={400}
                    className="opensource-card-img"
                  />
                </div>
              </a>

              <div className="opensource-card-body">
                <div className="opensource-card-title-row">
                  <h2 className="opensource-card-name">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.project}
                    </a>
                  </h2>
                  <span
                    className={`opensource-status opensource-status--${project.status}`}
                  >
                    {project.status === 'active' ? 'Active' : 'Past'}
                  </span>
                </div>

                <p className="opensource-card-desc">{project.description}</p>

                <p className="opensource-card-dates">
                  {project.startDate} — {project.endDate ?? 'Present'}
                </p>

                <p className="opensource-card-summary">{project.summary}</p>

                <ul className="opensource-card-highlights">
                  {project.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>

                <div className="opensource-card-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="opensource-tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
