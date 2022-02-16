// * https://nodejs.org/docs/latest-v14.x/api/readline.html
const readline = require("readline");
const fs = require("fs");

const readInput = (question) => {
  return new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question(question + "\n", (input) => {
      rl.close();
      resolve(input);
    });
  });
};

/**
 * Post get and write.
 */
function writePosts() {
  let blogData = JSON.parse(fs.readFileSync("posts.json"));
  for (const post of blogData) {
    console.log(
      `********************* ${post.title} STR *********************
${post.content}
********************* ${post.title} END *********************
`
    );
  }
}

async function addPost() {
  const title = await readInput("Title: ");
  const content = await readInput("Content: ");
  let blogData = JSON.parse(fs.readFileSync("posts.json"));
  blogData.push({
    title,
    content,
  });
  fs.writeFileSync("posts.json", JSON.stringify(blogData));
}

readInput("Enter your request:\n[A] add post, [R] read posts.").then(
  (input) => {
    if (input == "A") {
      addPost();
    } else if (input == "R") {
      writePosts();
    } else console.log("Wrong input!");
  }
);
