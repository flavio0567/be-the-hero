import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FlatList, Text, Image } from 'react-native';
import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import { 
  Container, 
  Header, 
  TextBold, 
  Title, 
  Description,
  List,
  PropertyText,
  ValueText,
  DetailLink,
  DetailText,
} from './styles';

export default function Incidents() {
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  function navigateToDetail(incident) {
    navigation.navigate('Detail', { incident });
  }

  async function loadIncidents() {
    if (loading) {
      return;
    }

    if (total > 0 && incidents.length === total) {
      return;
    }

    setLoading(true);

    const response = await api.get('incidents', {
      params: { page }
    });

    setIncidents([...incidents, ...response.data]);
    setTotal(response.headers['x-total-count']);
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadIncidents();
  })

  return (
    <Container>
      <Header>
        <Image source={logoImg} />
        <Text>
          Total of <TextBold>{total} cases</TextBold>.
        </Text> 
      </Header>

      <Title>Welcome!</Title>
      <Description>Select a case to save the day</Description>

      <FlatList
        data={incidents}
        keyExtractor={incident => String(incident.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        renderItem={({ item: incident }) => (
          <List>
            <PropertyText>ONG:</PropertyText>
            <ValueText>{incident.name}</ValueText>

            <PropertyText>Case:</PropertyText>
            <ValueText>{incident.title}</ValueText>

            <PropertyText>Valor:</PropertyText>
            <ValueText>{
              Intl.NumberFormat('en-US', {
              style: 'currency', currency: 'USD'
             }).format(incident.value)}
            </ValueText>

            <DetailLink onPress={() => navigateToDetail(incident)}>
              <DetailText>Details</DetailText>
                <Feather name="arrow-right" size={16} color="#E02041"/>
            </DetailLink>
          </List>
        )}
      />


    </Container>
  );
}
