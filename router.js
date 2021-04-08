class Router {

    constructor(routes) {
        this.routes = routes;
        this._loadInitialRoute();
    }
}

_loadInitialRoute() {

    const pathNameSplit = window.location.pathname.split('/');
    const pathSegs = pathNameSplit.length > 1 ? pathNameSplit(1): '';

    this.loadRoute(...pathSegs)
}