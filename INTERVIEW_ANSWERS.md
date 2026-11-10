# Interview Answers

Answers to the interview questions will be added here as they are provided.

## What is hoisting?

Hoisting means JavaScript prepares declarations before running the code. This does not mean JavaScript literally moves the code to the top.

If you try to read a `let` or `const` variable before its declaration line runs, JavaScript throws a `ReferenceError`:

```js
console.log(age); // ReferenceError
let age = 22;
```

`var`, `let`, and `const` declarations are all hoisted, but they are initialized differently:

- `var` can be read before its declaration, but its value is `undefined`.
- `let` and `const` are in the **Temporal Dead Zone (TDZ)** from the start of their scope until their declaration is reached. They cannot be read or used during this time.
- Function declarations can be called before they are written.

The TDZ is the time between entering a scope and reaching the `let` or `const` declaration. The variable already exists, but JavaScript blocks access to it until the declaration line runs.

```js
console.log(name); // undefined
var name = "Aman";

sayHello(); // "Hello"
function sayHello() {
  console.log("Hello");
}
```

## How can page loading time be reduced?

### Quick revision

Optimize images, lazy loading, minify files, remove unused code, browser caching, defer JavaScript, reduce HTTP requests, use a CDN, and improve server response time.

### Brief explanation

- **Optimize images:** Resize and compress images, and use modern formats such as WebP.
- **Lazy loading:** Load images and content only when they are about to appear on screen.
- **Minify files:** Remove unnecessary spaces and characters from CSS and JavaScript.
- **Remove unused code:** Delete CSS, JavaScript, and dependencies that the page does not need.
- **Browser caching:** Store files in the browser so returning visitors do not download them again.
- **Defer JavaScript:** Load non-critical JavaScript after the main page content.
- **Reduce HTTP requests:** Combine or remove unnecessary files and requests.
- **Use a CDN:** Serve files from a server geographically closer to the user.
- **Improve server response time:** Optimize backend operations and use Gzip or Brotli compression.

In an interview, a simple answer is:

> I would optimize images, remove unused code, minify and compress assets, lazy-load non-critical content, use caching and a CDN, and reduce the server response time.

## What is the difference between SOAP and REST?

### Quick revision

SOAP is a strict protocol that usually uses XML. REST is a flexible architectural style that commonly uses JSON over HTTP.

### Brief explanation

| Feature | SOAP | REST |
|---|---|---|
| Type | Protocol | Architectural style |
| Data format | Mainly XML | Commonly JSON, but can use other formats |
| Rules | Strict standards and structure | More flexible |
| Transport | Can use HTTP, SMTP, and others | Usually uses HTTP |
| Performance | Often heavier because of XML and extra rules | Usually faster and lighter |
| Security | Has built-in standards such as WS-Security | Commonly uses HTTPS, tokens, or OAuth |
| Best for | Enterprise systems and transactions requiring strict standards | Web APIs, mobile apps, and lightweight services |

### Simple example

REST might return:

```json
{ "id": 1, "name": "Aman" }
```

SOAP usually sends and receives the same data inside an XML envelope.

In an interview, a simple answer is:

> SOAP is a strict XML-based protocol with many built-in standards. REST is a lightweight and flexible way to build APIs, usually using HTTP and JSON.

## How is GraphQL different from REST?

### Quick revision

REST uses multiple endpoints and the server decides the response structure. GraphQL usually uses one endpoint and the client requests exactly the fields it needs.

### Brief explanation

| Feature | REST | GraphQL |
|---|---|---|
| Endpoints | Usually has multiple endpoints, such as `/users` and `/posts` | Commonly uses one endpoint, such as `/graphql` |
| Data requested | The server decides the response structure | The client selects the required fields |
| Over-fetching | May return more data than needed | Helps avoid unnecessary data |
| Under-fetching | May require multiple API requests | Can fetch related data in one query |
| Versioning | Often uses versions such as `/api/v1` and `/api/v2` | Often evolves the schema without separate versions |
| Caching | Easier with standard HTTP caching | Can require additional client or server setup |
| Error handling | Uses HTTP status codes commonly | Often returns errors inside the GraphQL response |

