import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/plantillaUno/header';
import { Container } from '../../styles/globalStyles';
import Main from '../../components/plantillaUno/main';
import Footer from '../../components/plantillaUno/footer';

const PlantillaUno = ({ state }) => (
  <Container>
    <Header />
    <Main state={state} />
    <Footer />
  </Container>
);

PlantillaUno.propTypes = {
  state: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default PlantillaUno;
