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
  // h1: (props) => (
  //   <h1 {...props} className="font-heading text-4xl font-bold mb-4" />,
  // ),
  // h2: (props) => (
  //   <h2 {...props} className="font-heading text-3xl font-semibold mb-3" />,
  // ),
  // h3: (props) => (
  //   <h3 {...props} className="font-heading text-2xl font-medium mb-2" />,
  // ),
  // p: (props) => <p {...props} className="font-sans" />,
  // li: (props) => <li {...props} className="font-sans" />,
};

async function getLegalRightsContent(locale: string) {
  const contentPath = path.join(
    process.cwd(),
    `src/content/legal-rights.${locale}.mdx`
  );
  try {
    const source = await fs.readFile(contentPath, "utf8");
    return source;
  } catch (error) {
    console.error(`Failed to read MDX file: ${contentPath}`, error);
    return null;
  }
}

export default async function Page({ params }: { params: { locale: string } }) {
  const currentLocale = (await params).locale || "en"; // Use params.locale

  const mdxSource = await getLegalRightsContent(currentLocale);

  if (!mdxSource) {
    return <div>Error loading legal rights content.</div>;
  }

  const { content, frontmatter } = await compileMDX({
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
    <article className="prose prose-lg dark:prose-invert max-w-none mx-auto px-4 py-8 font-sans">
      {content}
    </article>
  );
}

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'ne' }
  ];
}
