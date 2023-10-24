import {
    Box,
    Button,
    FormControl,
    FormControlError,
    FormControlErrorIcon,
    FormControlErrorText,
    FormControlHelper,
    FormControlHelperText,
    FormControlLabel,
    FormControlLabelText,
    ScrollView,
    Image,
    Input,
    InputField,
    Text,
  } from '@gluestack-ui/themed';
  import {launchImageLibrary, launchCamera } from 'react-native-image-picker';
  import React, { useState } from 'react';
import {  TouchableHighlight } from 'react-native';


  
  export default () => {

    const [proPic, setProPic] = useState<string | null>(null)


    const uploadImage = async()=>{
        try {
            const res = await launchCamera({mediaType:'photo'})
            if(res?.assets[0].originalPath){
                setProPic(res.assets[0].originalPath)
            }
            
        } catch (error) {
            console.log(error)
        }
       
      }
    return (
      
<Box
        flex={1}
        flexDirection="column"
        alignItems="center"
        >
        <Box flex={1} flexDirection='column' alignItems='center' justifyContent='center'>
          <Text fontSize={32} color={'$trueGray800'} pt={'8%'}>
            Welcome
          </Text>
        </Box>
        <Box h="$32" w="$72" flex={5}>
        <ScrollView flex={1}>
        <FormControl
            size="md"
            mt={'5%'}
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
            isRequired={true}>
            <FormControlLabel mb="$1">
              <FormControlLabelText>Profile Photo</FormControlLabelText>
            </FormControlLabel>
            <TouchableHighlight onPress={uploadImage} underlayColor="transparent">
                <Image role="banner" alt="pro pic" source={{uri:proPic || 'https://th.bing.com/th/id/R.f8f17e935d16c6627dd37f5c784c3c9e?rik=BeuYz5P3D2eBUg&pid=ImgRaw&r=0&sres=1&sresct=1'}} borderRadius={100}/>
            </TouchableHighlight>
          </FormControl>
        <FormControl
            size="md"
            mt={'5%'}
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
            isRequired={true}>
            <FormControlLabel mb="$1">
              <FormControlLabelText>First Name</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField type="text" placeholder="first name" />
            </Input>
          </FormControl>
          <FormControl
            size="md"
            mt={'5%'}
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
            isRequired={true}>
            <FormControlLabel mb="$1">
              <FormControlLabelText>Last Name</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField type="text" placeholder="last name" />
            </Input>
          </FormControl>
          <FormControl
            size="md"
            mt={'5%'}
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
            isRequired={true}>
            <FormControlLabel mb="$1">
              <FormControlLabelText>Contact Number</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField type="text" placeholder="contact number" />
            </Input>
          </FormControl>
          <FormControl
            size="md"
            mt={'5%'}
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
            isRequired={true}>
            <FormControlLabel mb="$1">
              <FormControlLabelText>Email</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField type="text" placeholder="email" />
            </Input>
          </FormControl>
          <FormControl
            size="md"
            mt={'5%'}
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
            isRequired={true}>
            <FormControlLabel mb="$1">
              <FormControlLabelText>Address Line 01</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField type="text" placeholder="address line 01" />
            </Input>
          </FormControl>
          <FormControl
            size="md"
            mt={'5%'}
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
            isRequired={true}>
            <FormControlLabel mb="$1">
              <FormControlLabelText>Address Line 02</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField type="text" placeholder="address line 02" />
            </Input>
          </FormControl>
          <FormControl
            size="md"
            mt={'5%'}
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
            isRequired={true}>
            <FormControlLabel mb="$1">
              <FormControlLabelText>Country</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField type="text" placeholder="country" />
            </Input>
          </FormControl>
          <FormControl
            size="md"
            mt={'5%'}
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
            isRequired={true}>
            <FormControlLabel mb="$1">
              <FormControlLabelText>State</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField type="text" placeholder="state" />
            </Input>
          </FormControl>
          <FormControl
            size="md"
            mt={'5%'}
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
            isRequired={true}>
            <FormControlLabel mb="$1">
              <FormControlLabelText>City</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField type="text" placeholder="city" />
            </Input>
          </FormControl>
          <FormControl
            size="md"
            mt={'5%'}
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
            isRequired={true}>
            <FormControlLabel mb="$1">
              <FormControlLabelText>Zip Code</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField type="text" placeholder="zip code" />
            </Input>
          </FormControl>

          <FormControl
            size="md"
            mt={'5%'}
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
            isRequired={true}>
            <FormControlLabel mb="$1">
              <FormControlLabelText>Password</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField type="password" placeholder="password" />
            </Input>
            <FormControlHelper>
              <FormControlHelperText>
                Must be at least 6 characters.
              </FormControlHelperText>
            </FormControlHelper>
            <FormControlError>
              <FormControlErrorIcon />
              <FormControlErrorText>
                At least 6 characters are required.
              </FormControlErrorText>
            </FormControlError>
          </FormControl>
          <Button bgColor='purple' w={'100%'} h={'5%'} my={'10%'}>
              <Text color='white'>Login</Text>
          </Button>
          </ScrollView> 
        </Box>
      </Box>
      
 
       
     
    );
  };
  