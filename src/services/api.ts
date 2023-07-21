import axios from 'axios'

const USER_NAME = 'marcos-roberto-dev'
const REPO_NAME = 'git-blog'

export const apiGitHubUser = axios.create({
  baseURL: `https://api.github.com/users/${USER_NAME}`,
})

export async function apiGitHubSearchIssues<T>(query: string) {
  try {
    return await axios
      .create({
        baseURL: `https://api.github.com/search/issues?q=repo:${USER_NAME}/${REPO_NAME} ${query}`,
      })
      .get<T>('')
  } catch (e) {
    console.log(e)
  }
}

export async function apiGitHubIssues<T>(numberIssue: string) {
  try {
    return await axios
      .create({
        baseURL: `https://api.github.com/repos/${USER_NAME}/${REPO_NAME}/issues/${numberIssue}`,
      })
      .get<T>('')
  } catch (e) {
    console.log(e)
  }
}

export async function apiGitHubMarkdown(content: string) {
  try {
    return await axios
      .create({
        baseURL: 'https://api.github.com/markdown',
      })
      .post('', {
        text: content,
      })
  } catch (e) {
    console.log(e)
  }
}
