// GET REQUEST
function getTodos() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(a => showOutput(a))
    .catch(err => console.log('Error'));
  }
  
  // POST REQUEST
  function addTodo() {
    axios.post('https://jsonplaceholder.typicode.com/todos',{
        title: 'New Data',
        completed: 'false',
        userId:201
    })
    .then(a => showOutput(a))
    .catch(err => console.log('Error'));
  }
  
  // PUT/PATCH REQUEST
  function updateTodo() {
    axios.patch('https://jsonplaceholder.typicode.com/todos/2',{
        //title: 'New Data',
        completed: 'false',
        userId:3
    })
    .then(a => showOutput(a))
    .catch(err => console.log(err.response));
  }
  
  // DELETE REQUEST
  function removeTodo() {
    axios.delete('https://jsonplaceholder.typicode.com/todos/2',)
    .then(a => showOutput(a))
    .catch(err => console.log(err.response));
  }
  
  // SIMULTANEOUS DATA
  function getData() {
    axios.all([
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5'),
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
    ])
    .then( axios.spread((todo, post) => {
        console.log(todo);
        console.log(post);
        showOutput(post);
    }))
    .catch( err => console('Error'));
  }
  
  // CUSTOM HEADERS
  function customHeaders() {

    const config = {
        headers:{
            'content-type' : 'application/json',
            Authorization: "somekey"
        }
    }


    axios.post('https://jsonplaceholder.typicode.com/todos',{
        title: 'New Data',
        completed: 'false',
        userId:201
    },config)
    .then(a => showOutput(a))
    .catch(err => console.log('Error'));
  }
  
  // TRANSFORMING REQUESTS & RESPONSES
  function transformResponse() {
    const options ={
        method: 'post',
        url: 'https://jsonplaceholder.typicode.com/todos',
        data:{
            title:'New World'
        },
        transformResponse: axios.defaults.transformResponse.concat( data =>{
            data.title = data.title.toUpperCase();
            return data
        })
    }

    axios(options).then(a =>showOutput(a)).catch(err => console.log(err));
  }
  
  // ERROR HANDLING
  function errorHandling() {
    axios.post('https://jsonplaceholder.typicode.com/todosw',{
        title: 'New Data',
        completed: 'false',
        userId:201
    })
    .then(a => showOutput(a))
    .catch(err => {
        if(err.response){
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
        }
    });
  }
  
  // CANCEL TOKEN
  function cancelToken() {

    const source = axios.CancelToken.source();

    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5',{
        cancelToken: source.token
    })
    .then(a => showOutput(a))
    .catch( thrown =>{
        if(axios.isCancel(thrown)){
            console.log(thrown.message);
        }
    });
    source.cancel('Request cancelled');
}
  
  // INTERCEPTING REQUESTS & RESPONSES

axios.interceptors.request.use( config =>{
    let date = Date.now();
    console.log(`${config.method} request sent to ${config.url} at ${date}`);
    return config;
}, 
error =>{
    return Promise.reject(error);
});


  
  // AXIOS INSTANCES

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})


axiosInstance.get('/comments').then( a => showOutput(a)).catch(err => console.log(err));


  
  // Show output in browser
  function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
  }
  
  // Event listeners
  document.getElementById('get').addEventListener('click', getTodos);
  document.getElementById('post').addEventListener('click', addTodo);
  document.getElementById('update').addEventListener('click', updateTodo);
  document.getElementById('delete').addEventListener('click', removeTodo);
  document.getElementById('sim').addEventListener('click', getData);
  document.getElementById('headers').addEventListener('click', customHeaders);
  document
    .getElementById('transform')
    .addEventListener('click', transformResponse);
  document.getElementById('error').addEventListener('click', errorHandling);
  document.getElementById('cancel').addEventListener('click', cancelToken);