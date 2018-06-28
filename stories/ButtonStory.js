import React from 'react';
import Button from './../src/Button';
import { action } from '@storybook/addon-actions';
import { Variant, Theme } from '../src/Utils/StyleConfig';

const ButtonStories = () => {
  return (
    <div className="doc-mainbar">
      <h1>Buttons</h1>
      <p>Usage: <code>{`import { Button } from 'glints-aries'`}</code></p>
      <table className="doc-table">
        <thead>
          <tr>
            <th colSpan="0">
              Preview
            </th>
            <th>Usage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{padding: 20}}>
              <Button variant={Variant.DEFAULT} onClick={action('default button')}>Default</Button>
            </td>
            <td><code>{`<Button variant="default">Default</Button>`}</code></td>
          </tr>
          <tr>
            <td style={{padding: 20}}>
              <Button variant={Variant.PRIMARY} theme={Theme.RED} onClick={action('Primary button')}>Primary</Button>
            </td>
            <td><code>{`<Button variant="primary" theme="red">Primary</Button>`}</code></td>
          </tr>
          <tr>
            <td style={{padding: 20}}>
              <Button variant={Variant.SECONDARY} onClick={action('job button')}>Secondary</Button>
            </td>
            <td><code>{`<Button variant="secondary">Secondary</Button>`}</code></td>
          </tr>
          <tr>
            <td style={{padding: 20}}>
              <Button variant={Variant.GHOST} theme={Theme.RED}  onClick={action('secondary button')}>Ghost</Button>
            </td>
            <td><code>{`<Button variant="ghost" theme="red">Ghost</Button>`}</code></td>
          </tr>
          <tr>
            <td style={{padding: 20}}>
              <Button variant={Variant.LINK} theme={Theme.RED}  onClick={action('link button')}>Link</Button>
            </td>
            <td><code>{`<Button variant="link" theme="blue">Link</Button>`}</code></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ButtonStories;
