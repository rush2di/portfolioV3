import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  font-family: "Azo Sans", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell",
    "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

main {
  min-height: 100vh;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
}

ul,
ol,
li {
  list-style: none;
}

a,
a:visited,
button {
  cursor: pointer;
  text-decoration: none;
  color: inherit;
}

input[type="text"],
input[type="email"],
input[type="url"],
input[type="password"],
input[type="search"],
input[type="number"],
input[type="tel"],
input[type="range"],
input[type="date"],
input[type="month"],
input[type="week"],
input[type="time"],
input[type="datetime"],
input[type="datetime-local"],
input[type="color"],
textarea {
  border-radius: 12px;
  padding: 0.5rem 1rem;
  width: 100%;
}

select {
  border: 1px solid red;
}

textarea {
  width: 100%;
  min-height: 130px;
  resize: none;
}
`;

export default GlobalStyle;
