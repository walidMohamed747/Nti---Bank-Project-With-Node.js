const dealWithData = require('./dealWithData')

customerData = [
    { ele: "accNumber", default: null },
    { ele: "name", default: null },
    { ele: "balance", default: null },
    { ele: "transaction", default: null }
]

const addCustomer = (args) => {
    let customer = {}
    customerData.forEach(d => {
            if (!d.default) return customer[d.ele] = args[d.ele]
            customer[d.ele] = d.default
        }) //customer.name = argv.name
        // console.log(customer)
    const customers = dealWithData.readDataFromJSON("./db/db.json")
    customers.length == 0 ? customer.id = 1 : customer.id = customers[customers.length - 1].id + 1
    customers.push(customer)
    dealWithData.writeDataToFile("./db/db.json", customers)
}

const showAll = () => {
    const customers = dealWithData.readDataFromJSON("./db/db.json")
    customers.forEach(customer => {
        let c = '${customer.id}'
        customerData.forEach(
            d => c += " " + d.ele + " =>" + customer[d.ele])
        console.log(c)


    })
}

const showSingle = (data) => {
    try {
        let customers = dealWithData.readDataFromJSON('./db/db.json')
        let customer = customers.find(u => u.id == data.id)
        if (!customer) throw Error("customer not found")
        console.log(customers);


    } catch (error) {
        console.log(error.massage);
    }

}


const deletAll = () => {
    dealWithData.writeDataToFile([])
    console.log("all customers deleted")
}
const deleteSingle = (data) => {
    try {
        let customers = dealWithData.readDataFromJSON('./db/db.json')
        let customerIndex = customers.findIndex(u => u.id == data.id)
        if (!customerIndex == -1) throw Error("customer not found")
        customers.splice(customerIndex, 1)
        dealWithData.writeDataToFile("./db/db.json", customers)

    } catch (error) {
        console.log(error.massage);
    }

}
const addTransaction = (data) => {
    let customer = dealWithData.readDataFromJSON("./db/db.json")
    console.log(customer);
}
module.exports = {
    addCustomer,
    showAll,
    showSingle,
    deletAll,
    deleteSingle,
    addTransaction
}