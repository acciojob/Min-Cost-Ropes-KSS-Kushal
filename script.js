function mincost(arr)
{ 
let totalCost = 0;

    while (arr.length > 1) {
        // Sort the array
        arr.sort((a, b) => a - b);

        // Pop the smallest two elements
        let first_smallest = arr.shift();
        let second_smallest = arr.shift();

        // Add them together
        let sum = first_smallest + second_smallest;

        // Add this sum to the total cost
        totalCost += sum;

        // Push this sum back into the array
        arr.push(sum);
    }

    return totalCost;
}

module.exports=mincost;
