const express = require("express");
const { uuid, isUuid } = require("uuidv4");
const app = express();
app.use(express.json());

/**
 * Métodos HTTP:
 *
 * GET: Buscar informações do back-end
 * POST: Criar informações no back-end
 * PUT/PATCH: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de Parâmetros nas requisições HTTP:
 *
 * Query Params: Filtros e Paginação (Em geral)
 * Route Params: Identificar recursos (Atualizar/Deletar)
 * Body Params: Conteúdo na hora de criar ou editar um recurso (Formato JSON)
 */

/**
 * Middlewares:
 * 
 * Interceptador de requisições que pode interrompe totalmente a requisição ou alterar dados da requisição
 */

const projects = [];

function logRequest(request, response, next) {
  const { method, url } = request;
  const logLabel = `[${method}] ${url}`;
  console.time(logLabel);
  next();
  console.timeEnd(logLabel);
}

function validadeUuid(request, response, next) {
  const { id } = request.params;
  if (!isUuid(id)) {
    return response.status(400).json({ error: "Project id invalid" });
  }

  return next();
}

function restricAcess(request, response, next) {
  const { url } = request;
  if (url == "/") {
    return response.status(400).json({ error: "Resource not allowed" });
  }

  return next();
}

app.use(logRequest);
app.use("/projects/:id", validadeUuid);

app.get("/", restricAcess, (request, response) => {
  return response.json({ message: "Hello World" });
});

app.get("/projects", (request, response) => {
  const { title } = request.query;
  const result = title
    ? projects.filter((project) => project.title.includes(title))
    : projects;

  return response.status(200).json(result);
});

app.post("/projects", (request, response) => {
  const { title, owner } = request.body;
  const project = {
    id: uuid(),
    title,
    owner,
  };

  projects.push(project);
  return response.status(201).json(project);
});

app.put("/projects/:id", (request, response) => {
  const { id } = request.params;
  const { title, owner } = request.body;
  const projectIndex = projects.findIndex((project) => project.id == id);

  if (projectIndex < 0) {
    return response.status(400).json({ error: "Project not found" });
  }

  const project = {
    id,
    title,
    owner,
  };

  projects[projectIndex] = project;
  return response.status(200).json(project);
});

app.delete("/projects/:id", (request, response) => {
  const { id } = request.params;
  const projectIndex = projects.findIndex((project) => project.id == id);

  if (projectIndex < 0) {
    return response.status(400).json({ error: "Project not found" });
  }

  projects.splice(projectIndex, 1);
  return response.status(204).send();
});

app.listen(3333, () => {
  console.log("🚀 Back-end started!");
});
