import React from 'react';
import PropTypes from 'prop-types';
import {
  SectionTitle,
  StatsCont,
} from '../../styles/plantillaUnoStyle';
import sectionsHelper from '../../helpers/sectionsHelper';

const Sections = ({ page }) => {
  const { cards, section } = page;
  return (
    <StatsCont>
      <SectionTitle>{section}</SectionTitle>
      {
        sectionsHelper(section, cards)
      }
    </StatsCont>
  );
};

Sections.propTypes = {
  page: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Sections;
