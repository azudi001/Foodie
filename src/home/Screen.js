import React from 'react';
import { View } from 'react-native';
import { theme } from '../theme';
import CreateSavingButton from './CreateSavingButton';
import GroupSavings from './GroupSavings';
import Header from './Header';
import PersonalSavings from './PersonalSavings';
import TotalSaved from './Title';

const Home = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: theme.primary
        }}>


            <Header />



            <TotalSaved />



            <GroupSavings />



            <PersonalSavings />



            <CreateSavingButton />


        </View>
    );
};

export default Home;
