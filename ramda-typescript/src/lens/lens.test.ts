
import { lens } from './lens';

test('adds 1 + 2 to equal 3', () => {
  const unique = Symbol('nested')
  expect(lens({
    some: {
      nested: {
        value: unique
      }
    }
  })).toBe(unique);
});
