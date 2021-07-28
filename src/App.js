import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const variants = {
  background: {
    initial: {
      x: "50%",
      left: "-50%",
      width: 0,
    },
    animate: {
      x: "50%",
      left: "-50%",
      width: "100%",
      skew: "30deg",
    },

    exit: {
      // x: "50%",
      // left: "-50%",
      width: 0,
      transition: { delay: 0.33 },
    },
  },
  outer: {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: { opacity: 0 },
  },
  name: {
    initial: { opacity: 0, x: -100 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.4 },
    },
    exit: { opacity: 0, x: -300 },
  },
  secondary: {
    initial: { opacity: 0, x: -100 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.2 },
    },
    exit: { opacity: 0, x: -300 },
  },
  line: {
    initial: { opacity: 0, x: -10, skewX: "30deg" },
    animate: {
      opacity: 1,
      x: 0,
      skewX: "30deg",
      transition: { delay: 0.3 },
    },
    exit: { opacity: 0, x: -300, skewX: "30deg" },
  },
};

const App = ({ ...props }) => {
  const [animate, setAnimate] = useState(false);
  const [primaryText, setPrimaryText] = useState("Tom Woodley");
  const [secondaryText, setsecondaryText] = useState("Developer");

  const hightlightFirstLetter = (word) => {
    const arr = word.split("");
    return arr.map((letter, i) => {
      if (i === 0) {
        return <span className="highlight">{letter}</span>;
      }
      return <>{letter}</>;
    });
  };

  return (
    <Container>
      <div className="namestrap-container">
        <AnimatePresence>
          {animate && (
            <>
              <motion.div
                className="background"
                variants={variants.background}
                initial="initial"
                animate="animate"
                exit="exit"
              ></motion.div>
              <motion.div
                className="outer"
                variants={variants.outer}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <motion.div
                  variants={variants.name}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="name"
                >
                  {primaryText.split(" ").map((word) => (
                    <>{hightlightFirstLetter(word)}</>
                  ))}
                </motion.div>
                <motion.div
                  className="line"
                  variants={variants.line}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                ></motion.div>
                <motion.div
                  variants={variants.secondary}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="secondary"
                >
                  {secondaryText}
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
      <div className="controls">
        <button onClick={() => setAnimate(!animate)}>Animate</button>
        <input
          type="text"
          value={primaryText}
          onChange={(e) => setPrimaryText(e.target.value)}
        />
        <input
          type="text"
          value={secondaryText}
          onChange={(e) => setsecondaryText(e.target.value)}
        />
      </div>
    </Container>
  );
};
export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #e25f5f;
  .background {
    background-color: #fff;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 0.5em;
    margin: 0 auto;
    transform: skewX(30deg);
  }
  .namestrap-container {
    position: absolute;
    bottom: 5em;
    left: 5em;
    display: flex;
    align-items: center;
    justify-content: center;
    /* width: 50vw; */
  }
  .outer {
    border-radius: 0.5em;
    word-break: keep-all;
    white-space: nowrap;
    display: flex;
    margin: 0 auto;
    z-index: 1;
    overflow: hidden;
  }
  .name,
  .secondary {
    padding: 1rem 3rem;
    display: flex;
  }

  .name {
    font-size: 2.25em;
    align-items: baseline;
  }
  .secondary {
    font-size: 1.5em;
    align-items: center;
  }

  .line {
    width: 5px;
    display: block;
    margin: 0.5em;
    /* transform: skewX(30deg); */
    border-radius: 2em;
    background-color: #e25f5f;
  }

  .highlight {
    color: #e25f5f;
    font-weight: 600;
    font-size: 1.25em;
    padding-left: 0.25em;
  }
`;
