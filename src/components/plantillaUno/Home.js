import React from 'react';
import PropTypes from 'prop-types';
import {
  BodyTitle,
  Dash,
  SectionTitle,
} from '../../styles/plantillaUnoStyle';
import Dashboard from './Dashboard';
import Sections from '../globales/Sections';
import StartButton from './StartButton';

const Home = ({ visited, pets, page }) => {
  const { section } = page;
  return (
    <>
      <BodyTitle>
        <h1>{visited}</h1>
      </BodyTitle>
      <Dash>
        <SectionTitle>
          {section}
        </SectionTitle>
        <Dashboard
          pets={pets}
        />
      </Dash>
      <Sections
        page={page}
      />
      <StartButton />
    </>
  );
};

Home.propTypes = {
  visited: PropTypes.string.isRequired,
  pets: PropTypes.objectOf(PropTypes.any).isRequired,
  page: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Home;
