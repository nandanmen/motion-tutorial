import React from "react";
import type { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { getMDXComponent } from "mdx-bundler/client";

import { styled } from "@/stitches";
import { getPage, getAllPages } from "@/utils/mdx";

type CoursePageProps = {
  frontmatter: Record<string, string>;
  code: string;
};

const CoursePage: NextPage<CoursePageProps> = ({ code, frontmatter }) => {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);
  return (
    <Article>
      <Title>{frontmatter.title}</Title>
      <Component components={{ pre: CodeBlock }} />
    </Article>
  );
};

export default CoursePage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const page = await getPage(params?.slug as string);
  return {
    props: {
      ...page,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = await getAllPages();
  return {
    paths: pages.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
};

// --

const CodeBlock = styled("pre", {
  fontFamily: "$mono",
  background: "$mint3",
  padding: "$8 $10",
  borderRadius: "8px",
});

const Title = styled("h1", {
  fontSize: "$2xl",
  background: "linear-gradient(45deg, $colors$mint8, $colors$mint10)",
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
});

const Article = styled("article", {
  display: "grid",
  gridTemplateColumns: "1fr $space$10 65ch $space$10 1fr",
  gridAutoRows: "min-content",
  borderRight: "2px solid $colors$mint5",
  padding: "$16",

  "> *": {
    gridColumn: 3,
  },

  "> :not(:last-child)": {
    marginBottom: "1em",
  },

  [`> ${CodeBlock}`]: {
    gridColumn: "2 / span 3",
    marginTop: "1em",
    marginBottom: "2em",
  },
});
