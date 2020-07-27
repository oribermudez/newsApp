import { handleSubmit } from "../src/client/js/handleSubmit"

  describe("Testing the submit functionality", () => {
    test("Testing the handleSubmit() function", () => {
        expect(handleSubmit).toBeDefined();
    });
});