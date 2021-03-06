import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultFooter extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <span><a href="http://clientapp.narola.online/HD/BrsoProtype">pm Solution</a> &copy; 2019 creativeLabs.</span>
        <span className="ml-auto">Powered by <a href="http://clientapp.narola.online/HD/BrsoProtype">Pm Solution Protype</a></span>
      </React.Fragment>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
