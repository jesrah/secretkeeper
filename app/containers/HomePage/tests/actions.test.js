import { SUBMIT_SECRET } from '../constants';

import { submitSecret } from '../actions';

describe('Home Actions', () => {
  describe('submitSecret', () => {
    it('should return the correct type and the passed string', () => {
      const fixture = 'Bob cheated on Alice';
      const expectedResult = {
        type: SUBMIT_SECRET,
        secret: fixture,
      };

      expect(submitSecret(fixture)).toEqual(expectedResult);
    });
  });
});