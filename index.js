class Bank {
  constructor(name) {
    this.name = name;
    this.branches = [];
  }

  addBranch(newBranch) {
    this.branches.push(newBranch);
  }

  addCustomer(theBranch, customer) {
    let branch = this.branches.find((branch) => branch == theBranch);
    if (branch) {
      branch.addCustomer(customer);
    }
  }

  addCustomerTransaction(theBranch, customerId, amount) {
    let branch = this.branches.find((branch) => branch.name == theBranch.name);
    // console.log(branch);
    if (branch) {
      branch.addCustomerTransaction(customerId, amount);
    }
  }

  findBranchByName(theBranch) {
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

  listCustomers(theBranch, includeTransactions) {
    let branch = this.branches.find((item) => item.name == theBranch.name);

    if (branch) {
      const customerList = branch.getCustomers();
      console.log('Customer List');
      customerList.forEach((item) => {
        if (includeTransactions) {
          console.log(
            `Name:${item.name}\n Transactions: ${item.transactions}\n`
          );
        } else {
          console.log(`Name:${item.name}\n`);
        }
      });
      return;
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
    console.log(customer);
    if (customer) {
      customer.addTransactions(amount);
    }
  }
}

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

class Transaction {
  Constructor(amount, date) {
    this.amount = amount;
    this.date = date;
  }
}

const arizonaBank = new Bank('Arizona');
const westBranch = new Branch('West Branch');
const sunBranch = new Branch('Sun Branch');
const customer1 = new Customer('John', 1);
const customer2 = new Customer('Anna', 2);
const customer3 = new Customer('John', 3);

arizonaBank.addBranch(westBranch);
arizonaBank.addBranch(sunBranch);
arizonaBank.addBranch(westBranch);

arizonaBank.findBranchByName('bank');
arizonaBank.findBranchByName('sun');

arizonaBank.addCustomer(westBranch, customer1);
arizonaBank.addCustomer(westBranch, customer3);
arizonaBank.addCustomer(sunBranch, customer1);
arizonaBank.addCustomer(sunBranch, customer2);

arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 3000);
arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 2000);
arizonaBank.addCustomerTransaction(westBranch, customer2.getId(), 3000);

customer1.addTransactions(-1000);
console.log(customer1.getBalance());
console.log(arizonaBank.listCustomers(westBranch, true));
console.log(arizonaBank.listCustomers(sunBranch, true));
