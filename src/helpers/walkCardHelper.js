import React from 'react';
import PropertyCard from '../components/plantillaTres/PropertyCard';

const walkCardHelper = cards => cards.map(card => (
  <PropertyCard key={card.name} card={card} />
));

export default walkCardHelper;
