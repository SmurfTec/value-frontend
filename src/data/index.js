import faker from 'faker';

export const WhyValuecolony = [...Array(4)].map((_, index) => ({
  id: faker.datatype.uuid(),
  text: faker.lorem.lines(3),
}));
