import React from 'react';
import { Jumbotron, Card, Button, Badge } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './Alumni.css';

function AlumniForm({ name, aImg, emails, major}) {
  return (
        <Card className="Form" style={{ width: '18rem' }}>
          <Card.Img aImg={aImg}/>
          <Card.Body className="Form_card">
            <Card.Title>{name}</Card.Title>
            <Card.Text className="Alumni_txt">{major}<br/>E-mail : {emails}
            </Card.Text>
          </Card.Body>
        </Card>
  );
}

function AlumniImg({aImg, alt}) {
  return (
    <img src={aImg} alt={alt} name={alt} className="AlumniImg" />
  );
}

function AlumniEmail({ email }) {
  return (
    <span className="Alumni_Email">{email} </span>
  );
}

AlumniForm.propTypes = {
  title: PropTypes.string.isRequired,
  aImg: PropTypes.string.isRequired,
  emails: PropTypes.array.isRequired,
  major: PropTypes.string.isRequired
}

AlumniImg.propTypes = {
  aImg: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

AlumniEmail.propTypes = {
  email: PropTypes.string.isRequired
}

export default AlumniForm;