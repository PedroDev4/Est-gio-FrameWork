axios.get('https://jsonplaceholder.typicode.com/albums')
  .then(function (response) {
    // handle success
    const data = response.data
    console.log(data); 

    data.map(albuns => { 

       var newdiv = document.createElement('div');
       var texto = document.createElement('h2');
       var titletext = document.createTextNode(albuns.title);
       
       texto.appendChild(titletext);
       newdiv.appendChild(texto);

      var titleuserid = document.createElement('h2');
      var titleuserIDtext =  document.createTextNode(`ID de Usuário: ${albuns.userId}`); 
      titleuserid.appendChild(titleuserIDtext);
      newdiv.appendChild(titleuserid);

      var idpicture = document.createElement('h2'); 
      var idpicturetext = document.createTextNode(`ID do Albun: ${albuns.id}`);
      idpicture.appendChild(idpicturetext)

      newdiv.appendChild(idpicture);

      var body = document.createElement('p');
      var bodyText = document.createTextNode(albuns.title); 

      body.appendChild(bodyText);
      newdiv.appendChild(body);




        document.body.appendChild(newdiv);
     });

      



  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })


  document.getElementById('exit').onclick = function() {

    window.location.href = 'menu.html';
  
  } 