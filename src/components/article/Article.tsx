import styled from "styled-components";

const Slide = styled.article`
  width: 40vmin;
  height: 65vmin;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(#fff, 0.25);
  transition: border-color 0.2s linear, translate 0.3s linear;
  border-radius: 2px;
  position: relative;
`;

export default function Article({
  slideIndex,
  src,
  desc,
  alt_desc,
}: {
  slideIndex: number;
  src: string;
  desc: string;
  alt_desc: string;
}) {
  return (
    <Slide className={`card card-${slideIndex}`}>
      <img src={src} alt={alt_desc} loading="lazy" />
      <div>
        <p>{desc}</p>
        <button type="button">{"idk man"}</button>
      </div>
    </Slide>
  );
}
