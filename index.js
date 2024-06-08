const posts = [
    {
        name: 'Vincent van Gogh',
        username: 'vincey1853',
        location: 'Zundert, Netherlands',
        avatar: 'images/avatar-vangogh.jpg',
        post: 'images/post-vangogh.jpg',
        comment: 'just took a few mushrooms lol',
        likes: 21,
    },
    {
        name: 'Gustave Courbet',
        username: 'gus1819',
        location: 'Ornans, France',
        avatar: 'images/avatar-courbet.jpg',
        post: 'images/post-courbet.jpg',
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
    },
    {
        name: 'Joseph Ducreux',
        username: 'jd1735',
        location: 'Paris, France',
        avatar: 'images/avatar-ducreux.jpg',
        post: 'images/post-ducreux.jpg',
        comment:
            'gm friends! which coin are YOU stacking up today?? post below and WAGMI!',
        likes: 152,
    },
];

const icons = ['heart', 'comment', 'dm'];

// Get main element
const mainEl = document.querySelector('main');

// Get post template
const postTemplate = document.getElementById('post-template');

window.addEventListener('load', () => {
    mainEl.textContent = '';

    posts.forEach((post) => {
        // Clone template
        const templateClone = postTemplate.content.cloneNode(true);

        // Header section
        const postHeaderImg = templateClone.querySelector('.post-header-img');
        postHeaderImg.src = post.avatar;

        const postHeaderName = templateClone.querySelector('.post-header-name');
        postHeaderName.textContent = post.name;

        const postHeaderLocation = templateClone.querySelector(
            '.post-header-location'
        );
        postHeaderLocation.textContent = post.location;

        // Post section
        const postImg = templateClone.querySelector('.post-image img');
        postImg.src = post.post;

        // User action section
        icons.forEach((icon) => {
            const iconEl = templateClone.querySelector(`.${icon}`);
            iconEl.src = `./images/icon-${icon}.png`;
        });

        // Likes section
        const likesEl = templateClone.querySelector('.post-likes p');
        likesEl.textContent = `${post.likes} likes`;

        // Comments section
        const commentEl = templateClone.querySelector('.comment-text');
        const username = templateClone.querySelector(
            '.comment-text .bold-text'
        );
        username.textContent = post.username;
        commentEl.innerHTML += ' ' + post.comment;

        // Attach post element to main
        mainEl.appendChild(templateClone);
    });
});