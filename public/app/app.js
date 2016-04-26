var AdminPage = (function () {
    function AdminPage() {
        this.isAuth = false;
        this.isRoot = false;
    }
    AdminPage.prototype.login = function () {
        alert(this.isAuth);
    };
    AdminPage.prototype.fetch = function (order) {
        return false;
    };
    AdminPage.prototype.destroyUniverse = function () {
        alert('UniverseDestroyed');
    };
    return AdminPage;
}());
var adminPage = new AdminPage();
adminPage.destroyUniverse();

//# sourceMappingURL=app.js.map
