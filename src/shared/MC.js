import React from 'react';
import { Text, View } from 'react-native';

const MC = ({
    children,
}) => (
    <View style={{
        height: 50,
        width: '100%',
        paddingLeft: 20,
        justifyContent: 'center',
        borderTopWidth: 1.1,
        borderColor: '#fafafa'
    }}>
        {children}
    </View>
);

export default MC;
