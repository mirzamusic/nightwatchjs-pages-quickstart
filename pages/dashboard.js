const pageCommands = {
  checkLogin(name) {
    return this
      .waitForElementVisible('@usernameLabel')
      .assert.containsText('@usernameLabel', name)
  },
  clickAddBlog() {
    return this
      .waitForElementVisible('@blogLink')
      .click('@blogLink')
      .waitForElementVisible('@postLink')
      .click('@postLink')
     
     
  }
};

module.exports = {
  commands: [pageCommands],
  elements: {
    usernameLabel: {
      selector: '/html/body/div[2]/aside/div/div[1]/div[3]/span',
      locateStrategy: 'xpath' //using xpath just to show how you can use it with pages
    },
    navDrop: {
      selector: 'a[href="#"]'
    },
    logoutLink: {
      selector: 'a[href="http://phptravels.net/admin/logout"]'
    },
    
    blogLink: {
        selector: 'a[href="#Blog"]'
    },
    postLink: {
        selector: 'a[href="http://phptravels.net/admin/blog/"]'
    },
    
  }
};
