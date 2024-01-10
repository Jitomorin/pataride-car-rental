/**
 * This component uses Portable Text to render a post body.
 *
 * You can learn more about Portable Text on:
 * https://www.sanity.io/docs/block-content
 * https://github.com/portabletext/react-portabletext
 * https://portabletext.org/
 *
 */
import {
  PortableText,
  type PortableTextReactComponents,
} from "@portabletext/react";

import styles from "./PostBody.module.css";
import { SanityImage } from "./SanityImage";
import styled from "styled-components";
import { media } from "@/utils/media";

const myPortableTextComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }: any) => {
      return <SanityImage {...value} />;
    },
    span: ({ value }: any) => {
      return <span className={"text-5xl"}>{value}</span>;
    },
    h1: ({ value }: any) => {
      return <h1 className={"text-9xl"}>{value}</h1>;
    },
    // for bullet lists
  },
};

export default function PostBody({ content }: any) {
  return (
    <Wrapper className={`${styles.portableText} mx-auto`}>
      <PortableText value={content} components={myPortableTextComponents} />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin: 0 18rem;
  font-family: "Poppins", sans-serif;
  ${media("<=largeDesktop")} {
    margin: 0 5rem;
  }
  ${media("<tablet")} {
    margin: 0 0;
  }
`;
