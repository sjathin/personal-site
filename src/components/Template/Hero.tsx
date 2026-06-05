import Link from 'next/link';

import ThemePortrait from './ThemePortrait';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-avatar">
          <ThemePortrait width={160} height={160} priority />
        </div>

        <h1 className="hero-title">
          <span className="hero-name">Jathin Sreenivas</span>
        </h1>

        <p className="hero-tagline">
          SDE @{' '}
          <a href="https://amazon.com" className="hero-highlight">
            Amazon
          </a>
          {' '}· Ex-
          <a href="https://www.dlr.de/EN/" className="hero-highlight">
            German Aerospace Center
          </a>
          {' '}· M.Sc. High Integrity Systems · OSS @{' '}
          <a href="https://github.com/All-Hands-AI/OpenHands" className="hero-highlight">
            OpenHands AI
          </a>
        </p>

        <div className="hero-cta">
          <Link href="/about" className="button button-primary">
            About Me
          </Link>
          <Link href="/resume" className="button button-secondary">
            View Resume
          </Link>
        </div>
      </div>

      <div className="hero-bg" aria-hidden="true">
        <div className="hero-gradient" />
      </div>
    </section>
  );
}
