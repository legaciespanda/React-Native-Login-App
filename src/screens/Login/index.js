import React from 'react';
import {View, Text, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Hyperlink from 'react-native-hyperlink';

import Background from './Background';
import Fields from './Fields';
import styles from './styles';

const logoSrc = require('../../assets/images/logo.png');

class Login extends React.Component {

  render() {
    return (
      <Background style={styles.loginContainer}>
        <View style={[{
          flex : 2
        }, styles.logoImageContainer]}>
          <Animatable.Image style={styles.logoImage}
                            animation={'bounceIn'}
                            duration={1200}
                            delay={200}
                            source={logoSrc} />
        </View>
        <View style={[{flex : 3}, styles.fieldContainer]}>
          <Animatable.Text  animation={'fadeInUp'}
                            // duration={2000}
                            // delay={200}
                            style={styles.mainTitle}>Chào buổi sáng</Animatable.Text>
          <Animatable.Text animation={'fadeInUp'}
                           delay={100}
                           style={[styles.desTitle, {
                             marginTop : 8
                           }]}>Đăng nhập để truy cập tài khoản của bạn</Animatable.Text>
          <Fields/>
          <View style={[
            // {flex : 1},
            {
              marginTop : 33,
              // backgroundColor : 'red'
            },
            styles.bottomContainer]}>
            <Text style={styles.bottomContainerText}>Bạn chưa có tài khoản?</Text>
            <Hyperlink linkDefault={ true }>
              <Text style={styles.bottomContainerLink}>Đăng ký tại đây</Text>
            </Hyperlink>
          </View>
        </View>
      </Background>
    );
  }
}

export default Login;