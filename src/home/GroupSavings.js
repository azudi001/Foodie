import React from 'react';
import { View } from 'react-native';
import Space from '../shared/Space';
import Text from '../shared/Text';
import { LAYOUT_HORIZONTAL_PADDING } from '../utils';
import CardList from './CardList';
import SectionHeader from './SectionHeader';

const GroupSavings = ({
    params,
}) => (
    <View style={{
        paddingVertical: 30,

        borderWidth: 1
    }}>
        {/* <View
            style={{
                paddingHorizontal: LAYOUT_HORIZONTAL_PADDING,
            }}
        >
            <SectionHeader
                title='Group Savings'
                withViewButton
            />
        </View>
        <Space size={5} /> */}

        <View style={{
            marginVertical: 10,
            borderWidth: 1,
            borderColor: 'red'
        }}>
            <CardList />
        </View>
    </View>
);

export default GroupSavings;
