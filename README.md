# Node, Express and MongoDB with generic controllers

## Overview

This is an easy, basic and raw example of **HOW to** implement an API with Node, Express and MongoDB (Atlas) **with generic controllers**

This project is based on the template `node-express-mongo-db`. Check out the repo [README](../node-express-mongo-db/README.md) for setup and development.

---

## CRUD Generic Controllers

### Using the Generic Controllers

We are going to use our `generic controllers` to perform common `CRUD operations`, giving a model:
* Create a document in a collection (POST)
* Retrieve all the documents in a collection or one document by its ID (GET)
* Update a document in a collection by its ID (PUT)
* Delete a document in a collection by its ID (DELETE)

If you need to create a custom controller for a particular resource, add it to `/src/resources/collection/controllers.js` and update the router with the route and the exported method (controller) `/src/resources/collection/router.js`

### Controllers and Side Effects

For operations involving `side effects`, or, everything outside the scope of retrieving (GET) you should definitely need authentication and authorization before executing the operation. You don't want random people creating, updating, deleting your resources. This should be obvious, however, if you are using this a template be extremely careful since we are not protecting endpoints (it is not the goal of this material).

Once you have the proper logic in place to allow certain entities to perform CRUD operations, and, if you are going to use `1generic controllers`, just chain the method and pass the imported controller in your `/src/resources/collection/router.js`

So, as an example, if you want to support the creation of a new application in the applications collection your `/src/resources/applications/router.js` would look like:

```js
router.route('/').get(controllers.getSomeOrAll)
  .post(controllers.createOne)
```

If you want to allow, updating and deleting an application in the applications collection:

```js
router.route('/:id').get(controllers.getOne)
  .put(controllers.updateOne)
  .delete(controllers.deleteOne)
```

### Create new MongoDB collection

We are going to connect to our cluster with the `mongo shell`

#### MongoDB Community Shell

##### Mac Installation

```shell
brew install mongodb/brew/mongodb-community-shell
```

##### Set the proper path

Add `<your mongo shell's download directory>/bin` to your `$PATH` variable

```shell
export PATH=/usr/local/Cellar/mongodb-community-shell/4.2.0/bin:$PATH
```

##### Execute the connection string

```shell
mongo "mongodb+srv://your-mongodb-endpoint.1ckup.mongodb.net/your-database" --username your-user
```

... then, enter your **password**.

##### Create new collection

```shell
db.createCollection('applications')
```

**List connections**

```shell
show collections
```

Sample output:

```shell
applications
objectlabs-system
objectlabs-system.admin.collections
users
```

##### Import the sample data into the collection

You can get the list of hosts through `Web UI` https://cloud.mongodb.com/ (Go to the Cluster and check its Overview data) or using the `mongo cli`

```shell
mongo "mongodb+srv://your-mongodb-endpoint.1ckup.mongodb.net/your-database" --username your-user
rs.status()
# Check under members key
```

Then, import the data...

```shell
mongoimport --host your-mongodb-endpoint-shard-00-02.1ckup.mongodb.net:27017,your-mongodb-endpoint-shard-00-00.1ckup.mongodb.net:27017,your-mongodb-endpoint-shard-00-01.1ckup.mongodb.net:27017 \
  --ssl -u your-username -p 'your-password' \
  --authenticationDatabase admin  --db your-database\
  --collection applications --drop --file ./app-mock-data.json
```

**Sample output:**

```shell
2021-06-21T14:05:44.817-0700	[########################] your-database.applications	77.0KB/77.0KB (100.0%)
2021-06-21T14:05:45.146-0700	[########################] your-database.applications	77.0KB/77.0KB (100.0%)
2021-06-21T14:05:45.146-0700	1000 document(s) imported successfully. 0 document(s) failed to import.
```

---

## Kudos

* Extended version of Scott Moss > FEM API Design in Node.js
* Mock data provided by: https://www.mockaroo.com/