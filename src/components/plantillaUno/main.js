import React from 'react';
import PropTypes from 'prop-types';
import { Body } from '../../styles/globalStyles';
import {
  BodyTitle,
  Dash,
} from '../../styles/plantillaUnoStyle';
import Dashboard from './main/Dashboard';

const Main = ({ state }) => (
  <Body>
    <BodyTitle>
      <h1>Home</h1>
    </BodyTitle>
    <Dash>
      <h2>Dashboard</h2>
      <Dashboard state={state} />
    </Dash>
  </Body>
);

Main.propTypes = {
  state: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Main;
