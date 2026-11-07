
import SkillCard from "../../components/SkillCard";

export default function About() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <section className="mb-12">
        <h1 className="mb-4 text-3xl font-bold text-gray-900">
          About Me
        </h1>

        <p className="leading-relaxed text-gray-600">
          I am a frontend-focused software developer with an
          interest in building useful, accessible, and user-friendly
          digital experiences. I also have a background in UI/UX
          design and enjoy turning ideas into practical solutions.
        </p>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-bold text-gray-900">
          My Technical Skills
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <SkillCard
            title="HTML & CSS"
            description="Building structured and responsive web pages."
            level="Frontend Development"
          />

          <SkillCard
            title="JavaScript"
            description="Creating interactive features and dynamic web experiences."
            level="Programming"
          />

          <SkillCard
            title="TypeScript"
            description="Writing structured JavaScript with type safety."
            level="Learning and Development"
          />

          <SkillCard
            title="Next.js"
            description="Building web applications using React and the App Router."
            level="Learning and Development"
          />

          <SkillCard
            title="Python"
            description="Writing programs and solving development problems."
            level="Programming"
          />

          <SkillCard
            title="Figma"
            description="Creating user interfaces, prototypes, and design systems."
            level="UI/UX Design"
          />
        </div>
      </section>
    </main>
  );
}
