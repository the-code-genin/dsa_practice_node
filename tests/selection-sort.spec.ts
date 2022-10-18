import assert from "assert";
import SelectionSort from "../src/linked-lists/selection-sort";

describe("Selection Sort", function() {
    it("Sorts properly.", function() {
        const items = [7, 3, 6, 1, 9, 4, 2, 7, 5, 8];
        const sortedItems = SelectionSort.sort(items, (a: number, b: number) => (a - b));

        for (let i = 1; i < sortedItems.length; i++) {
            const curr = sortedItems[i];
            const prev = sortedItems[i - 1];

            if (prev > curr) {
                assert.fail(`${prev} can not be bigger than ${curr}`);
            }
        }
    });
});