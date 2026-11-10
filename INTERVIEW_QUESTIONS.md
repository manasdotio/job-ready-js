# Interview Questions

## JavaScript Arrays and Objects

1. How do you create an array containing only the names from an array of users?
2. How does `filter()` differ from `map()`?
3. How would you get the names of only the active users by chaining array methods?
4. How would you find the oldest user in an array without returning an array?
5. How can `reduce()` be used to calculate the average age of users?
6. How do you sort users by age without mutating the original array?
7. What is object destructuring? Extract `name` and `age` from the first user.
8. How would you add a user to an array without using `push()` or mutating the original array?
9. Given the following code, what does `rest` contain?

   ```js
   const { id, ...rest } = users[0];
   ```

10. How would you use `reduce()` to return both `activeCount` and `inactiveCount`?
11. What is the difference between a shallow copy and a deep copy?
12. What is the difference between `==` and `===`?
13. Explain the difference between `let`, `const`, and `var`.
14. What are truthy and falsy values in JavaScript?
15. What is the difference between `null` and `undefined`?

## Asynchronous JavaScript

1. What is a Promise, and what states can it have?
2. What is the difference between `.then().catch()` and `async/await`?
3. Why should a `fetch()` response be checked with `response.ok`?
4. How would you handle errors in an `async` function?
5. What is the difference between `Promise.all()` and `Promise.allSettled()`?
6. When would you run asynchronous requests sequentially instead of concurrently?
7. What happens when one Promise in `Promise.all()` rejects?
8. How would you return both data and an error from a helper function?

## React

1. What is the purpose of `useState()`?
2. What does an empty dependency array in `useEffect()` mean?
3. How do you fetch data when a React component mounts?
4. How should loading, success, and error states be represented in a component?
5. Why does React require a `key` when rendering a list?
6. Why should state updates avoid mutating arrays or objects directly?
7. What is the difference between controlled and uncontrolled components?
8. When should data-fetching logic be extracted into a custom hook?
9. What causes a React component to re-render?
10. How can you prevent unnecessary re-renders?

## Coding Practice

Use the following data for the coding questions:

```js
const users = [
  { id: 1, name: "Aman", age: 22, active: true },
  { id: 2, name: "Priya", age: 25, active: false },
  { id: 3, name: "Rahul", age: 19, active: true },
  { id: 4, name: "Sneha", age: 30, active: true },
  { id: 5, name: "Vikram", age: 21, active: false },
];
```

1. Return all active users.
2. Return an array containing only active-user names.
3. Return the oldest user.
4. Return users sorted from youngest to oldest without changing `users`.
5. Return `{ activeCount, inactiveCount }`.
6. Write `addUser(usersArray, newUser)` so it returns a new array.
7. Write an async `getUser(id)` function that fetches a user and throws for failed responses.
8. Build a React component that displays loading, error, and user-list states.
