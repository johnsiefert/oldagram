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

const container = document.querySelector('.container');

function picture() {
  posts.forEach((obj) => {
    container.innerHTML += `
     <section class="artist-profile">
     <div class="profile">
     <img class ="profile-img" src="${obj.avatar}"/>
    <h2>${obj.name}</h2>
    </div>
    <p>${obj.location}</p>
    <img src="${obj.post}"/>
    <p>${obj.likes} likes</p>
    <p>${obj.comment}</p>
</section>`;
  });
}

picture();
