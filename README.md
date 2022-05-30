# Palindrome-based search demo

every time a client searches with a palindrome, all
products found will have a 50% discount, this search applies to
identifiers (Product Id), brands and product descriptions.
Considerations:
1. An API that provides the search service is needed to list the products
found from a database in MongoDB1
2. In case the search is a palindrome, the products must be returned
with the discount (50%) already applied to the price
3. When it is a search on product identifiers, it should be
return the exact result, that is, a product
4. For the brand and for the description of products, it is enough that the search is of
more than 3 characters and that these are included in the fields already mentioned
(brand and description).
5. Optionally, a web application is needed that consumes the API described and that
contain a search engine and a results section.


This project is developed under the following technologies.

- Backend : Nestjs
-Front : Angular 13
- DB : MongoDB (Mongo Atlas)
- Deploy: Docker

### Features

- Microservice (Rest APi) for product search management
- Validation of palindromes and application of the discount
- Friendly interface
- Fontend SPA

### Initial Settings

We clone the repository:

```sh
git clone

```

#### Local deployment

You need to install the following dependencies:

- [nodejs nodejs lts] - <https://nodejs.org/es/>

We proceed with the configuration of the environment variables:

```sh
cd challenge/api
touch .env
nano .env

```

We paste the following variables and define our values

```sh
DB_MONGODB_USER=
DB_MONGODB_PASSWORD=
DB_MONGODB_DB=

```
The data backup to carry out tests in a mongo db base is attached to the api with the name
promotions-mongodb-backup.json

```sh
cd api
mongoimport --db <db-name> --collection promotions --type json --file promotions-mongodb-backup.json --jsonArray


```

We proceed with the installation of the backend:

```sh
cd challenge/api
npm i
npm run start:dev
```

We proceed with the frontend installation:

```sh
cd challen/front
npm i
npm start
```

#### Deploy under docker

## Installation

You need to install the following dependencies:

- [nodejs lts] - <https://nodejs.org/en/>
- [docker] - <https://docs.docker.com/compose/>
- [docker-compose] - <https://www.docker.com/>

We proceed with the configuration of the global environment variables:

```sh
cd challen
touch .env
nano .env

```

We paste the following variables and define our values

```sh
DB_MONGODB_USER=
DB_MONGODB_PASSWORD=
DB_MONGODB_DB=

```

We run docker compose

```sh
docker.compose up -d
```

### Check the deployment

| Services | Link |
| ------ | ------ |
| Search Frontend | [https://localhost:4200/products][PlGd] |
| search back-end | [<https://localhost:3002/promotion?search>=""][PlGd] |
| Find Id Fronted | [https://localhost:4200/products/id][PlGd] |
| Find Id Backend | [https://localhost:3002/promotion/id][PlOd] |

#### Site with example online
<http://170.187.137.162:4200/promotion>

## license

MIT