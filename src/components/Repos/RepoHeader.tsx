import * as React from 'react';

export const RepoHeader = () => (<div className='repos-header'>
  <div className='repo-main'>
    <div className='repo-name'>Name</div>
    <div className='repo-url'>URL</div>
    <div className='repo-licence'>License</div>
  </div>

  <div className='repo-extra'>
    <div className='repo-issues center'>Issues</div>
    <div className='repo-forks center'>Forks</div>
    <div className='repo-watchers center'>Watchers</div>
    <div className='repo-contributors center'>Contributors</div>
  </div>
</div>);
