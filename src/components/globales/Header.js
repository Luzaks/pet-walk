import React from 'react';
import currentTimeHelper from '../../helpers/currentTimeHelper';
import { Head } from '../../styles/globalStyles';
import { Properties } from '../../styles/plantillaUnoStyle';
import Icons from './Icons';

const Header = () => (
  <Head>
    <Properties>
      { currentTimeHelper() }
    </Properties>
    <Properties>
      <Icons />
    </Properties>
  </Head>
);

export default Header;
