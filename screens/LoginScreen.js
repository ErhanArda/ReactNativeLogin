import React, { useDebugValue } from 'react';
import { StyleSheet, View, Alert,Image} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Button } from 'react-native-elements';

export class LoginScreen extends React.Component {

    state = { uname: "", pass: "", wlimit: 5 };

    isMet = () => {

        if (String(this.state.uname).length >= this.state.wlimit && String(this.state.pass).length >= this.state.wlimit) {
            this.setState({ uname: "", pass: "" });
            this.props.navigation.navigate('Home', { name: this.state.uname });
        } else if (String(this.state.uname).length < this.state.wlimit) {
            Alert.alert('Alert', 'Please type more then ' + this.state.wlimit + ' character for username:  ' + this.state.uname);
        }
        else {
            Alert.alert('Alert', 'Please type more then ' + this.state.wlimit + ' character for password:  ' + this.state.pass);
        }

    }

    render() {

        return (

            <View style={styles.container}>
                <View style={styles.banner}>
                    <View style={styles.logo}>
                        <Image source={require("../assets/pubinno-logo.png")}></Image>
                    </View>
                </View>
                <View style={styles.login}>
                    <TextInput value={this.state.uname} onChangeText={(text) => this.setState({ uname: text })} style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1}} placeholder="Username" ></TextInput>
                    <TextInput value={this.state.pass} onChangeText={(text) => this.setState({ pass: text })} style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginTop: 8 }} placeholder="Password" secureTextEntry={true}></TextInput>
                    <Button title="LOGIN" type="clear"
                        style={{ height: 40, width: 150, borderColor: 'gray', borderWidth: 1, marginTop: 8, color: 'white', }}
                        onPress={this.isMet}></Button>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    banner: {
        flex: 1, 
        backgroundColor: '#C43042',
    },
    logo:{
        marginTop:60,
        alignItems:'center',
        justifyContent:'center'
    },
    login: {
        flex: 2,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
