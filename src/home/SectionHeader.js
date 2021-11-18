import React from 'react';
import { View } from 'react-native';
import Text from '../shared/Text';
import { LAYOUT_HORIZONTAL_PADDING } from '../utils';

const SectionHeader = ({
    title,
    withViewButton = false,
}) => (
    <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
    }}>
        <Text style={{

        }}>
            {title}
        </Text>
        {withViewButton && (
            <Text style={{

            }}>
                View all
            </Text>
        )}
    </View>
);

export default SectionHeader;
