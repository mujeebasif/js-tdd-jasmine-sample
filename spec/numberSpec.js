var int, negative, decimal;

beforeEach(function () {

   int = Math.floor(100 * Math.random());
   negative = int * -1;
   decimal = int + 0.5;

});

describe('The factorsOf() function',function () {

   it('should find factors of 12',function () {
      expect(factorsOf(12)).toEqual([1,2,3,4,6,12]);
   });

   it("should throw exception for negative numbers",function () {
      expect(function () {
         factorsOf(negative)
      }).toThrow();
   });

   it("should throw exception for non-integer numbers",function () {
      expect(function () {
         factorsOf(decimal);
      }).toThrow();
   });

});

describe('The isPrime() function',function () {

   it('should say 2 is prime',function () {
      expect(isPrime(2)).toBe(true);
   });

   it('should say 10 is not a prime',function () {
      expect(isPrime(10)).not.toBe(true);
   });

   it("should say negative number is not prime",function () {
      expect(isPrime(negative)).toBe(false);
   });

   it("should say non-interger is not a prime",function () {
      expect(isPrime(decimal)).toBe(false);
   });

});