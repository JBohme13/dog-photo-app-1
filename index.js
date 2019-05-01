function getDogPhoto() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(responce => responce.json())
      .then(responceJson => 
        displayImages(responceJson));
  }

  function displayImages(responceJson) {
      console.log(responceJson);
      $('.results').append(`<img src="${responceJson.message}">`);
  }
  
  function watchSubmit() {
      $('.form').submit(event => {
          event.preventDefault();
          for (let i = 0; i < parseInt($('input').val()); i++ ) {
              getDogPhoto();
          };
     });
  }
  
  $(function() {
    console.log('App loaded! Waiting for submit!');
    watchSubmit();
  });