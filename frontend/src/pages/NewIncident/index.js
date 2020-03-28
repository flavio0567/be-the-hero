import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Section, Form } from './styles';

import { FiArrowLeft } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
  return (
    <Container>
      <Content>
        <Section>
          <img src={logoImg} alt="Logo" />

          <h1>Enter a New Incident</h1>
          <p>Describe the incident in detail to find a resolving hero.</p>
 
          <Link to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Back to home
          </Link>
        </Section>

        <form>
            <input placeholder="Incident subject" />
            <textarea tplaceholder="Description" />
            <input placeholder="Value US$"/>

            <button type="button" onClick={() => {}}>Cancel</button>
            <button type="submit" onClick={() => {}}>Enter</button>
        </form>
      </Content>
    </Container>
  );
}
