<script>
  $.ajax({
    url: "https://js-instagram-proxy.herokuapp.com/botavian/media",
    dataType: "jsonp",
    data: {
      count: 12
  },
      success: function(json) {
      for (var i in json.posts) {
      if(i >= 12){continue};
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
</script>



<script>
  function parse_str(str) {
    return str.split('&').reduce(function(params, param) {
      var paramSplit = param.split('=').map(function(value) {
        return decodeURIComponent(value.replace('+', ' '));
      });
      params[paramSplit[0]] = paramSplit[1];
      return params;
    }, {});
  }
</script>