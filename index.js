const yargs = require('yargs')
const customers = require('./utils/customers')

yargs.command({
    command: "addCustomer",
    descripe: 'add customer data ',
    builder: {
        accNumber: {
            demandOption: true,
            descripe: "Account Number"
        },
        name: {
            demandOption: true,
            descripe: "Customer Name "
        },

        balance: {
            demandOption: true,
            descripe: "User Balance "
        },
        transaction: {
            demandOption: true,
            descripe: "Add Transaction type withdraw or balance"
        }
    },
    handler: (argv) => {
        customers.addCustomer(argv)
    }

})
yargs.command({
    command: "showAll",
    handler: () =>
        customers.showAll()

})

yargs.command({
    command: "showSingle",
    handler: () =>
        customers.showSingle()
})
yargs.command({
    command: "deletAll",
    handler: () => customers.deletAll()
})

yargs.command({
    command: "deleteCustomer",
    handler: (argv) =>
        customers.deleteSingle(argv)
})

yargs.command({
    command: "addTransaction",

    handler: (argv) => customers.addTransaction(argv)
})
yargs.argv