import assert from "assert";
import LinkedList from "../src/linked-lists/linked-list";
import faker from "faker";


describe("Linked Lists", function() {
    it("Calculates size properly.", function() {
        const list = new LinkedList<string>();
        const noItems = faker.datatype.number(100);

        for (let i = 0; i < noItems; i++) {
            list.push(faker.datatype.string());
        }

        const listSize = list.size;
        assert.strictEqual(listSize, noItems);
    });
});