### Simple example

REST:

```http
GET /users/1
```

The server decides which user fields are returned.

GraphQL:

```graphql
query {
  user(id: 1) {
    name
    email
  }
}
```

The client asks specifically for `name` and `email`.

In an interview, a simple answer is:

> REST has multiple endpoints and returns a server-defined response. GraphQL usually has one endpoint and allows the client to request exactly the data it needs.

## What are the components of the CSS box model?

### Quick revision

**Content → Padding → Border → Margin**

### Brief explanation

Every HTML element is treated as a rectangular box made of four parts:

- **Content:** The actual text, image, or child elements inside the element.
- **Padding:** The space between the content and the border. It is inside the element.
- **Border:** The line surrounding the content and padding.
- **Margin:** The space outside the border that separates the element from other elements.

```css
.card {
  width: 200px;       /* content width by default */
  padding: 20px;      /* space inside */
  border: 2px solid;  /* visible outline */
  margin: 10px;       /* space outside */
}
```

By default, the declared `width` applies only to the content. With `box-sizing: border-box`, the declared width includes the content, padding, and border.

In an interview, a simple answer is:

> The CSS box model consists of content, padding, border, and margin. Content is the inner area, padding is space inside the border, border surrounds the element, and margin is space outside it.

## What data types are present in JavaScript?

### Quick revision

JavaScript has **7 primitive data types**: `String`, `Number`, `BigInt`, `Boolean`, `Undefined`, `Null`, and `Symbol`.

It also has one non-primitive type: **Object**. Arrays, functions, and dates are examples of objects.

### Brief explanation

- **String:** Text, such as `"Hello"`.
- **Number:** Whole numbers and decimal numbers, such as `10` or `3.14`.
- **BigInt:** Very large whole numbers, such as `12345678901234567890n`.
- **Boolean:** Either `true` or `false`.
- **Undefined:** A variable that has been declared but has not been given a value.
- **Null:** An intentional empty value.
- **Symbol:** A unique value, often used as a special object property key.
- **Object:** A collection of values, such as `{ name: "Aman" }`.

```js
const name = "Aman";             // String
const age = 22;                  // Number
const isActive = true;           // Boolean
let result;                      // Undefined
const selectedUser = null;       // Null
const largeNumber = 123n;        // BigInt
const id = Symbol("id");         // Symbol
const user = { name: "Aman" };   // Object
```

In an interview, a simple answer is:

> JavaScript data types are divided into primitive and non-primitive types. The primitive types are string, number, bigint, boolean, undefined, null, and symbol. Objects are non-primitive types and include arrays, functions, and dates.

## What is the DOM?

### Quick revision

**DOM = Document Object Model.** It is a tree-like representation of an HTML page that JavaScript can read and change.

### Brief explanation

When a browser loads an HTML page, it creates the DOM. Each HTML element becomes an object, called a node, in a tree structure.

For example:

```html
<h1 id="title">Hello</h1>
```

JavaScript can use the DOM to change the heading:

```js
document.getElementById("title").textContent = "Welcome";
```

JavaScript can use the DOM to:

- Find HTML elements.
- Change text, styles, and attributes.
- Add or remove elements.
- Respond to user events such as clicks and typing.

In an interview, a simple answer is:

> The DOM is a tree-like object representation of an HTML document created by the browser. JavaScript uses it to read and dynamically change the page's content, structure, and styles.

## What is the `this` keyword in JavaScript?

### Quick revision

`this` refers to the object that is calling or currently using a function. Its value depends on how the function is called.

### Brief explanation

- **Inside an object method:** `this` refers to that object.
- **Inside a regular function:** `this` is the global object in non-strict mode, or `undefined` in strict mode.
- **Inside an arrow function:** `this` comes from the surrounding scope; arrow functions do not create their own `this`.
- **With `call()`, `apply()`, or `bind()`:** You can set the value of `this` manually.

