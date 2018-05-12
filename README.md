# Ng6SeedProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.

## Development server

### Step1
compile db.ts to db.js for json-server

```
tsc db
```

### Step2
Open a bash in VS code, launch json-server
```
npm run api
```

### Step2
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## connect to Github
```
…or create a new repository on the command line
echo "# ng6-seed-project" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/mrtony/ng6-seed-project.git
git push -u origin master
…or push an existing repository from the command line
git remote add origin https://github.com/mrtony/ng6-seed-project.git
git push -u origin master
…or import code from another repository
You can initialize this repository with code from a Subversion, Mercurial, or TFS project.
```