export interface IRepo {
  id: number
  name: string
  html_url: string
  description: string
  license: any
  open_issues_count: number
  forks: number
  watchers: number
  contributors?: number
}

export type IRepos = IRepo[];

export interface IContributorsRequest {
  repoName: string,
  contributors: number
}
