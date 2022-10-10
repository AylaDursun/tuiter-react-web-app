import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row mb-3">
            <div class="col-sm-10 position-relative">
                <input type="text" class="form-control rounded-pill d-inline ps-5" placeholder="Search Tuiter" id="search">
                <i class="fas fa-search position-absolute wd-icon"></i>
            </div>
            <label for="search" class="col-sm-2 col-form-label py-0 align-middle my-auto"><a href="#" class="align-middle"><i class="fa fa-cog fa-2x d-inline my-auto"></i></a></label>
            </div>
           <ul class="nav nav-tabs mb-2">
            <li class="nav-item">
                <a class="nav-link active" href="#">For You</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Sports</a>
            </li>
            <li class="nav-item">
                <a class="nav-link d-sm-none d-md-flex" href="#">Entertainment</a>
            </li>
           </ul>
           <!-- image with overlaid text -->
           <img src="../../images/spacex.webp" class="w-100 wd-over">
           <h3 class="fw-bold wd-imageText mb-0">SpaceX's Starship</h3>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
