import * as React from 'react';

import StorybookComponent from '../StorybookComponent';

import Divider from '../../src/General/Divider';
import Heading from '../../src/General/Heading';
import Checkbox from '../../src/Input/Checkbox';

const props = {
  Checkbox: [
    {
      name: 'id',
      type: 'string',
      defaultValue: '',
      possibleValue: 'any',
      require: 'yes',
      description: "It's a must to always put ID into checkbox to be clicked.",
    },
    {
      name: 'value',
      type: 'string',
      defaultValue: '',
      possibleValue: 'any',
      require: 'yes',
      description: 'Sets the value of the checkbox.',
    },
    {
      name: 'label',
      type: 'React.ReactNode',
      defaultValue: '',
      possibleValue: 'React.ReactNode',
      require: 'no',
      description: 'Sets the children of the checkbox label.',
    },
    {
      name: 'size',
      type: 'string',
      defaultValue: 'large',
      possibleValue: 'small | large',
      require: 'no',
      description: 'Sets the size of checkbox.',
    },
    {
      name: 'border',
      type: 'boolean',
      defaultValue: 'false',
      possibleValue: 'true | false',
      require: 'no',
      description: 'Sets a border around the checkbox',
    },
  ],
};

const CheckboxStory = () => (
  <React.Fragment>
    <StorybookComponent
      title="Checkbox"
      code="import { Checkbox } from 'glints-aries'"
      propsObject={props}
      usage={'<Checkbox id="software-engineer" value="Software Engineer" />'}
    >
      <Checkbox id="software-engineer" value="Software Engineer" />
      <Checkbox
        id="software-engineer-disabled"
        value="Software Engineer"
        disabled={true}
      />
      <Checkbox
        id="software-engineer-checked-disabled"
        value="Software Engineer"
        checked={true}
        disabled={true}
      />
    </StorybookComponent>

    <Divider theme="grey" />

    <StorybookComponent
      usage={
        '<Checkbox id="software-engineer" value="Software Engineer" size="large" />'
      }
    >
      <Heading style={{ fontSize: '20px', marginBottom: '1em' }}>
        Checkbox with larger size
      </Heading>
      <Checkbox
        id="software-engineer-size"
        value="Software Engineer"
        size="large"
      />
    </StorybookComponent>

    <Divider theme="grey" />

    <StorybookComponent
      usage={
        '<Checkbox id="software-engineer" value="Software Engineer" border={true} />'
      }
    >
      <Heading style={{ fontSize: '20px', marginBottom: '1em' }}>
        Checkbox with border
      </Heading>
      <Checkbox
        id="software-engineer-border"
        value="Software Engineer"
        border={true}
      />
      <Checkbox
        id="software-engineer-border-disabled"
        value="Software Engineer"
        border={true}
        disabled={true}
      />
      <Checkbox
        id="software-engineer-border-checked-disabled"
        value="Software Engineer"
        border={true}
        checked={true}
        disabled={true}
      />
    </StorybookComponent>

    <Divider theme="grey" />

    <StorybookComponent
      usage={
        '<Checkbox id="software-engineer" value="Software Engineer" size="large" border={true} />'
      }
    >
      <Heading style={{ fontSize: '20px', marginBottom: '1em' }}>
        Checkbox with larger size and a border
      </Heading>
      <Checkbox
        id="software-engineer-border-size"
        value="Software Engineer"
        size="large"
        border={true}
      />
    </StorybookComponent>
  </React.Fragment>
);

export default CheckboxStory;
