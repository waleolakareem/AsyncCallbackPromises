console.log("What")
const posts = [{title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post Two'},
]

function getPosts(){
  setTimeout(() => {
    let output = ''
    posts.forEach((post,index) => {
      output +=`<li>${post.title}</li>`;
    });

    document.body.innerHTML = output;
  },1000);
};


function createPost(post) {
  //How to create a promise you need a resolve and a reject, set const error to false
  return new Promise((resolve,reject)=> {
    setTimeout(() => {
      posts.push(post);

      const error = false;
      if(!error) {
        resolve();
      }else {
        reject('Error: Something went wrong')
      }
    },2000);
  });
};

// async function init() {
//   await createPost({title:'Post three', body:'This is post three'});

//   getPosts();
// }

// init();


async function fetchUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  const data = await res.json();

  console.log(data);
}

fetchUsers();
// createPost({title:'Post three', body:'This is post three'})
//   .then(getPosts);
//   .catch(err=>console.log(err));

// const promise1 = Promise.resolve('hello worls');
// const promise2 = 10;
// const promise3 = new Promise((resolve,reject)=>{
//   setTimeout(resolve,2000,'Goodbye');
// });
// const Promise4 =fetch('https://jsonplaceholder.typicode.com/posts').then(
//   res => res.json()
//   );

// Promise.all([promise1,promise2,promise3, Promise4]).then((values)=>{console.log(values)});



