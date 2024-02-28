function mincost(arr)
{ 
//write your code here
	let minHeap = new MinHeap();
	for (let i = 0; i < arr.length; i++) {
		minHeap.add(arr[i]);
	}
	let cost = 0;
	while (minHeap.size()>1) {
		let min1 = minHeap.extractMin();
		let min2 = minHeap.extractMin();
		let sum = min1 + min2;
		cost += sum;
		minHeap.add(sum);
	}
// return the min cost
  return cost;
}

module.exports=mincost;
