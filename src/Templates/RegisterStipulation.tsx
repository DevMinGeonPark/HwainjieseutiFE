import {Button, Center, VStack} from 'native-base';
import React, {useState} from 'react';
import PanelItem from '@src/Atomic/PanelItem';
import withCommontLayout from './withCommontLayout';
import Notice from '@src/Modules/RegisterStipulation/Notice';
import StipulationRegister from '@src/Modules/RegisterStipulation/StipulationRegister';
import StipulationPersonal from '@src/Modules/RegisterStipulation/StipulationPersonal';
import {useStipulationState} from '@src/hooks/stateHooks/useStipulationState';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackScreenProps} from '@Types/NavigationTypes';
import {useUserState} from '@src/contexts/UserContext';
import {Alert} from 'react-native';

const RegisterStipulation = () => {
  const {registerCheck, setRegisterCheck, personalCheck, setPersonalCheck} =
    useStipulationState();

  const [user] = useUserState();

  const navigation = useNavigation<StackNavigationProp<StackScreenProps>>();

  const handleRegisterCheck = () => {
    console.log(registerCheck, personalCheck);
    if (registerCheck && personalCheck) {
      navigation.navigate('RegisterForm', {});
    } else {
      Alert.alert('약관에 동의해주세요.');
    }
  };

  return (
    <VStack space={5}>
      <PanelItem
        title="Register Form"
        icon="sign-in"
        titleSize={undefined}
        iconSize={undefined}
      />
      <Notice />
      <StipulationRegister
        registerCheck={registerCheck}
        setRegisterCheck={setRegisterCheck}
      />
      <StipulationPersonal
        personalCheck={personalCheck}
        setPersonalCheck={setPersonalCheck}
      />
      <Center>
        <Button
          mt={5}
          mx={3}
          bg="#333333"
          borderWidth={1}
          borderColor="black"
          size="xs"
          _text={{fontSize: 14, fontWeight: 'bold', color: 'white'}}
          onPress={handleRegisterCheck}>
          확인
        </Button>
      </Center>
    </VStack>
  );
};

export default withCommontLayout(RegisterStipulation);
