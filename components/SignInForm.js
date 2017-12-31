import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { FormLabel, FormInput, Button } from 'react-native-elements'
import axios from 'axios'
import firebase from 'firebase'

const ROOT_URL = 'https://us-central1-rn-swipe.cloudfunctions.net'

class SignInForm extends Component {
  state = {
    phone: '',
    code: ''
  }

  handleSubmit = async () => {
    try {
      let { data } = await axios.post(`${ROOT_URL}/verifyOneTimePassword`, { phone: this.state.phone, code: this.state.code })
      firebase.auth().signInWithCustomToken(data.token)
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <View style={{ margin: 10 }}>
        <Text>Sign In</Text>
        <FormLabel>Phone Number</FormLabel>
        <FormInput
          keyboardType='numeric'
          value={this.state.phone}
          onChangeText={phone => this.setState({ phone })}
        />
        <FormLabel>Code</FormLabel>
        <FormInput
          keyboardType='numeric'
          value={this.state.code}
          onChangeText={code => this.setState({ code })}
        />
        <Button
          title='Submit'
          onPress={this.handleSubmit}
        />
      </View>
    )
  }
}

export default SignInForm
