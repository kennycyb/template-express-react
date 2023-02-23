//@ts-check
'use strict';

const port = process.env.PORT || 3000;

const app = require('./app');

app.listen(port, () => console.log(`Server is listening on port ${port}`));
