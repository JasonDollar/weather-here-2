import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
body {

font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
  sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
font-size: var(--normal-text-font-size);
background: var(--color-back);
/* min-height: 100vh; */
}

code {
font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
  monospace;
}

:root {
font-size: 62.5%;
box-sizing: border-box;
--big-head-font-size: 4.6rem;
--head-font-size: 3.8rem;
--small-head-font-size: 3.2rem;
--big-text-font-size: 2.4rem;
--medium-text-font-size: 2rem;
--normal-text-font-size: 1.6rem;
--small-text-font-size: 1.2rem;

--color-text-primary: #222;
--color-text-grey: #888;
--color-text-secondary: #bbb;
--color-text-transparent: #22222280;
--color-primary: #dd0055;
--color-primary-offset: #f5689e;
--color-mobile-menu: #dd0055;
--color-anti-graph: #8884d8;
--color-secondary-graph: #0c1052;
--color-back: #fcfcfc;
--color-back2: #fcfcfc;
--color-back-mobile: #bbb;
--color-box-shadow: #222;
--color-border: #aaa;
--color-border-transparent: #aaaaaa55;
--color-scroll-back: #aaaaaa55;
--color-test: #86263b;

--color-grey-1: #888;
--color-grey-2: #bbb;
--color-grey-3: #e3e3e3;
--color-grey-graph: #676767;

--screen-width: 100%;
/* --screen-height: 100vh; */
--circle-dimension: 19rem;
--circle-dimension-small: 15rem;

--s-right-color1: yellow;
--s-left-color1: green;
--s-right-color2: yellow;
--s-left-color2: green;
--s-right-color3: yellow;
--s-left-color3: green;

--s-right-rotate1: 3deg;
--s-left-rotate1: 0deg;
--s-right-rotate2: 3deg;
--s-left-rotate2: 0deg;
--s-right-rotate3: 3deg;
--s-left-rotate3: 0deg;
}

/* 
0% = #00
10% = #16
20% = #32
30% = #48
40% = #64
50% = #80
60% = #96
70% = #112
80% = #128
90% = #144 
*/

*,
*::before,
*::after {
box-sizing: inherit;
margin: 0;
padding: 0;
}

.container {
max-width: 1040px;
margin: 0 auto;
}

.hidden {
position: absolute;
left: -10000px;
top: auto;
width: 1px;
height: 1px;
overflow: hidden;
}

legend {
display: table;
padding: 0;
}

fieldset {
border: 0;
margin: 0;
min-width: 0;
padding: 0.01em 0 0 0;
}

body:not(:-moz-handler-blocked) fieldset {
display: table-cell;
}

/* textarea,
input.text,
input[type="text"],
input[type="button"],
input[type="submit"] {
-webkit-appearance: none;
border-radius: 0;
} */
`

export default GlobalStyles