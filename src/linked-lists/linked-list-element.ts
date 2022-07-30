interface LinkedListElement<T> {
    data: T,
    next: LinkedListElement<T>|null,
}

export default LinkedListElement;