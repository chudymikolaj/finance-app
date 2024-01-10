"use client";

import { createGlobalStyle } from "styled-components";
import { devices } from "./breakpoints";

export const GlobalStyle = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/
    v2.0 | 20110126
    License: none (public domain)
  */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, button, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center, dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    width: 100%;
    height: calc(100vh - 106px);
    padding: 0 10px;
    margin: 90px auto 10px;
    display: block;

    @media ${devices.md} {
      width: 100%;
    }

    @media ${devices.xl} {
      padding: 0 5vh;
      margin: 90px auto 30px;
      height: calc(100vh - 120px);
    }

    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.color};
    line-height: 1;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.linkColor};
  }

  button {
    background-color: unset;
    cursor: pointer;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;
