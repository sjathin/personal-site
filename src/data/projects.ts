export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  image: string;
  date?: string;
  desc: string;
  tech?: string[];
  featured?: boolean;
}

const data: Project[] = [
  {
    title: 'Blockchain Solution to Healthcare Record System',
    subtitle: 'Hyperledger Fabric Research',
    link: 'http://dx.doi.org/10.13140/RG.2.2.27957.60640',
    image: '/images/projects/blockchain.png',
    date: '2021-07-01',
    desc: 'Research project exploring Hyperledger Fabric for secure, interoperable healthcare record sharing. Built a proof-of-concept that puts patients at the center of the system, enabling trustable EHR data exchange across providers.',
    tech: ['Blockchain', 'Hyperledger Fabric', 'Node.js', 'Docker', 'Shell'],
    featured: true,
  },
  {
    title: 'Scheduling Simulator',
    subtitle: 'Used by 1000+ university students',
    link: 'https://github.com/sjathin/SchedulingSimulation',
    image: '/images/projects/scheduling.png',
    date: '2021-06-01',
    desc: 'A visual simulator for CPU scheduling algorithms (FCFS, SJF, Round Robin, Priority) that enables students to understand process scheduling, resource utilization, and real-time performance characteristics. Adopted by professors for coursework.',
    tech: ['Python', 'Algorithms', 'Real-Time Systems'],
    featured: true,
  },
  {
    title: 'Fall Detection System',
    subtitle: 'Smartphone sensor-based detection',
    link: 'http://dx.doi.org/10.13140/RG.2.2.31234.40649',
    image: '/images/projects/fall.png',
    date: '2016-08-01',
    desc: 'A fall detection system using smartphone accelerometer and gyroscope sensors for human activity recognition, achieving 0.77 sensitivity and specificity. Designed for elderly care applications.',
    tech: ['Android', 'Sensors', 'Signal Processing'],
  },
  {
    title: 'Accident Avoidance & Detection',
    subtitle: 'IoT + Arduino safety system',
    link: 'https://github.com/sjathin/Accident-Avoidance-And-Detection',
    image: '/images/projects/accident1.png',
    date: '2016-11-01',
    desc: 'Detects vehicle accidents using Arduino sensors and automatically contacts the nearest ambulance via GSM module. Includes a Django web application for emergency dispatch coordination.',
    tech: ['Python', 'Arduino', 'Django', 'GPS/GSM'],
  },
  {
    title: 'OpenStack Private Cloud Deployment',
    subtitle: 'Multi-node IaaS infrastructure',
    link: 'https://github.com/sjathin/OpenStack-Deployment-MicroStack',
    image: '',
    date: '2020-06-01',
    desc: 'Documented and deployed a multi-node OpenStack private cloud infrastructure using MicroStack, with detailed guides on networking, compute, and storage configuration.',
    tech: ['OpenStack', 'Cloud', 'Linux', 'Networking'],
  },
  {
    title: 'UNIX Commands in C',
    subtitle: 'Systems programming challenge',
    link: 'https://github.com/sjathin/Unix-Commands',
    image: '',
    date: '2016-06-01',
    desc: 'Custom implementations of common UNIX commands (ls, cat, grep, wc, etc.) in C — a deep dive into systems programming, file I/O, and process management.',
    tech: ['C', 'Linux', 'Systems Programming'],
  },
];

export default data;
