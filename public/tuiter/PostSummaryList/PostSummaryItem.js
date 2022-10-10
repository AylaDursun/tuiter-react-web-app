const PostSummaryItem = (post) => {
    return(`
            <li class="list-group-item d-flex justify-content-between">
                <div>
                    <span class="text-muted">${post.topic}</span>
                    <div>
                        <span class="fw-bold">${post.userName}</span>
                        <i class="fas fa-check-circle"></i>
                        <span class="text-muted"> - ${post.time}</span>
                    </div>
                    <span class="fw-bold">${post.title}</span>
                </div>
                <img src=${post.image} class="rounded-3 wd-image float-end ms-1">
            </li>`
    );
}
export default PostSummaryItem;