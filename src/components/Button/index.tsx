import React from 'react';
import {Container} from './styles';
import EntypoIcons from 'react-native-vector-icons/Entypo';

export default function Button() {
  return (
    <Container>
      <EntypoIcons name="plus" size={22} color="#000"></EntypoIcons>
    </Container>
  );
}
