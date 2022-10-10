const WhoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item d-flex">
        <img src=${who.avatarIcon} class="rounded-circle wd-profile me-sm-1 me-xl-3 ms-1" alt="avatar icon">
        <div>
            <div class="fw-bold">
                ${who.userName}
                <i class="fas fa-check-circle"></i>
            </div>
            ${who.handle}
        </div>
        <button class="btn btn-primary rounded-pill float-right ms-auto h-75 my-auto">
            Follow
        </button>
        </li>`
    );
}
export default WhoToFollowListItem;