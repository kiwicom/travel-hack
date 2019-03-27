import React from "react";
import { Heading } from "@kiwicom/orbit-components";
import { graphql } from "@kiwicom/relay";

import QueryRenderer from "../src/relay/QueryRenderer";

const renderRelayResponse = props => <div>{props.hello}</div>;

const Index = () => (
  <>
    <Heading>Travel hackathon</Heading>
    <QueryRenderer
      query={graphql`
        query pagesQuery {
          hello
        }
      `}
      render={renderRelayResponse}
    />
  </>
);

export default Index;
