# GitHub Repository File Listing Generator

This is a TypeScript Node.js project that generates a markdown file listing all the files and their contents in a specified GitHub repository. It fetches the repository information using the GitHub API and creates a well-formatted markdown file with the file paths and their respective contents.

## Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (version 18 or above)
- pnpm package manager

## Installation

Clone this repository to your local machine:

```bash
git clone https://github.com/your-username/github-repo-file-listing-generator.git
```

Navigate to the project directory:

```bash
cd github-repo-file-listing-generator
```

Install the project dependencies using pnpm:

```bash
pnpm install
```

## Usage

Open the `src/index.ts` file in a text editor.

Modify the following variables with your desired repository information:

```typescript
const owner = 'your-username';
const repo = 'your-repository';
const branch = 'main';
```

- `owner`: The GitHub username or organization name that owns the repository.
- `repo`: The name of the repository you want to generate the file listing for.
- `branch`: The branch name where the files are located (e.g., 'main', 'master', 'develop').

Save the changes to the `index.ts` file.

Run the project using the following command:

```bash
pnpm start
```

This will compile the TypeScript code and execute the generated JavaScript file.

Once the script finishes running, it will generate a markdown file named `<owner>-<repo>-listing.md` in the project root directory.

## Sample Input

```typescript
const owner = 'octocat';
const repo = 'Hello-World';
const branch = 'master';
```

In this example, the script will fetch the file listing for the "Hello-World" repository owned by the "octocat" user, from the "master" branch.

## Sample Output

The generated markdown file will have the following structure:

```markdown
# Repository File Listing

## file1.txt

```
Contents of file1.txt
```

## dir/file2.js

```javascript
console.log('Hello, world!');
```

...
```

The markdown file will contain a heading for each file in the repository, followed by a code block with the file's contents. The code block will have the appropriate language syntax highlighting based on the file extension.

## Notes

- Make sure you have a stable internet connection to fetch the repository information from the GitHub API.
- If the repository is private, you may need to authenticate with a personal access token to access its contents.
- The generated markdown file will be overwritten each time you run the script with the same repository information.

## Disclaimer

This project is meant to be used as a quick tool to take a glance into a repository, instead of browsing through it file by file. It is not intended to be used in any harmful way or for any malicious purposes. The user is solely responsible for the usage of this tool and the consequences that may arise from it.

## License

This project is licensed under the MIT License.

Feel free to modify and use this project according to your needs. If you have any questions or suggestions, please open an issue or submit a pull request.