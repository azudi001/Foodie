import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../shared/Text';
import Space from '../shared/Space';
import { theme } from '../theme';

const CONTAINER_HEIGHT = 180;

const BORDER_WIDTH = 380;

const Border = () => (
    <>
        <View
            style={{
                position: 'absolute',
                bottom: 1,
                height: StyleSheet.hairlineWidth,
                backgroundColor: theme.border,
                width: BORDER_WIDTH,
            }}
        />
        <View
            style={{
                position: 'absolute',
                bottom: 0,
                height: 1,
                backgroundColor: theme.border1,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                width: BORDER_WIDTH,
                zIndex: -1,
            }}
        />
    </>
);

const TotalSaved = ({
    params,
}) => (
    <View style={{
        display: 'flex',
        height: CONTAINER_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
    }}>
        <Text style={{
            fontSize: 47,
            fontWeight: '400',
            letterSpacing: 1,
            textAlign: 'center',
        }}>$2,340</Text>

        <Space size={12} />

        <Text
            style={{
                fontSize: 14,
                color: theme.textSecondary,
                textAlign: 'center',
            }}
        >Total saved this month</Text>

        <Border />
    </View>
);

export default TotalSaved;
