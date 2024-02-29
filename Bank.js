class Bank {
  constructor(name) {
    this.name = name;
    this.branches = [];
  }

  addBranch(newBranch) {
    this.branches.push(newBranch);
  }

  //     addCustomer(branch: Branch, customer: Customer): boolean
  //     Description: Adds the customer to the branch of the bank. Each customer can only be added once to a branch.

  addCustomer(branchName, customer) {
    let theBranch = this.branches.find((branch) => branch.name === branchName);
    if (theBranch.customer) {
      return;
    }
    theBranch.addCustomer(customer);
  }
  //       addCustomerTransaction(branch: Branch, customerId: string, amount: number): boolean
  //       Description: Adds a transaction of the amount for the customer with the specified customerId in the given branch.

  addCustomerTransaction(branchName, customerId, amount) {
    let theBranch = this.branches.find((branch) => branch.name === branchName);
    if (theBranch) {
      theBranch.addCustomerTransaction(customerId, amount);
    }
  }

  //         findBranchByName(branchName: string): Branch[] | null
  //         Description: Returns a list of matched branches with the specified branchName or null if no matches were found.

  findBranchByName(branchName) {
    let matchedBranches = this.branches.map((branch) => branch.name.match(branchName));
    return matchedBranches;
  }

//   checkBranch(branch: Branch): boolean
//   Description: Returns true if the branch belongs to the bank or false otherwise.

checkBranch(branchName){
    let theBranch = this.branches.find((branch) => branch.name === branchName);
    return Boolean(theBranch);
}


// listCustomers(branch: Branch, includeTransactions: boolean): void
//   Description: Prints out a list of customers with their transaction details if includeTransactions is true.

listCustomers(branch, includeTransactions){

}

}

// const branch1 = {
//     name:"riyadh",
//     customers: [{
//         name: "omnia",
//         id:1,
//         transactions:[{
//             amount:4,
//             date:"12.4.2024"
//         }]
//     }],
// }

const bank = new Bank("Riyadh Bank");
const branch = {
  name: "Riyadh",
  customers: [
    {
      name: "name here",
      id: 1,
      transactions: [
        {
          amount: 4,
          date: "12.12.2024",
        },
      ],
    },
  ],
};

bank.addBranch(branch);

// bank.addCustomerTransaction("Riyadh",1,5);
bank.addCustomer("saleh");
console.log(bank);
