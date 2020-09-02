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
          color: '#97b8e8',
          endColor: '#9ebdeb',
          progress: '20, 100',
        },
        {
          title: 'Energy available',
          description: '90% energy',
          color: '#52b1e6',
          endColor: '#8cd4fc',
          progress: '70, 100',
        },
        {
          title: 'Weekly objectives',
          description: '2 walks left',
          color: '#d8a242',
          endColor: '#edb756',
          progress: '50, 100',
        },
      ],
    },
  },
};

export default initialState;
