import React from 'react';
import Home from '../container/Home';
import { renderToString } from 'react-dom/server';
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const html = renderToString(<Home />);
  res.send(`
	<html>
	<head>
	<title>ssr</title>
	</head>
	<body>
	<div id='root'>${html}</div>
	</body>
	</html>
	`);
});

app.listen(3000);
