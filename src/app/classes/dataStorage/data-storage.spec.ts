import { DataStorage } from './data-storage';

describe('DataStorage', () => {
  it('should create an instance', () => {
    expect(new DataStorage("","",{})).toBeTruthy();
  });
});
