import type { NextPage } from "next";
import { motion } from "framer-motion";

import { styled } from "@/stitches";

const code = `import { motion } from 'framer-motion'

export function Box() {
  return (
    <motion.div
      animate={{
        y: 500
      }}
    />
  )
}
`;

const AnimationBreakdown: NextPage = () => {
  return (
    <Main>
      <Article>
        <Title>Animation Breakdown</Title>
        <p>
          Great work! There you have it — your first animation with Framer
          Motion. Before we move on, let's break down that animation. How did we
          go from the `animate` prop to the animation you see on the right?
        </p>
        <p>Here's the code from before:</p>
        <CodeBlock>{code}</CodeBlock>
      </Article>
      <Visualizer>
        <Box
          animate={{ y: 650 }}
          initial={{ y: 100 }}
          transition={{
            type: "spring",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      </Visualizer>
    </Main>
  );
};

const CodeBlock = styled("pre", {
  fontFamily: "$mono",
  background: "$mint3",
  padding: "$8 $10",
  borderRadius: "8px",
});

const Main = styled("main", {
  display: "grid",
  height: "100vh",
  gridTemplateColumns: "3fr 2fr",
});

const Visualizer = styled("div", {
  padding: "$16",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
});

const Title = styled("h1", {
  fontSize: "$2xl",
  background: "linear-gradient(45deg, $colors$mint8, $colors$mint10)",
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
});

const Box = styled(motion.div, {
  width: "$40",
  aspectRatio: 1,
  border: "2px solid $colors$mint9",
  background: "linear-gradient(45deg, $colors$mint7, $colors$mint9)",
  borderRadius: "8px",
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

export default AnimationBreakdown;
