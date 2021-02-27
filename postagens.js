axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(function (response) {
    // handle success
    const data = response.data
    console.log(data); 

    data.map(posts => {

        var newdiv = document.createElement('div');
        
        var userId = document.createElement('h2');
        var userIdText = document.createTextNode(`ID do Usuário: ${posts.userId}`);
        userId.appendChild(userIdText);

        newdiv.appendChild(userId);

        var id = document.createElement('p');
        var idtext = document.createTextNode(`ID da Postagem: ${posts.id}`);
        id.appendChild(idtext);

        newdiv.appendChild(id);

        var title = document.createElement('h3');
        var titleText = document.createTextNode(`Titulo: ${posts.title}`);
        title.appendChild(titleText);
        
        newdiv.appendChild(title);

        var Textshared = document.createElement('p');
        var TextsharedText = document.createTextNode(`Post: ${posts.body}`)
        Textshared.appendChild(TextsharedText);

        newdiv.appendChild(Textshared);

        document.body.appendChild(newdiv);
    
    })

    
})

.catch(function (error) {
    // handle error
    console.log(error);
})

document.getElementById('exit').onclick = function() {

    window.location.href = 'menu.html';

} 