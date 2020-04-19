fetch('https://3000-cb4a4429-4050-460a-acd7-8470572af300.ws-eu01.gitpod.io/')
.then(result => {
    return result.json();   
})
.then(data => {
    console.log(data);
})