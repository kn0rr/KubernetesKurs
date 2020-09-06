const express =require('express');
const redis =require('redis');
//for crashing reasons!:
const process = require('process');

const app=express();
// In a traditionall environment you would specify a host like 'https://my-redis-server.com' 
// but since we are using docker-compose we can simply specify the name
// port definition is optional
const client =redis.createClient({
    host:'redis-server',
    port: 6379
});
client.set('visits',0);

app.get('/',(req,res)=>{
    // process.exit(0) kills the container! Statuscode 0 means exit is ok.
    // Refer to process.exit status code for more details
    process.exit(0);
    client.get('visits',(err,visits)=>{
        res.send('Number of visits is '+visits);
        client.set('visits',parseInt(visits)+1);
    });
});

app.listen(8081,()=>{
    console.log('Listening on 4001 local and 8081 in container');
})