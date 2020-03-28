import React from 'react';
import { Link } from 'react-router-dom';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import { FiLogIn } from 'react-icons/fi';

import { Container } from './styles';

export default function Logon() {
  return (
    <Container>
      <section type="form">
        <img src={logoImg} alt="Logo"/>

        <form>
          <h1>Logon</h1>

          <input type="text" placeholder="Your ID" />
          <button className="button" type="submit" >Enter</button>

          <Link to="/register">
            <FiLogIn size={16} color="#E02041" />
            Not registered
          </Link>

        </form>
      </section>

      <img src={heroesImg} alt="Heroes" />
    </Container>
  );
}
