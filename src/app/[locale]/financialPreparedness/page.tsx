import { promises as fs } from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import type { MDXRemoteProps } from "next-mdx-remote/rsc";
import ContentSection from "@/components/ContentSection";
import IconHeading from "@/components/IconHeading";
import MoreInfoButton from "@/components/MoreInfoButton";
import PolicyCard from "@/components/PolicyCard";
const components: MDXRemoteProps["components"] = {
  PolicyCard,
  ContentSection,
  IconHeading,
  MoreInfoButton,
};

async function getContent(locale: string) {
  const contentPath = path.join(
    process.cwd(),
    `src/content/financialPreparedness.${locale}.mdx`
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
  const mdxSource = await getContent((await params).locale);

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
    <article className="prose prose-lg max-w-none mx-auto px-4 py-8">
      {content}
    </article>
  );
}

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ne" }];
}
