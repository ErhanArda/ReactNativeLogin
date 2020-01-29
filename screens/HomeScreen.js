import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import * as Font from 'expo-font';
export class Home extends React.Component {
    state = {
        fontLoaded: false,
    };
    async componentDidMount() {
        await Font.loadAsync({
            'roboto': require('../assets/fonts/Roboto/Roboto.ttf'),
            'bangers': require('../assets/fonts/Bangers/Bangers.ttf'),

        });

        this.setState({ fontLoaded: true });
    }
    render() {
        return (
            <View style={styles.container}>
                <Header containerStyle={{
                    backgroundColor: '#C43042',
                    justifyContent: 'space-around',
                }}>
                    <Icon color="white" name='menu' onPress={() => this.props.navigation.openDrawer()} />
                    {
                        this.state.fontLoaded ? (
                            <Text style={styles.text}>HOME</Text>) : null
                    }
                </Header>
                <View style={styles.viewStyle}>
                    {
                        this.state.fontLoaded ? (
                            <Text style>Welcome <Text style={ styles.textBangers }>{this.props.navigation.getParam('name', "User")}</Text></Text>) : null
                    }
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        fontFamily: 'roboto', fontSize: 20,color:'white'
    },
    viewStyle:{
        flex: 1, marginTop: 150, alignItems: 'center'
    },
    textBangers:{
        fontFamily: 'bangers', fontSize: 20
    }
})
