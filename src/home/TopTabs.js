import React, { useRef, useState } from 'react';
import { View, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { tabData } from '../repo/data';
import { LAYOUT_HORIZONTAL_PADDING } from '../utils';
import Text from '../shared/Text';
import BurgerIcon from '../../assets/icons/burger.svg';

const tabIcon = {
    'All': (<BurgerIcon height={32} width={32} />),
};

const TopTabs = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <View style={{
            height: 50,
            width: '100%',
            borderBottomWidth: 1
        }}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: LAYOUT_HORIZONTAL_PADDING - 20,
                }}
            >
                {tabData.map(({ title }, index) => {

                    return (
                        <Tab
                            key={index}
                            {...{ index }}
                            {...{ title }}
                            {...{ selectedIndex }}
                            {...{ setSelectedIndex }}
                        />
                    );
                })}
            </ScrollView>


        </View>
    );
};


const Tab = ({
    index,
    title,
    selectedIndex,
    setSelectedIndex
}) => {
    const [layoutW, setLayoutW] = useState(0);

    const isSelected = selectedIndex === index;

    const style = {
        fontWeight: isSelected ? 'bold' : 'normal',
    };

    return (
        <TouchableWithoutFeedback
            onPress={() => setSelectedIndex(index)}
        >
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 20,
                marginRight: 1,
            }}
                onLayout={(e) => {
                    setLayoutW(e.nativeEvent.layout.width);
                }}
            >
                < Text style={[
                    {
                        color: 'black',
                        fontSize: 16,
                    },
                    style
                ]}> {title}</Text >
                {
                    isSelected && (
                        <View
                            style={{
                                position: 'absolute',
                                height: 13,
                                width: layoutW - 30,
                                bottom: 10,
                                left: 18,
                                backgroundColor: 'rgba(255, 162, 39, .6)',
                            }}
                        />
                    )
                }
            </View>
        </TouchableWithoutFeedback>
    );
};

export default TopTabs;
