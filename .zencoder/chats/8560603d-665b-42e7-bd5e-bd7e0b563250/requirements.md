# Product Requirements Document (PRD) - Tab Bar Fixes

## Problem Statement
The bottom tab bar in the application has two main issues:
1.  **Icon Sizes**: The tab icons are not correctly sized according to the original design.
2.  **Active Tab State**: The "active" (focused) style for the selected tab is not visible or correctly applied when a tab is clicked.

## Target File
`app/(tabs)/_layout.tsx`

## Requirements

### 1. Icon Sizing
- The icons within the tab bar should have consistent and correct dimensions.
- The `tabs-glyph` class (currently `size-6` or 24px) should be adjusted if it doesn't match the desired visual prominence.
- The `tabs-pill` and `tabs-icon` containers should be properly sized to accommodate the active state background without clipping or overlapping.

### 2. Active Tab Styling
- The active tab should clearly indicate it is focused using a "pill" background.
- Currently, `tabs-active` is intended to apply `bg-accent` (#ea7a53) when `focused` is true.
- Ensure that the `focused` state correctly triggers the `tabs-active` class and that it is visually distinct against the tab bar's background (`colors.primary` - #081126).
- Verify that `NativeWind` v5 correctly applies the conditional classes in the `TabIcon` component.

## Technical Context
- **Framework**: Expo Router (v6), React Native (0.81.5)
- **Styling**: NativeWind v5 (Tailwind CSS v4)
- **Active State Indicator**: A rounded "pill" background using the `accent` color.

## Success Criteria
- Each tab icon is correctly sized and centered within its container.
- When a tab is clicked, it immediately shows a visible "pill" background in the accent color.
- The layout remains responsive and works correctly with safe area insets.

## Open Questions / Clarifications Needed
1.  **Desired Icon Size**: What is the target size for the glyph itself? (Is 24px correct, or should it be larger?)
2.  **Pill Dimensions**: Should the pill background be a fixed size (e.g., 48x48) or should it adapt?
3.  **Active Style**: Is there any specific animation or transition expected for the active state?
