test12
## Connection to mongodb
In order to connect to the mongodb, the credentials for it should be configured in config.js first.

## In order to test and work on the project locally:
1. Download and install the latest version of MongoDB
2. `npm install`
3. `npm run dev`

## In production/server:
1. Download and install the latest version of MongoDB and set it up with credentials in confis.js
2. `npm install`
3. `pm2 install -g`
3. `npm  start`

## Restarting server
Most of the time when server crashes or if there is an issue, a restart of the app should be the first remedy.
On server, if needs to be stopped or restarted, follow these steps meticulously:
1. `npm run stop`
2. `npm run delete`
3. use the following to find out the PID:
`npm run pid`
4. Then kill the process at the port using the PID that you got above:
`kill -9 PID `
5. Next, you can start the app:
`npm  start`

## How to build React app and place it in Node app
Let's suppose that the react app is inside `/react-app` and this node app inside `/node-app`. This is how you make new build and update it in node:

1. Put aside everything else and totally focus. This is tricky. Follow the steps and test along the way until you are confident.
2. Open cmd in `/react-app` and run: `npm run build`, before doing this please commit your code to the repo.
3. After a minute, the build process will finish. Now go to `/react-app/build`. You need to <b>copy</b> these items only :<br>
index.html<br/>
asset-manifest.json<br/>
manifest.json<br/>
precache-{random id}.js<br/>
service-worker.js<br/>
static folder<br/>

4. Go to `/node-app/build` and <b>delete</b> these files:
index.ejs<br/>
indexDotHTML already used for indexDotEJS<br/>
asset-manifest.json<br/>
manifest.json<br/>
precache-{random id}.js<br/>
service-worker.js<br/>
static folder<br/>

<i>!!! keep footer.ejs</i>

5. Now paste all the files that you copied in stage 3, here.
6. Got to `/node-app` and open cmd and run: `npm run dev`, wait a few seconds. Open `localhost:3070` in browser. Do you see the site? Do you see the blue footer at the bottom of the page? Is there any errors in cmd?<br>
If things are ok and functional, exit in cmd  by control+C<br>
7. Go to `/node-app/build`, do you see a new file generated as `index.ejs`. Is `index.html` already removed? If yes, you are clear for commit and push.

## How to commit and push to main site
First you need to push your code to devel5 and test it there. Pushing to master branch can create unpredictable results. Better test and then push to master.
1. On `/node-app` open cmd and make sure you are on devel5 branch: `git checkout devel5`
2. Do the necessary git steps to add and commit the code and then push.
3. You're code will be live at https://devel5.prod.sky-tours.com/ . Go there and test it. Better to test it up to payment page at least. Keep the console open in browser to see if there are any issues.
4. If everything is fine, on this repo, go to branches and send a merge request to master. The main site at https://sky-tours.com/ will pick up the new code.
