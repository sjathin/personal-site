export interface WritingItem {
  title: string;
  url: string;
  date: string;
  description: string;
}

const data: WritingItem[] = [
  {
    title: 'Response Time Analysis of Tasking Framework Task Chains',
    url: 'https://elib.dlr.de/187965/',
    date: '2022-08-01',
    description:
      'Master thesis at the German Aerospace Center (DLR): response time analysis of real-time task chains on multi-core processors using Directed Acyclic Graph (DAG) task models. Introduces an execution model that controls subtask ordering and handles sporadic tasks, reducing analytical pessimism over prior methods.',
  },
  {
    title: 'A Survey on Bluetooth 5.0 for Internet of Things',
    url: 'https://www.researchgate.net/publication/357877216_A_Survey_on_Bluetooth_50_for_Internet_of_Things',
    date: '2022-01-01',
    description:
      'A survey of Bluetooth 5.0 — what changed over previous versions, why it matters, and how its improvements make it well suited for IoT applications across the industry.',
  },
  {
    title: 'Scheduling Simulator',
    url: 'https://www.researchgate.net/publication/354200262_Scheduling_Simulator',
    date: '2021-06-01',
    description:
      'A study and visual simulator of CPU scheduling algorithms, exploring how they affect process scheduling, resource utilization, and performance in real-time applications, and which algorithms suit which scenarios.',
  },
];

export default data;
