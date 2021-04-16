import assert from 'assert';
import LinkedList from "../src/linked-lists/linked-list";
import faker from 'faker';


describe('Linked Lists', function() {
    it('Calculates size properly.', function() {
        let list = new LinkedList<string>();
        let noItems = faker.datatype.number(100);

        for (let i = 0; i < noItems; i++) {
            list.push(faker.datatype.string());
        }

        let listSize = list.size;
        assert.strictEqual(listSize, noItems, `List returned a size of ${listSize} instead of ${noItems}.`);
    });
});