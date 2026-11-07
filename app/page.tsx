import ProjectList from '@/components/ProjectList';
const projects = [
  {
    title: 'Receipe Finder',
    description: 'A web application that helps users discover and explore different recipes.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/nobiaya/Simple-Recipe-Finder'
  },

  {
    title: 'Hotel Management System',
    description: 'A web application that helps users book hotel rooms reservations.',
    technologies: ['HTML', 'JavaScript', 'CSS', 'PHP', 'MySQL'],
    link: 'https://github.com/nobiaya/hotel'
  },

  {
    title: 'Dice Game',
    description: 'A two-player dice game where players take turns rolling, holding points, and avoiding losing their scores. First to reach 100 points wins.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://nobiaya.github.io/javascript-project/'
  }

];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">

      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">
          My Portfolio
        </h1>

        <p className="text-lg text-gray-700">
          I'm a software developer with an interest in
          building useful and user-friendly web applications.
          Here are some of my projects.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">
          My Projects
        </h2>

        <ProjectList projects={projects} />
      </section>

    </main>
  );
}