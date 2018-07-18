// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs, text, boolean, number, select,
} from '@storybook/addon-knobs';
import { withViewport } from '@storybook/addon-viewport';
import Provider from './Provider';

import IntroStory from './IntroStory';
import AccordionStory from './AccordionStory';
import BannerStory from './BannerStory';
import BlockquoteStory from './BlockquoteStory';
import BrandStory from './BrandStory';
import ButtonStory from './ButtonStory';
import DividerStory from './DividerStory';
import DropdownStory from './DropdownStory';
import DropDownPointingModal from './DropDownPointingModal';
import FlexCenterStory from './FlexCenterStory';
import HeadingStory from './HeadingStory';
import InformationStory from './InformationStory';
import ItemStory from './ItemStory';
import JobCardStory from './JobCardStory';
import LabelStory from './LabelStory';
import LoadingStory from './LoadingStory';
import MobileMenuStory from './MobileMenuStory';
import PointingModalStory from './PointingModalStory';
import ProfilePictureStory from './ProfilePictureStory';
import PsychedelicTextStory from './PsychedelicTextStory';
import SearchStory from './SearchStory';
import SliderStory from './SliderStory';
import StatsStory from './StatsStory';
import SwipeableStory from './SwipeableStory';
import TextFieldStory from './TextFieldStory';

import { Button } from '../src/Button';

storiesOf('Components', module)
  .addDecorator(story => (
    <Provider>
      {React.createElement(story)}
    </Provider>
  ))
  .addDecorator(withKnobs)
  .add('Introduction', () => <IntroStory />)
  .add('Knob', () => {
    const options = ['primary', 'secondary', 'ghost', 'link'];
    const colors = ['red', 'yellow', 'blue'];
    const value = select('Type', options, 'primary');
    const calorValue = select('Theme', colors, 'red');
    return (
      <Button variant={value} theme={calorValue}>
        Knob
      </Button>
    );
  })
  .add('Accordion', () => <AccordionStory />)
  .add('Banner', () => <BannerStory />)
  .add('Blockquote', () => <BlockquoteStory />)
  .add('Brand', () => <BrandStory />)
  .add('Button', () => <ButtonStory />)
  .add('Job Card', () => <JobCardStory />)
  .add('Divider', () => <DividerStory />)
  .add('Dropdown', () => <DropdownStory />)
  .add('Heading', () => <HeadingStory />)
  .add('Information', () => <InformationStory />)
  .add('Item', () => <ItemStory />)
  .add('Label', () => <LabelStory />)
  .add('Loading', () => <LoadingStory />)
  .add('Pointing Modal', () => <PointingModalStory />)
  .add('DropDownPointingModal', () => <DropDownPointingModal />)
  .add('Profile Picture', () => <ProfilePictureStory />)
  .add('Psychedelic Text', () => <PsychedelicTextStory />)
  .add('Search', () => <SearchStory />)
  .add('Slider', () => <SliderStory />)
  .add('Stats', () => <StatsStory />)
  .add('Text Field', () => <TextFieldStory />);

storiesOf('Mobile Components', module)
  .addDecorator(story => (
    <Provider>
      {React.createElement(story)}
    </Provider>
  ))
  .add('Menu', () => <MobileMenuStory />)
  .add('Swipeable', () => <SwipeableStory />);

storiesOf('Utilitites', module)
  .addDecorator(story => (
    <Provider>
      {React.createElement(story)}
    </Provider>
  ))
  .add('Center (Flex)', () => <FlexCenterStory />);
