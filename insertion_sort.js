// Insertion sort is a simple sorting algorithm that builds 
// the final sorted array one item at a time. It is much less efficient on 
// large lists than more advanced algorithms such as quicksort, heapsort, 
// or merge sort. However, it has several advantages, such as simple implementation,
// efficient for small data sets, and stable (does not change the 
// relative order of equal elements).

export default function insertionSort(nums){
    //nums = array, 
    // currentElementToBeInserted = current element to be inserted,
    // leftIndex = index to be shifted

    for (let i = 1; i < nums.length; i++) {
        
        let currentElementToBeInserted = nums[i]
        let leftIndex = i - 1

        while (leftIndex>= 0 && nums[leftIndex]>currentElementToBeInserted) {

            nums[leftIndex+1] = nums[leftIndex]

            leftIndex --;
        }

        nums[leftIndex + 1]  = currentElementToBeInserted
        
    }

    return nums
}