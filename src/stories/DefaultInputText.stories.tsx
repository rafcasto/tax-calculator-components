import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {DefaultInputText} from '../components/DefaultInputText/DefaultInputText'
 
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/DefaultInputText',
    component: DefaultInputText,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  } as ComponentMeta<typeof DefaultInputText>;
 
  // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
  const Template: ComponentStory<typeof DefaultInputText> = (args) => <DefaultInputText  {...args}/>;
 
  export const Standard = Template.bind({});
  Standard.args = {
    label:'Standard',
    id:'Standard'
  }
   
  export const Outline = Template.bind({});
  Outline.args = {
    label:'Outline',
    id:'Outline',
    variant: 'outlined'
  }
   
  export const Filled = Template.bind({});
  Filled.args = {
    label:'Filled',
    id:'Filled',
    variant: 'filled'
  }
  