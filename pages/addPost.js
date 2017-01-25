const pageCommands = {
  addPost() {
     this
      .waitForElementVisible('@titleInput')
      .setValue('@titleInput', 'Some Title')
      .waitForElementVisible('@desriptionInput')      
      .moveToElement('@desriptionInput', 100, 100);
      this.api.mouseButtonClick('left');
      this.api.keys('Some Desc aaaa')
      this.click('@categorySelect')
      .waitForElementVisible('@adventureCategorySelect')
      .click('@adventureCategorySelect')
      .setValue('@file', require('path').resolve(__dirname + '/images/merc.jpg'))
      .click('@addPostButton')
      return this;
  }
};

module.exports = {
  commands: [pageCommands],
  elements: {
    titleInput: {
      selector: 'input[name="title"]'
    },
    desriptionInput:{
      selector: "#cke_desc"
    },
   categorySelect:{
      selector: 'select[name="category"]'
    },
    adventureCategorySelect:{
      selector: 'select[name="category"] option[value="16"]'
    },
    file: {
      selector: 'input[type="file"]'
    },
    addPostButton: {
      selector: 'button[type="submit"]'
    },
  

  }
};
