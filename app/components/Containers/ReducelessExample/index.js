import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';

import * as actionCreators from 'redux/modules';

// See https://github.com/anorudes/reduceless-connect
import { connect } from 'reduceless-connect';

/* component styles */
import s from './styles.css';

class ReducelessExample extends Component {
  static propTypes = {
    settings: PropTypes.object,
    setAppSettings: PropTypes.func,
    showExampleText1: PropTypes.bool,
    showExampleText2: PropTypes.bool,
    showExample3: PropTypes.array,
  };

  handleExampleClick1 = () => {
    const { setAppSettings, settings } = this.props;
    setAppSettings({ showExampleText1: !settings.showExampleText1 }); // see in app/redux/modules/app
  }

  handleExampleClick2 = () => {
    const { setAppSettings, settings } = this.props;
    setAppSettings({ showExampleText2: !settings.showExampleText2 }); // see in app/redux/modules/app
  }

  handleExampleClick3 = () => {
    const { setAppSettings, settings } = this.props;
    setAppSettings('example3.0', { show: !settings.example3[0].show }); // .0 === 0 index // see more in app/redux/modules/app
  }

  handleExampleClick4 = () => {
    const { setAppSettings, settings } = this.props;
    setAppSettings('example3.1', { show: !settings.example3[1].show }); // .0 === 1 index // see more in app/redux/modules/app
  }

  render() {
    const { settings } = this.props;

    return (
      <section className={s.root}>
        <Helmet
          title="Reduceless example"
        />
        Easy change state for ui with <a target="_blank" href="https://github.com/anorudes/reduceless-connect">reduceless-connect</a>.<br />
        See code for more details.<br />

        <br />

        <button onClick={this.handleExampleClick1}>Toggle text example 1</button>
        <button onClick={this.handleExampleClick2}>Toggle text example 2</button>
        <button onClick={this.handleExampleClick3}>Toggle text example 3</button>
        <button onClick={this.handleExampleClick4}>Toggle text example 4</button>

        <br />

        { settings.showExampleText1 && <span>example text 1<br /></span> }
        { settings.showExampleText2 && <span>example text 2<br /></span> }

        { settings.example3[0].show && <span>example text 3<br /></span>}
        { settings.example3[1].show && <span>example text 4<br /></span>}
      </section>
    );
  }
}

// See https://github.com/anorudes/reduceless-connect
// See /app/redux/modules/app/
export default connect(
  ['app'], // working as 'state => state.app' in @connect react-redux
  { ...actionCreators.app }, // working as 'dispatch => bindActionCreators({ ...actionCreators.app }, dispatch)' in @connect react-redux
  [{ setAppSettings: 'app.settings' }], // new method for change app.settings redux state
)(ReducelessExample);
