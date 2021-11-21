import React from 'react';
import { View, ScrollView } from 'react-native';
import { theme } from '../theme';
import CreateSavingButton from './CreateSavingButton';
import Cards from './Cards';
import Header from './Header';
// import PersonalSavings from './PersonalSavings';
import TopTabs from './TopTabs';
import TotalSaved from './Title';
import Text from '../shared/Text';
import Reviews from './Reviews';

const Home = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: theme.primary
        }}>


            <Header />

            <ScrollView>

                <TotalSaved />


                <TopTabs />


                <Cards />

                <View style={{
                    zIndex: -1,
                    // borderTopWidth: 1,

                }}>
                    <Reviews />
                </View>
            </ScrollView>

            {/* <PersonalSavings /> */}



            {/* <CreateSavingButton /> */}


        </View>
    );
};

export default Home;
