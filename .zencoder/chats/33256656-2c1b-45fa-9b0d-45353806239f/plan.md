# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `g:\project\monetize-app\.zencoder\chats\33256656-2c1b-45fa-9b0d-45353806239f/requirements.md`.

**Stop here.** Present the PRD to the user and wait for their confirmation before proceeding.

### [x] Step: Technical Specification

Create a technical specification based on the PRD in `g:\project\monetize-app\.zencoder\chats\33256656-2c1b-45fa-9b0d-45353806239f/requirements.md`.

1. Review existing codebase architecture and identify reusable components
2. Define the implementation approach

Save to `g:\project\monetize-app\.zencoder\chats\33256656-2c1b-45fa-9b0d-45353806239f/spec.md` with:

- Technical context (language, dependencies)
- Implementation approach referencing existing code patterns
- Source code structure changes
- Data model / API / interface changes
- Delivery phases (incremental, testable milestones)
- Verification approach using project lint/test commands

**Stop here.** Present the technical specification to the user and wait for their confirmation before proceeding.

### [x] Step: Planning

Create a detailed implementation plan based on `g:\project\monetize-app\.zencoder\chats\33256656-2c1b-45fa-9b0d-45353806239f/spec.md`.

1. Break down the work into concrete tasks
2. Each task should reference relevant contracts and include verification steps
3. Replace the Implementation step below with the planned tasks

Rule of thumb for step size: each step should represent a coherent unit of work (e.g., implement a component, add an API endpoint, write tests for a module). Avoid steps that are too granular (single function) or too broad (entire feature).

If the feature is trivial and doesn't warrant full specification, update this workflow to remove unnecessary steps and explain the reasoning to the user.

Save to `g:\project\monetize-app\.zencoder\chats\33256656-2c1b-45fa-9b0d-45353806239f/plan.md`.

**Stop here.** Present the implementation plan to the user and wait for their confirmation before proceeding.

### [ ] Step: Implementation
1. **Migrate styles from `@layer components` to `@layer utilities`**: Move all CSS class definitions from the `@layer components` block (lines 78-436) to the end of the existing `@layer utilities` block (line 74) in [./global.css](./global.css). Ensure all `@apply` directives and nested structures are preserved.
   - **Verification**: Manually check that `global.css` has one consolidated `@layer utilities` block.
2. **Remove the empty `@layer components` block**: Delete the empty `@layer components` block from [./global.css](./global.css).
   - **Verification**: Ensure no `@layer components` declaration remains in the file.
3. **Run project linting**: Execute `npm run lint` to ensure no syntax errors were introduced.
   - **Verification**: Command exits with code 0.
