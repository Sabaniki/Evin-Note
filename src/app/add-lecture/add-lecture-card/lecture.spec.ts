import {Lecture} from './lecture';

describe('Lecture', () => {
  it('should create an instance', () => {
    expect(new Lecture('imgName', 'title', 'explanatoryText')).toBeTruthy();
  });
});
