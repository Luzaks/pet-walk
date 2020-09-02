import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  StatsDescription,
  Text,
  ProgressCont,
  StatsTitle,
} from '../../../styles/plantillaUnoStyle';
import Progress from '../../svgs/mainSVGS';

const StatsCard = ({ page }) => {
  const {
    title, description, color, endColor, progress,
  } = page;
  return (
    <Card>
      <StatsDescription>
        <StatsTitle>
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
  page: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default StatsCard;
