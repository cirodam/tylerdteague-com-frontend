Firstly, using the following command to scaffold a Vite project in this directory which leverages React and Typescript.

npm create vite@latest . -- --template react-ts --name tylerdteague_frontend

this will be the project's root directory
the project is called tylerdteague_frontend

Once The Vite project is setup, add the following dependencies: 
    - react-router-dom
    - axios

Add jest for unit testing.

create scripts in the package.json for running and testing the application.

All react components should have their own file with a corresponding css file

index.css should have universal css classes for easy reuse

create a /dist directory typescript should target as its output location.

All pages in the application should reside in the /src/pages directory.

All reusable components should reside in the /src/components directory.

All api calls should reside in the /src/api directory.

create a basic landing page that features reusable Page, PageContent, Navbar, and Footer components.

a Page should be the full screen width.

create a github copilot instructions file called primary.instructions.md in the .github/instructions/ directory.

copy the contents of this prompt to the file spawn.md in the .github/prompts/ directory
