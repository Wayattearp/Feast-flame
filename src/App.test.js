import { initializeTimes, updateTimes } from './components/Main';

describe('BookingFormReducer', () => {
  describe('initializeTimes', () => {
    it('should return the initial times', () => {
      const initialState = ''; // The initial state value used in the reducer
      const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

      const result = initializeTimes(initialState);

      expect(result).toEqual(expectedTimes);
    });
  });

  describe('updateTimes', () => {
    it('should return the same value as the provided state', () => {
      const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

      const result = updateTimes(initialState);

      expect(result).toEqual(initialState);
    });
  });
});
