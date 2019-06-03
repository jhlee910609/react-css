import React, { Component } from 'react';
import './Content.css'
import PropTypes from 'prop-types';

export default class Content extends Component {
    render() {
        return (
            <div className='Content'>
                {this.props.text}
            </div>
        )
    };
};

Content.propTypes = {
 text: PropTypes.string.isRequired,
}

Content.defaultProps = {
    text: "Hello!"
}