import React from 'react';
import { View } from 'react-native';
import Text from '../shared/Text';
import { HEADER_HEIGHT, LAYOUT_HORIZONTAL_PADDING } from '../utils';
import ArrowLeft from '../../assets/icons/arrow-left.svg';
import Menu from '../../assets/icons/menu.svg';
import { theme } from '../theme';
import Space from '../shared/Space';


const Header = ({
    params,
}) => (
    <View style={{
        height: HEADER_HEIGHT,
        paddingHorizontal: LAYOUT_HORIZONTAL_PADDING
    }}>
        <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            {/* <ArrowLeft
                height={24}
                width={24}
                stroke={theme.secondary}
            /> */}
            <View
                style={{
                    height: 50,
                    width: 50,
                    borderTopLeftRadius: 25,
                    borderTopRightRadius: 25,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    backgroundColor: 'purple'
                }}
            />

            {/* <Text
                style={{
                    fontSize: 15,
                }}
            >
                My Savings
            </Text> */}

            {/* <Menu
                height={24}
                width={24}
                stroke={theme.icon}
            /> */}

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <View style={{
                    height: 40,
                    width: 40,
                    borderRadius: 99,
                    backgroundColor: 'purple'
                }} />
                <Space horizontal size={8} />
                <View style={{
                    height: 40,
                    width: 40,
                    borderRadius: 99,
                    backgroundColor: 'purple'
                }} />

            </View>
        </View>
    </View>
);

export default Header;
