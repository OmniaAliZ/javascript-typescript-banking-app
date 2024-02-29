class Bank {
  name: string;
  branches: Branch[];

  constructor(name: string) {
    this.name = name;
    this.branches = [];
  }

  addBranch(newBranch: Branch): boolean {
    // find whether the branch is in the array branches
    // if yes , add branch to the branches array
    // if no , throw Error("hey, this branch is existed already")
    let foundBranch = this.branches.find((item) => item.name == newBranch.name);
    if (foundBranch) {
      console.log('hey the branch is existed already !!!');
      return false;
    }
    this.branches.push(newBranch);
    return true;
  }

  addCustomer(theBranch: Branch, customer: Customer): boolean {
    let branch = this.branches.find((branch) => branch.name == theBranch.name);
    if (branch) {
      branch.addCustomer(customer);
      return true;
    }
    return false;
  }

  addCustomerTransaction(
    theBranch: Branch,
    customerId: Customer,
    amount: number
  ) {
    let branch = this.branches.find(
      (branch) => branch.getName() == theBranch.getName()
    );
    if (branch) {
      branch.addCustomerTransaction(customerId, amount);
    }
  }

  findBranchByName(theBranch: string) {
    let branch = this.branches.map((branch) =>
      branch.getName().match(theBranch)
    );
    if (branch) {
      return branch;
    } else {
      return null;
    }
  }

  checkBranch(theBranch: Branch) {
    let branch = this.branches.find(
      (branch) => branch.getName() == theBranch.getName()
    );

    if (branch) {
      return branch;
    } else {
      return null;
    }
  }

  listCustomers(theBranch: Branch, includeTransactions: boolean) {
    let branch = this.branches.find(
      (item) => item.getName() == theBranch.getName()
    );

    if (branch) {
      const customerList = branch.getCustomers();
      console.log('Customer List');
      customerList.forEach((item: Customer) => {
        if (includeTransactions) {
          console.log(
            `Name:${item.getName()}\n Transactions: ${item.getTransactions()}\n`
          );
        } else {
          console.log(`Name:${item.getName()}\n`);
        }
      });
      return;
    } else {
      return null;
    }
  }
}

class Branch {
  name: string;
  customers: Customer[];
  constructor(name: string) {
    this.name = name;
    this.customers = [];
  }

  addCustomer(theCustomer: Customer) {
    if (this.customers.length !== 0) {
      let customer = this.customers.find(
        (customer) => customer.getId() == theCustomer.getId()
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

  addCustomerTransaction(customerId: Customer, amount: number) {
    let customer = this.customers.find(
      (customer) => customer.getId() == customerId.getId()
    );
    console.log(customer);
    if (customer) {
      customer.addTransactions(amount);
    }
  }
}

class Customer {
  name: string;
  id: number;
  transactions: Transaction[];
  constructor(name: string, id: number) {
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
    let balance: number = 0;

    this.transactions.forEach((transaction) => (balance += transaction.amount));
    return balance;
  }

  // transactions = [{tran1}, {tran2}]
  // tran1 = {amount : 100, date: "29-02-24"}
  addTransactions(amount: number) {
    let transaction = { amount: amount, date: new Date() };
    this.transactions.push(transaction);
  }
}

class Transaction {
  amount: number;
  date: Date;
  constructor(amount: number, date: Date) {
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

arizonaBank.addCustomerTransaction(westBranch, customer1, 3000);
arizonaBank.addCustomerTransaction(westBranch, customer1, 2000);
arizonaBank.addCustomerTransaction(westBranch, customer2, 3000);

customer1.addTransactions(-1000);
console.log(customer1.getBalance());
console.log(arizonaBank.listCustomers(westBranch, true));
console.log(arizonaBank.listCustomers(sunBranch, true));
