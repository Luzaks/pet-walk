import React from 'react';
import currentTimeHelper from '../../helpers/currentTimeHelper';
import { Head, Properties } from '../../styles/plantillaUnoStyle';

const Header = () => (
  <Head>
    <Properties>
      { currentTimeHelper() }
    </Properties>
    <Properties>
      something
    </Properties>
  </Head>
);

export default Header;
