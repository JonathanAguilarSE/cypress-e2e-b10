The big 3
- tell me about yourself
- tell me asbout your project/s
- 
- tell me about your framework
    - programming language
    - automation tools
    - dependencies (libraries)
        - cypress
        - chai
        - mocha
        - jquery
        - sinon
        - dotenv
        - faker
        - real-events
    - folder structure (details of the important folders and files)
        - env
        - fixture
        - commands
        - e2e
        - package.json
    - coding standards-rules-linting
    - POM
        - reusability
        - maintainability
        - readability
        - common/reusable methods in support/command.js
        - support/e2e.js
        - hooks
    - test runner
    - configuration files -> cypress config, environment configurations (.env file)
    - debugging
    - version control (git)

- how do you provide/read data in your framework?
- how do you run your scripts?
- how do you run different test groups? (utilizing grep)
- how does it generate reports? What kind if reports does it generate? How/when do you get screenshots/recordings?
- how does it work in the pipeline? Jenkins/Azure DevOps


UI Framework - 1000
Smoke Suite: 5-15 test scripts
Regression: no limit but mostly between 300-1500


My framework involves the Javascript programming language and my automation tool of choice is cypress. I normally use the visual studio code editor when writing up my code. After installing cypress, from here what I would do is use 'npx cypress open' and the test runner window pops up. From here I do some minor configurations and start up a new cypress framework and it will creaate some defualt folders that are necessary to run, such as the e2e and fixtures folders, where I store static data used within my tests. It will also create a support folder which contains a commands.js file and an e2e.js file, which will house any methods that need to be automatically run when I start a test. It will also create a package.json, which can contain test scripts that I can use to run our tests with specific conditions. SO if I install the grep library into my project, I can specific test cases certain tags to run those specific tests. This really shows how flexible cypress can really be during testing. It will also create a cypress.config file where I can overwrite some of the default configurations from the test runner, like the resolution, which browser it will run on, and even contain some .env information here too when I use that. I like to structure my projects using POM for readability and reusability reasons. Some other dependencies I normally like to comonly use are dotenv, faker, and real-events.