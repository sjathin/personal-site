import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faResearchgate } from '@fortawesome/free-brands-svg-icons/faResearchgate';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';

export interface ContactItem {
  link: string;
  label: string;
  icon: IconDefinition;
}

const data: ContactItem[] = [
  {
    link: 'https://www.linkedin.com/in/jathin-sreenivas/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://github.com/sjathin',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.researchgate.net/profile/Jathin_Sreenivas',
    label: 'ResearchGate',
    icon: faResearchgate,
  },
  {
    link: 'https://twitter.com/sjathin95',
    label: 'Twitter',
    icon: faTwitter,
  },
  {
    link: 'https://www.instagram.com/thejsreenivas/',
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: 'mailto:jathinsreenivas@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
