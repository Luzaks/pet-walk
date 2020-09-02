import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/plantillaUno/header';
import { Container } from '../../styles/globalStyles';
import Main from '../../components/plantillaUno/main';
import Footer from '../../components/plantillaUno/footer';

const PlantillaUno = ({ pets, page }) => (
  <Container>
    <Header />
    <Main
      pets={pets}
      page={page}
    />
    <Footer />
  </Container>
);

PlantillaUno.propTypes = {
  pets: PropTypes.objectOf(PropTypes.any).isRequired,
  page: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default PlantillaUno;
