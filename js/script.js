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
        console.log(film);
        stampaFilm(film);
    },
    error: function (richiesta, stato, errori) {
        alert("E' avvenuto un errore. " + errore);
    }
  });
});

  function stampaFilm(films){
    $('.listaFilm').html('');
    var source = $('#film-template').html();
    var template = Handlebars.compile(source);
  for (var i = 0; i < films.length; i++) {
    var thisFilm = films[i];

    var context = {
      title: thisFilm.titolo,
      original_title: thisFilm.original_title,
      original_language: thisFilm.original_language,
      vote_count: thisFilm.vote_count
     };
    var html = template(context);
    $('.listaFilm').append(html);


  }

}






















});
