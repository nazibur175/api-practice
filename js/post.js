// console.log('added');
function loadPost()
{
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(data => displayPost(data));
}

function displayPost(data){
  const postContainer=document.getElementById('postContainer');
  for(const post of data)
  {
    const div=document.createElement('div');
    div.classList.add('post');
    div.innerHTML=`
    <h4>User ID:${post.userId}</h4>
    <h5>Title:${post.title}</h5>
    <p>Description:${post.body}</p>
    `;
    postContainer.appendChild(div);
    //console.log(post);
  }
}