import { promises as fs } from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { MDXRemoteProps } from "next-mdx-remote/rsc";
import SectionContainer from "@/components/SectionContainer";
import Link from "next/link";
import MapWrapper from "@/components/MapWrapper";

type Components = MDXRemoteProps["components"];

const components: Components = {
  SectionContainer,
  Link,
  HealthcareMap: MapWrapper,
  h1: (props) => (
    <h1 {...props} className="font-heading text-4xl font-bold mb-4" />
  ),
  h2: (props) => (
    <h2 {...props} className="font-heading text-3xl font-semibold mb-3" />
  ),
  h3: (props) => (
    <h3 {...props} className="font-heading text-2xl font-medium mb-2" />
  ),
  p: (props) => <p {...props} className="font-sans" />,
  li: (props) => <li {...props} className="font-sans" />,
};

async function getHealthcareInsuranceContent(locale: string) {
  const contentPath = path.join(
    process.cwd(),
    `src/content/healthcare-insurance.${locale}.mdx`
  );
  try {
    const source = await fs.readFile(contentPath, "utf8");
    return source;
  } catch (error) {
    console.error("Failed to read MDX file:", error);
    return null;
  }
}
export default async function Page({ params }: { params: Promise < { locale: string } > }) {
  // Get the locale from props without destructuring
  const locale = (await params).locale ?? "en";
  const mdxSource = await getHealthcareInsuranceContent(locale);

  if (!mdxSource) {
    return <div>Error loading healthcare insurance content.</div>;
  }

  try {
    return (
      <article className="prose prose-lg dark:prose-invert max-w-none mx-auto px-4 py-8 font-sans">
        <MDXRemote source={mdxSource} components={components} />
      </article>
    );
  } catch (error) {
    console.error("Error compiling MDX:", error);
    return <div>Error compiling content.</div>;
  }
}

export function generateStaticParams() {
  return [
    { locale: "en" },
    { locale: "ne" },
  ];
}
