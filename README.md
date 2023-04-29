# NodeJS-CLI Scaffolding

> Template to easily generate command-line interface application

## Features

* Typescript
* ES Lint pre-configured
* Jest Test Runner pre-configured

## Demo

### Direct execution

1. Install the dependencies

    ```
    npm i
    ```

2. Run the project with `ts-node`

    ```
    npm start
    ```

### Local execution via command

1. Install the dependencies

    ```
    npm i
    ```

2. Build the project: Generates ./dist folder

    ```
    npm run build
    ```

3. Link the module to your global `node_modules`

    ```
    npm link
    ```

4. Execute the command defined into `package.json` from everywhere:

    ```json title="package.json"
    "bin": {
        "foo": "bin/cmd.js"
    },
    ```

    By default, it creates `foo` command:

    ```
    foo
    //Output
    Hello from CLI
    ```

### Execute tests (via Jest)

```
npm test
```