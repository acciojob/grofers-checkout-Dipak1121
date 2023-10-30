const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let ans = 0;
	let prices = document.querySelectorAll(".price");
	for ( let i=0; i < prices.length; i++){
		ans = ans + parseInt(prices[i].innerText);
	}
  return ans;
};

getSumBtn.addEventListener("click", getSum);

