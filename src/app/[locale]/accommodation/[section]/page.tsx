import { promises as fs } from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import type { MDXRemoteProps } from "next-mdx-remote/rsc";
import SectionContainer from "@/components/SectionContainer";
import Link from "next/link";
import ContentSection from "@/components/ContentSection";
import IconHeading from "@/components/IconHeading";
import MoreInfoButton from "@/components/MoreInfoButton";
import remarkGfm from "remark-gfm";

const components: MDXRemoteProps["components"] = {
  MoreInfoButton,
  IconHeading,
  ContentSection,
  SectionContainer,
  Link,
  h1: (props) => <h1 {...props} className="text-4xl font-bold mb-6" />,
  h2: (props) => <h2 {...props} className="text-3xl font-semibold mb-4" />,
  h3: (props) => <h3 {...props} className="text-2xl font-medium mb-3" />,
  table: (props) => (
    <div className="overflow-x-auto mb-6">
      <table
        {...props}
        className="w-full border-collapse border border-gray-300 text-sm"
      />
    </div>
  ),
  tr: (props) => (
    <tr {...props} className="border-b border-gray-300 hover:bg-gray-50" />
  ),
  td: (props) => (
    <td {...props} className="border border-gray-300 px-4 py-3 align-top" />
  ),
};

async function getAccommodationContent(locale: string, section: string) {
  const contentPath = path.join(
    process.cwd(),
    `src/content/accommodation/${section}.${locale}.mdx`
  );
  try {
    const source = await fs.readFile(contentPath, "utf8");
    return source;
  } catch (error) {
    console.error(`Failed to read MDX file for section ${section}:`, error);
    return null;
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; section: string }>;
}) {
  const mdxSource = await getAccommodationContent(
    (
      await params
    ).locale,
    (
      await params
    ).section
  );
  if (!mdxSource) {
    return (
      <div>
        Error loading accommodation content for section:{" "}
        {(await params).section}
      </div>
    );
  }
  const { content } = await compileMDX({
    source: mdxSource,
    components,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [],
      },
      parseFrontmatter: true,
    },
  });

  return (
    <article className="prose prose-lg dark:prose-invert max-w-none mx-auto px-4 py-8">
      {content}
    </article>
  );
}

export function generateStaticParams() {
  return [
    { locale: "en", section: "overview" },
    { locale: "en", section: "costs" },
    { locale: "en", section: "housing" },
    { locale: "en", section: "rights" },
    { locale: "ne", section: "overview" },
    { locale: "ne", section: "costs" },
    { locale: "ne", section: "housing" },
    { locale: "ne", section: "rights" },
  ];
}
