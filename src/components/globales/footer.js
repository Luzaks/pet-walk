import React from 'react';
import PropTypes from 'prop-types';
import { Footy } from '../../styles/globalStyles';
import {
  HomeIcon,
  PetIcon,
  WorldIcon,
  AccountIcon,
} from '../svgs/footerSVGS';

const Footer = ({ visited }) => (
  <Footy>
    <HomeIcon visited={visited} />
    <PetIcon />
    <WorldIcon />
    <AccountIcon />
  </Footy>
);

Footer.propTypes = {
  visited: PropTypes.string.isRequired,
};

export default Footer;
