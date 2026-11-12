// Task 3: Fetch all posts and filter posts with titles shorter than 25 characters using the Fetch API.


async function getPost() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();

    const filteredPosts = data.filter(
      (post) => post.title.length < 25
    );

    console.log("Posts with titles shorter than 25 characters:", filteredPosts);

  } catch (error) {
    console.error("Request Failed:", error);
  }
}

getPost();
