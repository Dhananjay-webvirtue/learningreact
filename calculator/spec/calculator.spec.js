describe("Calculator", function () {
    it("should add two numbers together", function () {
        expect(true).toBe(true);
    });

    it("should add two numbers together", function () {
        expect(add(1, 2)).toBe(3);
        expect(add(-1, -2)).toBe(-3);
    });

    it("should subtract two numbers", function () {
        expect(subtract(3, 2)).toBe(1);  // Wrong, to make sure test is running correctly
        expect(subtract(-10, -1)).toBe(-9);  // not really necessary - just meant to demonstrate multiple expectations inside one it() block
    });

    it("should multiply two numbers together", function () {
        expect(multiply(2, 2)).toBe(4);
        expect(multiply(-2, -2)).toBe(4);
    });

    it("should multiply two numbers together", function () {
        expect(multiply(2, 2)).toBe(4);
    });

    it("should divide correctly", function () {
        expect(divide(2, 2)).toBe(1);
    });

    it("should return 0 when dividing by 0", function () {
        expect(divide(1, 0)).toBe(0);
    });

});
