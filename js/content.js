const balanceAmount = document.querySelector('.js-balance-amount');
const income = document.querySelector('.js-transaction-income');
const expenses = document.querySelector('.js-transaction-expenses');
const inputItem = document.querySelector('.js-input-item');
const inputAmount = document.querySelector('.js-input-amount');
const transactionButton = document.querySelector('.js-transaction-button');
const listItem = document.querySelector('.js-list-item');

const financial = [];
transactionButton.addEventListener('click', () => {
  addTransaction();
  renderTransaction();
  console.log(financial);
})

function addTransaction() {
  const item = inputItem.value;
  const amount = Number(inputAmount.value);

  financial.push({item, amount});
};

function renderTransaction() {
  let html = '';
  for (i in financial) {
    const finObject = financial[i];
    const {item, amount} = finObject;
    const sign = amount > 0 ? '' : '-';
   html += `
    <button class"">x</button>
    <div>${item}</div>
    <div>${amount}</div>
    `
    // const itam = document.createElement('li');
    // itam.classList.add(amount > 0 ? 'plus' : 'minus')
    // itam.innerHTML = `
    // <button class"">x</button>
    // <div>${item}</div>
    // <div>${sign}${amount}</div>
    // `;
    // listItem.appendChild(itam);
    listItem.innerHTML = html;
  };
}


function addAmount({amount}) {
  if (amount > 0) {
    positiveAmount += amount;
    console.log(positiveAmount);
  }else if (amount < 0) {
    negativeAmount -= {amount}
  }
income.innerHTML = positiveAmount;
expenses.innerHTML = negativeAmount;
}



















