export type ComparatorFunction<T> = (a: T, b: T) => number;

export default class SelectionSort {
    static sort<T>(input: T[], comparator: ComparatorFunction<T>): T[] {
        const output = input.map(a => a);

        for (let i = 0; i < output.length; i++) {
            let smallestValueIndex = i;
            let smallestValue = output[i];

            for (let j = i + 1; j < output.length; j++) {
                if (comparator(smallestValue, output[j]) > 0) {
                    smallestValue = output[j];
                    smallestValueIndex = j;
                }
            }

            if (smallestValueIndex != i) {
                const oldSmallestValue = output[i];

                output[i] = smallestValue;
                output[smallestValueIndex] = oldSmallestValue;
            }
        }

        return output;
    }
}