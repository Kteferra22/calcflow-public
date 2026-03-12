# CalcFlow

CalcFlow is a lightweight calculator application designed to demonstrate clean state management and predictable calculation logic within a modern frontend architecture.

The project focuses on building a reliable calculation engine while maintaining a clear separation between user interface components and core calculation logic.

---

# The Problem

Many simple calculator applications tightly couple UI components with calculation logic, making the system difficult to maintain or extend.

This often leads to:

• duplicated logic
• unpredictable state behavior
• tightly coupled UI code

CalcFlow was designed to separate the **calculation engine from the interface layer**.

---

# The Solution

CalcFlow implements a modular calculation architecture that separates:

• input processing
• calculation logic
• state management

This allows the interface to remain simple while the calculation engine handles all computation.

---

# Key Features

### Expression Parsing

User inputs are processed and converted into valid mathematical expressions.

### Calculation Engine

The engine evaluates mathematical expressions using deterministic logic.

### State Management

Calculator state is managed independently from the UI.

### Responsive Interface

The UI responds to user inputs while delegating logic to the calculation engine.

---

# Tech Stack

Frontend

• React
• TypeScript
• TailwindCSS

Application Logic

• modular calculation functions
• deterministic state updates

---

# Engineering Focus

CalcFlow demonstrates:

• modular function design
• predictable state management
• UI-logic separation
• maintainable calculation architecture

---

# Current Status

CalcFlow is part of a portfolio demonstrating practical frontend engineering patterns.

Future improvements may include:

• extended math operations
• calculation history
• keyboard input support
