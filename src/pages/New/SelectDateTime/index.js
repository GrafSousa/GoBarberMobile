import React from 'react';
import { View } from 'react-native';

import { Background } from '~/components/Background';

// import { Container } from './styles';

function SelectDateTime() {
  return <Background />;
}

SelectDateTime.navigationOptions = {
  title: 'Selecione o horário',
};

export { SelectDateTime };
