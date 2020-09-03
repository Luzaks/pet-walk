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
      section: 'Stats',
      cards: [
        {
          title: 'Today\'s plan',
          description: '10% accomplished',
          color: '#97b8e8',
          endColor: '#9ebdeb',
          progress: '10, 100',
        },
        {
          title: 'Energy available',
          description: '90% energy',
          color: '#52b1e6',
          endColor: '#8cd4fc',
          progress: '74, 100',
        },
        {
          title: 'Weekly objectives',
          description: '2 walks left',
          color: '#d8a242',
          endColor: '#edb756',
          progress: '45, 100',
        },
      ],
    },
    petSelection: {
      visited: 'Pet selection',
      section: 'Method',
      cards: [
        {
          title: 'On foot',
        },
        {
          title: 'On bike',
        },
        {
          title: 'Other',
        },
      ],
    },
  },
};

export default initialState;
