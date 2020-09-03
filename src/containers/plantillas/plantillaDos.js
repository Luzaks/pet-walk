import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/globales/header';
import { Container } from '../../styles/globalStyles';
import Main from '../../components/globales/main';
import Footer from '../../components/globales/footer';

const PlantillaDos = ({ visited, pets, page }) => (
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

PlantillaDos.propTypes = {
  visited: PropTypes.string.isRequired,
  pets: PropTypes.objectOf(PropTypes.any).isRequired,
  page: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default PlantillaDos;
