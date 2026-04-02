# Product Requirements Document: CSS Layer Migration

## 1. Overview
The current `@layer components` in `global.css` is reportedly not working. All styles within this layer need to be moved to the `@layer utilities` section to ensure they are correctly applied.

## 2. Requirements

### 2.1 Layer Consolidation
- **Migration**: All CSS classes and `@apply` rules currently defined within `@layer components` must be moved to `@layer utilities`.
- **Integrity**: The styling logic, property values, and selector names must remain identical to their current state.
- **Order**: The moved styles should be appended to the existing content of `@layer utilities` to preserve the current cascade flow if any dependencies exist.

### 2.2 Cleanup
- **Removal**: The `@layer components` block should be completely removed from the file after the migration is complete.

## 3. Scope
- **File**: `global.css`
- **Starting Line (Components)**: 77
- **Ending Line (Components)**: 437
- **Target Layer**: `@layer utilities` (starting at line 48)

## 4. Verification
- The resulting `global.css` should have only one layer block for custom styles (`@layer utilities`).
- The styles should be functional in the application, specifically addressing the issue where component layer styles were previously ignored.

## 5. Unclear Aspects & Assumptions
- **Assumption**: Moving to `@layer utilities` will resolve the "not working" issue, likely due to how the build tool (e.g., NativeWind/Tailwind v4) processes these layers in this specific environment.
- **Clarification**: If there are naming conflicts between existing utilities and components, the components (being moved last) will take precedence. No such conflicts are currently apparent.
