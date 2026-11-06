# React Background Color Changer

## Overview

Built a simple Background Color Changer using React and Tailwind CSS. This project helped me understand React state management, event handling, and dynamic inline styling.

## Technologies Used
- React
- JavaScript
- Tailwind CSS

## React Concepts Learned

### 1. useState()

Used to store and update the selected background color.

```jsx
const [color, setColor] = useState('lightblue');
```

- `color`: Stores the current background color.
- `setColor()`: Updates the background color.
- `lightblue`: Initial state.

### 2. Dynamic Inline Styling

```jsx
style={{ backgroundColor: color }}
```

React applies the current value of the `color` state to the element's background.

### 3. Event Handling

```jsx
onClick={() => setColor('lightgreen')}
```

When a button is clicked, the `setColor()` function updates the state.

### 4. Component Re-rendering

When the state changes, React re-renders the component and displays the updated background color.

## Tailwind CSS Concepts

| Class | Purpose |
|---|---|
| `w-full` | Full width |
| `h-screen` | Full screen height |
| `fixed` | Fixed positioning |
| `bottom-12` | Positions element from the bottom |
| `justify-center` | Centers items horizontally |
| `flex-wrap` | Allows items to wrap |
| `gap-3` | Adds spacing between items |
| `rounded-3xl` | Adds rounded corners |
| `shadow-lg` | Adds a large shadow |
| `duration-200` | Sets transition duration |

## Key Learnings

- Managing state using `useState`.
- Handling button click events.
- Updating UI dynamically.
- Using inline styles with React.
- Styling components using Tailwind CSS.

## Future Improvements

- [ ] Add more background colors.
- [ ] Add a random color button.
- [ ] Add HEX color support.
- [ ] Display the selected color's HEX code.
- [ ] Improve the button design.

**Learning Status:** Completed basic Background Color Changer project.