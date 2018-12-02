import * as React from 'react';
import { IRepo, IRepos } from '../../store/types';
import './Repos.css';
import Octicon from 'react-octicon';
import { fetchContributorsRequest } from "../../store/actions";
import { Dispatch } from "redux";
import {connect} from "react-redux";
import {Loader} from "../Loader";

interface IProps {
  repos: IRepos,
  fetchContributorsRequest: (repoName: string) => null
}

interface IState {
  openedRepo: string,
  repos: IRepos
}

class ReposComponent extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      openedRepo: '',
      repos: []
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  public componentDidMount(): void {
    this.props.repos.map(repo => {
      this.props.fetchContributorsRequest(repo.name);
    });
  }

  public handleToggle = (repoName: string) => {
    this.setState( {
      openedRepo: repoName !== this.state.openedRepo ? repoName : ''
    });
  };

  public render () {
    return (
      <div className="repos">
        <div className="repos-header">
          <div className="repo-main">
            <div className="repo-name">Name</div>
            <div className="repo-url">URL</div>
            <div className="repo-licence">License</div>
          </div>

          <div className="repo-extra">
            <div className="repo-issues center">Issues</div>
            <div className="repo-forks center">Forks</div>
            <div className="repo-watchers center">Watchers</div>
            <div className="repo-contributors center">Contributors</div>
          </div>
        </div>
        <div className="repos-body">
          {this.props.repos.map((repo: IRepo) => (
            <div className={`repo-wrapper ${repo.name === this.state.openedRepo ? 'open' : ''}`} key={repo.name} onClick={this.handleToggle.bind(this, repo.name)}>
              <div className="repo-item">
                <div className="repo-main">
                  <div className="repo-name">{repo.name}</div>
                  <div className="repo-url"><a target="_blank" href={repo.html_url}>{repo.html_url}</a></div>
                  <div className="repo-licence">{repo.license ? repo.license.name : 'Unknown'}</div>
                </div>

                <div className="repo-extra">
                  <div className="repo-issues center">{repo.open_issues_count}</div>
                  <div className="repo-forks center">{repo.forks}</div>
                  <div className="repo-watchers center">{repo.watchers}</div>
                  <div className="repo-contributors center">{repo.contributors ? repo.contributors : <Loader />}</div>
                </div>
              </div>
              {repo.description && <div className="repo-description">{repo.description}</div>}
              <div className="repo-dropdown">
                <ul>
                  <li><Octicon name="issue-opened"/> Issue tracker: <a target="_blank" href={`${repo.html_url}/issues`}>{`${repo.html_url}/issues`}</a></li>
                  <li><Octicon name="git-branch" />Branches: <a target="_blank" href={`${repo.html_url}/branches`}>{`${repo.html_url}/branches`}</a></li>
                  <li><Octicon name="git-pull-request"/>Pull requests: <a target="_blank" href={`${repo.html_url}/pulls`}>{`${repo.html_url}/pulls`}</a></li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IState): IProps => {
  return {
    repos: state.repos,
    fetchContributorsRequest: () => null
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchContributorsRequest: (repoName: string) => dispatch(fetchContributorsRequest(repoName)),
});

export const Repos = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReposComponent);