```js
const user = {
  name: "Aman",
  sayHello() {
    console.log(this.name);
  },
};

user.sayHello(); // Aman
```

Here, `user` calls `sayHello()`, so `this` refers to the `user` object.

In an interview, a simple answer is:

> The `this` keyword refers to the object associated with the current function call. Its value depends on how the function is called, while arrow functions inherit `this` from their surrounding scope.

## What are the advantages of using a CDN?

### Quick revision

A CDN, or Content Delivery Network, is a group of geographically distributed servers that delivers static files such as images, CSS, JavaScript, and videos from a server close to the user.

### Advantages

- **Lower latency:** Content travels a shorter distance to reach users.
- **Faster loading:** Cached assets are delivered quickly from nearby edge servers.
- **Reduced server load:** The origin server handles fewer requests.
- **Better scalability:** The CDN can handle traffic spikes and large numbers of users.
- **Improved availability:** Content can remain available even if one edge server has an issue.
- **Additional security:** Many CDNs provide HTTPS, DDoS protection, and traffic filtering.

In an interview, a simple answer is:

> A CDN improves website performance by delivering cached content from servers geographically closer to users. It reduces latency and the load on the origin server, improves scalability and availability, and can also provide security features such as HTTPS and DDoS protection.

## What is the difference between event bubbling and capturing in JavaScript?

### Quick revision

When an event occurs on a nested element, it travels through the DOM in phases:

- **Capturing:** The event travels from the outermost ancestor down to the target element.
- **Target:** The event reaches the element where it occurred.
- **Bubbling:** The event travels from the target element back up through its ancestors.

By default, event listeners run during the bubbling phase. To listen during capturing, pass `true` or `{ capture: true }` as the third argument.

```js
parent.addEventListener("click", handleClick, { capture: true });
```

In an interview, a simple answer is:

> Event capturing moves an event from the parent elements down to the target element, while event bubbling moves it from the target element back up to the parent elements. JavaScript uses bubbling by default, but capturing can be enabled with the `capture` option.

## What is `"use strict"` in JavaScript?

### Quick revision

`"use strict"` enables strict mode, which applies stricter rules to JavaScript code and helps catch common mistakes. It can be enabled for an entire script or inside a function.

```js
"use strict";

name = "Aman"; // ReferenceError: name is not defined
```

Strict mode:

- Prevents assignment to undeclared variables.
- Throws errors for some invalid operations that would otherwise fail silently.
- Prevents duplicate parameter names.
- Makes `this` equal to `undefined` in standalone regular functions.
- Disallows some outdated or unsafe JavaScript features.

In an interview, a simple answer is:

> `"use strict"` enables strict mode in JavaScript. It makes the language enforce stricter rules, prevents accidental errors such as creating undeclared global variables, and helps write safer and more reliable code.

## What is the difference between cookies and `localStorage`?

### Quick revision

| Feature | Cookies | `localStorage` |
|---|---|---|
| Storage capacity | Small, usually about 4 KB per cookie | Usually several megabytes per origin |
| Sent with requests | Automatically sent to the server with matching HTTP requests | Not sent automatically |
| Expiration | Can have an expiry time or be session-only | Remains until manually cleared |
| Access | Client-side JavaScript and the server can access them, depending on flags | Client-side JavaScript only |
| Common uses | Sessions, authentication, and server-related preferences | Client-side preferences and non-sensitive cached data |

Both store values as strings. Cookies can be protected with options such as `HttpOnly`, `Secure`, and `SameSite`; sensitive data should not be stored in `localStorage` because JavaScript can access it.

In an interview, a simple answer is:

> Cookies are small pieces of data that are automatically sent with HTTP requests, so they are commonly used for sessions and authentication. `localStorage` stores more data in the browser, is accessible only through client-side JavaScript, and is not sent automatically with requests, so it is useful for client-side preferences and non-sensitive data.

## How can you prevent a bot from scraping your publicly accessible API?

### Quick revision

