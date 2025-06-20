// src/components/SectionContainer.tsx
// Container for content sections

interface SectionContainerProps {
  title: string;
  slug: string;
  children: React.ReactNode;
}

const SectionContainer = ({ title, slug, children }: SectionContainerProps) => {
  return (
    <section id={slug} className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="prose max-w-none">{children}</div>
    </section>
  );
};

export default SectionContainer;
