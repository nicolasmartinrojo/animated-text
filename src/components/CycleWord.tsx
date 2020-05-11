import styled from "styled-components";

type CycleWordProps = { speed: number; width: number };
const CycleWord = styled.div`
  display: inline-block;
  text-align: center;
  animation: fade ${(props: CycleWordProps) => props.speed / 1000}s infinite;
  width: ${(props: CycleWordProps) => props.width}px;
  
  @keyframes fade {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
`;

export default CycleWord;
