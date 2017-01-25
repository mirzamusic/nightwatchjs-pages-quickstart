const pageCommands = {
  clickAddPost() {
    return this
      .waitForElementVisible('@addPostButton')
      .click('@addPostButton')
  }
};

module.exports = {
  commands: [pageCommands],
  elements: {
    addPostButton: {
      selector: 'button[type="submit"]'
    },
  
    
  }
};
