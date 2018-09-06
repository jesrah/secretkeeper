# Secret Keeper

Have you ever had a secret you just couldn't keep to yourself anymore? Secret Keeper will let you share anonymously. It consists of two pages. 

1. SHARE: Share a secret of your own.
2. READ: Read secrets that have been shared by others.

## Requirements

- Node (8.0 and above)
- React Router
- Redux
- Redux Saga
- Styled Components
- MongoDB
- Jest

## Usage

-To install dependencies, first go to the root directory. Then run the command:

```sh
npm install
```

-To start the server:
```sh
npm start
```
## Database

-To start the database:
This app uses MongoDB. Go to https://docs.mongodb.com/manual/administration/install-community/ to install the latest version on the appropriate operating system. 

If it's your first time starting MongoDB, follow the instructions to create the default data directory (/data/db) and set permissions. To start up the database, run the following commands in separate terminal windows:
```sh
mongod
```
&
```sh
mongo localhost:27017/secrets
```

## Testing

-To run tests:
This app uses Jest. Install Jest globally:
```sh
npm install jest -g
```
You may need to use the command
```sh
sudo npm install jest -g
```

Run unit tests:
[INSERT COMMAND HERE]