# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `g:\project\monetize-app\.zencoder\chats\8560603d-665b-42e7-bd5e-bd7e0b563250/requirements.md`.

**Stop here.** Present the PRD to the user and wait for their confirmation before proceeding.

### [x] Step: Technical Specification

Create a technical specification based on the PRD in `g:\project\monetize-app\.zencoder\chats\8560603d-665b-42e7-bd5e-bd7e0b563250/requirements.md`.

1. Review existing codebase architecture and identify reusable components
2. Define the implementation approach

Save to `g:\project\monetize-app\.zencoder\chats\8560603d-665b-42e7-bd5e-bd7e0b563250/spec.md` with:

- Technical context (language, dependencies)
- Implementation approach referencing existing code patterns
- Source code structure changes
- Data model / API / interface changes
- Delivery phases (incremental, testable milestones)
- Verification approach using project lint/test commands

**Stop here.** Present the technical specification to the user and wait for their confirmation before proceeding.

### [x] Step: Planning

Create a detailed implementation plan based on `g:\project\monetize-app\.zencoder\chats\8560603d-665b-42e7-bd5e-bd7e0b563250/spec.md`.

1. Break down the work into concrete tasks
2. Each task should reference relevant contracts and include verification steps
3. Replace the Implementation step below with the planned tasks

Rule of thumb for step size: each step should represent a coherent unit of work (e.g., implement a component, add an API endpoint, write tests for a module). Avoid steps that are too granular (single function) or too broad (entire feature).

If the feature is trivial and doesn't warrant full specification, update this workflow to remove unnecessary steps and explain the reasoning to the user.

Save to `g:\project\monetize-app\.zencoder\chats\8560603d-665b-42e7-bd5e-bd7e0b563250/plan.md`.

**Stop here.** Present the implementation plan to the user and wait for their confirmation before proceeding.

### [ ] Step: Implementation

1. [x] **Update `global.css` configuration**
   - Replace granular Tailwind imports with unified `@import "tailwindcss";`.
   - Move `.tabs-icon`, `.tabs-pill`, `.tabs-active`, and `.tabs-glyph` into `@layer utilities`.
   - **Verification**: Check if the build fails due to CSS processing errors.

2. [x] **Update `metro.config.js`**
   - Change `module.exports = withNativewind(config);` to `module.exports = withNativewind(config, { input: "./global.css" });`.
   - **Verification**: Ensure Expo Metro server starts correctly.

3. [x] **Fix `app/(tabs)/_layout.tsx` types**
   - Define `TabIconProps` type (used but currently undefined in layout).
     ```tsx
     type TabIconProps = {
         focused: boolean;
         icon: any;
     };
     ```
   - **Verification**: Check for TypeScript errors in the file.

4. **Verify rendering on Expo Web**
   - Run `npx expo start --web`.
   - **Visual Check**:
     - Icons are centered and 24px (`size-6`).
     - Active tab shows the `bg-accent` (#ea7a53) rounded pill.

5. [x] **Fallback: Standard CSS (Conditional)**
   - If `@apply` still fails in Expo Web:
     - Replace `@apply` in `global.css` for `.tabs-*` classes with standard CSS (e.g. `width: 48px; height: 48px;`).
     - **Verification**: Re-verify on Expo Web.
