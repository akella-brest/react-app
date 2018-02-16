import React, { Component } from 'react';
import Edit from './Edit/Edit.js';
import '../Tabs/Tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { store } from '../../index';
import { checkClicked } from '../../actions/actions';
import PropTypes from 'prop-types';

class TabsElement extends Component {

    static propTypes = {
        textOne: PropTypes.string,
        textTwo: PropTypes.string,
        textThree: PropTypes.string
    };

    render() {
        const { textOne, textTwo, textThree, isDisabled } = this.props;

        return (
            <Tabs>
                <TabList className='Menu'>
                    <Tab onClick={(e) => store.dispatch(checkClicked(e.target.id))}>Main</Tab>
                    <Tab onClick={(e) => store.dispatch(checkClicked(e.target.id))}>Education</Tab>
                    <Tab onClick={(e) => store.dispatch(checkClicked(e.target.id))}>Contacts</Tab>
                </TabList>

                <TabPanel>
                    <Edit
                        text={textOne}
                        name='textOne'
                        isDisabled={isDisabled}
                    />
                </TabPanel>
                <TabPanel>
                    <Edit
                        text={textTwo}
                        name='textTwo'
                        isDisabled={isDisabled}
                    />
                </TabPanel>
                <TabPanel>
                    <Edit
                        text={textThree}
                        name='texThree'
                        isDisabled={isDisabled}
                    />
                </TabPanel>
            </Tabs>
        );
    }
}

export default TabsElement;

