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

/**
 * 배열의 요소들을 랜덤하게 섞는 함수
 *
 * @param {T[]} array - 섞을 배열
 * @returns {T[]} - 랜덤하게 섞인 새로운 배열
 */
const shuffleArray = <T>(array: T[]): T[] => [...array].sort(() => Math.random() - 0.5);
const shuffledUsers = shuffleArray(userData);

export default shuffledUsers;
