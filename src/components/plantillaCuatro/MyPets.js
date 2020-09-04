import React from 'react';
import PropTypes from 'prop-types';
import {
  BodyTitle,
  SectionTitle,
} from '../../styles/plantillaUnoStyle';
import {
  Dash,
  DogsCont,
  CatsCont,
  AddButtonCont,
  AddButton,
} from '../../styles/plantillaCuatroStyle';
import sectionsHelper from '../../helpers/sectionsHelper';
import { AddSVG } from '../svgs/myPetsSVGS';

const MyPets = ({ visited, pets, page }) => {
  const {
    headline, section, specie, cards,
  } = page;
  const { type } = pets;
  const margin = '5px 0';
  const marginCat = '10px 0 0 0';
  return (
    <>
      <BodyTitle>
        <h1>{visited}</h1>
      </BodyTitle>
      <Dash>
        <DogsCont>
          <SectionTitle
            margin={margin}
          >
            {section}
          </SectionTitle>
          {
          sectionsHelper(type, pets)
        }
        </DogsCont>
        <CatsCont>
          <SectionTitle
            margin={marginCat}
          >
            {headline}
          </SectionTitle>
          {
          sectionsHelper(specie, cards)
        }
        </CatsCont>
      </Dash>
      <AddButtonCont>
        <AddButton>
          <AddSVG />
        </AddButton>
      </AddButtonCont>
    </>
  );
};

MyPets.propTypes = {
  visited: PropTypes.string.isRequired,
  page: PropTypes.objectOf(PropTypes.any).isRequired,
  pets: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default MyPets;
