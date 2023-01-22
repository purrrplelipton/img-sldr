import styled from "styled-components";

const Attribution = styled.footer`
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    text-align: center;
    font-size: 0.8em;
    pointer-events: none;
  `,
  Creator = styled.a`
    text-decoration: none;
    padding: 0 0.2em 0.2em;
    position: relative;
    color: var(--tacao);
    pointer-events: initial;
    overflow: hidden;
  `;

export default function Footer({ text, to }: { text: string; to: string }) {
  return (
    <Attribution>
      <p className={"footer-attribution"}>
        made with <i className={"heart"}></i> by{" "}
        <Creator href={to}>{text}</Creator>
      </p>
    </Attribution>
  );
}
