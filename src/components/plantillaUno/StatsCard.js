import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  StatsDescription,
  Text,
  ProgressCont,
  StatsTitle,
} from '../../styles/plantillaUnoStyle';
import Progress from '../svgs/mainSVGS';

const StatsCard = ({ page }) => {
  const {
    title, description, color, endColor, progress, selected,
  } = page;
  const [filled, setFilled] = useState('');
  const [inset, setInset] = useState('');

  useEffect(() => {
    if (selected) {
      setInset('inset 10px 10px 5px -3px rgba(0,0,0,0.05)');
      setFilled('#1D6CE3');
    } else {
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
        <Text>
          {description}
        </Text>
      </StatsDescription>
      <ProgressCont>
        <Progress
          color={color}
          endColor={endColor}
          progress={progress}
        />
      </ProgressCont>
    </Card>
  );
};

StatsCard.propTypes = {
  page: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default StatsCard;
