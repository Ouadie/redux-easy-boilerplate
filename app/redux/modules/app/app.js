import { createReducer } from '../../utils/createReducer';

// Spinner hidden by default
const initialState = {
  spinnerAsyncPage: false,

  // example for reduceless connect
  // see in Containers/ReducelessExample
  settings: {
    showExampleText1: false, // simple example
    showExampleText2: false, // simple example
    example3: [{ // array example
      show: false,
    }, {
      show: false,
    }],
  },
};

// For async components
export default createReducer({
  ['SHOW_SPINNER_ASYNC_PAGE']: state => ({ // show spinner when async component began to load from server
    ...state,
    spinnerAsyncPage: true,
  }),

  ['HIDE_SPINNER_ASYNC_PAGE']: state => ({ // hide spinner after loading component from server
    ...state,
    spinnerAsyncPage: false,
  }),
}, initialState);

export const showSpinnerAsyncPage = () => ({
  type: 'SHOW_SPINNER_ASYNC_PAGE',
});

export const hideSpinnerAsyncPage = () => ({
  type: 'HIDE_SPINNER_ASYNC_PAGE',
});

