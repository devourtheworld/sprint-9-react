# sprint-9-node

## Task

Implement an http server (you can use ExpressJS) that initiates asynchronous operations when a GET request is made:
- Continuous output to the server console of the current date and time in UTC format at certain intervals.
- Stopping the console output sending time after a while and completing the server response with the return to the user of the current date and time of shutdown in UTC format.

### Acceptance criteria:

- When you connect to the server, the output to the console of the current time begins at regular intervals
- Stop output to the console after the specified time and return the current date and time to the user.
- The interval and time interval must be specified when starting the server using environment variables:
  > `$ node server.js -i [console output recurrence interval] -t [time after which the web client message will be displayed]`
- Stable operation of the server at several simultaneous requests
- Make a video presentation with a colleague with a solution (explanation of the solution) 

To start use - node main -i 1000 -t 10000
Result: https://www.youtube.com/watch?v=HQiHdAsVBUQ&feature=youtu.be&ab_channel=username_123
