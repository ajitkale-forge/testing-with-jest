# Testing with Jest

This repository is dedicated to showcase the capabilities of Jest framework for implementing unit tests for Javascript code. Jest provides a simple and efficient way to write unit tests, ensuring its reliability and correctness.

## Features
Unit Testing with Jest: Explore examples of how to structure and write your tests effectively.

Code Coverage with Codecov: Integrated code coverage reporting using Jest and Codecov to track test coverage metrics.

GitHub Actions Workflow: This demo includes a GitHub Actions workflow to automate the testing process and upload coverage reports. Each push to the repository triggers a set of tests and generates coverage reports to ensure that your codebase remains in a reliable state. Check out the .github/workflows directory for the workflow configuration.

## Getting Started
- Clone the Repository:

```bash
git clone https://github.com/nora-weisser/testing-with-jest.git
```

- Install Dependencies:

```bash
cd testing-with-jest
npm install
```
- Running Tests
To run the test suite, use the following command:

```bash
npm test
```

- Running Tests with Coverage
To run tests and generate coverage reports locally:

```bash
npm run test:coverage
```

This will generate coverage reports in the `coverage/` directory and display coverage statistics in the terminal.

## Code Coverage
This project is configured with code coverage reporting using:
- **Jest** for generating coverage reports
- **Codecov** for coverage visualization and tracking
- **GitHub Actions** for automated coverage reporting on pull requests

### Coverage Configuration
- Minimum coverage thresholds are set to 80% for branches, functions, lines, and statements
- Coverage reports are generated in multiple formats: text, lcov, and HTML
- Test files are excluded from coverage calculations
- Coverage reports are automatically uploaded to Codecov on each push and pull request

You can customize the test execution and coverage settings by modifying the Jest configuration in the `jest.config.js` file.
