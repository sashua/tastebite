export const getRandomDate = (min: Date, max: Date) =>
  new Date(min.getTime() + Math.random() * (max.getTime() - min.getTime()));
