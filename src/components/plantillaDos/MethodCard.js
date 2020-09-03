import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  ProgressCont,
  StatsDescription,
  StatsTitle,
} from '../../styles/plantillaUnoStyle';
import methodSVGS from '../svgs/methodSVGS';

const MethodCard = ({ page }) => {
  const { title, selected } = page;
  const [filled, setFilled] = useState('');

  useEffect(() => {
    if (selected) setFilled('#1D6CE3');
    else setFilled('#111212');
  }, []);

  return (
    <Card>
      <StatsDescription>
        <StatsTitle
          color={filled}
        >
          {title}
        </StatsTitle>
      </StatsDescription>
      <ProgressCont>
        {methodSVGS(title, filled)}
      </ProgressCont>
    </Card>
  );
};

MethodCard.propTypes = {
  page: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default MethodCard;
