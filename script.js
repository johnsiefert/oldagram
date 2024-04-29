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
  posts.forEach((images) => {
    render(images);
  });
}

function render(obj) {
  container.innerHTML += `
     <section class="artist-profile">
     <div class="profile">
      <img src="${obj.avatar}"/>
     <div class="info">
    <h2 class="name">${obj.name}</h2>
            <p class="location">${obj.location}</p>
    </div>
     </div>
     <img  class= "post-image" src="${obj.post}"/>
    <p>${obj.likes} likes</p>
    <p>${obj.comment}</p>
</section>`;
}

picture();
