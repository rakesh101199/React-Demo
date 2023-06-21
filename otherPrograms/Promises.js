const posts = [];


function lastUpdateUserActivity(){
    return new Promise( (resolve, reject) =>{
        setTimeout( ()=>{
            const date = Date.now();
            console.log('user last activity time '+ date);
            resolve();
        },1000);
    } )
}


function createPost(){
    return new Promise((resolve, reject) =>{
        setTimeout( () => {
            posts.push({title : 'post1'});
            console.log('created a new post');
            resolve();
        },2000);
    })
}

function deletePost(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(posts.pop());
        },1000);
    })

}



Promise.all([lastUpdateUserActivity(), createPost()])
.then(deletePost)
.then(a=>console.log('deleted the post '+a.title))
.then(lastUpdateUserActivity);







