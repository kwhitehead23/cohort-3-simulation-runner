const delay = require('mocker-api/delay');
const rulesets = require('.\mocks\rulesets.mock.json');

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

    'GET /api/rulesets/:name': (_, res) => {
        res.json(rulesets.name);
      },

    'GET /api/rulesets/:id': (_, res) => {
      res.json(rulesets.id);
    },

    'DELETE /api/rulesets/:id': (req, res) => {
        console.log('---->', req.body)
        console.log('---->', req.params.id)
        res.send({ status: 'ok', message: 'Are you sure?' });
      },
}

module.exports = (noProxy ? {} : delay(proxy, 1000));