import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;
const SpinnerWrapper = styled.i`
  display: block;
  width: 125px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background: conic-gradient(transparent 0% 27.5%, var(--tacao));
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  z-index: 9999;
  display: grid;
  place-items: center;
  animation: ${spin} 1s linear infinite;
`;

export default function Spinner({ showSpinner }: { showSpinner: boolean }) {
  return showSpinner ? <SpinnerWrapper className={"spinner"} /> : null;
}
