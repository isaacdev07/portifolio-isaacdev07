export const personalInfo = {
  name: "Isaac Santos de Sousa",
  role: "Desenvolvedor Back-end & DevOps",
  about: "Tenho 18 anos, sou técnico em Desenvolvimento de Sistemas pelo SENAI Suíço Brasileiro. Descobri que sou fascinado pela programação Back-end, arquitetura de software e lógica. No meu TCC, liderei como Scrum-Master, e fiquei responsável pela arquitetura Back-end em Java e pelo DevOps de uma aplicação educacional gamificada.",
  social: {
    github: "https://github.com/isaacdev07",
    linkedin: "https://linkedin.com/in/isaacdev07",
    email: "isaacsantos7953@email.com"
  }
};

export const skills = [
  { 
    name: "Java Spring", 
    type: "Back-end",
    description: "Desenvolvimento de APIs robustas utilizando o ecossistema Spring (Boot, Data JPA, Security). Foco em injeção de dependências, tratamento de exceções, arquitetura em camadas e boas práticas REST."
  },
  { 
    name: "SQL / Bancos de Dados", 
    type: "Database",
    description: "Modelagem de bancos relacionais, normalização e criação de consultas eficientes. Experiência prática na integração entre a aplicação Java e bancos como PostgreSQL ou MySQL."
  },
  { 
    name: "DevOps", 
    type: "Infra",
    description: "Configuração de pipelines de CI/CD, containerização de aplicações com Docker e orquestração básica. Gosto de automatizar processos de deploy para garantir agilidade e estabilidade."
  },
  { 
    name: "Integração Front-Back", 
    type: "Fullstack",
    description: "Compreensão clara de como o cliente consome o servidor. Resolução de problemas de CORS, padronização de JSONs de resposta e autenticação via Token (JWT)."
  },
  { 
    name: "React", 
    type: "Front-end",
    description: "Conhecimento essencial para criar interfaces funcionais, gerenciar estados e consumir minhas próprias APIs, facilitando a comunicação com o time de Front-end."
  }
];

export const projects = [
  {
    title: "Senai Skill Up",
    description: "Plataforma de perguntas e respostas gamificada inspirada no Kahoot. Fui responsável pela API, modelagem do banco de dados e pipeline de DevOps.",
    tags: ["Java Spring", "SQL", "DevOps", "API Rest"],
    link: "https://github.com/TCC-Senai3/senai-skillup.backend.git"
  }
];