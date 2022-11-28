const mongoose = require('mongoose');

//Declarations the variables about the databases
const db_server = process.env.DB_SERVER;
const db_host = process.env.DB_HOST;
const db_port = process.env.DB_PORT;
const db_name = process.env.DB_NAME;

/// Handle the mongoose promisses gloally
mongoose.Promise = global.Promise;

const db = mongoose.connect(`${db_server}://${db_host}:${db_port}/${db_name}`, {
    // useMongoClient : true
})


//required the models
const customerModal = require('./models/CustomerModal');

//Add a customer
const addCustomer = (customer) => {
    try {


        customerModal.create(customer).then(customer => {
            console.info("new customer added");
            console.info(customer);
            mongoose.connection.close(() => { });

        }).catch((e)=>{
            console.info(e)
        })
    } catch (error) {
        console.info(error)
    }

}

//Find customers
const findCustomer = async (name) => {
    try {
        //Remove the case incensitive
        let search = new RegExp(name, 'i');

        customerModal.find({
            $or:
                [{ firstname: search }, { lastname: search }]
        }).then(customer => {
            console.info(`${customer.length} matches`)
            console.info(customer);
            mongoose.connection.close(() => { });
        }).catch((e)=>{
            console.info(e)
        })
    } catch (error) {
        console.info(error)
    }
}

//Update the list of the customers
const updateCustomer = async (_id, customer) => {
    try {
        //Find the customer of the given id
        let find = await customerModal.findById(_id)
        if (!find) {
            return console.info("given id customer did not find")
        }
        customerModal.updateOne({ _id }, { $set: { customer } }, { new: true }).
            then(customer => {
                console.info("update the details of customer")
                console.info(customer)
                mongoose.connection.close(() => { });

            }).catch((e)=>{
                console.info(e)
            })
    } catch (error) {
        console.info(error)
    }
}

//Delete customers
const deleteCustomer = (_id) => {
    try {
        customerModal.deleteOne({ _id }).
            then(() => {
                console.info("customer deleted")
                mongoose.connection.close(() => { });

            }).catch((e)=>{
                console.info(e)
            })
    } catch (error) {
        console.info(error)
    }
}
//Delete All customers from database
const deleteAllCustomers = () => {
    customerModal.deleteMany({}).
        then(() => {
            console.info("All customers deleted")
            mongoose.connection.close(() => { });

        }).catch((e)=>{
            console.info(e)
        })
}

//List the customers
const listCustomer = () => {
    try {
        customerModal.find().
            then((results) => {
                console.info(`${results.length} are encounted`)
                console.info(`${results}`)
                mongoose.connection.close(() => { });

            }).catch((e)=>{
                console.info(e)
            })
    } catch (error) {
        console.info(error)
    }
}

//Export the functions
module.exports = {
    addCustomer, findCustomer, updateCustomer, deleteCustomer, deleteAllCustomers, listCustomer
}