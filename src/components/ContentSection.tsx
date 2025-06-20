import { ReactNode } from "react";

interface ContentSectionProps {
  children: ReactNode;
}

export default function ContentSection({ children }: ContentSectionProps) {
  return (
    <section className="py-8 border-b border-gray-200 last:border-b-0">
      <div className="prose max-w-none">{children}</div>
    </section>
  );
}
