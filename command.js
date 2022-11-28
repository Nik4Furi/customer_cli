require('dotenv').config(); 
// import * as dotenv from 'dotenv'

//required the related variables to use into command interface
const  program  = require('commander');

//import the functions which can used to moderate the command line
const { addCustomer , findCustomer,  updateCustomer, deleteCustomer,deleteAllCustomers, listCustomer} = require('./db');



//Defining about the commander
program
        .version('1.0.0')
        .description("This is commander, which used in command line interface")



//Add the cutomers
program.command('add <firstname> <lastname> <email> <phone>')
        .alias('a')
        .description("Add a new customer")
        .action((firstname,lastname,email,phone)=>{
            addCustomer({firstname,lastname,email,phone})
        }) 


//Find coustmer
program.command('find <name>')
        .alias('f')
        .description("find customers")
        .action((name)=>{
            findCustomer(name)
        })

//Update customers
program.command('update <_id> <firstname> <lastname> <email> <phone>')
        .alias('u')
        .description("update customers")
        .action((firstname,lastname,email,phone)=>{
            updateCustomer(firstname,lastname,email,phone)
        }) 

//Delete customer
program.command('delete <_id>')
        .alias('d')
        .description("delete customer")
        .action((_id)=>{
            deleteCustomer(_id)
        })

//Delete All Customers
program.command('deleteAll ')
        .alias('all')
        .description("Deleting all the customers from database")
        .action( ()=>  deleteAllCustomers() )

//List of all customers
program.command('list')
        .alias('l')
        .description("list all customers")
        .action(()=>{
           listCustomer();
        }) 
program.parse(process.argv);