# Simple Todo List App Development Plan

## Project Overview

Build a basic Todo List application using JavaScript and DOM manipulation techniques. This simplified version focuses on core functionality: adding todos, marking them complete, deleting them, and persisting data with localStorage.

## Important: HTML Structure Connection

**CRITICAL:** The HTML provides the following structure that your JavaScript must connect to:

```html
<form id="todo-form">
  <input type="text" id="todo-input" placeholder="Enter a new todo...">
  <button type="submit">Add Todo</button>
</form>

<div id="error-message" class="error-message"></div>

<span id="todo-count">0 items remaining</span>

<ul id="todo-list"></ul>
```

**Your JavaScript must:**
- Connect to these specific element IDs
- Handle form submission for adding todos
- Dynamically create todo list items with proper structure
- Implement event delegation for todo interactions

## Essential State Variables

**IMPORTANT:** Your todo app needs to track state between user interactions. Create this variable:

- `todos`: Array to store all todo objects

**Todo Object Structure:**
```javascript
{
  id: "unique-id",           // Use Date.now().toString()
  text: "Todo text",         // The todo description
  completed: false,          // Boolean completion status
  createdAt: "timestamp"     // When todo was created
}
```

## Core Functionality Requirements

v

## Development Strategy

### Phase 1: Basic Structure
1. Set up DOM element selection
2. Create basic todos array and render function
3. Implement add todo functionality
4. Test adding and displaying todos

### Phase 2: Core Interactions
1. Implement toggle completion with checkbox
2. Add delete functionality with delete button
3. Test all interactions work correctly

### Phase 3: Data Persistence
1. Implement localStorage save/load
2. Test data persistence across page reloads

### Phase 4: Polish & Validation
1. Add input validation and error messages
2. Update todo count display
3. Test edge cases and error scenarios

## Key DOM Methods You'll Use

- `document.querySelector()` - Element selection
- `element.addEventListener()` - Event handling
- `document.createElement()` - Create new elements
- `element.appendChild()` - Add elements to DOM
- `element.classList.add/remove()` - CSS class management
- `element.setAttribute()` - Set element attributes
- `element.textContent` / `element.innerHTML` - Content manipulation
- `localStorage.setItem()` / `getItem()` - Data persistence

## Testing Your Functions

### Method 1: Chrome Developer Tools Console

1. Open your HTML file in Chrome
2. Press `F12` to open Developer Tools
3. Use the Console tab to test functions

**Example Console Tests:**
```javascript
// Test adding todos
addTodo("Learn JavaScript");
addTodo("Build todo app");

// Test toggle functionality
toggleTodo(todoId);

// Test storage
console.log(JSON.parse(localStorage.getItem('todos')));

// Check current state
console.log(todos);
```

### Method 2: Interactive Testing

1. Use the actual interface to test functionality
2. Try various user scenarios:
   - Add multiple todos
   - Mark some as complete
   - Delete todos
   - Refresh page to test persistence

### Method 3: Edge Case Testing

Test unusual scenarios:
- Add empty todo (should show error)
- Add todo with less than 3 characters (should show error)
- Delete all todos
- Clear localStorage and reload

## Debugging Tips

1. **Use Console Logs**: Add `console.log()` statements to track function calls and variable values
2. **Check Event Objects**: Log `event.target` to see what element was clicked
3. **Validate DOM Selection**: Ensure your selectors match the HTML structure
4. **Test State Changes**: Log the todos array after each modification
5. **Monitor Storage**: Check Application tab in DevTools for localStorage contents

## Common Pitfalls to Avoid

1. **Not preventing form default**: Always use `event.preventDefault()` on form submission
2. **Direct DOM mutation**: Update the todos array, then re-render (don't just change DOM)
3. **Missing event delegation**: Use event delegation for dynamically created elements
4. **State synchronization**: Keep todos array and display in sync
