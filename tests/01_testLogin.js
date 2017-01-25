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
    }
};
