import {expect} from 'chai';
import Rectangle from '../src/Rectangle';
import Square from '../src/Square';

describe('Square', () => {

  let defaultSquare;

  beforeEach(() => {
    defaultSquare = new Square();
  });

  it('should be an instance of Rectangle', () => {
    expect(defaultSquare).to.be.an.instanceOf(Rectangle);
  });

  describe('Instance Properties', () => {
    it('should take a new length and width', () => {
      const rect = new Square(10, 20)
      expect(rect.length).to.equal(10);
      expect(rect.width).to.equal(20);
    });

    it('should have an id', () => {
      expect(defaultSquare).to.have.property('id');
      expect(defaultSquare.id).to.exist;
    });

  })

  it('should calculate its stats', () => {
    expect(defaultSquare.getStats()).to.eql({
      area:10000,
      perimeter: 400,
      diagonalLength: Math.sqrt(10000*2)
    });
  });

  it.skip('should save its stats locally', () => {

  });

  describe.skip('getFox', () => {
    it('should start out with no fox', () => {
      expect(defaultSquare.fox).to.be.null;
    });

    it('should be able to fetch a fox', () => {
      defaultSquare.getFox();

      expect(defaultSquare.fox).to.be.ok;
    })
  })

})
