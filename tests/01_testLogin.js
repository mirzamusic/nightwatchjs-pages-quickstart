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
    'Logout': (client) => {
        const loginPage = client.page.login();
        const dashboardPage = client.page.dashboard();
        dashboardPage.logout(config.name);
        loginPage.checkLogout();
        client.end();
    }
};
