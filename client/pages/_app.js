import React from 'react'
import App, { Container } from 'next/app'
import { PageTransition } from 'next-page-transitions'
import { createGlobalStyle } from "styled-components"
import Scene from "../threejs/ThreeScene";

const TIMEOUT = 400

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Barlow+Condensed:300,700|Source+Sans+Pro:400,400i,700');

  :root {
    --color-1: #2A2935;
    --color-2: #4EFF6A;
    --color-3: #FF278F;
    --color-4: #F8F8FA;
  }

  body {
    margin: 0;
    font-family: 'Source Sans Pro', sans-serif;
    background: var(--color-1);
    padding: 20px;
  }

  .page {
    /* background: var(--color-4); */
    display: flex;
    min-height: calc(100vh - 40px);
    flex-direction: column;
  }

  .wrapper {
    max-width: 960px;
    display: flex;
    margin: 0 auto;
    position: relative;
    flex-direction: column;
  }

  .page-transition-enter {
    opacity: 0;
    transform: translate3d(0, 20px, 0);
  }
  .page-transition-enter-active {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition: opacity ${TIMEOUT}ms, transform ${TIMEOUT}ms;
  }
  .page-transition-exit {
    opacity: 1;
  }
  .page-transition-exit-active {
    opacity: 0;
    transition: opacity ${TIMEOUT}ms;
  }
  .loading-indicator-appear,
  .loading-indicator-enter {
    opacity: 0;
  }
  .loading-indicator-appear-active,
  .loading-indicator-enter-active {
    opacity: 1;
    transition: opacity ${TIMEOUT}ms;
  }
`

export default class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <GlobalStyle />
        <Scene />
        <PageTransition
          timeout={TIMEOUT}
          classNames='page-transition'
          loadingDelay={300}
          loadingTimeout={{
            enter: TIMEOUT,
            exit: 0
          }}
          loadingClassNames='loading-indicator'
        >
          <Component {...pageProps} />
        </PageTransition>
      </Container>
    )
  }
}