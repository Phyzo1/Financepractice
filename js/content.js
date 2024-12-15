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
  addAmount();
})

function addAmount(amount) {
const amounts = financial.map(finance => finance.amount);

const totalbalance = amounts.reduce((acct, amount) => (acct += amount), 0).toFixed(2);
balanceAmount.innerHTML = `&#163; ${totalbalance}`;

const positiveAmount = amounts.filter(amount => amount > 0);
const totalIncome = positiveAmount.reduce((acct, amount) => (acct +=amount), 0).toFixed(2);
income.innerHTML = `&#163; ${totalIncome}`;

const negativeAmount = amounts.filter(amount => amount < 0);
const totalExpenses = negativeAmount.reduce((acct, amount) => (acct +=amount), 0).toFixed(2);
expenses.innerHTML = `&#163; ${Math.abs(totalExpenses)}`;
}
 

Math.abs()

function renderTransaction() {
  let html = '';
  for (i in financial) {
    const finObject = financial[i];
    const {item, amount} = finObject;
    // const sign = amount > 0 ? '' : '-';
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
  }
}

function addTransaction() {
  const item = inputItem.value;
  const amount = Number(inputAmount.value);

// const finance = {
//     item: inputItem.value,
//    amount: Number(inputAmount.value)
//   }

//   financial.push(finance);

  financial.push({item, amount});
};



















