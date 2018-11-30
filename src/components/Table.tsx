import * as React from 'react';

import './Table.css';

export type ITable = IRow[];

export interface IRow {
  name: string
  url: string
  description: string
  license: string
  issues: number
  forks: number
  watchers: number
  contributors?: number
}


interface IProps {
  rows: ITable
}

export const Table = (props: IProps) => (
  <table className="Table">
    <thead>
      <tr>
        <th>Name</th>
        <th>URL</th>
        <th>Description</th>
        <th>License</th>
        <th>Issues</th>
        <th>Forks</th>
        <th>Watchers</th>
        <th>Contributors</th>
      </tr>
    </thead>
    <tbody>
      {props.rows.map((row: IRow) => (
        <tr>
          <td>{row.name}</td>
          <td>{row.url}</td>
          <td>{row.description}</td>
          <td>{row.license}</td>
          <td>{row.issues}</td>
          <td>{row.forks}</td>
          <td>{row.watchers}</td>
          <td>{row.contributors}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
