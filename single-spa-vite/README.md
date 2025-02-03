# Single-SPA + Vite + React + React-Router

This example makes use of npm workspaces to seggregate the apps. All the apps are created using vite react-ts templates and makes use of single-spa federation plugin for vite.

## To add an app:

navigate to `packages` folder and 

a. to create an app, run:
```
npx create-vite@latest <app-name> --template react-ts
```
b. to create a lib, run:
```
npx create-vite@latest <lib-name> --template vanilla-ts
```