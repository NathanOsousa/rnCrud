import React from 'react';
import { View, FlatList } from 'react-native';
import users from '../data/users'
// import { Container } from './styles';

const UserList = (props) => {

  const renderItens = () => {
    return (
      <Text> {users.name} - {users.email}</Text>
    )
  }
  console.log("🚀 ~ file: UserList.js ~ line 24 ~ UserList ~ users", users)

  return (
    <View>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={renderItens}
      />
    </View>
  ),
};

export default UserList;
