axios.get('https://jsonplaceholder.typicode.com/todos') // Consumindo a API com Axios
  .then(function (response) { // Promisse 
    // Promisse => handle success
   
    // Dados da API // API Data
    const data = response.data
    // Dados retornados da API no Console;
    console.log(data);
    
    // Mapeando os dados da API, nos elementos Front-End Html
    data.map(todos => { 

      // Creating the card = Criando a DIV
      var newdiv = document.createElement('div');

      // Id do usuario no DivCard // User id in Card 
      var userid = document.createElement('h2');
      var useridText = document.createTextNode(`ID de Usuário: ${todos.userId}`);
      userid.appendChild(useridText);

      newdiv.appendChild(userid); // Exibindo Elemento criado no HTML = Showing element created in HTML

      // ID do To-do no Card // to-do ID in DivCard
      var idTd = document.createElement('h2');
      var idTdText = document.createTextNode(`ID do TO-DOs: ${todos.id}`);
      idTd.appendChild(idTdText)

      newdiv.appendChild(idTd);
       
      // Card Title Child => Titulo do card
      var title = document.createElement('h3');
      var titleText = document.createTextNode(`Titulo: ${todos.title}`);
      title.appendChild(titleText); 

      newdiv.appendChild(title);

      var image = document.createElement('img');
       
      if(todos.completed == true) {

        image.src = '../img/completed.png';
        

      }else {

        image.src = '../img/notcompleted.png';

      }  

      newdiv.appendChild(image);
      
      // Exibindo todas as children criadas na div 
      document.body.appendChild(newdiv);
    })

  })


  .catch(function (error) {
    // Promisse => handle error
    console.log(error);
  })

  // Exit Button
  document.getElementById('exit').onclick = function() {

    window.location.href = 'menu.html';
  
  } 
