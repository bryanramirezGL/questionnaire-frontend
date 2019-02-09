
#### About

- This is Gorrilla POC for L&C questionnaires application.

#### Features


- Has implementation for lazy loading modules.
- Has reactive state implementation through [NGRX](https://ngrx.io/) store, selectors and effects.
    
#### Setup Project


- Install [NodeJS](https://nodejs.org/en/download/)
- Install [Angular CLI](https://angular.io/guide/quickstart) 

````
npm install -g @angular/cli
````

- clone the repo

````
git clone https://github.com/bryanramirezGL/questionnaire-frontend.git
````

- Setup dependencies

````
    npm install
````

#### To start developing

1. Clean up your build, run lint, run tests and build project

    ````
    ng serve
    ````

    
2. Copy the localhost url from the console and load the app in your Favourite Browser

3. Since Live reload is enabled, any Code changes will be picked up and the app will be automatically refreshed. 

#### Development guidelines

- Project Structure

    ````
    -- root 
        -- src 
            -- assests 
            -- modules                    
                -- shared                               // holds common components, directives and pipes used across this project                  
                    -- components              
                    -- directives
                    -- pipes              
                -- app
                    -- app.module.ts
                    -- app.router.module.ts             // holds app main routes
                    -- components
                        -- app.component.ts             // App entry point
                    -- services                         // holds common services used across this project
                    -- state                            // holds app shared actions, effects, and reducers 
                    -- models                           // holds app Interfaces
                -- some-module
                    -- state                            // holds module actions, effects, and reducers 
                    -- services                         // holds module services
                    -- components                       // holds module components
                    -- some-module.router.module.ts     // holds module routes
        -- package.json                                 // holds all the app dependencies 
        
    ````

- Naming conventions 
     - Directory Names : should have all lower case and should be '-' separated if it has multiple words
     - File names : follow [angular naming conventions](https://angular.io/guide/styleguide#naming)

#### To Test

1. To run test cases: <b>ng test</b>


#### Recommended Install Tool/Guide

Use NVM (Highly recommended)

- Install <a href="https://github.com/creationix/nvm" target="_blank">NVM</a>  installation guide.

If node is previously installed without nvm use following steps

- Reinstall [Node Reinstallation](https://github.com/brock/node-reinstall) guide.    