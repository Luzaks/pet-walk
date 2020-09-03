import React from 'react';
import PropTypes from 'prop-types';
import {
  SectionTitle,
  StatsCont,
} from '../../styles/plantillaUnoStyle';
import StatsCard from './StatsCard';

const Stats = ({ page }) => (
  <StatsCont>
    <SectionTitle>Stats</SectionTitle>
    {
      page.map(page => (
        <StatsCard
          key={page.title}
          page={page}
        />
      ))
    }
  </StatsCont>
);

Stats.propTypes = {
  page: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default Stats;
