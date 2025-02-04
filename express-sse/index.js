const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const getTime = () => new Date().toLocaleTimeString();

const generateMessage = (number, activity) => {
  const data = {
    notificationType: 'BELL',
    number,
    userID: 4,
    activity,
    lastUpdatedTs: 1701320176587
  };
  return `data: ${JSON.stringify(data)}\n\n`;
};

const generateBellMessage = () => {
  const data = {
    notificationType: 'BELL',
    number: 0,
    userID: '409',
    activity: 'REJ_INIT',
    lastUpdatedTs: getTime()
  };
  return `data: ${JSON.stringify(data)}\n\n`;
};

app.use(cors());

app.get('/sse', (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache'
  });
  setTimeout(() => {
    //res.write(generateBellMessage());
    res.write(generateMessage(1000000007880, 'PCA_REQ'));
  }, 3000);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
