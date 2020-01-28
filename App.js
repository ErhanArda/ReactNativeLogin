import React from 'react';
import { Home, Settings, LoginScreen } from './screens';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation'
import { SafeAreaView, ScrollView, Dimensions, View, Text, StyleSheet } from 'react-native';

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
      borderBottomColor: 'black'
    }}>
      <Text style={{ textAlign: 'center', fontSize: 40, padding: 20 }}>Menu</Text>
    </View>
    <ScrollView>
      <DrawerItems style={{
        borderBottomWidth: 2,
        borderBottomColor: 'black'
      }} {...props} />
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
    activeTintColor: 'grey',
    gestureEnabled: false,
    labelStyle: { textTransform: 'uppercase' }
  },
});
