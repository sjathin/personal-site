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
    summary: `Designing, delivering, and operating distributed backend services on Amazon's retail platform at scale — from zero-to-one system builds to cross-org incident root-causing and reliability engineering.`,
    highlights: [
      'Architected a unified notification platform from scratch on AWS Step Functions, consolidating two legacy services after evaluating three candidate architectures — cut new notification-type onboarding from ~1 month to ~1 week (a partner team shipped a new type end-to-end in 7 days).',
      'Root-caused 4 months of recurring Sev-2 incidents (23+ total) in distributed DynamoDB-stream processing — where propagation lag spiked from minutes to 29+ hours across 4 regions — and led the migration to an event-driven serverless (Lambda) architecture; zero incidents since.',
      'Diagnosed an org-wide cache race condition generating 9,000+ errors/hour on a service handling millions of requests — an issue multiple teams had only worked around; root-caused and deployed a worldwide fix in a single day, raising service availability from 97.45% to 99.999% and sustaining it through the rest of the year.',
      'Cut a cross-region compliance-migration outage window from ~6 hours to under 15 minutes (24x) by designing a pre-staged deployment across 3 teams in 3 time zones — zero lost events and zero manual intervention; adopted as the template for later migrations.',
      'Uncovered years of silent message loss through unmonitored dead-letter queues during a five-email-type service migration — added DLQ alerting, triggered a team-wide observability audit, and shipped right-to-left email support for Arabic marketplaces.',
      'Traced a 50% drop in a leadership-reported conversion metric through the full analytics pipeline to 36 bot accounts producing 87% of traffic with zero submissions — proved no customer regression and delivered both a self-service query and a permanent pipeline fix.',
      "Drove AI coding-agent adoption across the team by authoring detailed service context and reusable agent skills — grounding an existing agent in the team's services, ownership, and operational history to reduce hallucination, and enabling autonomous on-call triage (investigating incidents, surfacing probable root cause, and writing worklog summaries before human involvement) for [TODO]+ engineers.",
      'Scripted automated remediation for recurring operational issues and extended agent context to improve code-review quality team-wide — cutting first-pass on-call investigation time by ~[TODO]%.',
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
      'Developed a novel worst-case response-time analysis for sporadic DAG tasks on multi-core processors under preemptive global fixed-priority scheduling — proving that assigning intra-task priorities to DAG subtasks tightens the safe upper bound on response time.',
      'Designed an algorithm that controls subtask execution order to derive that bound, and modeled sporadic tasks without collapsing them to periodic — reducing analytical pessimism in inter-task interference.',
      'Validated in Python across hundreds of randomly generated DAGs (up to 150 nodes / 8 threads, via Erdös–Rényi and Nested Fork-Join generators), showing the method outperforms state-of-the-art approaches; published at DLR elib.',
    ],
  },
  {
    name: 'Amazon',
    position: 'SDE Intern',
    url: 'https://amazon.com',
    startDate: '2021-03-01',
    endDate: '2021-08-01',
    summary: `End-to-end feature delivery on Amazon Retail Mobile — design, implementation, and worldwide rollout.`,
    highlights: [
      'Designed and shipped the redesigned customer-review image gallery (Java, Spring, Angular) — a masonry-layout, lazy-loaded page replacing the legacy experience — and owned its worldwide rollout; drove a 78% increase in image views, validated via A/B testing.',
    ],
  },
  {
    name: 'Software AG',
    position: 'Working Student — R&D',
    url: 'https://www.softwareag.com',
    startDate: '2020-03-01',
    endDate: '2021-01-01',
    summary: `Built internal tooling and optimized production services at a global enterprise software company (€800M+ revenue), alongside M.Sc. studies.`,
    highlights: [
      'Optimized Java RESTful services — cutting production errors by 30% — and built an internal university-relations platform with Spring Boot, Angular, and Keycloak SSO.',
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
      'Built a workload-distribution feature that replaced manual job assignment with efficient round-robin distribution across client employees — initially for one insurance client, then promoted into the core product for all clients after its impact; used by 5,000+ agents.',
      'Automated WebLogic deployment via Java/WLST scripting — reduced deployment times by 90%.',
    ],
  },
];

export default work;
