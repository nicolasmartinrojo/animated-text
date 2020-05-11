import React, { useState, useEffect } from "react";
import useInterval from "../shared/UseInterval";
import Container from "./Container";
import CycleWord from "./CycleWord";

type AnimatedTextProps = {
  fixedText: string;
  cycleTexts: string[];
  speed: number;
  cycleTextWidth?: number;
};
const AnimatedText = ({
  fixedText = "Information is",
  cycleTexts = ["Beautiful", "Powerful", "Insightful"],
  speed = 2000,
  cycleTextWidth = 85,
}: AnimatedTextProps) => {
  const [counter, setCounter] = useState(0);
  const [activeWord, setActiveWord] = useState(cycleTexts[counter]);
  useInterval(() => {
    setCounter(counter + 1);
  }, speed);

  useEffect(() => {
    setActiveWord(cycleTexts[counter % cycleTexts.length]);
  }, [counter, cycleTexts]);

  return (
    <Container>
      {fixedText}
      <CycleWord speed={speed} width={cycleTextWidth}>
        {activeWord}
      </CycleWord>
      .
    </Container>
  );
};

export default AnimatedText;
