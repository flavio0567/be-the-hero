import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { Container, Content, Section } from './styles';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  function handleRegister(e) {
    e.preventDefault();
  };


  return (
    <Container>
      <Content>
        <Section>
          <img src={logoImg} alt="Logo" />

          <h1>Register</h1>
          <p>Register to get in the platform to help people to find your ONG.</p>
 
          <Link to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Back to Logon
          </Link>
        </Section>

        <form onSubmit={handleRegister}>
            <input name="ong" placeholder="ONG's name" />
            <input type="email" placeholder="E-mail" />
            <input placeholder="Whatsapp"/>
            <div>
              <input placeholder="City" />
              <input style={{ width: 92 }} placeholder="State" />
            </div>
            <button type="button" onClick={() => {}}>Register</button>
        </form>
      </Content>
    </Container>
  );

}
