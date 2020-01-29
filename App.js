import React from 'react';
import { Home, Settings, LoginScreen } from './screens';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation'
import { SafeAreaView, ScrollView, Dimensions, View, Text, StyleSheet, Image } from 'react-native';

const { width } = Dimensions.get('window');


export default class App extends React.Component {
  render() {
    const AppNavigator = createAppContainer(AppDrawerNavigator);
    return (
      <AppNavigator />
    );
  }
}

const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={{
      height: 100, backgroundColor: 'white',
      borderBottomWidth: 2,
      borderBottomColor: '#C43042'
    }}>
      <View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Image source={require("./assets/menu.png")} style={styles.logo}></Image>
          <Text style={styles.text}>Menu</Text>
        </View>

      </View>
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
)


const AppDrawerNavigator = createDrawerNavigator({
  Home,
  Settings,
  LogOut: {
    screen: LoginScreen,
    navigationOptions: ({ navigation }) => ({
      drawerLockMode: 'locked-closed',
    })
  },
}, {
  initialRouteName: 'LogOut',
  contentComponent: CustomDrawerComponent,
  drawerWidth: width * 2 / 3,
  contentOptions: {
    activeTintColor: '#C43042',
    gestureEnabled: false,
    labelStyle: { textTransform: 'uppercase' }
  },
});

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#C43042',
  }, text: {
    fontSize: 30,
    color: '#C43042',
    padding: 40,
    marginTop: -20
  }
})