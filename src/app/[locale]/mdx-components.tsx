import { MDXComponents } from "mdx/types";
import ContentSection from "@/components/ContentSection";
import PolicyCard from "@/components/PolicyCard";
import IconHeading from "@/components/IconHeading";
import MoreInfoButton from "@/components/MoreInfoButton";
import HealthcareMapClient from "@/components/HealthcareMapClient";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ContentSection,
    PolicyCard,
    IconHeading,
    MoreInfoButton,
    HealthcareMapClient,
  };
}
