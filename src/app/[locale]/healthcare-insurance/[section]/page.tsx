import { promises as fs } from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import type { MDXRemoteProps } from "next-mdx-remote/rsc";
import ContentSection from "@/components/ContentSection";
import PolicyCard from "@/components/PolicyCard";
import IconHeading from "@/components/IconHeading";
import HealthcareMapClient from "@/components/HealthcareMapClient";

const components: MDXRemoteProps["components"] = {
  ContentSection,
  PolicyCard,
  IconHeading,
  HealthcareMapClient,
};

async function getHealthcareSectionContent(locale: string, section: string) {
  const contentPath = path.join(
    process.cwd(),
    `src/content/healthcare/${section}.${locale}.mdx`
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
    { locale: "en", section: "basics" },
    { locale: "en", section: "facilities" },
    { locale: "en", section: "emergency" },
    { locale: "ne", section: "basics" },
    { locale: "ne", section: "facilities" },
    { locale: "ne", section: "emergency" },
  ];
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; section: string }>;
}) {
  const locale = (await params).locale;
  const section = (await params).section;

  const mdxSource = await getHealthcareSectionContent(locale, section);

  if (!mdxSource) {
    return (
      <div className="text-red-600 p-4">
        Failed to load content for section: {section} in {locale}
      </div>
    );
  }

  try {
    const { content } = await compileMDX({
      source: mdxSource,
      components,
      options: {
        mdxOptions: {
          development: process.env.NODE_ENV === "development",
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
  } catch (error) {
    console.error("MDX Compilation Error:", error);
    return (
      <div className="p-4 border border-red-500 rounded">
        <h2 className="text-red-600 font-bold">MDX Compilation Error</h2>
        <p>
          Failed to compile content for: {section}.{locale}.mdx
        </p>
        <pre className="mt-4 p-2 bg-gray-100 overflow-auto">
          {error instanceof Error ? error.message : String(error)}
        </pre>
      </div>
    );
  }
}
