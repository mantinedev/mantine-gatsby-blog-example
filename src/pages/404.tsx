import { graphql, PageRendererProps, useStaticQuery } from "gatsby";
import React from "react";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { Title, Text } from "@mantine/core";

type Props = PageRendererProps;

export const NotFoundPage = (props: Props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Layout location={props.location} title={data.site.siteMetadata.title}>
      <SEO title="404: Not Found" />
      <Title order={3}>Not Found</Title>
      <Text>You just hit a route that doesn&#39;t exist... the sadness.</Text>
    </Layout>
  );
};

export default NotFoundPage;
