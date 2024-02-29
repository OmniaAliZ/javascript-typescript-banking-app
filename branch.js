class Bank {
  constructor(name) {
    this.name = name;
    this.branches = [];
  }

  addBranch(branch) {
    return this.branches.push(branch);
  }

  addCustomer(theBranch, customer) {
    let branch = this.branches.find((branch) => branch == theBranch);
    if (branch) {
      branch.addCustomer(customer);
    }
  }

  addCustomerTransactions(theBranch, customerId, amount) {
    let branch = this.branches.find((branch) => branch.name == theBranch.name);
    if (branch) {
      branch.addCustomerTransaction(customerId, amount);
    }
  }

  findBranchByName(theBranch) {
    //*? riyadhBank.findBranchByName('West') = null */
    let branch = this.branches.map((branch) => branch.name.match(theBranch));
    if (branch) {
      return branch;
    } else {
      return null;
    }
  }

  checkBranch(theBranch) {
    let branch = this.branches.find((branch) => branch.name == theBranch.name);

    if (branch) {
      return branch;
    } else {
      return null;
    }
  }

  // - listCustomers(branch: Branch, includeTransactions: boolean): void
  // Description: Prints out a list of customers with their transaction details if includeTransactions is true.
  listCustomers(theBranch, includeTransactions) {
    let branch = this.branches.find((branch) => branch.name == theBranch.name);
    if (branch) {
      const customerList = branch.getCustomers();
      return customerList;
    } else {
      return null;
    }
  }
} 

class Branch {
  constructor(name) {
    this.name = name;
    this.customers = [];
  }

  addCustomer(theCustomer) {
    if (this.customers.length !== 0) {
      let customer = this.customers.find(
        (customer) => customer.id == theCustomer.id
      );

      console.log(customer);
      if (customer) {
        return console.log('The customer already added');
      }
    }

    this.customers.push(theCustomer);
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

// const customer = [
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

const coustomer1 = {
  name: 'John',
  id: 1,
  transactions: { amount: 3000, date: '12' },
};

const riyadhBank = new Bank('Riyadh Bank');
const westBranch1 = new Branch('West Branch');
const westBranch2 = new Branch('West east Branch');
const westBranch3 = new Branch('east Branch');
riyadhBank.addBranch(westBranch1);
riyadhBank.addBranch(westBranch2);
// riyadhBank.addBranch(westBranch3);
riyadhBank.addCustomer(westBranch1, coustomer1);

console.log(riyadhBank.listCustomers(westBranch1, 3));
// console.log(westBranch.getCustomers());
// console.log(riyadhBank);

// westBranch.addCustomer(customer1);
// console.log(customer1[0].transactions.amount);
// westBranch.addCustomerTransaction(customer1[0].id, 1000);
// console.log(customer1[0].transactions.amount);
