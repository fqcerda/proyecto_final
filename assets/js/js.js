  /*$.ajax({
    url: "https://js-instagram-proxy.herokuapp.com/botavian/media",
    dataType: "jsonp",
    data: {
      count: 12
  },
      success: function(json) {
      for (var i in json.posts) {
      if(i >= 12){continue}
      url = json.posts[i].display_url;
      shortcode = json.posts[i].shortcode;

      newElement = document.createElement('div');
      newElement.className = 'insta_img';
      newElement.style = 'background-image: url(' + url + ')';

      newElementLink = document.createElement('a');
      newElementLink.href = "https://www.instagram.com/p/" + shortcode;
      newElementLink.appendChild(newElement);

      var clientHeight = document.getElementById('instagram').clientHeight;
      document.getElementById("instagram").appendChild(newElementLink);
    }
  }
  });


  function parse_str(str) {
    return str.split('&').reduce(function(params, param) {
      var paramSplit = param.split('=').map(function(value) {
        return decodeURIComponent(value.replace('+', ' '));
      });
      params[paramSplit[0]] = paramSplit[1];
      return params;
    }, {});
  }*/

$.ajax({
url: 'https://randomuser.me/api/?results=3',
type: 'GET',
dataType: 'json',
})
.done(function(data) {
console.log(data.results);

$.each( data.results, function( key, value ) {
$('.user').append(`<li class="col-md-4">
<img src="${value.picture.large}" class="foto_usuario" alt="">
<hr class="linea_titulo izq_align_hr">
<h2 class="titulo_inicio">${value.name.first} ${value.name.last}</h2>
<a class="user_email">${value.email}</a>
<p class="user_phone"></p>
</li>`)
});
})
.fail(function() {
console.log("error");
})



  $(function() {
    $('.lazy').lazy({
      //delay: 500,//
      //imageBase: 'images/',//
      effect: "fadeIn",
      effectTime: 500,
      threshold: 0
    });
  });









