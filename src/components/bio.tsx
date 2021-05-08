import React from "react";
import { Text, Hr } from "@mantine/core";

export const Bio = () => {
  return (
    <div style={{ display: "flex", marginTop: 100 }}>
      <Text size="sm">
        <Hr variant="solid" color="blue" />
        This is example project for{" "}
        <Text size="sm" component="a" variant="link" href="https://mantine.dev">
          Mantine
        </Text>{" "}
        usage this Gatsby. Browse{" "}
        <Text
          size="sm"
          component="a"
          variant="link"
          href="https://github.com/mantinedev/mantine-gatsby-blog-example"
        >
          source code
        </Text>{" "}
        of this project on Github or{" "}
        <Text
          size="sm"
          component="a"
          variant="link"
          href="https://mantine.dev/pages/examples/"
        >
          see other examples
        </Text>{" "}
        on Mantine docs website.
      </Text>
    </div>
  );
};
