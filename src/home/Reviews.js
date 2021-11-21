import React from 'react';
import { View, Image } from 'react-native';
import Text from '../shared/Text';
import { reviews } from '../repo/data';
import Space from '../shared/Space';
import { LAYOUT_HORIZONTAL_PADDING, BORDER_RADIUS } from '../utils';

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
            >Most Popular</Text>

            <Space size={18} />

            {reviews.map((review, index) => (
                <View style={{
                    height: 222,
                    marginBottom: 20,
                    // justifyContent: 'flex-end',
                    // alignItems: 'center',
                    // backgroundColor: 'yellow'
                }}>
                    <View style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        height: '100%',
                        width: '100%',
                        borderWidth: 1,
                        borderRadius: BORDER_RADIUS + 4,
                        overflow: 'hidden',
                        padding: 3
                    }}>
                        <Image
                            source={review.bgImg}
                            style={{
                                height: '100%',
                                width: '100%',
                                resizeMode: 'cover',
                                borderRadius: BORDER_RADIUS,
                            }}
                        />
                    </View>

                    <View style={{
                        position: 'absolute',
                        top: 22,
                        left: 22,
                        borderWidth: 1,
                        borderRadius: BORDER_RADIUS,
                        justifyContent: 'center',
                        paddingHorizontal: 14,
                        paddingVertical: 8,
                        backgroundColor: 'yellow',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: '500',
                        }}>Breakfast</Text>
                    </View>

                    <View style={{
                        position: 'absolute',
                        top: 22,
                        right: 22,
                        borderWidth: 1,
                        borderRadius: BORDER_RADIUS,
                        justifyContent: 'center',
                        padding: 8,
                        backgroundColor: 'yellow',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: '500',
                        }}>ICON</Text>
                    </View>

                    <View style={{
                        position: 'absolute',
                        bottom: 22,
                        left: 22,
                        right: 22,
                    }}>
                        <Text style={{
                            fontSize: 18,
                            fontWeight: '600',
                            color: '#fff'
                        }}>
                            Cheese burger made
                        </Text>
                        <Space size={6} />
                        <Text style={{
                            fontSize: 14,
                            fontWeight: '600',
                            color: '#fff'
                        }}>
                            This is one hella cheese burger, you've got no idea where the taste is going to take, trust me, one bite is you go for
                        </Text>
                    </View>
                </View>
            ))}
        </View>
    );
};

export default Reviews;


// <View style={{
//                             flexDirection: 'row',
//                             alignItems: 'center'
//                         }}>
//                             <Text>ICON</Text>
//                             <Space horizontal size={5} />
//                             <Text>4.3</Text>
//                         </View>

//                         <Space horizontal size={8} />

//                         <View style={{
//                             flexDirection: 'row',
//                             alignItems: 'center'
//                         }}>
//                             <Text>ICON</Text>
//                             <Space horizontal size={5} />
//                             <Text>4.3</Text>
//                         </View>
