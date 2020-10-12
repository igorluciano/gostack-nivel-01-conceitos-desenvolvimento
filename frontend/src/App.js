import React from "react";
import Header from "./components/Header";

/**
 * Principais Conceitos do React:
 * - Componente
 * - Propriedade
 * - Estado
 */
export default function App() {
  return (
    <>
      <Header title="HomePage">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </Header>
      <Header title="Projects">
        <ul>
          <li>All</li>
          <li>Search</li>
          <li>New</li>
        </ul>
      </Header>
    </>
  );
}
