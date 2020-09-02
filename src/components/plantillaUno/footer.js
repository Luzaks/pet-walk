import React from 'react';
import { Footy } from '../../styles/globalStyles';
import {
  HomeIcon,
  PetIcon,
  WorldIcon,
  AccountIcon,
} from '../svgs/footerSVGS';

const Footer = () => (
  <Footy>
    <HomeIcon />
    <PetIcon />
    <WorldIcon />
    <AccountIcon />
  </Footy>
);

export default Footer;
