import LinkedListElement from './linked-list-element'

export default class LinkedList<T> {
    private firstElement: LinkedListElement<T>|null;

    /**
     * Get the size of the linked list.
     * 
     * @returns Number of items in the list.
     */
    public get size(): number {
        let length = 0;
        if (this.firstElement == null) return length;

        let currentElement = this.firstElement;
        while (true) {
            // Increment the length
            length++;

            // End of list
            if (currentElement.next == null) break;

            // Continue incrementing
            currentElement = currentElement.next;
        }

        return length;
    }

    /**
     * Append a new element to the end of the list.
     * 
     * @param item The item to be added to the linked list.
     * @returns True on success, False on failure.
     */
    public push(item: T): boolean {
        let newElement = {data: item, next: null};

        // If the linked list is empty
        if (this.firstElement == null) {
            this.firstElement = newElement;
            return true;
        }

        // Traverse the list to the last element
        // And append the new element to the end of the list
        let currentElement = this.firstElement;
        while (true) {
            if (currentElement.next != null) {
                currentElement = currentElement.next;
                continue;
            }

            currentElement.next = newElement;
            break;
        }

        return true;
    }
}