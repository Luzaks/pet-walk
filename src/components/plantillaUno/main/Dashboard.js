import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  Image,
  MiniCard,
  PetInfo,
  Text,
  MoodCont,
  Circle,
  BlackText,
} from '../../../styles/plantillaUnoStyle';

const Dashboard = ({ state }) => {
  const {
    name, brand, age, img, mood,
  } = state;

  return (
    <Card>
      <MiniCard>
        <Image img={img} />
      </MiniCard>
      <PetInfo>
        <Text>
          {brand}
        </Text>
        <h3>
          {name}
        </h3>
        <Text>
          {age}
        </Text>
      </PetInfo>
      <MiniCard>
        <MoodCont>
          <Circle />
          <Circle />
          <Circle />
        </MoodCont>
        <BlackText>
          {mood}
        </BlackText>
      </MiniCard>
    </Card>
  );
};

Dashboard.propTypes = {
  state: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Dashboard;
