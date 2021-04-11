import React from 'react';
import {View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import UserList from './View/UserList';
import UserForm from './View/UserForm';
import {UsersProvider} from './contexts/userContext';

const Stack = createStackNavigator();
const App = () => {
  return (
    <UsersProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="UserList"
          screenOptions={screenOptions}>
          <Stack.Screen
            name="UserList"
            component={UserList}
            options={({navigation}) => {
              return {
                title: 'Users',
                headerRight: () => (
                  <View style={{height: 50, width: 100}}>
                    <Button
                      title="+"
                      onPress={() => navigation.navigate('UserForm')}
                    />
                  </View>
                ),
              };
            }}
          />

          <Stack.Screen
            name="UserForm"
            component={UserForm}
            options={{
              title: 'Register User',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UsersProvider>
  );
};

const screenOptions = {
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    // fontWeight: 'bold'
  },
};
export default App;
