import fs from 'fs';
import path from 'path';

const owner = 'yokonsan';
const repo = 'midjourney-api';
const branch = 'master';
const outputFile = `${owner}-${repo}-listing.md`;

interface GitHubTreeItem {
  path: string;
  type: string;
}

async function fetchFileContent(fileUrl: string): Promise<string> {
  try {
    const response = await fetch(fileUrl);
    return await response.text();
  } catch (error) {
    console.error(`Error fetching file content: ${fileUrl}`);
    return '';
  }
}

async function generateRepoListing(): Promise<void> {
  try {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/git/trees/${branch}?recursive=1`);
    const data = await response.json();

    console.log('Response data:', data); // Added logging statement

    if (!data.tree || !Array.isArray(data.tree)) {
      console.log('Invalid response data:', data); // Added logging statement
      throw new Error('Invalid response from GitHub API');
    }

    const tree: GitHubTreeItem[] = data.tree;

    let markdownOutput = `# Repository File Listing\n\n`;

    for (const item of tree) {
      if (item.type === 'blob') {
        const fileName = item.path;
        const fileUrl = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${fileName}`;

        const fileContent = await fetchFileContent(fileUrl);
        markdownOutput += `## ${fileName}\n\n\`\`\`\n${fileContent}\n\`\`\`\n\n`;
      }
    }

    fs.writeFileSync(outputFile, markdownOutput);
    console.log(`Repository listing generated: ${outputFile}`);
  } catch (error) {
    console.error('Error generating repository listing:', error);
  }
}

generateRepoListing();
