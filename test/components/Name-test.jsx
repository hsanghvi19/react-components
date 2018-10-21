import React from 'react';
import { Name } from '../../src/';
import { mount, unmount } from '../util';
import data from '@solid/query-ldflex';

data.resolve.mockImplementation(async (path) => ({
  'user.name': 'The User',
})[path]);

describe('Name', () => {
  it('renders a name with src', async () => {
    const name = await mount(<Name src="user"/>);
    expect(name.text()).toBe('The User');
    await unmount(name);
  });

  it('renders a name with children', async () => {
    const name = await mount(<Name src="other">default</Name>);
    expect(name.text()).toBe('default');
    await unmount(name);
  });
});
