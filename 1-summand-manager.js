/*
    Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

    For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

    Bonus: Can you do this in one pass?
*/


function SummandManager(inputList, sum) {
    this.inputList = inputList;
    this.sum = sum;

    // This is fast. In the worst case, it is O(N) in regards to time complexity
    // As always, there is a trade-off between time and space complexity - here we are using a hashmap
    // in order to keep track of previous values - trading space for time.
    this.isValid = (list = this.inputList) => {
        const traversed = {};
        for(let i = 0; i < list.length; i++) {
            const difference = this.sum - list[i];
            const matchingSummand = traversed[difference];

            if (typeof matchingSummand === 'number') return true;

            traversed[list[i]] = list[i];
        }

        return false;
    }
}



function canSummandManagerDetermineItsOwnValidity() {
    const input1 = [ 10, 15, 3, 7 ];
    const input2 = [ 10, 15, 3, 8 ];
    const sum = 17;

    const manager1 = new SummandManager(input1, sum);
    const manager2 = new SummandManager(input2, sum);
    const result = [manager1.isValid(), !manager2.isValid()];
    console.log('result: ', result);
    console.log(result.every(bool => bool) ? 'It works!' : 'It doesn\'nt work');
};

canSummandManagerDetermineItsOwnValidity();
