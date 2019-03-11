import React from 'react';
import {View, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

/**
 * Steps
 * 1. Bottom navigation
 * - Check click game to move to Login screen
 *
 */
class Home extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Trang chủ',
    tabBarIcon: ({ tintColor, focused }) => (
      <MaterialCommunityIcons
        name={'home'}
        // name={focused ? focusedIcon : icon}
        size={26}
        style={{ color: focused ? tintColor : '#ccc' }}
      />
    ),
  };

  render() {
    return (
      <View style={{
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : 'white'
      }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

export default Home;
