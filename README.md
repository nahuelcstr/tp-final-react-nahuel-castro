# 🧠 Pokédex Web - Proyecto Final UTN Frontend

Este proyecto es una **Pokédex interactiva** desarrollada como parte del **Trabajo Integrador Final** del curso "Programador Web Inicial - Front End Developer" dictado por UTN BA. La aplicación permite visualizar una lista de Pokémon con sus datos principales, consultar sus tipos, habilidades, peso y altura, obtenidos desde la [PokéAPI](https://pokeapi.co/).

---

## 🚀 Tecnologías utilizadas

El proyecto fue construido con herramientas modernas del ecosistema frontend:

- **React**: Librería principal para construir la interfaz de usuario.
- **Redux Toolkit**: Para manejar el estado global de los Pokémon y la paginación.
- **React Router DOM**: Para estructurar rutas y navegación (si se incluye en versiones futuras).
- **Vite**: Bundler ultrarrápido para desarrollo y build.
- **CSS Modules**: Para estilizar componentes con clases dinámicas por tipo de Pokémon.
- **PokéAPI**: API REST pública para obtener datos detallados de cada Pokémon.

---

## 📦 Funcionalidades principales

- Carga inicial de los primeros 20 Pokémon.
- Botón para cargar más resultados siguientes.
- Renderizado dinámico de tarjetas con:
  - Nombre e ID
  - Imagen oficial
  - Tipos (con estilos personalizados)
  - Peso, altura y habilidad principal
- Manejo de estados de carga y errores.

---

## ⚙️ Instalación y ejecución

1. Cloná el repositorio:
   ```bash
   git clone https://github.com/nahuelcstr/tp-final-react-nahuel-castro
   
   ```
3. Instalá las dependencias:
   ```bash
   npm create vite@latest
   npm install
   npm install @reduxjs/toolkit
   npm i react-router
      
   ```
5. Ejecutá la aplicación en modo desarrollo:
   ```bash
   npm run dev

---

## 📎 Repositorio

[GitHub - Pokédex UTN Final](https://github.com/nahuelcstr/tp-final-react-nahuel-castro)

---

## 📝 Licencia

Este proyecto fue desarrollado con fines educativos en el marco de la diplomatura UTN. Su uso está permitido para fines académicos y personales.

