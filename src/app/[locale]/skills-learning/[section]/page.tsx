import { promises as fs } from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import type { MDXRemoteProps } from "next-mdx-remote/rsc";
import ContentSection from "@/components/ContentSection";
import IconHeading from "@/components/IconHeading";
import MoreInfoButton from "@/components/MoreInfoButton";

const components: MDXRemoteProps["components"] = {
  ContentSection,
  IconHeading,
  MoreInfoButton,
};

async function getSkillsSectionContent(locale: string, section: string) {
  const contentPath = path.join(
    process.cwd(),
    `src/content/skills/${section}.${locale}.mdx`
  );
  try {
    const source = await fs.readFile(contentPath, "utf8");
    return source;
  } catch (error) {
    console.error("Failed to read MDX file:", error);
    return null;
  }
}

export function generateStaticParams() {
  return [
    { locale: "en", section: "language" },
    { locale: "en", section: "professional" },
    { locale: "en", section: "digital" },
    { locale: "en", section: "arabic-learning" },
    { locale: "en", section: "professionaldevelopment" },
    { locale: "en", section: "digital-safety" },
    { locale: "ne", section: "language" },
    { locale: "ne", section: "professional" },
    { locale: "ne", section: "digital" },
    { locale: "ne", section: "arabic-learning" },
    { locale: "ne", section: "professionaldevelopment" },
    { locale: "ne", section: "digital-safety" },
  ];
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; section: string }>;
}) {
  const mdxSource = await getSkillsSectionContent(
    (
      await params
    ).locale,
    (
      await params
    ).section
  );

  if (!mdxSource) {
    return (
      <div className="text-red-600 p-4">
        Failed to load content for section: {(await params).section}
      </div>
    );
  }

  const { content } = await compileMDX({
    source: mdxSource,
    components,
    options: {
      mdxOptions: {
        remarkPlugins: [],
        rehypePlugins: [],
      },
    },
  });

  return (
    <article className="prose prose-lg max-w-none mx-auto px-4 py-8">
      {content}
    </article>
  );
}
