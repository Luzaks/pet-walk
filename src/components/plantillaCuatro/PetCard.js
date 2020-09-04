import React from 'react';
import PropType from 'prop-types';
import {
  Card,
  Image,
  ImageContainer,
  MiniCard,
  PetInfo,
  Text,
} from '../../styles/plantillaUnoStyle';
import MyPets from '../svgs/myPetsSVGS';

const PetCard = ({ card }) => {
  const {
    name, brand, age, img,
  } = card;
  const inset = 'inset 14px 16px 65px -13px rgb(1241, 243, 246)';
  return (
    <Card
      inset={inset}
    >
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
        <MyPets />
      </MiniCard>
    </Card>
  );
};

PetCard.propTypes = {
  card: PropType.objectOf(PropType.any).isRequired,
};

export default PetCard;
