import {expect} from 'chai';
import Rectangle from '../src/Rectangle';

describe('Rectangle', () => {

  let rectangle;

  beforeEach(() => {
    rectangle = new Rectangle();
  })

  it('should be an instance of Rectangle', () => {
    expect(rectangle).to.be.an.instanceOf(Rectangle);
  })

  describe('initia properties', () => {
    it('should have a default length and width', () => {
      expect(rectangle.length).to.equal(100);
      expect(rectangle.width).to.equal(100);
    });

    it('should take a new length and width', () => {
      const rect = new Rectangle(10, 20)
      expect(rect.length).to.equal(10);
      expect(rect.width).to.equal(20);
    });
  });

  it('should be able to calculate its own area', () => {
    expect(rectangle.area()).to.equal(10000);
  })
})
