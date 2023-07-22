const express = require("express")
const fs = require('fs');
// const {
//     request
// } = require("http");
const app = express()
const Curl = require('node-libcurl').Curl;
// const { parse } = require("querystring");
const querystring = require("querystring");
const { resourceLimits } = require("worker_threads");
function getpage(url , cks) {
    const curl = new Curl()
    const urld = url
    console.log(urld);
    curl.setOpt(Curl.option.URL, urld)
    curl.setOpt(Curl.option.SSL_VERIFYPEER, 0)
    var gh = curl.setOpt(Curl.option.COOKIEFILE, 'cookies/'+cks)
    curl.setOpt(Curl.option.FOLLOWLOCATION, true)
    console.log(gh)
    curl.on('end', function(statusCode, body, headers) {
        var result = body;
       console.log(result);
       return result;
        // console.log( result);
        // var bodii = console.info(this.getInfo(Curl.info.TOTAL_TIME));
        this.close();
    });
    curl.on('error', function(err, curlErrorCode) {
        console.error(err);
        console.error(curlErrorCode);
        this.close();
    });
    const hg = curl.perform();
    
}
app.get('/all', (req, res) => {
var geturl = req.query.url;
const getemail  = req.query.email;
    // console.log(ts)
    res.send(getpage(geturl,getemail))
})

app.get('/allto', (req, res) => {

    // console.log(ts)
    res.send(getpage(geturl,getemail))
})






app.listen(8000, (err) => {
    if (err)
        console.log("ERROR in server");
    else
        console.log("Server Running on PORT 8000");
})