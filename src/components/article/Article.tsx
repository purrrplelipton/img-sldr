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
  desc: string | null;
  alt_desc: string | null;
}) {
  let desc_btn = (
    <button disabled={!Boolean(desc)}>
      {desc ? "show slide description" : "slide has no description"}
    </button>
  );

  return (
    <Slide className={`card card-${slideIndex}`}>
      <img
        src={src}
        alt={alt_desc || "alternative description not avaliable at the moment"}
        loading="lazy"
      />
      <div>
        <p>{desc}</p>
        {desc_btn}
      </div>
    </Slide>
  );
}
