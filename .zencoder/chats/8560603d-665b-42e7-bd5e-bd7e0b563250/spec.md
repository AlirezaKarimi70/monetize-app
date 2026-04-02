# Technical Specification - Tab Bar Fixes

## Technical Context
- **Framework**: Expo Router (v6), React Native (0.81.5)
- **Styling**: NativeWind v5 (Tailwind CSS v4)
- **Environment**: Expo Web (Priority for this fix)

## Problem Description
Custom CSS classes defined using `@apply` in `global.css` (e.g., `.tabs-active`, `.tabs-icon`) are not being correctly applied in the Expo Web environment. This results in the tab bar icons having incorrect sizes and the active state "pill" background being invisible.

## Implementation Approach
We will address the root cause of the `@apply` failure in Expo Web by updating the Tailwind v4 configuration and imports in `global.css`, and explicitly defining the input file in `metro.config.js`.

### 1. Update `global.css` Configuration
We will replace granular Tailwind imports with the unified `tailwindcss` import to ensure all layers and theme variables are correctly available for `@apply`. We will also move custom classes to `@layer utilities` for better prioritization.

**Changes in `global.css`:**
- Replace `@import "tailwindcss/theme.css" layer(theme);`, `@import "tailwindcss/preflight.css" layer(base);`, and `@import "tailwindcss/utilities.css";` with `@import "tailwindcss";`.
- Wrap custom classes like `.tabs-icon`, `.tabs-pill`, `.tabs-active`, and `.tabs-glyph` in `@layer utilities`.

### 2. Update `metro.config.js`
We will explicitly define the input CSS file for NativeWind to ensure consistent path resolution during the build process.

**Changes in `metro.config.js`:**
- Change `module.exports = withNativewind(config);` to `module.exports = withNativewind(config, { input: "./global.css" });`.

### 3. Component Updates in `app/(tabs)/_layout.tsx`
We will ensure that `app/(tabs)/_layout.tsx` uses these classes correctly. While the primary goal is to make `@apply` work, we will also verify that the classes are applied as intended.

```tsx
type TabIconProps = {
    focused: boolean;
    icon: any;
};

const TabIcon = ({ focused, icon }: TabIconProps) => {
    return (
        <View className="tabs-icon">
            <View className={clsx('tabs-pill', focused && 'tabs-active')}>
                <Image source={icon} resizeMode="contain" className="tabs-glyph" />
            </View>
        </View>
    );
};
```

## Source Code Changes
### `global.css`
- Update imports and wrap custom classes in `@layer utilities`.

### `metro.config.js`
- Explicitly set NativeWind input file.

### `app/(tabs)/_layout.tsx`
- Ensure correct usage of custom classes.

## Delivery Phases
1. **Phase 1**: Update `global.css` imports and layering.
2. **Phase 2**: Update `metro.config.js` with explicit input path.
3. **Phase 3**: Verify rendering on Expo Web.

## Verification Approach
- **Visual Inspection**: Run the application in web mode and confirm:
    - Icons are centered and correctly sized (24px/`size-6`).
    - Active tab shows the `bg-accent` (#ea7a53) rounded pill.
- **Console Check**: Verify no CSS processing errors are logged during the build.
- **Linting**: Run `npm run lint` (if available) to ensure no regressions.
