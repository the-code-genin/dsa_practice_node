import LinkedListElement from "./linked-list-element";

export default class LinkedList<T> {
    private firstElement: LinkedListElement<T> | null;

    constructor() {
        this.firstElement = null;
    }

    /**
     * Get the size of the linked list.
     * 
     * @returns Number of items in the list.
     */
    public get size(): number {
        if (this.firstElement == null) return 0;

        let length = 1;
        let currentElement = this.firstElement;
        while (currentElement.next) {
            length++;
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
    public push(data: T) {
        const newElement: LinkedListElement<T> = { data, next: null };

        // If the linked list is empty
        if (!this.firstElement) {
            this.firstElement = newElement;
            return;
        }

        // Traverse the list to the last element
        let currentElement = this.firstElement;
        while (currentElement.next) {
            currentElement = currentElement.next;
        }

        // And append the new element to the end of the list
        currentElement.next = newElement;
    }
}