# Bank Kata - Getting Started

This README provides instructions for running tests and compiling/running the code in Visual Studio Code for the Bank Kata project as described at https://www.codurance.com/katas/bank

## Prerequisites

- Node.js and npm (or yarn) installed on your system.
- Visual Studio Code installed.

## Running Tests

1. **Open the project in VS Code.** Clone or download the project repository and open it in VS Code.
2. **Install dependencies.** Open the integrated terminal in VS Code (**Terminal** > **New Terminal**) and run:

   ```bash
   npm install
   ```

   This will install all the required dependencies for running the tests and the application.
3. **Run tests.** There are two main ways to run the tests:

   - **Using the Test Explorer (recommended):** VS Code provides a built-in Test Explorer for running and viewing test results.
     - Open the Test Explorer panel (**Test** > **Test Explorer**).
     - Select the "Bank Kata Tests" test suite.
     - Click the "Run All" button (play icon) to execute all tests.
     - The Test Explorer will display the results, indicating successful or failed tests.

   - **Using the command line:** In the integrated terminal, run:

     ```bash
     npm test
     ```

     This will execute the tests and print the results to the terminal.

## Compiling and Running Main.ts

1. **Compile the TypeScript code:** While not strictly necessary for development, you can compile the TypeScript code to JavaScript for improved performance.
   - In the integrated terminal, run:

     ```bash
     tsc -p tsconfig.json
     ```

   This will use the `tsconfig.json` file to configure the compilation process and generate a JavaScript file (`main.js` by default) in the `dist/src` directory.
2. **Run the compiled code:**
   - Open a new integrated terminal in VS Code.
   - Navigate to the `dist/src` directory within your project.
   - Run the compiled code using Node.js:

     ```bash
     node main.js
     ```

This will execute the code defined in the `main.ts` file.

This is the acceptance test - you should get the following output:

```
Given a client makes a deposit of 1000 on 10/1/2012
And a deposit of 2000 on 13-01-2012
And a withdrawal of 500 on 14-01-2012
When they print their bank statement
Then they would see:
date       || amount || balance 
14/01/2012 || -500   || 2500    
13/01/2012 || 2000   || 3000    
10/01/2012 || 1000   || 1000 
