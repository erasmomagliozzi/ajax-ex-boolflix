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


// FUNZIONE PRINTSTARS
function printStars(){

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
  console.log(newVote);
  // ----------------------------------
  var stars='';
  for(var i = 1; i <= 5; i++){
    if(i < newVote){
      var stella = '<i class="fas fa-star yellow"></i>';
    }else{
      var stella = '<i class="far fa-star yellow"></i>';
    }
    stars += stella;
  }
  return stars;
}
// FINE FUNZIONE PRINTSTARS
// FUNZIONE BANDIERA
function flag(){
  var nation = thisFilm.original_language;
  if(nation == 'en'){
    var bandiera = '<img src="https://www.pontemagra.com/open2b/var/products/10/87/0-f40a2c47-500-Bandiera-Gran-Bretagna.jpg" alt="en">'
  }else if(nation == 'de'){
    var bandiera = '<img src="https://www.germania.xyz/wp-content/uploads/2017/12/bandierade.jpg" alt="de">'
  }else{
    bandiera = nation;
  }
  return bandiera;
}

    var context = {
      title: thisFilm.title,
      original_title: thisFilm.original_title,
      original_language: flag(thisFilm.original_language),
      vote_average: printStars(thisFilm.vote_average)
     };

    var html = template(context);
    $('.listaFilm').append(html);
    }
  }







});
