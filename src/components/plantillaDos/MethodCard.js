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
  const [inset, setInset] = useState('');

  useEffect(() => {
    if (selected) {
      setInset('inset 10px 10px 5px -3px rgba(0,0,0,0.05)');
      setFilled('#1D6CE3');
    }
    else {
      setInset('inset 14px 16px 65px -13px rgb(1241, 243, 246)');
      setFilled('#111212');
    }

  }, []);
  return (
    <Card
      inset={inset}
    >
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
