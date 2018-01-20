import React, { Component } from 'react';
import './Icon.css';
import IconText from './IconText/IconText';
import PropTypes from 'prop-types';

class Icon extends Component {

    static propTypes = {
        icons: PropTypes.array,
        listIcon: PropTypes.shape({
            company: PropTypes.string,
            location: PropTypes.string,
            email: PropTypes.string,
            blog: PropTypes.string
        })
    };

    render() {
        const { icons } = this.props;

        const fullNameIcons = icons.map ((icon) => {
            return "fa fa-" + icon;
        });

        const listIconText = [
            this.props.listIcon.company,
            this.props.listIcon.location,
            this.props.listIcon.email,
            this.props.listIcon.blog
        ];

        return (
            <div className="Icon">
                <IconText texts={listIconText}>
                    {fullNameIcons}
                </IconText>
            </div>
        );
    }
}

export default Icon;
