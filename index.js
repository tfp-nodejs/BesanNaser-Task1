// Task 4 ,5 
// Implement a custom filter function to filter posts with titles shorter than 25 characters.
const {
  customFilter,
  customMap,
  customReduce
} = require("./utils");

async function getPost() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();

    // customFilter: Filter posts with titles shorter than 25 characters
    const filteredPosts = customFilter(
      data,
      (post) => post.title.length < 25
    );

    console.log("Filtered Posts:", filteredPosts);


    // customMap: Extract post titles
    const postTitles = customMap(
      data,
      (post) => post.title
    );

    console.log("Post Titles:", postTitles);


    // customReduce: Count the total number of posts
    const totalPosts = customReduce(
      data,
      (count, post) => count + 1,
      0
    );

    console.log("Total Posts:", totalPosts);

  } catch (error) {
    console.error("Request Failed:", error);
  }
}

getPost();
