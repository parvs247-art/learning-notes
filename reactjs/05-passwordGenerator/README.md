# React Hooks – Password Generator Project

## Overview
Built a Password Generator using React to understand the fundamentals of React Hooks, state management, event handling, and JavaScript logic.

## 1. React Hooks

### useState()
- Used to store and update component data (state).
- When state changes, React re-renders the component.

```jsx
const [length, setLength] = useState(8);
```

- `length`: Current state value.
- `setLength`: Function to update state.
- `8`: Initial value.

### useCallback()
- Used to memoize a function between renders.
- React reuses the function while its dependencies remain unchanged.
- Useful when function references need to remain stable.

```jsx
const passwordGenerator = useCallback(() => {
  // Password generation logic
}, [length, includeNumbers, includeChar]);
```

### useEffect()
- Used to perform side effects after rendering.
- Runs when its dependencies change.

```jsx
useEffect(() => {
  passwordGenerator();
}, [passwordGenerator]);
```

### useRef()
- Used to reference DOM elements directly.
- Updating a ref does not cause a re-render.
- Access its stored value using `.current`.

```jsx
const passwordRef = useRef(null);
```

```jsx
passwordRef.current.select();
```

## 2. JavaScript Concepts

| Concept | Explanation |
|---|---|
| `Math.random()` | Generates a random decimal between 0 and 1. |
| `Math.floor()` | Rounds a number down to an integer. |
| `string.length` | Returns the number of characters. |
| `string[index]` | Accesses a character using its index. |
| `password += character` | Adds a character to a string. |
| `!prev` | Reverses a boolean value. |
| `Number(value)` | Converts a value into a number. |
| `e.target.value` | Gets the value of an input element. |

## 3. Password Generation Logic

1. Create an empty password string.
2. Create a collection of lowercase and uppercase letters.
3. Add numbers if the Numbers checkbox is selected.
4. Add special characters if the Characters checkbox is selected.
5. Run a loop according to the selected password length.
6. Generate a random index.
7. Select a random character from the collection.
8. Append the character to the password.
9. Update the password state using `setPassword()`.

### Important Random Index Formula

```javascript
const randomIndex = Math.floor(
  Math.random() * string.length
);
```

**Why?**

- `Math.random()` generates a random decimal.
- Multiplying by `string.length` gives a random position.
- `Math.floor()` converts it into an integer.
- String indexing starts from `0`, so we don't add `1`.

## 4. React Event Handling

### Button Click

```jsx
<button onClick={passwordGenerator}>
  Generate Password
</button>
```

Executes the function when the button is clicked.

### Range Input

```jsx
<input
  type="range"
  value={length}
  onChange={(e) => setLength(Number(e.target.value))}
/>
```

Updates password length when the slider changes.

### Checkbox

```jsx
<input
  type="checkbox"
  checked={includeNumbers}
  onChange={() => setIncludeNumbers(prev => !prev)}
/>
```

Toggles the checkbox state between `true` and `false`.

## 5. Copy to Clipboard

```jsx
const copyPassToclipboard = async () => {
  passwordRef.current.select();

  passwordRef.current.setSelectionRange(
    0,
    password.length
  );

  await navigator.clipboard.writeText(password);
};
```

- `select()`: Selects the input text.
- `setSelectionRange()`: Sets the selected text range.
- `navigator.clipboard.writeText()`: Copies text to the clipboard.

Note: Clipboard access generally requires HTTPS or localhost and can be restricted by browser permissions.

## 6. Important Differences

| Hook | Purpose |
|---|---|
| `useState` | Stores component data |
| `useCallback` | Memoizes functions |
| `useEffect` | Handles side effects |
| `useRef` | References DOM elements and stores mutable values |

## 7. Key Learnings

- How React state works.
- How components re-render when state changes.
- How to use React Hooks.
- How to handle user input and events.
- How to generate random passwords using JavaScript.
- How to access DOM elements using `useRef`.
- How to copy text using the Clipboard API.

## 8. Future Improvements

- [ ] Add Show/Hide Password functionality.
- [ ] Add a password copied confirmation message.
- [ ] Use the Web Crypto API for secure random generation.
- [ ] Ensure selected numbers and special characters appear at least once.
- [ ] Add password strength indication.

---

**Learning Status:** Completed basic Password Generator project.

**Next Goal:** Practise React Hooks by building more small projects.