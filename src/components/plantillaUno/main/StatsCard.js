import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  StatsDescription,
  Text,
  ProgressCont,
} from '../../../styles/plantillaUnoStyle';
import Progress from '../../svgs/mainSVGS';

const StatsCard = ({ page }) => {
  const {
    title, description, colorOne, colorTwo,
  } = page;
  return (
    <Card>
      <StatsDescription>
        <h3>
          {title}
        </h3>
        <Text>
          {description}
        </Text>
      </StatsDescription>
      <ProgressCont>
        <Progress
          start={colorOne}
          end={colorTwo}
        />
      </ProgressCont>
    </Card>
  );
};

StatsCard.propTypes = {
  page: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default StatsCard;
