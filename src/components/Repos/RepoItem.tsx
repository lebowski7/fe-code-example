import * as React from 'react';
import Octicon from 'react-octicon';
import {IRepo} from '../../store/types';
import {Loader} from '../Loader';

interface IProps {
  repo: IRepo,
  openedRepo?: string,
  handleToggle: (repoName: string) => void
}

export const RepoItem = ({repo, openedRepo, handleToggle}: IProps) => (<div
  className={`repo-wrapper ${repo.name === openedRepo ? 'open' : ''}`}
  onClick={handleToggle.bind(null, repo.name)}
>
  <div className='repo-item'>
    <div className='repo-main'>
      <div className='repo-name'>{repo.name}</div>
      <div className='repo-url'>
        <a target='_blank' href={repo.html_url}>{repo.html_url}</a>
      </div>
      <div className='repo-licence'>
        <span className='label'>Licence:</span>
        {repo.license ? repo.license.name : 'Unknown'}
      </div>
    </div>

    <div className='repo-extra'>
      <div className='repo-issues center'>
        <span className='label'>Issues</span>
        {repo.open_issues_count}
      </div>

      <div className='repo-forks center'>
        <span className='label'>Forks</span>
        {repo.forks}
      </div>

      <div className='repo-watchers center'>
        <span className='label'>Watchers</span>
        {repo.watchers}
      </div>

      <div className='repo-contributors center'>
        <span className='label'>Contributors</span>
        {repo.hasOwnProperty('contributors') ? repo.contributors : <Loader/>}
      </div>
    </div>
  </div>

  {repo.description && <div className='repo-description'>{repo.description}</div>}

  <div className='repo-dropdown'>
    <ul>
      <li>
        <Octicon name='issue-opened'/>
        <a target='_blank' href={`${repo.html_url}/issues`}>Visit repository Issues</a>
      </li>
      <li>
        <Octicon name='git-branch'/>
        <a target='_blank' href={`${repo.html_url}/branches`}>Visit repository Branches</a>
      </li>
      <li>
        <Octicon name='git-pull-request'/>
        <a target='_blank' href={`${repo.html_url}/pulls`}>Visit repository Pull requests</a>
      </li>
    </ul>
  </div>
</div>);
