import React from 'react';
import './LiveViewCards.css';
import { Card } from 'react-bootstrap';

const LiveViewCards = () => {
  return (
    <div className="view-cards container-fluid mt-3">
      <Card className="card">
        <Card.Body>
          <Card.Title className="card-title">50</Card.Title>
          <Card.Text className="card-bottom">ACTIEVE BESTELLINGEN</Card.Text>
        </Card.Body>
      </Card>
      <Card className="card">
        <Card.Body>
          <Card.Title className="card-title">30</Card.Title>
          <Card.Text className="card-bottom">RESTAURANTS</Card.Text>
        </Card.Body>
      </Card>
      <Card className="card">
        <Card.Body>
          <Card.Title className="card-title">120</Card.Title>
          <Card.Text className="card-bottom">GEBRUIKERS</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LiveViewCards;
