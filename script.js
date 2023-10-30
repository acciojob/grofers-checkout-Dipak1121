const table = document.querySelector("table");
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
  let td1 = document.createElement("td");
	td1.innerText = "Total Price";
	let td2 = document.createElement("td");
	td2.id = "ans";
	td2.innerText = `${ans}`;
	let tr = document.createElement("tr");
	tr.appendChild(td1);
	tr.appendChild(td2);
	table.appendChild(tr);
};

getSumBtn.addEventListener("click", getSum);

