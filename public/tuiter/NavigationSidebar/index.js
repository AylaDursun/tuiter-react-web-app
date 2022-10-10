const NavigationSidebar = () => {
    return(`
    <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action">
                <i class="fab fa-twitter fa-1x"></i><br/>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
                <i class="fas fa-home fa-1x me-1"></i>
                <span class="d-sm-none d-xl-inline">Home</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
                <i class="fas fa-hashtag fa-1x me-1"></i>
                <span class="d-sm-none d-xl-inline">Explore</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
                <i class="fas fa-bell fa-1x me-1"></i>
                <span class="d-sm-none d-xl-inline">Notifications</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
                <i class="fas fa-envelope fa-1x me-1"></i>
                <span class="d-sm-none d-xl-inline">Messages</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
                <i class="fas fa-bookmark fa-1x me-1"></i>
                <span class="d-sm-none d-xl-inline">Bookmarks</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
                <i class="fas fa-list fa-1x me-1"></i>
                <span class="d-sm-none d-xl-inline">Lists</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
                <i class="fas fa-user me-1"></i>
                <span class="d-sm-none d-xl-inline">Profile</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
                <span class="fa-stack d-inline pe-2 me-3 align-baseline">
                    <i class="fas fa-circle fa-stack-1x"></i>
                    <i class="fa fa-ellipsis-h fa-stack-1x fa-inverse"></i>
                </span>
                <span class="d-sm-none d-xl-inline">More</span>
            </a>
    </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;

