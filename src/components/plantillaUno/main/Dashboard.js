import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  ImageContainer,
  Image,
  MiniCard,
  PetInfo,
  Text,
  MoodCont,
  Circle,
  BlackText,
} from '../../../styles/plantillaUnoStyle';

const Dashboard = ({ pets }) => {
  const {
    name, brand, age, img, mood,
  } = pets;
  return (
    <Card>
      <MiniCard>
        <Image img={img}>
          <ImageContainer />
        </Image>
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
  pets: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Dashboard;
