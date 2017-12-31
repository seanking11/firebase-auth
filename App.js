import React from 'react'
import { Text, View } from 'react-native'
import { Divider } from 'react-native-elements'
import firebase from 'firebase'
import SignUpForm from './components/SignUpForm'
import SignInForm from './components/SignInForm'

export default class App extends React.Component {
  componentDidMount() {
    const config = {
      apiKey: 'AIzaSyA6S39WFVkaFp5japjdiQspDy8VPXjAXYE',
      authDomain: 'rn-swipe.firebaseapp.com',
      databaseURL: 'https://rn-swipe.firebaseio.com',
      projectId: 'rn-swipe',
      storageBucket: 'rn-swipe.appspot.com',
      messagingSenderId: '714500033158'
    }
    firebase.initializeApp(config)
  }
  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <Divider style={{ backgroundColor: 'grey' }} />
        <SignInForm />
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 80
  }
}
