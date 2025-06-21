import { promises as fs } from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import type { MDXRemoteProps } from "next-mdx-remote/rsc";
import ContentSection from "@/components/ContentSection";
import PolicyCard from "@/components/PolicyCard";
import IconHeading from "@/components/IconHeading";

const components: MDXRemoteProps["components"] = {
  ContentSection,
  PolicyCard,
  IconHeading,
};

async function getFinancialSectionContent(locale: string, section: string) {
  const contentPath = path.join(
    process.cwd(),
    `src/content/financialPreparedness/${section}.${locale}.mdx`
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
    { locale: "en", section: "banking" },
    { locale: "en", section: "savings" },
    { locale: "en", section: "safety" },
    { locale: "ne", section: "banking" },
    { locale: "ne", section: "savings" },
    { locale: "ne", section: "safety" },
  ];
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; section: string }>;
}) {
  const mdxSource = await getFinancialSectionContent(
    (
      await params
    ).locale,
    (
      await params
    ).section
  );

  if (!mdxSource) {
    return <div>Error loading healthcare content.</div>;
  }

  const { content } = await compileMDX({
    source: mdxSource,
    components,
    options: {
      mdxOptions: {
        remarkPlugins: [],
        rehypePlugins: [],
      },
      parseFrontmatter: true,
    },
  });

  return (
    <article className="prose prose-lg max-w-none mx-auto px-4 py-8">
      {content}
    </article>
  );
}
