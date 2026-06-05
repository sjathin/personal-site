export interface Degree {
  school: string;
  degree: string;
  link: string;
  year: number;
}

const degrees: Degree[] = [
  {
    school: 'Frankfurt University of Applied Sciences',
    degree: 'M.Sc. High Integrity Systems',
    link: 'https://www.frankfurt-university.de/en/',
    year: 2022,
  },
  {
    school: 'PES Institute of Technology',
    degree: 'B.E. Information Science & Engineering',
    link: 'https://www.pes.edu/',
    year: 2016,
  },
];

export default degrees;
