# <h1 id="customer_cli"> customer_cli </h1>
### A CLI(command line interface) app
customer_cli, basically is a command line app, can help to add,update,delete or other operations can do at the terminal or command bases.It can use to <a href="https://google.com?search='what is crud operations'" target="_blank" rel="noopener noreferrer">CRUD</a> operations do ,at writing queries on terminal.

## Indexing the contents
####   <p><a href="#badges" >Badges</a></p>
####   <p><a href="#looks" >customer_cli Looks Like</a></p>
####   <p><a href="#demo" >Demo</a></p>
####   <p><a href="#stack" >Tech Stack</a></p>
####   <p><a href="#runLocally" >Run Locally</a></p>
####   <p><a href="#envVar" >Environment Variables</a></p>
####   <p><a href="#routersRef" >Routers References</a></p>
####   <p><a href="#usages" >Usages/Examples</a></p>
####   <p><a href="#features" >Features</a></p>
####   <p><a href="#relatedProjects" >Related Projects</a></p>

## <h2 id="badges" >Badges </h2>


![GitHub Repo stars](https://img.shields.io/github/stars/Nik4Furi/customer_cli?style=social) ![GitHub watchers](https://img.shields.io/github/watchers/Nik4Furi/customer_cli?style=social)

![GitHub top language](https://img.shields.io/github/languages/top/Nik4Furi/customer_cli)   ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/Nik4Furi/customer_cli?style=flat-square) ![GitHub repo file count](https://img.shields.io/github/directory-file-count/Nik4Furi/customer_cli) ![GitHub package.json version](https://img.shields.io/github/package-json/v/Nik4Furi/customer_cli)

![GitHub commit activity](https://img.shields.io/github/commit-activity/m/Nik4Furi/customer_cli)   ![GitHub last commit](https://img.shields.io/github/last-commit/Nik4Furi/customer_cli)

## <h2 id="looks" >customer_cli looks like</h2>


<p text-align=left>
  <img src="https://user-images.githubusercontent.com/91304976/203487604-039a41aa-c4ae-4fad-b76e-1b72ce7f0f78.png" width="400" height="" alt="customer_cli_home"/>
  
  <img src="https://user-images.githubusercontent.com/91304976/203487609-5fe50b57-c865-4fd1-90ec-9dec2eddec73.png" width="500" height="" alt="customer_cli_link"/>  
 </p>
 
 <p text-align=right>
  <img src="https://user-images.githubusercontent.com/91304976/203487568-85d8befe-a0d0-4905-9910-f07505259b99.png" width="400" height="" alt="customer_cli_download"/>
</p>

<a href="#customer_cli">Go Home </a>



## <h2 id="demo" >Demo </h2>

<p text-align=left>
  <img src="https://user-images.githubusercontent.com/91304976/203494510-77735dad-2653-4835-8d86-8915b384abeb.gif" width="500" height="" alt="customer_cli_home"/>
    
    
  <img src="https://user-images.githubusercontent.com/91304976/203494536-92cc8b0e-1189-4e22-b6c0-81c07418cfcc.gif" width="500" height="" alt="customer_cli_download"/>  
 </p>
 


<a href="#customer_cli">Go Home </a>



## <h2 id="stack" >Tech Stack </h2>


**Server:** NodeJS, ExpressJS, MongoDB, <a href="https://google.com?search='commander nodejs'" target="_blank" rel="noopener noreferrer">Commander</a>

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