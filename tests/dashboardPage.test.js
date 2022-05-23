load("init.js");
load("pages/DashboardPage.js");


testOnAllDevices("Dashboard Page", "/", function (driver, device) {

    var dashboardPage = new DashboardPage(driver).waitForIt();

    checkLayout(driver, "specs/dashboardPage.gspec", device.tags);
});

# test demo
