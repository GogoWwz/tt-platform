const http2 = require('spdy');
const express = require('express')
const ChildProcess = require('child_process')
const bodyParser = require('body-parser')
const fs = require('fs');
const app = express()
const port = 3001

const options = {
  key: fs.readFileSync('./ssl/server.key'),
  cert: fs.readFileSync('./ssl/server.crt')
}

// 解析 application/json
app.use(bodyParser.json()); 
// 解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded());

// 代理下资源
app.use(express.static('static'))

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');

  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
})

let ShellRes;

app.get('/shell', (req, res) => {
  res.header({
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });

  ShellRes = res;
});

app.post('/command', (req, res) => {
  const { command } = req.body;

  const shell = ChildProcess.spawn(command, {
    shell: process.env.ComSpec
  })

  shell.stderr.on('data', data => {
    console.log(data.toString())
    // 不断调用/shell的res.write
    ShellRes.write("event: message\n");
    ShellRes.write("data: " + data.toString() + "\n\n");
  })

  shell.on('error', (err) => {
    console.log(err)
  })

  shell.on('close', () => {
    res.json({
      code: 0
    })
  })
})

app.post('/demo', (req, res) => {
  if (!fs.existsSync('./static/merge')) {
    fs.mkdirSync('./static/merge')
  }
  let command = [];
  for (let i = 1; i <= 100; i++) {
    const d = i / 100;
    command.push('ffmpeg -i ./static/background.png -i ./static/demo2.jpg -filter_complex "[1:v]colorkey=Black:'+ d +'[ckout];[0:v][ckout]overlay[out]" -map "[out]" ./static/merge/'+ (101 - i) +'.png -y');
    const shell = ChildProcess.spawn('ffmpeg -i ./static/background.png -i ./static/demo.jpg -filter_complex "[1:v]colorkey=Black:'+ d +'[ckout];[0:v][ckout]overlay[out]" -map "[out]" ./static/merge/'+ (101 - i) +'.png -y', {
      shell: process.env.ComSpec
    })

    shell.stderr.on('data', data => {
      console.log(data.toString())
    })
  
    // shell.on('error', (err) => {
    //   console.log(err)
    // })
  
    // shell.on('close', () => {
    // });
  }
  console.log(command.join(' && '))
  
  // const shell = ChildProcess.spawn(command.join(' && '), {
  //   shell: process.env.ComSpec
  // })
  // shell.stderr.on('data', data => {
  //   console.log(data.toString())
  // })
  // shell.on('error', (err) => {
  //   console.log(err)
  // })

  res.json({
    code: 0
  })

});

// http2
//   .createServer(options, app)
//   .listen(port, ()=>{
//     console.log(`Example app listening at https://localhost:${port}`)
//   }
// )

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})