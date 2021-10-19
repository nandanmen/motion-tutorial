import type { NextPage } from "next";
import { motion } from "framer-motion";

import { styled } from "@/stitches";

const AnimationBreakdown: NextPage = () => {
  return (
    <Main>
      <Article>
        <Title>Animation Breakdown</Title>
        <p>
          Great work! There you have it — your first animation with Framer
          Motion. If that seemed almost too simple
        </p>
        <p>
          To move on to the next phase, replace the div in the code with
          motion.div - and watch as the box comes alive!
        </p>
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
  gridTemplateColumns: "1fr 65ch 1fr",
  gridAutoRows: "min-content",
  borderRight: "2px solid $colors$mint5",
  padding: "$16",

  "> *": {
    gridColumn: 2,
  },

  "> :not(:last-child)": {
    marginBottom: "1em",
  },
});

export default AnimationBreakdown;
