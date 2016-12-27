const pageCommands = {
  login(email, pass) {
    return this
      .waitForElementVisible('@emailInput')
      .setValue('@emailInput', email)
      .setValue('@passInput', pass)
      .waitForElementVisible('@loginButton')
      .click('@loginButton')
  },
  checkLogout(){
    return this
      .waitForElementVisible('@emailInput');
  }
};

module.exports = {
  url: 'http://phptravels.net/admin',
  commands: [pageCommands],
  elements: {
    emailInput: {
      selector: 'input[name="email"]'
    },
    passInput: {
      selector: 'input[name="password"]'
    },
    loginButton: {
      selector: 'button[type=submit]'
    }
  }
};
