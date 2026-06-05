import type { CSSProperties } from 'react';

import type { Category, Skill } from '@/data/resume/skills';

interface SkillsProps {
  skills: Skill[];
  categories: Category[];
}

export default function Skills({ skills, categories }: SkillsProps) {
  const grouped = categories.reduce(
    (groups, category) => {
      const categorySkills = skills
        .filter((skill) => skill.category.includes(category.name))
        .sort((a, b) => b.competency - a.competency);
      if (categorySkills.length > 0) {
        groups[category.name] = categorySkills;
      }
      return groups;
    },
    {} as Record<string, Skill[]>,
  );

  return (
    <div className="skills">
      <div className="link-to" id="skills" />
      <div className="title">
        <h3>Skills</h3>
      </div>
      <div className="skills-compact">
        {Object.entries(grouped).map(([categoryName, categorySkills]) => {
          const category = categories.find((c) => c.name === categoryName);
          const style = {
            '--skill-cat-color': category?.color,
          } as CSSProperties;

          return (
            <div key={categoryName} className="skills-compact-row" style={style}>
              <span className={`skills-compact-label skills-compact-label--${category?.textColor ?? 'light'}`}>
                {categoryName}
              </span>
              <div className="skills-compact-tags">
                {categorySkills.map((s) => (
                  <span key={s.title} className="skills-compact-tag">
                    {s.title}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
