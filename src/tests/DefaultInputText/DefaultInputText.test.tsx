import React from 'react'
import {render,screen} from '@testing-library/react'
import {DefaultInputText} from '../../components/DefaultInputText/DefaultInputText'
import renderer from 'react-test-renderer';
 
test('render standard variant', () => {
    render (<DefaultInputText label='standard' id='standard'  />)
    const inputText = screen.getByTestId("standard");
    expect(inputText).toBeInTheDocument();
} );

test('snapshot test', () =>  {
    const inputText = renderer.create(<DefaultInputText label='outlined' id='outlined' variant='outlined' />)
    .toJSON()
    expect(inputText).toMatchSnapshot();
 });
 
