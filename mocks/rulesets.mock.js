const mockRulesets = require("./data/rulesets.json");

const proxy = {
  _proxy: {
    changeHost: true,
    httpProxy: {
      options: {
        ignorePath: true,
      },
    },
  },

  "GET /": (_, res) => {
    console.log("Root route hit");
  },

  "GET /rulesets": (_, res) => {
    console.log("GET /rulesets.json route hit");
    console.log("mockRulesets:", mockRulesets);
    res.json(mockRulesets);
  },

  "DELETE /rulesets/:id": (req, res) => {
    console.log("DELETE /rulesets/:id route hit");
    mockRulesets = mockRulesets.filter(({ id }) => id != req.params.id);
    res.send();
  },
};

module.exports = proxy;
