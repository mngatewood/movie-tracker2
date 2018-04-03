import React from 'react';
import ReactDOM from 'react-dom';
import { Signup } from './Signup';
import { shallow } from 'enzyme';

describe('Signup', () => {

  let wrapper;
  const event = { preventDefault: jest.fn() };
  const mockHandleChange = jest.fn();
  const mockHandleSubmit = jest.fn();
  const mockUserLogin = jest.fn();
  const mockValidateUser = jest.fn();
  const mockValidateEmail = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <Signup
        validateUser={mockValidateUser}
      />
    );
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('loads with an emtpy state', () => {
    expect(wrapper.state('name')).toEqual('');
    expect(wrapper.state('email')).toEqual('');
    expect(wrapper.state('password')).toEqual('');
    expect(wrapper.state('errorMessage')).toEqual('');
  })

  it('calls validateEmail on handleSubmit', () => {
    const mockState = {
      name: 'me',
      email: 'me@gmail.com',
      password: 'password',
      errorMessage: ''
    }
    wrapper.instance().handleSubmit(event);
    expect(mockValidateEmail).toHaveBeenCalledWith(mockState.email);
  });

  it('validates the email address input', () => {
    expect(wrapper.instance().validateEmail('me@gmail.com')).toEqual(true);
    expect(wrapper.instance().validateEmail('megmail.com')).toEqual(false);
    expect(wrapper.instance().validateEmail('megmailcom')).toEqual(false);
  })

  it('calls userSignup on handleSubmit when email address is valid', () => {
    mockState = {
      name: 'me',
      email: 'me@gmail.com',
      password: 'password',
      errorMessage: ''
    }
    const mockUserSignUp = jest.fn();
    wrapper.instance().handleSubmit(event);
    expect(mockUserSignup).toHaveBeenCalledWith(mockState);
  });

  it('updates state with an error when email is invalid', () => {
    mockState = {
      name: 'me',
      email: 'megmailcom',
      password: 'password',
      errorMessage: ''
    }
    expected = "Please enter a valid email address.";
    wrapper.instance().handleSubmit(event);
    expect.wrapper.state('errorMessage').toEqual(expected)
  });

  it('updates state with an error when email is a duplicate', () => {
    mockState = {
      name: 'me',
      email: 'me@gmail.com',
      password: 'password',
      errorMessage: ''
    }
    expected = "Email address has already been used.";
    wrapper.instance().handleSubmit(event);
    wrapper.instance().handleSubmit(event);
    expect.wrapper.state('errorMessage').toEqual(expected)
  });

  it('resets the state and inputs on handleSubmit', () => {
    const mockState = {
      name: 'me',
      email: 'me@gmail.com',
      password: 'password',
      errorMessage: ''
    };
    const expected = {
      name: '',
      email: '',
      password: '',
      errorMessage: ''
    };
    wrapper.instance().handleSubmit(event);
    expect(wrapper.state()).toEqual(expected);
    expect(wrapper.find('input').value).toEqual('')
  });

  it('updates the state as the user types', () => {
    const expected = {
      name: 'me',
      email: 'me@gmail.com',
      password: 'password',
      errorMessage: ''
    };
    const event1 = {
      target: {
        name: 'name',
        value: 'me'
      }
    };
    const event2 = {
      target: {
        name: 'email',
        value: 'me@gmail.com'
      }
    };
    const event3 = {
      target: {
        name: 'password',
        value: 'password'
      }
    };
    wrapper.instance().handleChange(event1);
    wrapper.instance().handleChange(event2);
    wrapper.instance().handleChange(event3);
    expect(wrapper.state()).toEqual(expected);
  });


  it('updates state with an error message when credentials dont match', () => {
    const expected = "Email and password do not match."
    //mock throw error
    expect(wrapper.state('errorMessage').toEqual(expected));
  });

  it('disables submit button unless both fields contain data', () => {
    let state = {
      name: '',
      email: '',
      password: '',
      errorMessage: ''
    };
    expect(wrapper.find('button').prop('disabled')).toBe(true);
    state = {
      name: 'me',
      email: '',
      password: '',
      errorMessage: ''
    };
    expect(wrapper.find('button').prop('disabled')).toBe(true);
    state = {
      name: 'me',
      email: 'me@gmail.com',
      password: '',
      errorMessage: ''
    };
    expect(wrapper.find('button').prop('disabled')).toBe(true);
    state = {
      name: 'me',
      email: 'me@gmail.com',
      password: 'password',
      errorMessage: ''
    };
    expect(wrapper.find('button').prop('disabled')).toBe(false);
  });

});