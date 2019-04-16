import * as React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import './App.css';
import {Header} from './components/Header';
import {Loader} from './components/Loader';
import {Repos} from './components/Repos';
import {fetchReposRequest} from './store/actions';
import {IState} from './store/IState';

interface IProps {
  organisation: string,
  loading: boolean,
  fetchRepositoriesRequest: () => null
}

class AppComponent extends React.Component<IProps, {}> {

  public componentDidMount(): void {
    this.props.fetchRepositoriesRequest();
  }

  public render() {
    const {organisation, loading} = this.props;
    return <div className='app'>
      {loading && <div className='global-loader'><Loader/> Loading...</div>}
      {!loading && <React.Fragment>
        <Header/>
        <div className='wrapper'>
          <h2>Public repositories for {organisation}:</h2>
          <Repos/>
        </div>
      </React.Fragment>
      }
    </div>
  }
}

const mapStateToProps = (state: IState): IProps => {
  return {
    organisation: state.organisation,
    loading: state.loading,
    fetchRepositoriesRequest: () => null
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchRepositoriesRequest: () => dispatch(fetchReposRequest())
});

export const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent);
