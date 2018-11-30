import * as React from 'react';
import { connect } from 'react-redux';

import { ITable, Table } from './components/Table';
import { IState } from './store/IState';

import './App.css';

interface IProps {
  table: ITable,
  organisation: string,
}

const mapStateToProps = (state: IState): IProps => {
  return {
    table: state.content,
    organisation: state.organisation,
  }
};

const Component = (props: IProps) => (
  <div>
    <h1>Public repositories for {props.organisation}</h1>
    <Table rows={props.table} />
  </div>
);


export const App = connect(
  mapStateToProps,
  null
)(Component);
