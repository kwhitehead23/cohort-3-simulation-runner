const delay = require('mocker-api/delay');
const layouts = require('.\mocks\layouts.mock.json');

const noProxy = process.env.NO_PROXY === 'true';

const proxy = {
    _proxy: {
      changeHost: true,
      httpProxy: {
        options: {
          ignorePath: true,
        },
      },    
    },

    'GET /api/layouts/:name': (_, res) => {
        res.json(layouts.name);
      },

    'GET /api/layouts/:id': (_, res) => {
      res.json(layouts.id);
    },

    'DELETE /api/layouts/:id': (req, res) => {
        console.log('---->', req.body)
        console.log('---->', req.params.id)
        res.send({ status: 'ok', message: 'Are you sure?' });
      },
}

module.exports = (noProxy ? {} : delay(proxy, 1000));