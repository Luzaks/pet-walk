import React from 'react';
import PropTypes from 'prop-types';
import {
  BodyTitle,
  Dash,
  SectionTitle,
} from '../../../styles/plantillaUnoStyle';
import Dashboard from './Dashboard';
import Stats from './Stats';
import StartButton from './StartButton';

const Home = ({ visited, pets, page }) => (
  <>
    <BodyTitle>
      <h1>{visited}</h1>
    </BodyTitle>
    <Dash>
      <SectionTitle>
        Dashboard
      </SectionTitle>
      <Dashboard
        pets={pets}
      />
    </Dash>
    <Stats
      page={page}
    />
    <StartButton />
  </>
);

Home.propTypes = {
  visited: PropTypes.string.isRequired,
  pets: PropTypes.objectOf(PropTypes.any).isRequired,
  page: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default Home;
