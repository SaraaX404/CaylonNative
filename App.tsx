



import {config} from '@gluestack-ui/config';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import { SplashComponent, LoginComponent, RegisterComponent } from './screens';
import React = require('react');
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();




function App(): JSX.Element {



  return (
   
      <GluestackUIProvider config={config}>
        <NavigationContainer>
        <Stack.Navigator initialRouteName="splash">
          <Stack.Screen name="splash" component={SplashComponent}  options={{
              headerShown: false,
              animation:'none'
            }}>

          </Stack.Screen>
          <Stack.Screen name="login" component={LoginComponent}  options={{
              headerShown: false,
              animation:'none'
            }}>

          </Stack.Screen>
          <Stack.Screen name="register" component={RegisterComponent}  options={{
              headerShown: false,
              animation:'none'
            }}>

          </Stack.Screen>
        

        </Stack.Navigator>
        </NavigationContainer>
        
       
      </GluestackUIProvider>
   
  );
}

export default App;
