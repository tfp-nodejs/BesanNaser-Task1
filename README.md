# Fetch API Tasks

This repository contains five JavaScript tasks covering the Fetch API, Async/Await, and custom array methods.

## Tasks

### Task 1: Fetch a Single Post
- Send a GET request using the Fetch API.
- Fetch a single post with ID `1`.
- API Endpoint:
  `https://jsonplaceholder.typicode.com/posts/1`

### Task 2: Fetch All Posts
- Modify the previous request to fetch all posts.
- Remove the post ID (`1`) from the API endpoint.
- API Endpoint:
  `https://jsonplaceholder.typicode.com/posts`

### Task 3: Filter Posts by Title Length
- Fetch all posts from the API.
- Use the built-in `filter()` method to select posts whose title length is less than 25 characters.
- Print only the filtered posts to the console.

### Task 4: Implement a Custom Filter Function
- Create a custom `customFilter()` function in a separate file named `utils.js`.
- Use a `for` loop and an `if` condition to implement the filtering logic.
- Do not use JavaScript's built-in `filter()` method inside the custom function.
- Import and use `customFilter()` in `index.js`.
- Filter posts whose title length is less than 25 characters.
- Print only the filtered posts to the console.

### Task 5: Implement Custom Map and Reduce Functions
- Create a custom `customMap()` function in `utils.js`.
- Use a `for` loop to apply the callback function to each array element and return a new array.
- Create a custom `customReduce()` function in `utils.js`.
- Use a `for` loop to accumulate a single result from the array elements.
- Do not use JavaScript's built-in `map()` or `reduce()` methods inside the custom functions.
- Export and import both functions using CommonJS modules.
- Use `customMap()` to extract post titles.
- Use `customReduce()` to count the total number of posts.
- Print the results to the console.

## Technologies Used

- JavaScript
- Fetch API
- Async/Await
- Promises
- Array Filter Method
- Custom Filter Function
- Custom Map Function
- Custom Reduce Function
- For Loop and If Condition
- CommonJS Modules (`require` and `module.exports`)

## How to Run

1. Clone the repository.
2. Open the project folder.
3. Run the following command:

```bash
node index.js
```

## API

[JSONPlaceholder](https://jsonplaceholder.typicode.com/)
