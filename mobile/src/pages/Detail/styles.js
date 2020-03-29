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

export const BackLink = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const IncidentView = styled.View`
  padding: 24px;
  border-radius: 8px;
  background-color: #fff;
  margin-top: 24px;
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

export const ContactBox = styled.View`
  padding: 24px;
  border-radius: 8px;
  background-color: #fff;
  margin-bottom: 16px;
`;

export const HeroTitle = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: #13131a;
  line-height: 30px;
`;

export const HeroDescription = styled.Text`
  font-size: 15px;
  color: #737380;
  margin-top: 16px;
`;

export const ActionsView = styled.View`
  margin-top: 16px;
  flex-direction: row;
  justify-content: space-between;
`;

export const DetailLink = styled.TouchableOpacity`
  background-color: #e02041;
  border-radius: 8px;
  height: 50px;
  width: 48%;
  justify-content: center;
  align-items: center;
`;

export const DetailText = styled.Text`
  font-size: 15px;
  color: #fff;
  font-weight: bold;
`;
