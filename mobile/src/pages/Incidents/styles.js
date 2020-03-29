import { Platform } from 'react-native';
import styled from 'styled-components/native';


export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  padding: 60px 30px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 15px;
  color: #737380;
`;

export const TextBold = styled.Text`
  font-weight: bold;
`;

export const Title = styled.Text`
  font-size: 30px;
  margin-bottom: 16px;
  margin-top: 48px;
  color: #13131a;
  font-weight: bold;
`;

export const Description = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: #737380;
`;


export const List = styled.View`
  margin-top: 32;
  padding: 24px;
  border-radius: 8px;
  background-color: #fff;
  margin-bottom: 16px;

`;

export const PropertyText = styled.Text`
  font-size: 14px;
  color: #41414d;
  font-weight: bold;
`;

export const ValueText = styled.Text`
  margin-top: 8px;
  margin-bottom: 24px;
  font-size: 15px;
  color: #737380;
`;

export const DetailLink = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;


export const DetailText = styled.Text`
  font-size: 15px;
  color: #e02041;
  font-weight: bold;
`;
