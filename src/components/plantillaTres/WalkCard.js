import React from 'react';
import PropTypes from 'prop-types';
import {
  RideCont, RideContainer, RideProperties, PositionIcon,
} from '../../styles/plantillaTresStyle';
import sectionsHelper from '../../helpers/sectionsHelper';
import { Image, ImageContainer } from '../../styles/plantillaUnoStyle';

const WalkCard = ({
  map, img, cards, icon, visited,
}) => (
  <RideContainer
    map={map}
  >
    <RideProperties>
      {
        sectionsHelper(visited, cards)
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
  icon: PropTypes.string.isRequired,
  visited: PropTypes.string.isRequired,
};

export default WalkCard;
