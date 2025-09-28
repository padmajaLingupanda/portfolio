import React from 'react';
import { Code2, Database, Smartphone, Globe, Palette, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Globe className="w-8 h-8" />,
      color: 'blue',
      skills: [
        { name: 'React/Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'JavaScript', level: 95 },
        { name: 'HTML/CSS', level: 98 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Vue.js', level: 85 },
      ],
    },
    {
      title: 'Backend Development',
      icon: <Database className="w-8 h-8" />,
      color: 'green',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Python', level: 85 },
        { name: 'PostgreSQL', level: 90 },
        { name: 'MongoDB', level: 82 },
        { name: 'GraphQL', level: 78 },
        { name: 'REST APIs', level: 92 },
      ],
    },
    {
      title: 'Mobile Development',
      icon: <Smartphone className="w-8 h-8" />,
      color: 'purple',
      skills: [
        { name: 'React Native', level: 88 },
        { name: 'Flutter', level: 75 },
        { name: 'Swift', level: 70 },
        { name: 'Kotlin', level: 68 },
        { name: 'Expo', level: 90 },
        { name: 'Firebase', level: 85 },
      ],
    },
    {
      title: 'Design & Tools',
      icon: <Palette className="w-8 h-8" />,
      color: 'pink',
      skills: [
        { name: 'Figma', level: 92 },
        { name: 'Adobe XD', level: 88 },
        { name: 'Photoshop', level: 80 },
        { name: 'Illustrator', level: 75 },
        { name: 'UI/UX Design', level: 90 },
        { name: 'Prototyping', level: 88 },
      ],
    },
    {
      title: 'Programming Languages',
      icon: <Code2 className="w-8 h-8" />,
      color: 'orange',
      skills: [
        { name: 'JavaScript', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'Java', level: 78 },
        { name: 'Go', level: 70 },
        { name: 'Rust', level: 65 },
      ],
    },
    {
      title: 'DevOps & Tools',
      icon: <Settings className="w-8 h-8" />,
      color: 'teal',
      skills: [
        { name: 'Docker', level: 85 },
        { name: 'AWS', level: 82 },
        { name: 'Git', level: 95 },
        { name: 'CI/CD', level: 88 },
        { name: 'Linux', level: 80 },
        { name: 'Kubernetes', level: 72 },
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; progress: string }> = {
      blue: { bg: 'bg-blue-500/20', text: 'text-blue-400', progress: 'bg-blue-500' },
      green: { bg: 'bg-green-500/20', text: 'text-green-400', progress: 'bg-green-500' },
      purple: { bg: 'bg-purple-500/20', text: 'text-purple-400', progress: 'bg-purple-500' },
      pink: { bg: 'bg-pink-500/20', text: 'text-pink-400', progress: 'bg-pink-500' },
      orange: { bg: 'bg-orange-500/20', text: 'text-orange-400', progress: 'bg-orange-500' },
      teal: { bg: 'bg-teal-500/20', text: 'text-teal-400', progress: 'bg-teal-500' },
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const colorClasses = getColorClasses(category.color);
            return (
              <div
                key={category.title}
                className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 ${colorClasses.bg} rounded-lg mr-4`}>
                    <div className={colorClasses.text}>
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-gray-400 text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className={`h-2 ${colorClasses.progress} rounded-full transition-all duration-1000 ease-out`}
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${categoryIndex * 200 + skillIndex * 100}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;