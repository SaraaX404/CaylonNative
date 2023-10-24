import {config} from '@gluestack-ui/config';
import {Text, Box, Image, Button} from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import { TouchableHighlight } from 'react-native';
import React = require('react');






function App(): JSX.Element {
  type Nav = {
    navigate: (value: string) => void;
  };
  const navigation = useNavigation<Nav>()

  

  const navigateLogin =()=>{
   
    navigation.navigate('login')
  }

  const navigateRegister =()=>{
  
    navigation.navigate('register')
  }


  return (
   
      <Box flex={1}>
<Box flex={1} flexDirection='column' alignItems='center' justifyContent='center' mt={'20%'}>
            <Image role='banner' source={'https://i.postimg.cc/m2ft8sBC/White.png'} alt='Logo' w={'80%'} h={'80%'}/>

        </Box>
        <Box flex={2} flexDirection='column' alignItems='center' justifyContent='center' >
         
          <Button onPress={navigateLogin} w={'70%'} h={'15%'} bg='purple'  flexDirection='row' alignItems='center' justifyContent='center' borderRadius={10} borderWidth={1} borderColor='white'>
            <Text fontSize={20} color='white'>Login</Text>
          </Button>
         
          
          <Button onPress={navigateRegister} w={'70%'} h={'15%'} bg='white'  flexDirection='row' alignItems='center' justifyContent='center' borderRadius={10} borderWidth={1} borderColor='purple' mt={'5%'}>
            <Text fontSize={20} color='purple'>Get Started</Text>
          </Button>
        </Box>
      </Box>
        
     
   
  );
}

export default App;