You cannot completely prevent scraping if an API is publicly accessible, but you can make abuse more difficult and limit its impact:

- Apply **rate limiting** per IP address, user, API key, or account.
- Require **authentication** or API keys where appropriate, with scoped permissions and quotas.
- Use a **Web Application Firewall (WAF)** and bot-detection service.
- Add **CAPTCHA or proof-of-work challenges** for suspicious or high-volume activity.
- Validate requests and expose only the data and fields that clients actually need.
- Use pagination, result limits, and maximum query complexity to prevent expensive requests.
- Monitor traffic, detect unusual patterns, log requests, and block abusive clients.
- Cache public responses to reduce load on the origin server.

Client-side controls such as hiding an API key in frontend code or checking the `Origin` header are not sufficient because browsers and public requests can be inspected or spoofed.

In an interview, a simple answer is:

> A publicly accessible API cannot be made completely scrape-proof, so I would use layered protections: rate limiting, authentication or API keys where appropriate, quotas, pagination, a WAF and bot detection, request validation, monitoring, and temporary blocking of abusive clients. I would also expose only the minimum data required and avoid relying on secrets stored in frontend code.

## What is the Virtual DOM, and how does it work?

### Quick revision

The Virtual DOM is an in-memory JavaScript representation of the UI. Libraries such as React use it to update the real DOM efficiently.

The process generally works as follows:

1. The application creates a Virtual DOM tree that represents the UI.
2. When state or props change, a new Virtual DOM tree is created.
3. The library compares the new tree with the previous tree. This process is called **reconciliation** or **diffing**.
4. It calculates the smallest set of changes needed.
5. It applies only those changes to the real DOM.
6. The browser then updates the page.

The Virtual DOM does not make every update automatically faster. Its benefit is that it helps reduce unnecessary real DOM operations and gives developers a declarative way to describe the UI.

In an interview, a simple answer is:

> The Virtual DOM is an in-memory copy of the real DOM. When state or props change, React creates a new Virtual DOM tree, compares it with the previous one, and updates only the changed parts of the real DOM. This process, called reconciliation, helps minimize expensive DOM operations and keeps UI updates efficient.

## What is state management in React?

### Quick revision

State management in React is the process of storing, updating, and sharing data that controls a component's behavior and UI. When state changes, React re-renders the affected components.

Common approaches include:

- **Local state:** Use `useState` or `useReducer` for data used by one component or a small component tree.
- **Shared state:** Lift state to a common parent or use Context when multiple related components need the same data.
- **Global state:** Use a state library when state is shared across many unrelated components or requires more advanced update logic.
- **Server state:** Manage data fetched from an API with tools that handle caching, loading, errors, and refetching.

State should be updated immutably, and state should be kept as close as possible to the components that use it.

In an interview, a simple answer is:

> State management in React is the way we store, update, and share data that controls the UI. For local state, I use `useState` or `useReducer`; for shared state, I can lift state up or use Context; and for larger applications, I may use a state-management library or a server-state tool. The goal is to keep state predictable and ensure the UI stays synchronized with the data.

## What are some of the most commonly used hooks in React?

### Quick revision

- **`useState`:** Adds and updates local component state.
- **`useEffect`:** Performs side effects such as data fetching, subscriptions, and timers.
- **`useContext`:** Reads values from a React context without passing props through every level.
- **`useRef`:** Stores a mutable value without causing a re-render, or references a DOM element.
- **`useMemo`:** Memoizes an expensive calculated value.
- **`useCallback`:** Memoizes a function reference, often to prevent unnecessary child re-renders.
- **`useReducer`:** Manages complex state transitions using a reducer function.
- **`useId`:** Generates a stable unique ID, commonly for accessible form controls.

In an interview, a simple answer is:

> The most commonly used React hooks are `useState` for local state, `useEffect` for side effects, `useContext` for shared values, `useRef` for DOM references or mutable values, `useMemo` and `useCallback` for memoization, and `useReducer` for complex state logic. Hooks let functional components use state and other React features without writing class components.
