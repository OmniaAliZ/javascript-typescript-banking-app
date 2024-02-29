class Customer {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.transactions = [];
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getTransactions() {
    return this.transactions;
  }
  getBalance() {
    let balance = 0;

    this.transactions.forEach((transaction) => (balance += transaction));
    return balance;
  }
  addTransactions(amount) {
    this.transactions.push(amount);
  }
}

const customer = new Customer("Fahad", 1220301292);
customer.addTransactions(100);
customer.addTransactions(200);

console.log(customer.getName());
console.log(customer.getId());
console.log(customer.getTransactions());
console.log(customer.getBalance());

