import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import { Container, Header, IssueList } from './styles';

export default function Profile() {
  return (
    <Container>
      <Header>
        <img src={logoImg} alt="Logo" />
        <span>Welcome, APAD</span>

        <Link className="button" to="/incidents/new">New incident</Link>
        <button>
          <FiPower size={18} color="#E02041" />
        </button>
      </Header>

      <h1>Opened Incidents</h1>
      
      <IssueList>
        <li>
          <strong>Incident:</strong>
          <p>Incident Test</p>

          <strong>Description:</strong>
          <p>Description Test</p>

          <strong>Value:</strong>
          <p>US 999,99</p>

          <button>
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>

        <li>
          <strong>Incident:</strong>
          <p>Incident Test</p>

          <strong>Description:</strong>
          <p>Description Test</p>

          <strong>Value:</strong>
          <p>US 999,99</p>

          <button>
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>

        <li>
          <strong>Incident:</strong>
          <p>Incident Test</p>

          <strong>Description:</strong>
          <p>Description Test</p>

          <strong>Value:</strong>
          <p>US 999,99</p>

          <button>
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>

        <li>
          <strong>Incident:</strong>
          <p>Incident Test</p>

          <strong>Description:</strong>
          <p>Description Test</p>

          <strong>Value:</strong>
          <p>US 999,99</p>

          <button>
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
      </IssueList>
    </Container>
  );
}
