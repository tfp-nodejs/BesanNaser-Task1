  // Task 1 use async/await syntax to make the same GET request using Fetch API

async function getPost() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();

    console.log("Response Data:", data);
  } catch (error) {
    console.error("Request Failed:", error);
  }
}

getPost();

