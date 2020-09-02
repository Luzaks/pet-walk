import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  Image,
  MiniCard,
  PetInfo,
  Text,
} from '../../../styles/plantillaUnoStyle';

const Dashboard = ({ state }) => {
  const {
    name, brand, age, img,
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
      <MiniCard>2</MiniCard>
    </Card>
  );
};

Dashboard.propTypes = {
  state: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Dashboard;
