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

const Home: NextPage = () => {
  return (
    <Main>
      <Article>
        <Title>Hello, motion!</Title>
        <p>
          With framer motion, all you need to do to start animating is replace
          your element with its motion equivalent.
        </p>
        <p>
          To move on to the next phase, replace the div in the code with
          motion.div - and watch as the box comes alive!
        </p>
        <NextButton>Go to next stage</NextButton>
      </Article>
      <Editor>{code}</Editor>
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
  gridTemplateColumns: "55ch repeat(2, 1fr)",
});

const Visualizer = styled("div", {
  padding: "$16",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
});

const Box = styled(motion.div, {
  width: "$40",
  aspectRatio: 1,
  border: "2px solid $colors$mint9",
  background: "linear-gradient(45deg, $colors$mint7, $colors$mint9)",
  borderRadius: "8px",
});

const Title = styled("h1", {
  fontSize: "$2xl",
  background: "linear-gradient(45deg, $colors$mint8, $colors$mint10)",
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
});

const Article = styled("article", {
  borderRight: "2px solid $colors$mint5",
  padding: "$16",
  display: "flex",
  flexDirection: "column",

  "> :not(:last-child)": {
    marginBottom: "1em",
  },
});

const Editor = styled("pre", {
  borderRight: "2px solid $colors$mint5",
  padding: "$16",
  fontFamily: "$mono",
});

const NextButton = styled("button", {
  marginTop: "auto",
  background: "none",
  border: "2px solid currentColor",
  color: "$mint8",
  font: "inherit",
  padding: "$3",
});

export default Home;
