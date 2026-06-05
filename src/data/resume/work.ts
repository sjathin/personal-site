/**
 * Conforms to https://jsonresume.org/schema/
 */
export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: 'Amazon',
    position: 'Software Development Engineer',
    url: 'https://amazon.com',
    startDate: '2022-11-15',
    summary: `Owning design, delivery, and operation of backend services on Amazon's retail platform — from zero-to-one system builds to cross-org incident resolution.`,
    highlights: [
      'Architected a unified notification platform from scratch (AWS Step Functions), consolidating two legacy services — reduced new notification type onboarding from 1 month to 1 week.',
      'Root-caused recurring Sev-2 incidents (4 months, 23+ incidents) in distributed stream processing, then migrated to event-driven serverless architecture — zero incidents post-migration.',
      'Diagnosed an org-wide caching race condition causing 9,000+ errors/hour — fixed in one day, improved availability from 97.45% to 99.999% across all regions.',
      'Reduced a cross-region compliance migration outage window from 6 hours to 15 minutes by designing a pre-staged deployment strategy across 3 teams in 3 time zones.',
      'Discovered years of silent message loss through unmonitored dead-letter queues during a service migration — triggered a team-wide observability audit.',
      'Investigated a 50% metric drop, traced through the full analytics pipeline to identify bot accounts generating 87% of traffic — proved no customer regression, delivered permanent fix.',
    ],
  },
  {
    name: 'German Aerospace Center (DLR)',
    position: 'Master Thesis Researcher',
    url: 'https://www.dlr.de/EN/Home/home_node.html',
    startDate: '2022-03-01',
    endDate: '2022-08-01',
    summary: `Research on response time analysis of real-time task chains for satellite software at DLR's Institute for Software Technology.`,
    highlights: [
      'Developed a novel execution model for response time analysis of DAG tasks on multi-core processors with fixed-priority scheduling.',
      'Implemented the framework in Python, validated against satellite system task models — published at DLR elib.',
      'Extended prior research from periodic/FCFS to sporadic tasks with priority-based execution, reducing analytical pessimism.',
    ],
  },
  {
    name: 'Amazon',
    position: 'SDE Intern',
    url: 'https://amazon.com',
    startDate: '2021-03-01',
    endDate: '2021-08-01',
    summary: `End-to-end feature delivery on Amazon Retail Mobile — design, implementation, worldwide rollout, and post-launch monitoring.`,
    highlights: [
      'Designed and shipped a customer review images feature (Java, Spring, Angular) deployed worldwide — 78% increase in image views, validated via A/B testing.',
      'Monitored post-release metrics (CPU, memory, latency) via CloudWatch; full project lifecycle in one internship.',
    ],
  },
  {
    name: 'Software AG',
    position: 'Working Student — R&D',
    url: 'https://www.softwareag.com',
    startDate: '2020-03-01',
    endDate: '2021-01-01',
    summary: `Built internal tooling and optimized production services at a global enterprise software company (€800M+ revenue).`,
    highlights: [
      'Optimized RESTful services (Java) to automate error handling, reducing production errors by 30%.',
      'Designed and shipped a university relations platform using Spring Boot, Angular, and Keycloak.',
    ],
  },
  {
    name: 'NTT Data FA Insurance Systems',
    position: 'Software Engineer',
    url: 'http://www.nttdata-ndfs.com/',
    startDate: '2016-09-01',
    endDate: '2019-07-01',
    summary: `Delivered enterprise insurance applications serving 5,000+ agents across multiple clients in the APAC region.`,
    highlights: [
      'Built and delivered web applications using RESTful services, Spring, Java, and MySQL for 3 enterprise clients.',
      'Designed a Round Robin workload delegation system used by 5,000+ insurance agents.',
      'Automated WebLogic deployment via Java/WLST scripting — reduced deployment times by 90%.',
    ],
  },
];

export default work;
