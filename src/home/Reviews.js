import React from 'react';
import { View, Image } from 'react-native';
import Text from '../shared/Text';
import { reviews } from '../repo/data';
import Space from '../shared/Space';
import { LAYOUT_HORIZONTAL_PADDING } from '../utils';

const Reviews = ({
    params,
}) => {
    return (
        <View style={{
            paddingHorizontal: LAYOUT_HORIZONTAL_PADDING,
            paddingVertical: 20,
        }}>
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: '600',
                }}
            >Popular</Text>

            <Space size={18} />

            {reviews.map((review, index) => (
                <View style={{
                    height: 300,
                    marginBottom: 20,
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                }}>
                    <View style={{
                        height: 240,
                        width: '100%',
                        borderWidth: 1.5,
                        borderRadius: 24,
                        overflow: 'hidden',
                    }}>
                        <Image
                            source={review.bgImg}
                            style={{
                                height: '100%',
                                width: '100%',
                                resizeMode: 'cover',
                            }}
                        />
                    </View>

                    <View style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        borderWidth: 1.5,
                        borderRadius: 24,
                        // height: 90,
                        justifyContent: 'center',
                        padding: 18,
                        width: 250,
                        backgroundColor: '#fff',
                        marginLeft: 10,
                    }}>
                        <Text>I visited Foodie last week with couple of my friends, and I got to say, the food was spectacular and for me, the smokey salmon was just the best.</Text>
                    </View>
                </View>
            ))}
        </View>
    );
};

export default Reviews;
