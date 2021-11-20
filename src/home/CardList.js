import React, { useEffect } from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';
import { HEADER_HEIGHT, LAYOUT_HORIZONTAL_PADDING } from '../utils';
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

const { height, width } = Dimensions.get('window');

const LIST_HEIGHT = 200;
const CARD_HEIGHT = 280;
const CARD_BORDER_RADIUS = 26;

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
        position: 'relative',
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

    const x = useSharedValue(0);
    const y = useSharedValue(-height);
    // const theta = Math.random() * 20 - 18;
    const theta = randomNumber(-3, 3);
    const rotateZ = useSharedValue(0);
    const rotateX = useSharedValue(30);
    const scale = useSharedValue(1);

    useEffect(() => {
        const delay = index * 250;
        y.value = withDelay(
            delay,
            withTiming(0, {
                duration: 250,
                easing: Easing.inOut(Easing.ease),
            }));

        rotateZ.value = withDelay(
            delay,
            withTiming(theta, {
                duration: 250,
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
            rotateX.value = withTiming(30, { easing: Easing.inOut(Easing.ease) });
        }

    });


    const style = useAnimatedStyle(() => ({
        transform: [
            { perspective: 1500 },
            // { rotateX: `${rotateX.value}deg` },
            { rotateZ: `${rotateZ.value}deg` },
            { translateX: x.value },
            { translateY: y.value },
            { scale: scale.value }
        ]
    }));


    return (
        <View style={{
            ...StyleSheet.absoluteFillObject,

            // justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'yellow'
            // zIndex: 2
        }} pointerEvents="box-none">
            <PanGestureHandler on onGestureEvent={onGestureEvent}>
                <Animated.View style={[styles.cardDefaultStyle, style]}>
                    <Image
                        source={item.img}
                        style={{
                            height: CARD_HEIGHT * .8,
                            width: '100%',
                            resizeMode: 'cover',
                            // borderWidth: 1.5,
                            borderRadius: CARD_BORDER_RADIUS,
                        }}
                    />
                    {/* <View
                        style={{
                            // margin: 10,
                            height: CARD_HEIGHT / 1.3,
                            width: CARD_WIDTH - 18,
                            marginTop: 8,
                            // marginLeft: 8,
                            // marginRight: 8,
                            // backgroundColor: 'purple',
                            borderRadius: CARD_BORDER_RADIUS,
                            borderWidth: 1
                            // margin: 10
                        }}
                    /> */}
                </Animated.View>
            </PanGestureHandler>
        </View>
    );
};

const styles = StyleSheet.create({
    cardDefaultStyle: {
        height: CARD_HEIGHT,
        width: CARD_WIDTH,
        backgroundColor: '#fff',
        borderWidth: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        // margin: 10,
        borderRadius: CARD_BORDER_RADIUS,
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.15,
        shadowRadius: 4.65,
        elevation: 5,
    }
});

export default CardList;
