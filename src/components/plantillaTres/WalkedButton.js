import React from 'react';
import PropTypes from 'prop-types';
import {
  ButtonCont,
  FinishedButton,
} from '../../styles/plantillaUnoStyle';

const WalkedButton = ({ section }) => (
  <ButtonCont>
    <FinishedButton>
      {section}
    </FinishedButton>
  </ButtonCont>
);

WalkedButton.propTypes = {
  section: PropTypes.string.isRequired,
};

export default WalkedButton;
