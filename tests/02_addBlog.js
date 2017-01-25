var config = require('../tests.config');
module.exports = {
    'User Logs in': (client) => {
        client.maximizeWindow();
        const loginPage = client.page.login();
        const dashboardPage = client.page.dashboard();
        loginPage
            .navigate()
            .login(config.username, config.password);
        dashboardPage.checkLogin(config.name);
    },
    'Add Blog': (client) => {
        const dashboardPage = client.page.dashboard();
        const postPage = client.page.post();
        const addPostPage = client.page.addPost();

        dashboardPage.clickAddBlog();
        postPage.clickAddPost();
        addPostPage.addPost();
        client.pause(2000);
        client.end();
        
    }
}
