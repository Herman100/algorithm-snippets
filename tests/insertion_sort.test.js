import { expect, test} from '@jest/globals'
import insertionSort from '../insertion_sort.js'



test('insertion sort test', () => {
    const nums = [5, 2, 9, 1, 5, 6]
    const sortedNums = insertionSort(nums)
    const expected = [1, 2, 5, 5, 6, 9]
    expect(sortedNums).toEqual(expected)
})