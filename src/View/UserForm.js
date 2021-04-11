import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import UserContexts from '../contexts/userContext'


const UserForm = ({ route, navigation }) => {
  const [user, setUser] = useState(route.params ? route.params : {})
  const { dispatch } = useContext(UserContexts)

  const handleNewUser = () => {
    dispatch({
      type: user.id ? 'updateUser' : 'createUser',
      payload: user
    })
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <Text>Nome</Text>
      <TextInput
        placeholder="Insira o nome"
        style={styles.textInput}
        onChangeText={(name) => setUser({ ...user, name })}
        value={user.name}
      />

      <Text>Email</Text>
      <TextInput
        placeholder="Insira o email"
        style={styles.textInput}
        onChangeText={(email) => setUser({ ...user, email })}
        value={user.email}
      />

      <Text>URL do avatar</Text>
      <TextInput
        placeholder="Insira URL do avatar"
        style={styles.textInput}
        onChangeText={(avatar) => setUser({ ...user, avatar })}
        value={user.avatar}
      />


      <Button title="Salvar" onPress={() => handleNewUser()} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 12
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 30
  }
})

export default UserForm;