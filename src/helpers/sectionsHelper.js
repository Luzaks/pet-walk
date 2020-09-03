import React from 'react';
import StatsCard from '../components/plantillaUno/StatsCard';
import MethodCard from '../components/plantillaDos/MethodCard';

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
    default:
      return null;
  }
};

export default sectionsHelper;
