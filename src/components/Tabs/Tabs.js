import React, { Component } from 'react';
import Edit from './Edit/Edit.js';
import '../Tabs/Tabs.css';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
//import 'react-tabs/style/react-tabs.css';

import { store } from '../../index';
import {checkClicked, editData} from '../../actions/actions';
import { connect } from 'react-redux';

class _Tabs extends Component {
    render() {
        const { textOne, textTwo, textThree } = this.props.listText;

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
                    />
                </TabPanel>
                <TabPanel>
                    <Edit
                        text={textTwo}
                        name='textTwo'
                    />
                </TabPanel>
                <TabPanel>
                    <Edit
                        text={textThree}
                        name='texThree'
                    />
                </TabPanel>
            </Tabs>
        );
    }
}

export default connect(
    state => ({
        listText: state.text
    })
)(_Tabs);
