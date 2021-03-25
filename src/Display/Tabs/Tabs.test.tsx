import * as React from 'react';

import * as renderer from 'react-test-renderer';
import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';

import Tabs, { Alignment, Theme } from './Tabs';
import { ETabThemeVariant } from '../../Utils/StyleConfig';

describe('<Tabs/> render', () => {
  test('should match snapshot', () => {
    const snapshot = renderer
      .create(
        <Tabs>
          <Tabs.Pane tab="Job">Software Engineer</Tabs.Pane>
          <Tabs.Pane tab="Company">Glints</Tabs.Pane>
          <Tabs.Pane tab="Location">Jakarta</Tabs.Pane>
          <Tabs.Pane tab="Salary">Rp 10,000,000</Tabs.Pane>
        </Tabs>
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});

describe('<Tabs/> snapshots with alignment props', () => {
  const matchTabSnapshotsWithAlignment = (alignment: Alignment) => {
    test(`alignment ${alignment}`, () => {
      const { asFragment } = render(
        <Tabs alignment={alignment}>
          <Tabs.Pane tab="Job">Software Engineer</Tabs.Pane>
          <Tabs.Pane tab="Company">Glints</Tabs.Pane>
          <Tabs.Pane tab="Location">Jakarta</Tabs.Pane>
          <Tabs.Pane tab="Salary">Rp 10,000,000</Tabs.Pane>
        </Tabs>
      );
      expect(asFragment()).toMatchSnapshot();
    });
  };

  ['horizontal', 'vertical'].forEach((alignment: Alignment) =>
    matchTabSnapshotsWithAlignment(alignment)
  );
});

describe('<Tabs/> snapshots with theme prop', () => {
  const matchTabSnapshotsWithVariant = (theme: Theme) => {
    test(`colour ${theme}`, () => {
      const { asFragment } = render(
        <Tabs theme={theme}>
          <Tabs.Pane tab="Job">Software Engineer</Tabs.Pane>
          <Tabs.Pane tab="Company">Glints</Tabs.Pane>
          <Tabs.Pane tab="Location">Jakarta</Tabs.Pane>
          <Tabs.Pane tab="Salary">Rp 10,000,000</Tabs.Pane>
        </Tabs>
      );
      expect(asFragment()).toMatchSnapshot();
    });
  };

  Object.values(ETabThemeVariant).forEach(theme =>
    matchTabSnapshotsWithVariant(theme)
  );
});

describe('<Tabs/> should render correctly with an active tab item set', () => {
  const inactiveTabIndex = 0;
  const activeTabIndex = 1;
  test('active tab, to be visible when set', () => {
    const { getAllByRole } = render(
      <Tabs activeTab={activeTabIndex}>
        <Tabs.Pane tab="Job">Software Engineer</Tabs.Pane>
        <Tabs.Pane tab="Company">Glints</Tabs.Pane>
      </Tabs>
    );
    const activeTab = getAllByRole('tab-button');

    expect(activeTab[activeTabIndex]).toHaveStyle('font-weight: bold');
    expect(activeTab[inactiveTabIndex]).not.toHaveStyle('font-weight: bold');
  });
});

describe('<Tabs/> should render correctly when an item is clicked', () => {
  const firstTabIndex = 0;
  const clickedTabIndex = 1;
  const onTabClick = jest.fn();
  test('clicked tab pane should show the correct body and the item should turn active', () => {
    const { getAllByRole, queryByText } = render(
      <Tabs onTabClick={onTabClick}>
        <Tabs.Pane tab="Job">Software Engineer</Tabs.Pane>
        <Tabs.Pane tab="Company">Glints</Tabs.Pane>
      </Tabs>
    );
    const tab = getAllByRole('tab-button');

    expect(tab[firstTabIndex]).toHaveStyle('font-weight: bold');
    expect(tab[clickedTabIndex]).not.toHaveStyle('font-weight: bold');
    expect(onTabClick).not.toHaveBeenCalled();

    fireEvent.click(tab[clickedTabIndex]);
    const Job = queryByText('Software Engineering');
    const Company = queryByText('Glints');

    expect(tab[firstTabIndex]).not.toHaveStyle('font-weight: bold');
    expect(tab[clickedTabIndex]).toHaveStyle('font-weight: bold');
    expect(Job).not.toBeInTheDocument();
    expect(Company).toBeVisible();
    expect(onTabClick).toHaveBeenCalled();
  });
});
