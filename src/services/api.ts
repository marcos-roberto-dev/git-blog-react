import axios from 'axios'

const USER_NAME = 'marcos-roberto-dev'
const REPO_NAME = 'git-blog'

export const apiGitHubUser = axios.create({
  baseURL: `https://api.github.com/users/${USER_NAME}`,
})

export async function apiGitHubSearchIssues<T>(query: string) {
  return await axios
    .create({
      baseURL: `https://api.github.com/search/issues?q=repo:${USER_NAME}/${REPO_NAME} ${query}`,
    })
    .get<T>('')
}

export const apiGitHubIssues = axios.create({
  baseURL: `https://api.github.com/repos/${USER_NAME}/${REPO_NAME}/issues`,
})

export const apiGitHubMarkdown = axios.create({
  baseURL: 'https://api.github.com/markdown',
})
