
interface SkillCardProps {
  title: string;
  description: string;
  level: string;
}

export default function SkillCard({
  title,
  description,
  level,
}: SkillCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="mb-2 text-xl font-semibold text-gray-800">
        {title}
      </h3>

      <p className="mb-3 text-gray-600">
        {description}
      </p>

      <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
        {level}
      </span>
    </div>
  );
}
