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
      cards: [
        {
          title: 'Today\'s plan',
          description: '10% accomplished',
          colorOne: '#97b8e8',
          colorTwo: '#9ebdeb',
        },
        {
          title: 'Energy available',
          description: '90% energy',
          colorOne: '#52b1e6',
          colorTwo: '#88d2fa',
        },
        {
          title: 'Weekly objectives',
          description: '2 walks left',
          colorOne: '#daa444',
          colorTwo: '#edb655',
        },
      ],
    },
  },
};

export default initialState;
