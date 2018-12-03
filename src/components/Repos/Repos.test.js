import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {RepoItem} from './RepoItem';
import {ReposComponent} from './index';

Enzyme.configure({adapter: new Adapter()});

const repoMock = {
  description: 'Description',
  forks: 0,
  issues: 0,
  license: {name: 'MIT'},
  name: 'Repo 1',
  url: 'https://github.com/org/repo1',
  watchers: 0,
};

describe('Repos component', () => {
  test('renders', () => {
    const wrapper = shallow(<ReposComponent fetchContributorsRequest={() => null} repos={[repoMock]}/>);

    expect(wrapper.exists()).toBe(true);
  });

  test('renders repo item', () => {
      const wrapper = shallow(<RepoItem handleToggle={() => null} repo={repoMock}/>);

      expect(wrapper.find('.repo-item').length).toEqual(1);
  });

  test('renders repo item opened', () => {
    const wrapper = shallow(<RepoItem handleToggle={() => null} openedRepo={'Repo 1'} repo={repoMock}/>);

    expect(wrapper.find('.repo-wrapper.open').length).toEqual(1);
  });
});