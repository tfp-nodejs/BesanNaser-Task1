// Task 2: Fetch all posts using the Fetch API with async/await syntax and handle errors.

async function getPost() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
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
