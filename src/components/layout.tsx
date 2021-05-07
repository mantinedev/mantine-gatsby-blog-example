import { PageRendererProps } from "gatsby"
import React, { ReactNode } from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import { FadeLink } from "./link"
import { Title, Text } from "@mantine/core"

interface Props extends PageRendererProps {
  title: string
  children: ReactNode
}

const StyledLink = styled(FadeLink)`
  box-shadow: none;
  color: inherit;
  text-decoration: none;
`

const Content = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  padding: ${`${rhythm(1.5)} ${rhythm(3 / 4)}`};
`

export const Layout = (props: Props) => {
  const { title, children } = props

  return (
    <Content>
      <header
        style={{
          marginBottom: 10,
        }}
      >
        <Title order={1}>
          <StyledLink to={`/`}>{title}</StyledLink>
        </Title>
      </header>
      <main>{children}</main>
      <footer>
        <Text size="sm">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Text>
      </footer>
    </Content>
  )
}
