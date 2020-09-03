import React from 'react';
import PropTypes from 'prop-types';
import {
  RideCont, RideContainer, RideProperties, PositionIcon,
} from '../../styles/plantillaTresStyle';
import walkCardHelper from '../../helpers/walkCardHelper';
import { Image, ImageContainer } from '../../styles/plantillaUnoStyle';

const WalkCard = ({
  map, img, cards, icon,
}) => (
  <RideContainer
    map={map}
  >
    <RideProperties>
      {
        walkCardHelper(cards)
      }
    </RideProperties>
    <RideCont>
      <PositionIcon icon={icon} />
      <Image img={img}>
        <ImageContainer />
      </Image>
    </RideCont>
  </RideContainer>
);

WalkCard.propTypes = {
  map: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(PropTypes.any).isRequired,
  position: PropTypes.string.isRequired,
};

export default WalkCard;
