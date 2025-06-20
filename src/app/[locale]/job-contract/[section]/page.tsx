import { promises as fs } from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import type { MDXRemoteProps } from "next-mdx-remote/rsc";
import ContentSection from "@/components/ContentSection";
import IconHeading from "@/components/IconHeading";
import Link from "next/link";

const components: MDXRemoteProps["components"] = {
  ContentSection,
  IconHeading,
  Link,
  h1: (props) => <h1 {...props} className="text-4xl font-bold mb-6" />,
  h2: (props) => <h2 {...props} className="text-3xl font-semibold mb-4" />,
  h3: (props) => <h3 {...props} className="text-2xl font-medium mb-3" />,
};

async function getContractContent(section: string, locale: string) {
  const contentPath = path.join(
    process.cwd(),
    `src/content/contract/${section}.${locale}.mdx`
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
  params: Promise<{ section: string; locale: string }>;
}) {
  const { section, locale } = await params;
  const mdxSource = await getContractContent(section, locale);

  if (!mdxSource) {
    return <div>Error loading contract content.</div>;
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

export function generateStaticParams() {
  return [
    { locale: "en", section: "basics" },
    { locale: "en", section: "fees" },
    { locale: "en", section: "documents" },
    { locale: "ne", section: "basics" },
    { locale: "ne", section: "fees" },
    { locale: "ne", section: "documents" },
  ];
}
