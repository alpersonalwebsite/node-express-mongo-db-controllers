# Node, Express and MongoDB

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

## Overview

This is an easy, basic and raw example of **HOW to** implement an API with Node, Express and MongoDB (Atlas).

## Requirements

- Node 12+
- NPM

## Install dependencies

```
npm install
```

## Running the server

### Development

```
npm run dev
```

### Production

```
npm run build

npm start
```

## API endpoints

### GET /api/users

- Returns an object with the key data containing an array of objects with 1,000 records.
- Supports query string:
  - ?limit=integer
  - ?offset=integer

#### Request:

```
curl http://127.0.0.1:3333/api/users
```

#### Response:

```json
{
  "data": [
    {
      "_id": 16,
      "index": 16,
      "guid": "2de0ede3-423d-4c12-835d-0f7460bc3e8f",
      "isActive": true,
      "age": 24,
      "name": "Hardy",
      "lastname": "Zimmerman",
      "gender": "male",
      "company": "SYNTAC",
      "email": "hardyzimmerman@syntac.com",
      "phone": "+1 (965) 514-3726",
      "address": "465 Schenck Place, Vallonia, Georgia, 2580"
    },
    {
      "_id": 0,
      "index": 0,
      "guid": "3f049239-fc26-4ec0-9a15-c36bc9f78e21",
      "isActive": true,
      "age": 38,
      "name": "Frances",
      "lastname": "Tyler",
      "gender": "female",
      "company": "FROLIX",
      "email": "francestyler@frolix.com",
      "phone": "+1 (957) 595-3029",
      "address": "261 Jefferson Avenue, Terlingua, Kentucky, 8445"
    },
    ...
    ...
  ]
}
```

#### Query string

##### GET /api/users?limit=1

- Returns `n` record(s) where `n` is the value (type: Number) of the `limit` key.

###### Request:

```
curl http://127.0.0.1:3333/api/users?limit=1
```

###### Response:

```json
{
  "data": [
    {
      "_id": 16,
      "index": 16,
      "guid": "2de0ede3-423d-4c12-835d-0f7460bc3e8f",
      "isActive": true,
      "age": 24,
      "name": "Hardy",
      "lastname": "Zimmerman",
      "gender": "male",
      "company": "SYNTAC",
      "email": "hardyzimmerman@syntac.com",
      "phone": "+1 (965) 514-3726",
      "address": "465 Schenck Place, Vallonia, Georgia, 2580"
    }
  ]
}
```

Wrong type for `n` value will return _all the users_.
Example: `users?limit=%27Hello%27`

##### GET /api/users?limit=1

- Returns from `n` (PRIMARY KEY) where `n` is the value (type: Number) of the `offset` key.

###### Request:

```
curl http://127.0.0.1:3333/api/users?offset=10
```

###### Response:

```json
{
  "data": [
    {
      "_id": 3,
      "index": 3,
      "guid": "f744bfbf-1e73-4a02-ac1e-cc028adad367",
      "isActive": false,
      "age": 34,
      "name": "Downs",
      "lastname": "Conley",
      "gender": "male",
      "company": "PROGENEX",
      "email": "downsconley@progenex.com",
      "phone": "+1 (859) 522-3715",
      "address": "962 Alton Place, Cazadero, North Carolina, 7607"
    },
    {
      "_id": 7,
      "index": 7,
      "guid": "f8d45f43-356a-4a2b-91cd-8988a8bd461d",
      "isActive": true,
      "age": 28,
      "name": "Paula",
      "lastname": "Day",
      "gender": "female",
      "company": "MARKETOID",
      "email": "pauladay@marketoid.com",
      "phone": "+1 (824) 477-2206",
      "address": "505 Boynton Place, Haring, Nebraska, 540"
    },
    ...
    ...
  ]
}
```

### GET /latency

- Returns an object with a delay of 1 second (default)
- Supports query string:
  - ?limit=integer
  - ?offset=integer

#### Request:

```
curl http://127.0.0.1:3333/latency
```

#### Response:

```json
{
  "data": "Thanks for waiting 1 second"
}
```

#### Query string

##### GET /latency?delay=2000

- Increases latency (delay) to `n` milliseconds where, _min:1000_ and _max:4000_. Default value: 1000ms.

Wrong type for `n` value will produce a default delay of 1000ms.

###### Request:

```
curl http://127.0.0.1:3333/latency?delay=2000
```

###### Response:

```json
{
  "data": "Thanks for waiting 2 seconds"
}
```


### GET everything else 

- Any other endpoint will retrieve an object

#### Request:

```
curl http://127.0.0.1:3333/
```
#### Response:

```json
{
  "message": "Node.js, Express, and MongoDB API!"
}
```

---

## Notes:
If you need help at the tie of [Migrating from mLab to MongoDB Atlas](./migrating-mlab-to-mongo-atlas.md)

