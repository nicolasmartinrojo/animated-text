import React from "react";
import AnimatedText from "../components/AnimatedText";

export default {
  title: "Animated Text",
  component: AnimatedText,
};

export const DefaultProps = () => <AnimatedText />;
export const WithCustomProps = () => (
  <AnimatedText
    fixedText={"Fast is"}
    cycleTexts={["a verb", "a noun", "an adjective", "an adverb"]}
    cycleTextWidth={120}
  />
);
export const WithCustomSpeed = () => <AnimatedText speed={4000} />;
