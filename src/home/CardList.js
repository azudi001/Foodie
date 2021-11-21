import React, { useEffect } from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';
import { HEADER_HEIGHT, LAYOUT_HORIZONTAL_PADDING, BORDER_RADIUS } from '../utils';
import Arrow from '../../assets/icons/arrow-right.svg';
import { groupSavings } from '../repo/data';
import { theme } from '../theme';
import Text from '../shared/Text';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming,
    Easing,
    withDelay
} from 'react-native-reanimated';
import { snapPoint } from 'react-native-redash';
import Space from '../shared/Space';

const { height, width } = Dimensions.get('window');

const LIST_HEIGHT = 200;
const CARD_HEIGHT = 280;
// const CARD_BORDER_RADIUS = 26;

const CARD_WIDTH = width - 80;
// const side = (width + CARD_WIDTH + 200) / 2;
const SPAN_POINTS = [-width, 0, width];

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const CardList = ({
    params,
}) => (
    <View style={{
        height: CARD_HEIGHT,
        width: width,
        marginVertical: 25,
        marginTop: 40
    }}>
        <View>
            {groupSavings.map((item, index) => (
                <Card
                    key={item.id}
                    {... { item }}
                    {...{ index }}
                />
            ))}
        </View>
    </View>
);




const Card = ({ item, index }) => {

    const DURATION = 250;
    const ROTATEX = 15;

    const DETAIL_SECTION_HEIGHT = 100;

    const x = useSharedValue(width);
    const y = useSharedValue(0);
    // const theta = Math.random() * 20 - 18;
    const theta = randomNumber(-4, 4);
    const rotateZ = useSharedValue(0);
    const rotateX = useSharedValue(ROTATEX);
    const scale = useSharedValue(1);

    const height = useSharedValue(CARD_HEIGHT);
    const opacity = useSharedValue(0);

    useEffect(() => {
        const delay = index * DURATION;
        x.value = withDelay(
            delay,
            withTiming(0, {
                duration: DURATION,
                easing: Easing.inOut(Easing.ease),
            }));

        rotateZ.value = withDelay(
            delay,
            withTiming(theta, {
                duration: DURATION,
                easing: Easing.inOut(Easing.ease),
            }));
    }, [index, rotateZ, theta, y]);


    const onGestureEvent = useAnimatedGestureHandler({
        onStart: (_, ctx) => {
            ctx.x = x.value;
            ctx.y = y.value;
            scale.value = withTiming(1.1, { easing: Easing.inOut(Easing.ease) });
            rotateZ.value = withTiming(0, { easing: Easing.inOut(Easing.ease) });
            rotateX.value = withTiming(0, { easing: Easing.inOut(Easing.ease) });
            height.value = withTiming(CARD_HEIGHT + DETAIL_SECTION_HEIGHT, { easing: Easing.inOut(Easing.ease) });
            opacity.value = withDelay(80, withTiming(1, { easing: Easing.inOut(Easing.ease) }));
        },
        onActive: ({ translationX, translationY }, ctx) => {
            if (translationY < -90) {
                y.value = ctx.y + (-90);
            } else {
                y.value = ctx.y + translationY;
            }
            x.value = ctx.x + translationX;
        },
        onEnd: ({ velocityX, velocityY, translationX, translationY }) => {
            const dest = snapPoint(x.value, velocityX, SPAN_POINTS);
            x.value = withTiming(dest);
            y.value = withTiming(0);
            scale.value = withTiming(1, { easing: Easing.inOut(Easing.ease) });
            // scale.value = withTiming(1, {}, () => {
            //     const isLast = index === 0;
            //     const isSwipedLeftOrRight = dest !== 0;
            //     if (isLast && isSwipedLeftOrRight) {
            //         shuffleBack.value = true;
            //     }
            // });
            rotateZ.value = withTiming(theta, { easing: Easing.inOut(Easing.ease) });
            rotateX.value = withTiming(ROTATEX, { easing: Easing.inOut(Easing.ease) });
            height.value = withTiming(CARD_HEIGHT, { easing: Easing.inOut(Easing.ease) });
            opacity.value = withTiming(0, { duration: 100, easing: Easing.inOut(Easing.ease) });

        }

    });


    const style = useAnimatedStyle(() => ({
        transform: [
            { perspective: 2000 },
            { translateX: x.value },
            { translateY: y.value },
            { rotateX: `${rotateX.value}deg` },
            { rotateZ: `${rotateZ.value}deg` },
            { scale: scale.value }
        ],
        height: height.value
    }));

    const detailSectionStyle = useAnimatedStyle(() => ({
        opacity: opacity.value
    }));


    return (

        <View style={{
            ...StyleSheet.absoluteFillObject,
            alignItems: 'center',
            // overflow: 'hidden',
            // backgroundColor: 'yellow',

        }} pointerEvents="box-none">
            <PanGestureHandler
                onGestureEvent={onGestureEvent}
            >
                <Animated.View style={[styles.cardDefaultStyle, style]}>
                    <Image
                        source={item.img}
                        style={{
                            height: CARD_HEIGHT - 48,
                            width: '100%',
                            resizeMode: 'cover',
                            borderRadius: BORDER_RADIUS,
                        }}
                    />
                    {/* //FIXME: extract a method here */}
                    <View style={{
                        flexDirection: 'row',
                        paddingVertical: 12,
                        paddingHorizontal: 14,
                        // backgroundColor: 'yellow'
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',

                        }}>
                            <Text>
                                ICON
                            </Text>
                            <Space horizontal size={5} />
                            <Text>
                                4.3
                            </Text>
                        </View>
                        <Space horizontal size={8} />
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                            <Text>
                                ICON
                            </Text>
                            <Space horizontal size={5} />
                            <Text>
                                4.3
                            </Text>
                        </View>
                        <Space horizontal size={8} />
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                            <Text>
                                CALIcon
                            </Text>
                            <Space horizontal size={5} />
                            <Text>
                                233
                            </Text>
                        </View>
                        <View style={{ flex: 1 }} />

                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            // marginTop: 10,
                            // marginLeft: 10,
                        }}>

                            <Text style={{
                                fontWeight: '600',
                                fontSize: 16
                            }}>
                                $24.5
                            </Text>
                        </View>
                    </View>

                    <Animated.View style={[styles.detailSectionDefaultStyle, detailSectionStyle]}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: '600'
                        }}>Hawaiian Pizza with Mozzirilla cheese</Text>
                        <Space size={5} />
                        <Text>Hawaiian Pizza with Mozzirilla cheese Hawaiian Pizza with Mozzirilla cheese Hawaiian Pizza with Mozzirilla</Text>
                    </Animated.View>
                </Animated.View>
            </PanGestureHandler>
        </View>
    );
};

const styles = StyleSheet.create({
    cardDefaultStyle: {
        // height: CARD_HEIGHT,
        width: CARD_WIDTH,
        backgroundColor: '#fff',
        borderWidth: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        padding: 3,
        // margin: 10,
        borderRadius: BORDER_RADIUS + 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.15,
        shadowRadius: 4.65,
        elevation: 5,
    },
    detailSectionDefaultStyle: {
        flex: 1,
        paddingHorizontal: 14,
        paddingTop: 8,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        // backgroundColor: 'yellow'
    }
});

export default CardList;
