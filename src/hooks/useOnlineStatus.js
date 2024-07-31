// Finalize the contract the of custom hook
// what is the parameter and what is the return value.
import { useEffect, useState } from "react";

import { useEffect } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
  }, []);
  return onlineStatus; // boolean value
};
export default useOnlineStatus;

/* 

It is not mandatory to use "use" before the name eof custom hook but it is recommended by react.
Linting is the automated checking of your source code for programmatic and stylistic errors

YAML is a human-readable data serialization language that is often used for writing configuration files. Depending on whom you ask, YAML stands for yet another markup language or YAML ain't markup language (a recursive acronym), which emphasizes that YAML is for data, not documents.


ESLint is a popular open-source JavaScript linting tool that helps developers identify and fix problems in their code. It is highly configurable and supports various JavaScript frameworks and libraries, making it an essential tool for maintaining code quality and consistency in JavaScript projects. Here's a detailed explanation of what ESLint is and how it works:

### Key Features of ESLint

1. **Static Code Analysis**: ESLint analyzes code statically, which means it reviews the code without executing it. This helps catch potential errors, bugs, and bad practices early in the development process.

2. **Customizable Rules**: ESLint comes with a set of built-in rules that can be customized. You can enable or disable rules, change their severity, or even write your own custom rules.

3. **Plugins and Extensions**: ESLint has a rich ecosystem of plugins and extensions that add support for various frameworks, libraries, and coding styles. Popular plugins include those for React, Vue, and TypeScript.

4. **Integration with Editors and IDEs**: ESLint integrates with many popular code editors and Integrated Development Environments (IDEs) such as Visual Studio Code, Sublime Text, and JetBrains products. This integration provides real-time linting feedback as you write code.

5. **Autofixing**: ESLint can automatically fix many common problems. This feature helps save time by automatically correcting code style issues and other minor problems.

6. **Configurable via Configuration Files**: ESLint can be configured using various file formats, including JSON, YAML, and JavaScript. The configuration file (`.eslintrc`) allows you to specify rules, environments, and parser options.

### How to Use ESLint

#### Installation
You can install ESLint using npm (Node Package Manager):

```bash
npm install eslint --save-dev
```

#### Configuration
Create a configuration file (`.eslintrc.json`, `.eslintrc.yaml`, or `.eslintrc.js`). Here is an example of a simple configuration file:

```json
{
  "env": {
    "browser": true,
    "node": true,
    "es2021": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "rules": {
    "indent": ["error", 2],
    "quotes": ["error", "double"],
    "semi": ["error", "always"]
  }
}
```

#### Running ESLint
You can run ESLint on your files or directories using the command line:

```bash
npx eslint yourfile.js
```

Or to lint an entire project:

```bash
npx eslint .
```

#### Integration with Editors
To integrate ESLint with Visual Studio Code, you can install the ESLint extension from the marketplace. Once installed, it provides real-time linting feedback as you code.

### Example Workflow

1. **Initialize ESLint**: Run `npx eslint --init` to create a configuration file. This command will guide you through a series of questions to set up ESLint according to your project needs.
   
2. **Configure Rules**: Customize the rules in your `.eslintrc` file to fit your coding standards.

3. **Lint Your Code**: Run `npx eslint .` to lint your entire project. Review and fix any issues that ESLint reports.

4. **Autofix Issues**: Use `npx eslint . --fix` to automatically fix problems that ESLint can correct.

5. **Integrate with Your Editor**: Install the ESLint plugin for your code editor to get real-time feedback.

### Conclusion
ESLint is a powerful tool for ensuring code quality and consistency in JavaScript projects. By integrating it into your workflow, you can catch and fix issues early, enforce coding standards, and improve the overall maintainability of your code. Whether you are working on a small personal project or a large team-based application, ESLint can help you write cleaner, more reliable code.




*/


/* 


Chunking : it is a process of breaking down a file into smaller parts called chunks. It is a technique used in bundling to improve the performance of the application. By breaking down the file into smaller chunks, the browser can load the application faster and more efficiently.

Tree shaking : Tree shaking is a technique used in JavaScript bundling to remove unused code from the final bundle. It helps reduce the size of the bundle and improve the performance of the application. Tree shaking works by analyzing the code and identifying the parts that are not used. These unused parts are then removed from the final bundle, resulting in a smaller and more efficient bundle.

Code splitting : Code splitting is a technique used in JavaScript bundling to split the code into smaller parts or chunks. It helps improve the performance of the application by loading only the necessary code when it is needed. Code splitting can be done at different levels, such as splitting the code based on routes, components, or modules. By splitting the code into smaller parts, the application can load faster and more efficiently.It is same as chunking.

Chunking or Code Splitting or Dynamic Bundling -> these are same things. It is a technique used in JavaScript bundling to split the code into smaller parts or chunks. It helps improve the performance of the application by loading only the necessary code when it is needed. Code splitting can be done at different levels, such as splitting the code based on routes, components, or modules. By splitting the code into smaller parts, the application can load faster and more efficiently.


Don't put a load on a single bundle -> break into the smaller bundles logically

That is also know as lazy loading -> it is a technique used in JavaScript bundling to load the code only when it is needed. It helps improve the performance of the application by reducing the initial load time and loading the code on demand. Lazy loading can be used to load components, modules, or routes dynamically, based on user interactions or other events. By lazy loading the code, the application can load faster and more efficiently, providing a better user experience.

*/