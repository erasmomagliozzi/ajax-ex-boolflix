// d8893da2d49e4cabc0a135a6ae6fcade
$(document).ready(function(){

  $('button').click(function(){
  $.ajax(
   {
    url: "https://api.themoviedb.org/3/search/movie?",
    method: "GET",
    data:{
      api_key : 'd8893da2d49e4cabc0a135a6ae6fcade',
      query: $('input').val()
    },
    success: function (data, stato) {
      var film = data.results;

        stampaFilm(film);
    },
    error: function (richiesta, stato, errori) {
        alert("E' avvenuto un errore. " + errore);
    }
  });
});



// FUNZIONI-----------
  function stampaFilm(films){
    $('.listaFilm').html('');
    var source = $('#film-template').html();
    var template = Handlebars.compile(source);
  for (var i = 0; i < films.length; i++) {
    var thisFilm = films[i];

    // VOTO IN NUMERO DA 1 A 5
    var voto = thisFilm.vote_average;
    if(voto >= 1 && voto <= 2.5){
      voto = 1;
    }else if(voto >= 2.6 && voto <= 4.5){
      voto = 2;
    }else if(voto >= 4.6 && voto <= 6.5){
      voto = 3;
    }else if(voto >= 6.6 && voto <= 8.5){
      voto = 4;
    }else if(voto >= 8.6 && voto <= 10){
      voto = 5;
    }else if (voto < 1) {
      voto = 0;
    }
    var newVote = voto;
   //  console.log(newVote);
   // if(newVote == 3){
   //   $('.star').first().addClass('yellow');
   // }


    var context = {
      title: thisFilm.title,
      original_title: thisFilm.original_title,
      original_language: thisFilm.original_language,
      vote_average: newVote
     };

    var html = template(context);
    $('.listaFilm').append(html);
  }

}




});
