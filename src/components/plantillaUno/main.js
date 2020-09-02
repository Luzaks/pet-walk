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

const Main = ({ state }) => (
  <Body>
    <BodyTitle>
      <h1>Home</h1>
    </BodyTitle>
    <Dash>
      <SectionTitle>Dashboard</SectionTitle>
      <Dashboard state={state} />
    </Dash>
    <Stats />
    <StartButton />
  </Body>
);

Main.propTypes = {
  state: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Main;
