# Secret Keeper

Have you ever had a secret you just couldn't keep to yourself anymore? Secret Keeper will let you share anonymously, as well as read secrets that have been shared by others.

## Requirements

- Node (8.0 and above)
- React Router
- Redux
- Redux Saga
- Reselect
- Styled Components
- MongoDB
- Jest

## Usage

To install dependencies, first go to the root directory. Then run the command:

```sh
npm install
```

To start the server:
```sh
npm run start
```

## Database

This app uses MongoDB. Go to https://docs.mongodb.com/manual/administration/install-community/ to install the latest version on the appropriate operating system. 

If it's your first time starting MongoDB, follow the instructions to create the default data directory (/data/db) and set permissions. To start up the database, run the following commands in separate terminal windows:
```sh
mongod
```
&
```sh
mongo 
```
In the mongo shell, run the command:
```sh
use secretkeeper 
```

## Testing

This app uses Jest. Install Jest globally:
```sh
npm install jest -g
```

Run unit tests on the HomePage container by running the following command:
```sh
npm run test:secret
```