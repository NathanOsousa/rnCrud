import React, { useContext } from 'react'
import { View, FlatList, Alert } from 'react-native'
import { ListItem, Avatar, Button, Icon } from 'react-native-elements'
import style from './stylesList'
import UserContexts from '../contexts/userContext'

const UserList = (props) => {
  const { state, dispatch } = useContext(UserContexts)

  const confirmDeletUser = (user) => {
    Alert.alert(
      `Tem certeza que quer excluir ${user.name}?`, '',
      [
        {
          text: 'Não',
          onPress: () => console.log('não vou excluir usuário'),
        },
        {
          text: 'sim',
          onPress: () => {
            dispatch({
              type: 'deleteUser',
              payload: user
            })
          },
        },
      ]
    )
  }

  const renderItens = ({ item: user }) => {
    return (
      <>
        <ListItem bottomDivider onPress={() => props.navigation.navigate("UserForm", user)} /*editar*/>
          <Avatar source={user.avatar && { uri: user.avatar }} />
          <ListItem.Content>
            <ListItem.Title>{user.name}</ListItem.Title>
            <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
            <View style={style.card}>
              <Button
                type='clear'
                onPress={() => props.navigation.navigate("UserForm", user)}
                icon={<Icon name='edit' size={25} color='yellow' />}
              />
              <Button
                type='clear'
                onPress={() => confirmDeletUser(user)}
                icon={<Icon name='delete' size={25} color='red' />}
              />
            </View>
          </ListItem.Content>
        </ListItem>
      </>
    )
  }

  return (
    <View style={style.container}>
      <FlatList
        data={state.users}
        keyExtractor={(item) => item.id}
        renderItem={renderItens}
      />
    </View>
  )
};

export default UserList;
