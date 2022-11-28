# <h1 id="customer_cli"> customer_cli </h1>
### A CLI(command line interface) app
customer_cli, basically is a command line app, can help to add,update,delete or other operations can do at the terminal or command bases.It can use to <a href="https://en.wikipedia.org/wiki/Create,_read,_update_and_delete" target="_blank" rel="noopener noreferrer">CRUD</a> operations do ,at writing queries on terminal.

## Indexing the contents
####   <p><a href="#badges" >Badges</a></p>
####   <p><a href="#looks" >customer_cli Looks Like</a></p>
####   <p><a href="#demo" >Demo</a></p>
####   <p><a href="#stack" >Tech Stack</a></p>
####   <p><a href="#runLocally" >Run Locally</a></p>
####   <p><a href="#envVar" >Environment Variables</a></p>
####   <p><a href="#usages" >Usages/Examples</a></p>
####   <p><a href="#features" >Features</a></p>

## <h2 id="badges" >Badges </h2>


![GitHub Repo stars](https://img.shields.io/github/stars/Nik4Furi/customer_cli?style=social) ![GitHub watchers](https://img.shields.io/github/watchers/Nik4Furi/customer_cli?style=social)

![GitHub top language](https://img.shields.io/github/languages/top/Nik4Furi/customer_cli)   ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/Nik4Furi/customer_cli?style=flat-square) ![GitHub repo file count](https://img.shields.io/github/directory-file-count/Nik4Furi/customer_cli) ![GitHub package.json version](https://img.shields.io/github/package-json/v/Nik4Furi/customer_cli)
  
![GitHub last commit](https://img.shields.io/github/last-commit/Nik4Furi/customer_cli)

## <h2 id="looks" >customer_cli looks like</h2>


<p text-align=left>
  <img src="https://user-images.githubusercontent.com/91304976/204205817-87e93903-e04b-447e-8943-6560db3ce9fe.png" width="400" height="" alt="customer_cli_add"/>
  
  <img src="https://user-images.githubusercontent.com/91304976/204205830-1b04422b-d720-44cb-a672-8a39d15d92ab.png" width="500" height="" alt="customer_cli_link"/>  
 </p>
 
 
<a href="#customer_cli">Go Home </a>



## <h2 id="demo" >Demo </h2>

<p text-align=left>
  <img src="https://user-images.githubusercontent.com/91304976/204212339-b590ca3e-6777-49a5-bc94-b1e0680975e7.gif" width="500" height="" alt="customer_cli_add"/>
    

  <img src="https://user-images.githubusercontent.com/91304976/204212361-9b9ea907-f27e-4817-81f1-42d817415549.gif" width="500" height="" alt="customer_cli_download"/>  
 </p>
 
 <p text-align=left>
  <img src="https://user-images.githubusercontent.com/91304976/204212373-c00890e4-e581-415f-8872-4600261ba8da.gif" width="500" height="" alt="customer_cli_add"/>
    

 </p>



<a href="#customer_cli">Go Home </a>



## <h2 id="stack" >Tech Stack </h2>


**Server:** NodeJS, ExpressJS, MongoDB, <a href="https://www.npmjs.com/package/commander" target="_blank" rel="noopener noreferrer">Commander</a>

<a href="#customer_cli">Go Home </a>



## <h2 id="runLocally" >Run Locally </h2>

Clone the project

```bash
  git clone https://github/Nik4Furi/customer_cli
```

Go to the project directory

```bash
  cd customer_cli
```

Install dependencies

```bash
  npm install
```

Start terminal

```bash
  node command -V (To get info our app)

  node command -h (For help, how app is work)
```

<a href="#customer_cli">Go Home </a>

## <h2 id="envVar">Environment Variables </h2>

To run this project, you will need to add the following environment variables to your .env file also can see <a href="https://github.com/Nik4Furi/customer_cli/.env.example" target="_env" rel="noopener noreferrer" > .env.exmaple</a> file

Database configurations

`DB_SERVER`   
`DB_HOST`   
`DB_PORT`   
`DB_NAME`   


<a href="#customer_cli">Go Home </a>


## <h2 id="usages" >Usages / Examples </h2>

To know more about a particular command you can run 
`node command help <command>`

Adding Customer into database ,**customer** object required ,in have firstnamename,lastname,email,phone fields are required

`node command add <firstname> <lastname> <email> <phone> `

```javascript
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
```

Fetching or List out all the customers, **name**(customer name) field is required(may be included firstname or lastname)

`node command find <name>`

```javascript
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

```
Updating the customer details, **_id** (customer _id) required

`node command update  <_id> <firstname> <lastname> <email> <phone>`

```javascript
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

```

Deleting one customer, **_id** (customer _id) is required

`node command <_id>`

```javascript
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
```

Deleting all the customers from database

`node command deleteAll`

```javascript
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

```

List our all the customers

`node command list`

```javascript
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

```

<a href="#customer_cli"> Go Home </a>


## <h2 id="features">Features </h2>

- Command/Terminal(CLI,Command Line Interface) based app
- Can do CRUD operations with customers database
- Use <a href="https://google.com?search='mvc framework'" target="_blank" rel="noopener noreferrer">MVC framework</a>
