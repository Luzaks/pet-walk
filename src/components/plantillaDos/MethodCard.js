import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  ProgressCont,
  StatsDescription,
  StatsTitle,
} from '../../styles/plantillaUnoStyle';

const MethodCard = ({ page }) => {
  const { title } = page;
  return (
    <Card>
      <StatsDescription>
        <StatsTitle>
          {title}
        </StatsTitle>
      </StatsDescription>
      <ProgressCont>
        miaw
      </ProgressCont>
    </Card>
  );
};

MethodCard.propTypes = {
  page: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default MethodCard;
