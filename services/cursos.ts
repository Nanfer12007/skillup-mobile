import { mockCursos } from "./mock";

let cursos = [...mockCursos];

export async function getCursos() {
  return { data: cursos };
}

export async function createCurso(novo) {
  const id = cursos.length + 1;
  cursos.push({ id, ...novo });
  return { data: { success: true } };
}

export async function updateCurso(id, atualizado) {
  cursos = cursos.map((c) => (c.id == id ? { ...c, ...atualizado } : c));
  return { data: { success: true } };
}

export async function deleteCurso(id) {
  cursos = cursos.filter((c) => c.id != id);
  return { data: { success: true } };
}
