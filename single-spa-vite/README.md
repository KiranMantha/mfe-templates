# Single-SPA + Vite + React + React-Router

This example makes use of npm workspaces to seggregate the apps. All the apps are created using vite react-ts templates and makes use of single-spa federation plugin for vite.

## To add an app:

navigate to `packages` folder and run:
```
npx create-vite@latest <app-name> --template react-ts
```

## To add a lib:
navigate to `packages/libs` folder and run:
```
npx create-vite@latest <lib-name> --template vanilla-ts
```
Post this:
- Update workspaces under `libs/package.json` with the new `<lib-name>`. This will expose the lib as `libs/<lib-name>` in indivudual micro-frontends.
- Update `vite.config.ts` of all individual apps under `packages`(including `host` application) to defined `libs/<lib-name>` as shared resource.
