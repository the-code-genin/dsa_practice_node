export default interface LinkedListElement<T> {
    data: T,
    next: LinkedListElement<T>|null
}