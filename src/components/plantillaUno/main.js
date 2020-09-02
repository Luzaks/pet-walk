import React from 'react';
import PropTypes from 'prop-types';
import { Body } from '../../styles/globalStyles';
import {
  BodyTitle,
  Dash,
  SectionTitle,
} from '../../styles/plantillaUnoStyle';
import Dashboard from './main/Dashboard';
import Stats from './main/Stats';
import StartButton from './main/StartButton';

const Main = ({ pets, page }) => (
  <Body>
    <BodyTitle>
      <h1>Home</h1>
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
  </Body>
);

Main.propTypes = {
  pets: PropTypes.objectOf(PropTypes.any).isRequired,
  page: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Main;
