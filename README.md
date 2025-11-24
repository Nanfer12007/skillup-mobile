# 📘 SkillUp Mobile  
### Plataforma de Requalificação Profissional com Inteligência Artificial  
Aplicativo desenvolvido em **React Native + Expo** como parte do projeto interdisciplinar da faculdade.

---

# 🚀 Visão Geral

O **SkillUp Mobile** é um aplicativo focado na **requalificação profissional**, ajudando usuários a encontrar cursos, trilhas de aprendizado e informações relevantes para o futuro do trabalho.

O app integra:

- 📱 **Frontend Mobile (React Native + Expo)**
- ⚙️ **API REST (Java ou .NET)** para CRUD de cursos
- 🔐 **Sistema de autenticação**
- 📦 **Publicação via Firebase App Distribution**

O projeto está alinhado aos:

- **ODS 4** – Educação de Qualidade  
- **ODS 8** – Trabalho Decente e Crescimento Econômico  

---

# 🎯 Objetivo do Aplicativo

O SkillUp oferece:

- Recomendação de cursos (via API)
- Cadastro, edição e exclusão de cursos (CRUD)
- Informações sobre trilhas e requalificação profissional
- Suporte para autenticação real (login/logout)
- Interface simples, moderna e eficiente

O sistema foi projetado para promover inclusão digital e ajudar profissionais em transição de carreira.

---

# 📱 Funcionalidades

| Funcionalidade | Descrição |
|---------------|-----------|
| 🟦 Login | Autenticação do usuário |
| 🟩 Signup | Criação de conta |
| 🏠 Home | Navegação principal |
| 📚 Cursos | Listagem de cursos da API |
| ➕ Criar Curso | Opera o método POST |
| ✏️ Editar Curso | Opera PUT e DELETE |
| 👤 Perfil | Dados do usuário e logout |
| ℹ️ Sobre | Informações do app e commit hash |
| 🚀 Publicação | Suporte a Firebase App Distribution |

---

# 🧩 Tecnologias Utilizadas

### **Frontend**
- React Native
- Expo
- Expo Router (navegação por arquivos)
- Axios (requisições HTTP)
- AsyncStorage (persistência local)
- StyleSheet para estilização

### **Backend (conectado via API)**
- Java + Spring Boot **ou** .NET Web API
- Endpoints REST para cursos

---

# ⚙️ Configuração do Axios

export const api = axios.create({
  baseURL: "http://SEU_IP_LOCAL:8080",
});

No celular NÃO USAR localhost.

---

# 🛠️ Como Rodar o Projeto

### 1️⃣ Instalar dependências

- npm install

### 2️⃣ Rodar o app

- npx expo start

---

# 👤 Integrantes

- RM556588 - Gabriel Yuji Suzuki
- RM97677 - Lucas Felix Vassiliades
- RM556972 - Gabriel Duarte Pinto