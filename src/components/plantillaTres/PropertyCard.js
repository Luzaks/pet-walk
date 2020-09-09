import React from 'react';
import PropTypes from 'prop-types';
import {
  PropertyCont,
  WalkAmount,
  WalkProp,
} from '../../styles/plantillaTresStyle';

const PropertyCard = ({ card }) => {
  const { name, amount } = card;
  return (
    <PropertyCont>
      <WalkAmount>{amount}</WalkAmount>
      <WalkProp>{name}</WalkProp>
    </PropertyCont>
  );
};

PropertyCard.propTypes = {
  card: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default PropertyCard;
