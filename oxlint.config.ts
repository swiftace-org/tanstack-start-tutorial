import { defineConfig } from "oxlint"

export default defineConfig({
  ignorePatterns: ["src/routeTree.gen.ts"],
  plugins: ["eslint", "typescript", "unicorn", "oxc", "react", "jsx-a11y"],
  rules: {
    "prefer-const": "off", // allow 'let' for variable declaration
    "react/rules-of-hooks": "error", // correct hook call order
    "react/exhaustive-deps": "warn", // complete dependency arrays in useEffect
    "react/jsx-key": "error", // key prop in lists
    "react/jsx-no-target-blank": "error", // safe external links
    "react/jsx-no-duplicate-props": "error", // no repeated props
    "react/no-direct-mutation-state": "error", // use setState instead
    "react/button-has-type": "error", // explicit button type
    "react/iframe-missing-sandbox": "error", // sandbox iframes
    "react/jsx-no-useless-fragment": "error", // remove extra fragments
    "react/jsx-no-comment-textnodes": "warn", // comments outside JSX text
    "react/jsx-no-script-url": "error", // no javascript: URLs
    "react/self-closing-comp": "warn", // self-close empty elements
    "react/checked-requires-onchange-or-readonly": "error", // controlled inputs
    "react/forward-ref-uses-ref": "error", // forwardRef must use ref
  },
})
