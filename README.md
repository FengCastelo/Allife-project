# 🥗 ALLIFE

## Plataforma de Apoio para Estudantes de Nutrição

📚 **ALLIFE** é uma plataforma web criada para facilitar os estudos de estudantes de Nutrição, oferecendo ferramentas que ajudam na organização de conteúdos acadêmicos, revisões de temas importantes e no apoio ao aprendizado durante a graduação.

O objetivo é criar um ambiente digital simples, intuitivo e eficiente para centralizar materiais e recursos voltados para a área de nutrição.

## 📖 Sumário

[Sobre o Projeto](#-sobre-o-projeto)

[Tecnologias Utilizadas](#-tecnologias-utilizadas)

[Objetivo do Projeto](#-objetivo-do-projeto)

[Funcionalidades Planejadas](#-funcionalidades-planejadas)

[Estrutura do Projeto](#%EF%B8%8F-estrutura-do-projeto)

[Configuração do Banco de Dados](#%EF%B8%8F-configuração-do-banco-de-dados)

[Como Executar o Projeto](#-como-executar-o-projeto)

## 📌 Sobre o Projeto

O **ALLIFE** foi desenvolvido para apoiar estudantes de nutrição em seus estudos, fornecendo um sistema que permite:

Organização de conteúdos acadêmicos

Consulta rápida de materiais de estudo

Revisão de temas importantes

Centralização de informações relevantes da área

## 🚀 Tecnologias Utilizadas

💻 **Front-end**
<p> <img src="https://skillicons.dev/icons?i=js" height="40"> </p>

**JavaScript** — Responsável pela interface web e pela interatividade da aplicação.

⚙️ Lógica da Aplicação
<p> <img src="https://skillicons.dev/icons?i=ts" height="40"> </p>

**TypeScript** — Utilizado para estruturar a lógica da aplicação com tipagem estática, aumentando a segurança e organização do código.

**Banco de Dados:**
<p> <img src="https://skillicons.dev/icons?i=postgres" height="40"> </p>

**PostgreSQL** — Sistema de Gerenciamento de Banco de Dados (SGBD) utilizado para armazenar os dados da aplicação.

## 🎯 Objetivo do Projeto

*O projeto busca oferecer uma solução digital para:*

📚 Auxiliar estudantes de nutrição em seus estudos

🧠 Facilitar revisões de conteúdos acadêmicos

📝 Organizar materiais de estudo

📊 Melhorar a experiência de aprendizado utilizando tecnologia

## 🧩 Funcionalidades Planejadas

Entre as funcionalidades previstas para a plataforma estão:

📚 Biblioteca digital de conteúdos de nutrição

🧾 Sistema de resumos e materiais de estudo

🔎 Pesquisa de conteúdos por tema

👤 Cadastro e gerenciamento de usuários

🧠 Ferramentas para revisão e aprendizado

## 🏗️ Estrutura do Projeto
```
ALLIFE/
│
├── frontend/        # Interface web (JavaScript)
│
├── backend/         # Lógica da aplicação (TypeScript)
│
├── database/        # Scripts e estrutura do banco PostgreSQL
│
└── README.md
```

## 🗄️ Configuração do Banco de Dados

A aplicação utilizará PostgreSQL como banco de dados principal.

Exemplo de configuração no arquivo:
```
application.properties

# Configuração do Banco de Dados PostgreSQL

spring.datasource.url=jdbc:postgresql://localhost:5432/ALLIFE
spring.datasource.username=postgres
spring.datasource.password=postgres

spring.datasource.driver-class-name=org.postgresql.Driver

# Configuração do JPA / Hibernate
spring.jpa.database-platform=org.hibernate.dialect.PostgreSQLDialect
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

## ⚡ Como Executar o Projeto

**1️⃣ Clonar o repositório**
```
git clone git@github.com:FengCastelo/Allife-project.git
```

**2️⃣ Entrar na pasta do projeto**
```
cd ../allife
```
**3️⃣ Para instalar dependências**
```
npm install
``` 
**4️⃣ Executar o projeto**
```
npm run dev
```
