import React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Button } from 'react-native-elements';

export class LoginScreen extends React.Component {

    state = { uname: "", pass: "", wlimit: 5 };

    isMet = () => {

        if (String(this.state.uname).length >= this.state.wlimit && String(this.state.pass).length >= this.state.wlimit) {
            this.setState({ uname: "", pass: "" });
            this.props.navigation.navigate('Home', {/*Uname send */ });
        }else if(String(this.state.uname).length < this.state.wlimit){
            Alert.alert('Alert', 'Please type more then ' + this.state.wlimit + ' character for username:  ' + this.state.uname);
        }
        else {
            Alert.alert('Alert', 'Please type more then ' + this.state.wlimit + ' character for password:  ' + this.state.pass);
        }

    }
 
    render() {

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <TextInput value={this.state.uname} onChangeText={(text) => this.setState({ uname: text })} style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }} placeholder="Username" ></TextInput>
                <TextInput value={this.state.pass} onChangeText={(text) => this.setState({ pass: text })} style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginTop: 8 }} placeholder="Password" secureTextEntry={true}></TextInput>
                <Button title="LOGIN" type="clear"
                style={{ height: 40, width: 150, borderColor: 'gray', borderWidth: 1,marginTop: 8,    color: 'white',}} 
                    onPress={this.isMet}></Button>
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
});

