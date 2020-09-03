import Pett from '../assets/images/dog.png';

const initialState = {
  pets: {
    name: 'Milou',
    brand: 'American Pit Bull Terrier',
    age: '6 months old',
    img: Pett,
    mood: 'Happy',
  },
  pages: {
    home: {
      visited: 'Home',
      headline: 'Dashboard',
      section: 'Stats',
      cards: [
        {
          title: 'Today\'s plan',
          description: '10% accomplished',
          color: '#97b8e8',
          endColor: '#9ebdeb',
          progress: '10, 100',
          selected: false,
        },
        {
          title: 'Energy available',
          description: '90% energy',
          color: '#52b1e6',
          endColor: '#8cd4fc',
          progress: '74, 100',
          selected: false,
        },
        {
          title: 'Weekly objectives',
          description: '2 walks left',
          color: '#d8a242',
          endColor: '#edb756',
          progress: '45, 100',
          selected: false,
        },
      ],
    },
    petSelection: {
      visited: 'Pet selection',
      section: 'Method',
      cards: [
        {
          title: 'On foot',
          selected: false,
        },
        {
          title: 'On bike',
          selected: false,
        },
        {
          title: 'Other',
          selected: true,
        },
      ],
    },
    walk: {
      visited: 'Walk',
      section: 'End walk',
      cards: [
        {
          name: 'Distance',
          amount: '1,5 km',
        },
        {
          name: 'Time',
          amount: '25 min',
        },
        {
          name: 'Objective',
          amount: '62%',
        },
      ],
    },
  },
};

export default initialState;
