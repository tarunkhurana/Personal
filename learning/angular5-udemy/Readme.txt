// SECTION: Getting Started


1. Use Angular CLI
  a. npm uninstall -g angular/cli
  b. npm install -g @angular/CLI
  b. npm cache clean
  c. npm install -g @angular/
  d. ng new new-project // create new project
  e. ng serve

2. [(ngModel)]   // two way data binding
3. Course Structure
   a. Component&DataBinding
   b. Directives
   c. Services&Dependency Injection    // manage state of the application
   d. Routing  // manage different types of url
   e. Observables 
   f. Forms
   g. Pipes
   h. Http
   i. Authentication
   j. Optimization&NgModules
   k. deployment
   l. Animations&Testing

4. Typescript

5. basic step for bootstrap styling
   a. use angular-cli.json file to add styling


// SECTION: The Basics

1. How app gets loaded and Started

see main.ts file whenre the app bootstraps first

2. Components

   a. components are created with the help of decorators. Decorators basically used to enahnce component.

3. Understanding the role of AppModule and Component Declaration

4. Create components manually

5. Create components using CLI commands
   a. ng generate component servers or ng g c servers

6.  template and templatUrl ( You can use any of them depends upon the template file). Best practice to use templatUrl // look server and servers component
7. Use back-ticks(template-literals) for multiline strings
8. styleUrls and styles // look servers component and app.component.html
9. Different type of selectors  // check app component for example
   a. element selector // selector:"app-servers"  // For components  best practice to use this
   b. attribute-selector // selector:"[app-servers]"  // For decorating element  use this.
   c. class-selector // selector:".app-servers"      // For decorating element use this`

9. Data Binding - Communication b/w template and Typescript code(business logic)
   Multiple ways
   // Output data
   a. String Interpolation - {{}}
   b. property binding - [property]="data"

   // React to user events
   c. event binding - (event)="expression"

   Combination od both
   Two-way-binding - [(ngModel)]="data"

   string interpolation - It is a value that is actually converted to string even we are sending number from class in server component example still the string Interpolation
   works fine because number can be easily converted to string.
   
