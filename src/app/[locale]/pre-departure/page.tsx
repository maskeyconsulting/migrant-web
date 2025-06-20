import { promises as fs } from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import type { MDXRemoteProps } from "next-mdx-remote/rsc";
import ContentSection from "@/components/ContentSection";
import PolicyCard from "@/components/PolicyCard";
import IconHeading from "@/components/IconHeading";
import MoreInfoButton from "@/components/MoreInfoButton";
import SectionContainer from "@/components/SectionContainer";

const components: MDXRemoteProps["components"] = {
  SectionContainer,
  ContentSection,
  PolicyCard,
  IconHeading,
  MoreInfoButton,
  h1: (props) => <h1 {...props} className="text-4xl font-bold mb-6" />,
  h2: (props) => <h2 {...props} className="text-3xl font-semibold mb-4" />,
  h3: (props) => <h3 {...props} className="text-2xl font-medium mb-3" />,
};

async function getPreDepartureContent(locale: string) {
  const contentPath = path.join(
    process.cwd(),
    `src/content/pre-departure/basics.${locale}.mdx`
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
  const mdxSource = await getPreDepartureContent((await params).locale);

  if (!mdxSource) {
    return <div>Error loading pre-departure content.</div>;
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
