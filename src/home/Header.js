import React from 'react';
import { View } from 'react-native';
import Text from '../shared/Text';
import { HEADER_HEIGHT, LAYOUT_HORIZONTAL_PADDING } from '../utils';
import ArrowLeft from '../../assets/icons/arrow-left.svg';
import Menu from '../../assets/icons/menu.svg';
import { theme } from '../theme';


const Header = ({
    params,
}) => (
    <View style={{
        height: HEADER_HEIGHT,
        paddingHorizontal: LAYOUT_HORIZONTAL_PADDING + 10
    }}>
        <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            <ArrowLeft
                height={24}
                width={24}
                stroke={theme.secondary}
            />

            <Text
                style={{
                    fontSize: 15,
                }}
            >
                My Savings
            </Text>

            <Menu
                height={24}
                width={24}
                stroke={theme.icon}
            />
        </View>
    </View>
);

export default Header;
