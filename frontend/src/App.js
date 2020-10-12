import React, { useState } from "react";
import Header from "./components/Header";

/**
 * Principais Conceitos do React:
 * - Componente
 * - Propriedade
 * - Estado
 */
export default function App() {
  const [projects, setProjects] = useState([
    "Desenvolvimento de Aplicativos",
    "Criação de sites",
  ]);

  function handleAddProject() {
    setProjects([...projects, `Novo Projeto ${Date.now()}`]);
    console.log(projects);
  }

  return (
    <>
      <Header title="Projects">
        <button type="button" onClick={handleAddProject}>
          Add project
        </button>
        <ul>
          {projects.map((project) => (
            <li key={project}>{project}</li>
          ))}
        </ul>
      </Header>
    </>
  );
}
