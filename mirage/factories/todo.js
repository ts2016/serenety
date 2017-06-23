import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  title: faker.hacker.phrase,
  content: faker.lorem.sentence
});
