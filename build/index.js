"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bank {
    constructor(name) {
        this.name = name;
        this.branches = [];
    }
    addBranch(newBranch) {
        // find whether the branch is in the array branches
        // if yes , add branch to the branches array
        // if no , throw Error("hey, this branch is existed already")
        let foundBranch = this.branches.find((item) => item.name == newBranch.name);
        if (foundBranch) {
            console.log(`hey the ${foundBranch.getName()} already exist!!!`);
            return false;
        }
        this.branches.push(newBranch);
        console.log(`Branch - ${newBranch.getName()} - Added`);
        return true;
    }
    addCustomer(theBranch, customer) {
        let branch = this.branches.find((branch) => branch.name == theBranch.name);
        if (branch) {
            console.log(`- ${branch.getName()} : `);
            branch.addCustomer(customer);
            return true;
        }
        console.log(`${theBranch.getName()} does not exist`);
        return false;
    }
    addCustomerTransaction(theBranch, customerId, amount) {
        let branch = this.branches.find((branch) => branch.getName() == theBranch.getName());
        if (branch) {
            branch.addCustomerTransaction(customerId, amount);
            return true;
        }
        console.log(`${theBranch.getName()} does not exist`);
        return false;
    }
    // map() => return an array
    // find() => return an object
    // [] => length >0
    findBranchByName(theBranch) {
        let branch = this.branches.filter((branch) => branch.getName().toLowerCase().match(theBranch.toLowerCase()));
        if (branch.length) {
            return branch;
        }
        else {
            console.log("Branch doesn't exist");
            return null;
        }
    }
    checkBranch(theBranch) {
        let branch = this.branches.find((branch) => branch.getName() == theBranch.getName());
        if (branch) {
            console.log("Branch Found");
            return true;
        }
        else {
            console.log("Branch not found");
            return false;
        }
    }
    // console.log() , print () , no return value
    listCustomers(theBranch, includeTransactions) {
        //? : void
        let branch = this.branches.find((item) => item.getName() == theBranch.getName());
        // return; stop and get out from function
        if (!branch) {
            console.log("Branch not found");
            return;
        }
        const customerList = branch.getCustomers();
        if (!includeTransactions) {
            const customer = customerList.map((customer) => {
                return {
                    id: customer.getId(),
                    name: customer.getName(),
                };
            });
            console.log(JSON.stringify(customer, null, 2));
            //?
            // get the customer transaction array and then console.log the transaction
        }
        console.log(JSON.stringify(customerList, null, 2));
    }
    // Customer Search
    findCustomer(theBranch, customerNameOrId) {
        let branch = this.branches.find((branch) => branch.getName() == theBranch.getName());
        if (branch) {
            branch.findCustomer(customerNameOrId);
            return true;
        }
        else {
            console.log("Branch does not exist");
            return false;
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
            let customer = this.customers.find((customer) => customer.getId() == theCustomer.getId());
            if (customer) {
                console.log(`Customer '${theCustomer}' already added`); //??? ???????? JOHN ADDED 3 TIMESSSSSSS
                return false;
            }
        }
        this.customers.push(theCustomer);
        console.log(`Customer ${theCustomer.getName()} Added`);
        return true;
    }
    getName() {
        return this.name;
    }
    getCustomers() {
        return this.customers;
    }
    addCustomerTransaction(customerId, amount) {
        let customer = this.customers.find((customer) => customer.getId() == customerId.getId());
        if (customer) {
            customer.addTransactions(amount);
            console.log("Transaction Added");
            return true;
        }
        console.log(`Customer '${customerId.getName()}' not found.`);
        return false;
    }
    // Customer Search
    findCustomer(searchBy) {
        if (typeof searchBy === "string") {
            const customer = this.customers.filter((customer) => customer.getName().match(searchBy));
            if (customer) {
                console.log(`Customer found.`);
                console.log(JSON.stringify(customer, null, 2));
                return true;
            }
        }
        if (typeof searchBy === "number") {
            const customer = this.customers.find((customer) => customer.getId() == searchBy);
            if (customer) {
                console.log(`Customer found.`);
                console.log(JSON.stringify(customer, null, 2));
                return true;
            }
        }
        console.log(`Customer not found.`);
        return false;
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
        this.transactions.forEach((transaction) => (balance += transaction.amount));
        return balance;
    }
    // transactions = [{tran1}, {tran2}]
    // tran1 = {amount : 100, date: "29-02-24"}
    addTransactions(amount) {
        let transaction = { amount: amount, date: new Date() };
        this.transactions.push(transaction);
        console.log("Transaction Added");
        return true;
    }
}
class Transaction {
    constructor(amount, date) {
        this.amount = amount;
        this.date = date;
    }
}
const arizonaBank = new Bank("Arizona");
const westBranch = new Branch("West Branch");
const sunBranch = new Branch("Sun Branch");
const customer1 = new Customer("John", 1);
const customer2 = new Customer("Anna", 2);
const customer3 = new Customer("John", 3);
console.log("ADD BRANCH ");
arizonaBank.addBranch(westBranch);
arizonaBank.addBranch(sunBranch);
arizonaBank.addBranch(westBranch);
console.log("______________________________");
console.log("FIND BRANCH BY NAME");
arizonaBank.findBranchByName("bank");
console.log(arizonaBank.findBranchByName("sun"));
console.log("______________________________");
console.log("ADD CUSTOMER");
arizonaBank.addCustomer(westBranch, customer1);
arizonaBank.addCustomer(westBranch, customer3);
arizonaBank.addCustomer(sunBranch, customer1);
arizonaBank.addCustomer(sunBranch, customer2);
console.log("______________________________");
console.log("ADD CUSTOMER TRANSACTION");
arizonaBank.addCustomerTransaction(westBranch, customer1, 3000);
arizonaBank.addCustomerTransaction(westBranch, customer1, 2000);
arizonaBank.addCustomerTransaction(westBranch, customer2, 3000);
console.log("______________________________");
console.log("ADD TRANSACTION");
customer1.addTransactions(-1000);
console.log("______________________________");
console.log("GET BALANCE");
console.log(customer1.getBalance());
console.log("______________________________");
console.log("LIST CUSTOMERS");
arizonaBank.listCustomers(westBranch, true);
arizonaBank.listCustomers(sunBranch, false);
console.log("______________________________");
console.log("FIND CUSTOMER");
arizonaBank.findCustomer(westBranch, "John");
arizonaBank.findCustomer(westBranch, 3);
console.log("______________________________");
console.log("CHECK BRANCH");
arizonaBank.checkBranch(westBranch);
