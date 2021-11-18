import React from 'react';
import { View } from 'react-native';
import MC from '../shared/MC';
import { theme } from '../theme';
import CreateSavingButton from './CreateSavingButton';
import GroupSavings from './GroupSavings';
import Header from './Header';
import PersonalSavings from './PersonalSavings';
import TotalSaved from './TotalSaved';

const Home = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: theme.primary
        }}>

            <MC>
                <Header />
            </MC>

            <MC>
                <TotalSaved />
            </MC>

            <MC>
                <GroupSavings />
            </MC>

            <MC>
                <PersonalSavings />
            </MC>

            <MC>
                <CreateSavingButton />
            </MC>

        </View>
    );
};

export default Home;
