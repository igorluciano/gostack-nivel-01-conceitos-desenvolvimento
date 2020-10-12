import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import "./App.css";
import backgroundImage from "./assets/background.png";
import "./services/api";
import api from "./services/api";
import Axios from "axios";

/**
 * Principais Conceitos do React:
 * - Componente
 * - Propriedade
 * - Estado
 */
export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get("/projects").then((response) => {
      setProjects(response.data);
    });
  }, []);

  async function handleAddProject() {
    const response = await api.post("/projects", {
      title: `Novo Projeto ${Date.now()}`,
      owner: "Igor",
    });

    const project = response.data;
    setProjects([...projects, project]);
  }

  return (
    <>
      <Header title="Projects">
        <img src={backgroundImage} width={300} alt="Image" />
        <br />
        <button type="button" onClick={handleAddProject}>
          Add project
        </button>
        <ul>
          {projects.map((project) => (
            <li key={project.id}>{project.title}</li>
          ))}
        </ul>
      </Header>
    </>
  );
}
