import { promises as fs } from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote/rsc";
import { compileMDX } from "next-mdx-remote/rsc";
import type { MDXRemoteProps } from "next-mdx-remote/rsc";
import SectionContainer from "@/component/SectionContainer";
import Link from "next/link";

type Components = MDXRemoteProps["components"];

const components: Components = {
  SectionContainer,
  Link,
};

async function getSkillsLearningContent(locale: string) {
  const contentPath = path.join(
    process.cwd(),
    `src/content/job-contract-tips.${locale}.mdx`
  );
  try {
    const source = await fs.readFile(contentPath, "utf8");
    return source;
  } catch (error) {
    console.error("Failed to read MDX file:", error);
    return null;
  }
}
export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const mdxSource = await getSkillsLearningContent((await params).locale);

  if (!mdxSource) {
    return <div>Error loading skills learning content.</div>;
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
    <article className="prose prose-lg dark:prose-invert max-w-none mx-auto px-4 py-8">
      {content}
    </article>
  );
}

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ne" }];
}
