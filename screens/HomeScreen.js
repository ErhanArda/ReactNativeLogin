import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header, Icon } from 'react-native-elements';

export class Home extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Header containerStyle={{
                    backgroundColor: '#C43042',
                    justifyContent: 'space-around',
                }}>
                    <Icon name='menu' onPress={() => this.props.navigation.openDrawer()} />
                    <Text>HOME</Text>
                </Header>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Welcome XXX {/* uname*/}</Text>
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
    }
})
