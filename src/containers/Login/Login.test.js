import React from 'react';
import ReactDOM from 'react-dom';
import { Login } from './Login';
import { shallow } from 'enzyme';

describe('Login', () => {

  let wrapper;
  const mockHandleChange = jest.fn();
  const mockHandleSubmit = jest.fn();
  const mockUserLogin = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <Login
        name={''}
        email={''}
        handleChange={mockHandleChange}
        handleSubmit={mockHandleSubmit}
      />
    );
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('loads with an emtpy state', () => {
    expect(wrapper.state('email')).toEqual('');
    expect(wrapper.state('password')).toEqual('');
  })


  it('updates the state as the user types', () => {
    const expected = {
      email: 'me@gmail.com',
      password: 'password'
    };
    const event1 = {
      target: {
        name: 'email',
        value: 'me@gmail.com'
      }
    };
    const event2 = {
      target: {
        name: 'password',
        value: 'password'
      }
    };
    wrapper.instance().handleChange(event1);
    wrapper.instance().handleChange(event2);
    expect(wrapper.state()).toEqual(expected);
  });

  it('calls userLogin with correct parameters on handleSubmit', () => {
    const mockState =  {
      email: 'me@gmail.com',
      password: 'password'
    };
    const spy = jest.spyOn(wrapper.instance(), 'userLogin');
    const event = { preventDefault: jest.fn() };
    wrapper.instance().handleSubmit(event);
    expect(mockUserLogin).toHaveBeenCalled();
  });
  
  it('displays an error message when credentials dont match', () => {
    const expected = "Email and password do not match."
    //mock throw error
    expect(wrapper.state('errorMessage').toEqual(expected));
  });

  it('disables submit button unless both fields contain data', () => {

  })

});