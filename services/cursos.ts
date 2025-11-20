import api from "./api";

export function getCursos() {
  return api.get("/cursos");
}

export function createCurso(data) {
  return api.post("/cursos", data);
}

export function updateCurso(id, data) {
  return api.put(`/cursos/${id}`, data);
}

export function deleteCurso(id) {
  return api.delete(`/cursos/${id}`);
}

