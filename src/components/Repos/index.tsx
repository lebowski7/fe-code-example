import * as React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {fetchContributorsRequest} from '../../store/actions';
import {IRepo, IRepos} from '../../store/types';
import {RepoHeader} from './RepoHeader';
import {RepoItem} from './RepoItem';
import './Repos.css';

interface IProps {
  repos: IRepos,
  fetchContributorsRequest: (repoName: IRepos) => null
}

interface IState {
  openedRepo: string,
  repos: IRepos
}

export class ReposComponent extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      openedRepo: '',
      repos: []
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  public componentDidMount(): void {
    this.props.fetchContributorsRequest(this.props.repos);
  }

  public handleToggle = (repoName: string) => {
    this.setState({
      openedRepo: repoName !== this.state.openedRepo ? repoName : ''
    });
  };

  public render() {
    return (
      <div className='repos-wrapper'>
        <div className='repos'>
          <RepoHeader/>
          <div className='repos-body'>
            {this.props.repos.map((repo: IRepo) => (
              <RepoItem
                repo={repo}
                key={repo.name}
                openedRepo={this.state.openedRepo}
                handleToggle={this.handleToggle}
              />
            ))}
          </div>
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
