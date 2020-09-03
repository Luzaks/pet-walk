import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/globales/Header';
import { Container } from '../styles/globalStyles';
import Main from '../components/globales/Main';
import Footer from '../components/globales/Footer';

const PlantillasTemplate = ({ visited, pets, page }) => (
  <Container>
    <Header />
    <Main
      visited={visited}
      pets={pets}
      page={page}
    />
    <Footer visited={visited} />
  </Container>
);

PlantillasTemplate.propTypes = {
  visited: PropTypes.string.isRequired,
  pets: PropTypes.objectOf(PropTypes.any).isRequired,
  page: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default PlantillasTemplate;
