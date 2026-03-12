# CalcFlow — System Architecture

## Overview

CalcFlow is a lightweight client-side calculation platform designed to perform deterministic mathematical operations such as unit conversions and financial interest calculations. The system prioritizes speed, simplicity, and predictable computation by keeping all calculation logic within the client application while separating user interface, calculation engines, and session storage.

The architecture follows a modular frontend structure that isolates computation logic from presentation layers, allowing calculations to remain reusable, testable, and deterministic.

---

## Core Architectural Principles

Deterministic computation  
All calculations use explicit mathematical formulas without external APIs or probabilistic systems.

Client-side processing  
All calculation logic runs directly in the browser to ensure fast response times and offline capability.

Separation of concerns  
User interface components, calculation engines, and session storage are isolated into separate modules.

Stateless calculation engine  
Calculation modules do not maintain internal state and only return computed results based on provided inputs.

Lightweight persistence  
Calculation history is stored locally in the user session to avoid backend dependencies.

---

## System Layers

### 1. Presentation Layer

Responsible for rendering the user interface and collecting user input.

Key screens:
- Dashboard
- Unit Conversion
- Interest Calculator
- History Viewer

Responsibilities:
- Render calculator interfaces
- Capture user inputs
- Trigger calculations
- Display formatted results
- Display calculation history

Technologies:
- React
- TypeScript
- Tailwind UI components
- Lucide Icons

---

### 2. Calculation Engine Layer

This layer contains deterministic mathematical logic used by the application.

Responsibilities:
- Execute financial calculations
- Execute unit conversion formulas
- Return computed results

Examples of calculations:
- Simple Interest
- Temperature conversion
- Weight conversion
- Distance conversion

All calculations follow the formula pattern:

result = deterministic_formula(input)

No external data sources or APIs are required.

---

### 3. Input Validation Layer

Responsible for sanitizing and validating user input before calculations are executed.

Responsibilities:
- Parse numeric values from user input
- Reject invalid or empty inputs
- Ensure calculations only run on valid data
- Prevent NaN or malformed results

Typical flow:

User Input  
→ Input Parser  
→ Validation  
→ Calculation Engine

---

### 4. State Management Layer

Manages application state and calculation history.

Responsibilities:
- Track current input values
- Store calculation results
- Manage session history
- Control UI expansion and interaction states

State includes:
- Calculator inputs
- Calculation outputs
- History entries
- UI interaction state

State is maintained locally within React components.

---

### 5. Session Storage Layer

Handles lightweight persistence for calculation history.

Responsibilities:
- Store calculation entries
- Retrieve session history
- Clear history when requested

History entries include:
- Calculation type
- Input values
- Result
- Timestamp

Storage mechanism:
- Browser session storage

This approach avoids backend infrastructure while still preserving user activity during a session.

---

## Data Flow

User Interaction Flow:

User Input  
→ Input Parser  
→ Validation  
→ Calculation Engine  
→ Result Output  
→ History Storage  
→ UI Render

This architecture ensures that calculations remain deterministic while maintaining a responsive user interface.

---

## Performance Characteristics

Fast execution  
All calculations run locally without network requests.

Minimal dependencies  
No backend services or APIs required.

Predictable outputs  
All calculations rely on deterministic formulas.

Low memory footprint  
History storage uses lightweight session storage.

---

## Extensibility

The system is designed to easily support additional calculators.

New modules can be added by implementing:

1. A calculation formula
2. An input validation rule
3. A UI component
4. A history entry format

This modular structure allows CalcFlow to expand into additional domains such as:

- Compound interest
- Financial projections
- Engineering conversions
- Scientific calculators
