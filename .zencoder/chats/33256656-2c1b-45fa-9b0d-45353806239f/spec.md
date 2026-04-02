# Technical Specification: CSS Layer Migration

## 1. Technical Context
- **Language**: CSS (with Tailwind CSS / NativeWind directives)
- **Framework**: Tailwind CSS v4 (based on `@theme` syntax and `@import "tailwindcss/theme.css"`)
- **Key File**: `global.css`

## 2. Implementation Approach
The migration involves moving all style definitions currently inside `@layer components` into `@layer utilities`. This is a direct relocation of CSS blocks without changing their content or logic.

### Steps:
1. **Extraction**: Identify all CSS classes within `@layer components` (lines 78-436).
2. **Relocation**: Append these classes to the end of the existing `@layer utilities` block (after line 74).
3. **Cleanup**: Delete the now-empty `@layer components` block.

### Key Considerations:
- **Order of Precedence**: By appending to `@layer utilities`, the migrated component styles will follow the existing utility styles in the cascade, ensuring they override base styles as before but within the utilities layer.
- **Syntax Integrity**: Maintain the `@apply` directives and proper nesting/bracketing.

## 3. Source Code Structure Changes
- **File affected**: `g:\project\monetize-app\global.css`
- **Structure change**: The file will no longer contain `@layer components`. The `@layer utilities` block will grow from ~25 lines to ~380 lines.

## 4. Data Model / API / Interface Changes
- N/A (No functional or API changes; purely a styling layer reorganization).

## 5. Delivery Phases
### Phase 1: Migration and Verification
1. Move the styles from `@layer components` to `@layer utilities`.
2. Delete the empty `@layer components` block.

## 6. Verification Approach
1. **Manual Inspection**: Verify that `global.css` has only one `@layer utilities` block containing all custom styles.
2. **Build Check**: If applicable, ensure the Tailwind/NativeWind build process completes without errors.
3. **Visual Verification**: Confirm that styles (e.g., `.home-header`, `.auth-card`) are correctly applied in the UI, resolving the reported issue where they were previously ignored.
