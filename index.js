// Task 4: Implement a custom filter function to filter posts with titles shorter than 25 characters.

const customFilter = require("./utils");

async function getPost() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();

    const filteredPosts = customFilter(
      data,
      (post) => post.title.length < 25
    );

    console.log("Filtered Posts:", filteredPosts);

  } catch (error) {
    console.error("Request Failed:", error);
  }
}

getPost();