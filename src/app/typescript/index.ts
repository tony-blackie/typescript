class AdminPage {
    isAuth: boolean = false;
    isRoot: boolean = false;

    public login(){
        alert(this.isAuth);
    }

    public fetch(order: string[]){
        return false;
    }

    public destroyUniverse(){
        alert('UniverseDestroyed');
    }
}

var adminPage = new AdminPage();
adminPage.destroyUniverse();