# Cypress Automation Framework

A modern Cypress-based UI test automation framework using the Page Object Model (POM) and integrated Allure reporting. Built to test the DemoQA sample application (https://demoqa.com).

---

## 📁 Project Structure

```
cypress-automation-framework/
│
├── cypress/
│ ├── e2e/ # Test specs organized by feature
│ │ └── ui/
│ │ └── text-box-form.cy.js
│ ├── pages/ # Page Object Model classes
│ │ └── TextBoxPage.js
│ └── support/ # Custom commands & Allure setup
│ └── e2e.js
│
├── allure-results/ # Allure raw results (auto-generated)
├── allure-report/ # Allure HTML report (generated)
├── cypress.config.js # Cypress configuration
└── package.json # Project dependencies and scripts
```

---

## 🚀 Features

- Cypress test framework with POM structure
- Automated tests for DemoQA text box form
- Allure report integration
- Clean and extendable architecture

---

## 🧰 Tech Stack

- Cypress
- Allure (via @shelex/cypress-allure-plugin)
- JavaScript

---

## 🛠 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/cypress-automation-framework.git
   cd cypress-automation-framework
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run tests:
   ```bash
   npm run cypress:run
   ```
4. Generate Allure report:
   ```bash
   npm run allure:generate
   ```
5. Open Allure report:
   ```bash
   npm run allure:open
   ```

---

Note: Run tests before generating the report to populate the allure-results directory.

Custom Setup
Allure is configured in cypress.config.js and initialized in cypress/support/e2e.js

Page actions are abstracted in cypress/pages using the Page Object Model pattern

## Author

Fehmi Baltaci
📧 fehmi.baltaci@gmail.com
🌐 https://fehmibaltaci.dev

## License

This project is licensed under the MIT License.
