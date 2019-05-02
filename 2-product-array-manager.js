/*
    Given an array of integers, return a new array such that each element at index i of the new array 
    is the product of all the numbers in the original array except the one at i.

    For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. 
    If our input was [3, 2, 1], the expected output would be [2, 3, 6].

    Follow-up: What if you can't use division?
*/

class ProductArrayManager {
    constructor(inputList) {
        this.inputList = inputList;
    }

    // O(n^2) runtime without division
    calculateProductArray(list = this.inputList) {
        const output = [];
        for(let i = 0; i < list.length; i++) {
            const beforeProduct = list.slice(0,  i).reduce((p, c) => c * p, list[0]);
            const product = list.slice(i + 1).reduce((p, c) => c * p, beforeProduct);
            output[i] = product;
        }

        return output;
    }

}

function testProductArrayManager() {
    const input = [1, 2, 3, 4, 5];
    const manager = new ProductArrayManager(input);
    const result = manager.calculateProductArray();

    console.log('result should equal [120, 60, 40, 30, 24]: ', result);
} 

testProductArrayManager();