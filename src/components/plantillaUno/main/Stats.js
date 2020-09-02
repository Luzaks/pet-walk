import React from 'react';
import PropTypes from 'prop-types';
import {
  SectionTitle,
  StatsCont,
} from '../../../styles/plantillaUnoStyle';

const Stats = ({ page }) => {
  const { accomplished, energy, objectives } = page;
  return (
    <StatsCont>
      <SectionTitle>Stats</SectionTitle>
      <div>{accomplished}</div>
      <div>{energy}</div>
      <div>{objectives}</div>
    </StatsCont>
  );
};

Stats.propTypes = {
  page: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Stats;
