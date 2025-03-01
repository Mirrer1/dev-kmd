const userData = [
  {
    id: 'profile1',
    img: '/users/profile1.webp',
    title: 'Sed ut perspiciatis',
    description:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.',
  },
  {
    id: 'profile2',
    img: '/users/profile2.webp',
    title: 'Lorem ipsum dolor',
    description:
      'Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.',
  },
  {
    id: 'profile3',
    img: '/users/profile3.webp',
    title: 'Nemo enim ipsam',
    description:
      'Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor.',
  },
];

const shuffleArray = <T>(array: T[]): T[] => [...array].sort(() => Math.random() - 0.5);

const shuffledUsers = shuffleArray(userData);

export default shuffledUsers;
