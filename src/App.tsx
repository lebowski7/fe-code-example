import * as React from 'react';
import { connect } from 'react-redux';

import { Repos } from './components/Repos';
import { IState } from './store/IState';

import { Dispatch } from "redux";
import { fetchReposRequest } from "./store/actions";
import { Loader } from "./components/Loader";
import { Header } from "./components/Header";
import './App.css';

interface IProps {
  organisation: string,
  loading: boolean,
  fetchRepositoriesRequest: () => null
}

class Component extends React.Component<IProps, {}> {

  public componentDidMount(): void {
    this.props.fetchRepositoriesRequest();
  }

  public render() {
    const { organisation, loading } = this.props;
    return <div className="app">
      {loading && <div className="global-loader"><Loader /> Loading...</div>}
      {!loading &&
        <React.Fragment>
          <Header />
          <div className="wrapper">
            <h2>Public repositories for <span className="purple">{organisation}</span>:</h2>
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
)(Component);
