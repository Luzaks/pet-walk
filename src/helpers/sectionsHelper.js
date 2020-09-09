import React from 'react';
import StatsCard from '../components/plantillaUno/StatsCard';
import MethodCard from '../components/plantillaDos/MethodCard';
import PropertyCard from '../components/plantillaTres/PropertyCard';
import PetCard from '../components/plantillaCuatro/PetCard';

const sectionsHelper = (section, cards) => {
  switch (section) {
    case 'Stats':
      return (
        cards.map(card => (
          <StatsCard
            key={card.title}
            page={card}
          />
        ))
      );
    case 'Method':
      return (
        cards.map(card => (
          <MethodCard
            key={card.title}
            page={card}
          />
        ))
      );
    case 'Walk':
      return (
        cards.map(card => (
          <PropertyCard
            key={card.name}
            card={card}
          />
        ))
      );
    case 'Dog':
      return (
        <PetCard
          card={cards}
        />
      );
    case 'Cat':
      return (
        cards.map(card => (
          <PetCard
            key={card.name}
            card={card}
          />
        ))
      );
    default:
      return null;
  }
};

export default sectionsHelper;
