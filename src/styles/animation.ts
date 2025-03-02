export const slideInFromBottom = {
  variants: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.3, ease: 'easeIn' } },
  },
  initial: 'hidden',
  whileInView: 'visible',
  exit: 'exit',
  viewport: { once: false, amount: 0.2 },
};

export const slideInFromRight = (index: number) => ({
  variants: {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: 'easeOut', delay: index * 0.1 },
    },
    exit: { opacity: 0, x: 20, transition: { duration: 0.2, ease: 'easeIn' } },
  },
  initial: 'hidden',
  animate: 'visible',
  exit: 'exit',
});
