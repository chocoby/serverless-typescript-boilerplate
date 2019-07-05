import * as assert from "assert";

describe("Array", function(): void {
  describe("#indexOf()", function(): void {
    it("should return -1 when the value is not present", function(): void {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
