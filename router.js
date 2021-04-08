class Router {

    constructor(routes) {
        this.routes = routes;
        this._loadInitialRoute();
    }

_matchUrlToRoute(urlSegs){
    const matchRoute = this.routes.find(route => {
        
        const routePathSegs = route.path.split('/').slice(1)

        if (routePathSegs.length !== urlSegs.length) {
            return false;
        }

        return routePathSegs
            .every((routePathSeg, i) => routePathSeg === urlSegs.[i]);
    });

    return matchRoute;
}

_loadInitialRoute() {

    const pathNameSplit = window.location.pathname.split('/');
    const pathSegs = pathNameSplit.length > 1 ? pathNameSplit(1): '';

    this.loadRoute(...pathSegs);
    }
}