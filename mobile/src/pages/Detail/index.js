import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Image, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import logoImg from '../../assets/logo.png';

import { 
  Container, 
  Header, 
  BackLink,
  IncidentView,
  PropertyText,
  ValueText,
  ContactBox,
  HeroTitle,
  HeroDescription,
  ActionsView,
  DetailLink,
  DetailText,
} from './styles';

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();

  const incident = route.params.incident;
  const message = `Hello ${incident.name}, we are contacting you due to I want to sponsor the case ${incident.title} with ${Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(incident.value)}`;

  function navigationBack() {
    navigation.goBack();
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: `Hero of case: ${incident.title}`,
      recipients: [incident.email],
      body: message,
    })

  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}=${message}`)
  }

  return (
    <Container>
      <Header>
        <Image source={logoImg} />
        
        <BackLink onPress={navigationBack}>
          <Feather name="arrow-left" size={28} color="#E02041"/>
        </BackLink>
      </Header>

      <IncidentView>
        <PropertyText>ONG:</PropertyText>
        <ValueText>{incident.name} of {incident.city} {incident.uf}</ValueText>

        <PropertyText>Case:</PropertyText>
        <ValueText>{incident.title}</ValueText>

        <PropertyText>Valor:</PropertyText>
        <ValueText>{
              Intl.NumberFormat('en-US', {
              style: 'currency', currency: 'USD'
             }).format(incident.value)}
            </ValueText>

        {/* <PropertyText>Datail:</PropertyText>
        <ValueText>{incident.description}</ValueText> */}
      </IncidentView>

      <ContactBox>
        <HeroTitle>Save the day!</HeroTitle>
        <HeroTitle>Be the hero of this case.</HeroTitle>

        <HeroDescription>Contact us:</HeroDescription>

        <ActionsView>
          <DetailLink onPress={sendWhatsapp}>
            <DetailText>Whatsapp</DetailText>
          </DetailLink>

          <DetailLink onPress={sendMail}>
            <DetailText>E-mail</DetailText>
          </DetailLink>
        </ActionsView>
      </ContactBox>

    </Container>
  );
}
