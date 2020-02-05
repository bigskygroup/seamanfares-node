Version 1
In order to connect to the mongodb, the credentials for it should be configured in config.js first.

In order to test and work on the project locally:
1. Download and install the latest version of MongoDB
2. `npm install`
3. `npm run dev`

In production/server:
1. Download and install the latest version of MongoDB and set it up with credentials in confis.js
2. `npm install`
3. `pm2 install -g`
3. `npm run start`

On server, if needs to be stopped or restarted, follow these steps meticulously:
1. `npm run stop`
2. `npm run delete`

3. use the following to find out the PID:
`npm run pid`

4. Then kill the process at the port using the PID that you got above:
`kill -9 PID `


--- 
testing deployment on 2-5-2020
testing deployment on 2-5-2020
