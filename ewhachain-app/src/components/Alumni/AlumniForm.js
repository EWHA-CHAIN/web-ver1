import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './Alumni.css';

function AlumniForm({ name, aImg, emails, major, active}) {
  return (
        <Card className="Form" style={{ width: '18rem' }}>
          <Card.Img aImg={aImg}/>
          <Card.Body className="Form_card">
            <Card.Title>{name}</Card.Title>
            <Card.Text className="Alumni_txt">{major}<br/>E-mail : {emails}
            </Card.Text>
          </Card.Body>
          <Card.Footer className="Alumni_footer">
            <span>{active}</span>
          </Card.Footer>
        </Card>
  );
}

function AlumniImg({aImg, alt}) {
  return (
    <img src={aImg} alt={alt} name={alt} className="AlumniImg" />
  );
}

AlumniForm.propTypes = {
  title: PropTypes.string.isRequired,
  aImg: PropTypes.string.isRequired,
  emails: PropTypes.string.isRequired,
  major: PropTypes.string.isRequired,
  active: PropTypes.string.isRequired
}

AlumniImg.propTypes = {
  aImg: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

export default AlumniForm;