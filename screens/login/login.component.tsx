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
  
  Input,
  InputField,
  Text,
} from '@gluestack-ui/themed';
import React from 'react';

export default () => {
  return (
    <Box
      flex={1}
      flexDirection="column"
      alignItems="center"
      >
      <Box flex={1} flexDirection='row' alignItems='center' justifyContent='center'>
      
        <Text fontSize={32} color={'$trueGray800'} pt={'8%'}>
          Welcome Back
        </Text>
      </Box>
      <Box h="$32" w="$72" flex={2}>
        <FormControl
          size="md"
          mt={'6%'}
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
          isRequired={true}>
          <FormControlLabel mb="$1">
            <FormControlLabelText>Username</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField type="text" placeholder="username" />
          </Input>
        </FormControl>
        <FormControl
          size="md"
          mt={'6%'}
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
        <Button bgColor='purple' w={'100%'} h={'10%'} mt={'8%'}>
            <Text color='white'>Login</Text>
        </Button>
      </Box>
    </Box>
  );
};
