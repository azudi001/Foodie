import React from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';
import { LAYOUT_HORIZONTAL_PADDING } from '../utils';
import Arrow from '../../assets/icons/arrow-right.svg';
import { groupSavings } from '../repo/data';
import { theme } from '../theme';
import Text from '../shared/Text';

const { height, width } = Dimensions.get('window');

const LIST_HEIGHT = 200;
const CARD_HEIGHT = 170;
const CARD_BORDER_RADIUS = 26;

const CARD_WIDTH = width - 50;


const Members = ({ members }) => {
    console.log({ members });
    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
        }}>
            {members.map((member, index) => {

                return (
                    <View style={{
                        backgroundColor: theme.card,
                        height: 36,
                        width: 36,
                        borderRadius: 99,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: -10,
                        overflow: 'hidden'
                    }}>
                        <Image
                            source={member.source}
                            style={{
                                height: 30,
                                width: 30,
                                borderRadius: 99,

                                // marginLeft: -(index * 10)
                            }}
                        />
                    </View>
                );
            })}
        </View>
    );
};

const CardList = ({
    params,
}) => (
    <View style={{
        height: LIST_HEIGHT,
        width: '100%',
        // backgroundColor: '#fff',
    }}>

        {groupSavings.map((item, index) => (
            <View style={{
                ...StyleSheet.absoluteFillObject,
                justifyContent: 'center',
                alignItems: 'center',
            }} pointerEvents="box-none">
                <Card {...{ item }} />
            </View>
        ))}
    </View>
);



const Card = ({ item: {
    id,
    title,
    members,
    cost,
    percentage
} }) => {

    const cardStyle = {
        transform: [
            // { rotateX: '30deg' },
            // { perspective: 1500 },
            { perspective: 1500 },
            { rotateX: "30deg" },
            // { translateX: 2 },
            // { translateY: 20 },
            // { rotateY: `${200 / 10}deg` },
            { rotateZ: `-10deg` },
            // { scale: 1 },
        ]
    };

    const cardDefaultStyle = {
        height: CARD_HEIGHT,
        width: CARD_WIDTH,
        backgroundColor: theme.card,
        borderWidth: 1,
        padding: 20,
        borderRadius: CARD_BORDER_RADIUS,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    };


    return (
        <View style={[cardDefaultStyle, cardStyle]}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: '400',
                    }}
                >{title}</Text>
                <Arrow
                    height={24}
                    width={24}
                    fill={theme.teriary}
                />
            </View>

            <View style={{ flex: 1 }} />

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'baseline',
            }}>
                <Members
                    {...{ members }}
                />
                <Text
                    style={{}}
                >$12,500</Text>
            </View>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <Text>Saving Goal</Text>
                <Text>23%</Text>
            </View>
        </View>
    );
};

export default CardList;
