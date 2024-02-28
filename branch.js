class Branch {
  constructor(name) {
    this.name = name;
    this.customers = [];
  }

  addCustomer(customer) {
    this.customers.push(customer);
  }

  getName() {
    return this.name;
  }

  getCustomers() {
    return this.customers;
  }

  addCustomerTransaction(customerId, amount) {
    let customer = this.customers.find((customer) => customer.id == customerId);
    if (customer) {
      customer.addTransactions(amount);
    }
  }
}

// * For Tasting *

// const customer1 = [
//   {
//     name: 'John',
//     id: 1,
//     transactions: {
//       amount: 3000,
//       date: '12',
//     },
//   },
//   {
//     name: 'Anna',
//     id: 2,
//     transactions: {
//       amount: 2000,
//       date: '13',
//     },
//   },
// ];

// const westBranch = new Branch('West Branch');
// westBranch.addCustomer(customer1);

// console.log(customer1[0].transactions.amount);
// westBranch.addCustomerTransaction(customer1[0].id, 1000);
// console.log(customer1[0].transactions.amount);

// addCustomerTransactions(branch,id,amount) {
//     let branch = this.branchs.find((branch) => branch.name === branch)
//     if (branch) {
//         branch.addCustomerTransactionBranch()
//     }
// }
