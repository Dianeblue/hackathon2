var book1 = {
  title: "House of Leaves",
  author: "Mark ZD",
  catagory: "mystery thriller",
  price: 29.99,
  image: '<img src="http://images.randomhouse.com/cover/9780375420528">',
  sellingPoints: ['Great read', 'Will penetrate your dreams' ]
}

var book2 = {
  title: "Raw Shark Texts",
  author: "Steven Hall",
  catagory: "mystery thriller",
  price: 29.99,
  image: '<img src="https://ryansreviews.files.wordpress.com/2008/01/the_raw_shark_texts.jpg">',
  sellingPoints: ['Great read', 'Will penetrate your dreams', 'awesome sauce' ]
}

var album1 = {
  title: "AFI",
  author: "Sing The Sorrow",
  catagory: "rock",
  price: 29.99,
  image: '<img src="http://ecx.images-amazon.com/images/I/71IWxedFjgL._SX355_.jpg">',
  sellingPoints: ['Great listen', 'Will penetrate your dreams', 'awesome  sauce']
}

var album2 = {
  title: "Brand New",
  author: "Deja Entendu",
  catagory: "rock",
  price: 29.99,
  image: '<img src="https://upload.wikimedia.org/wikipedia/en/7/7b/Brand_New_Deja_Entendu.jpg">',
  sellingPoints: ['Great listen', 'Will penetrate your dreams', 'awesome sauce']
}

$('#book1 .title').text(book1.title);
$('#book1 .author').text(book1.author);
$('#book1 .catagory').text(book1.catagory);
$('#book1 .price').text(book1.price);
$('#book1 .image').append(book1.image);

$('#book2 .title').text(book2.title);
$('#book2 .author').text(book2.author);
$('#book2 .catagory').text(book2.catagory);
$('#book2 .price').text(book2.price);
$('#book2 .image').append(book2.image);

$('#album1 .title').text(album1.title);
$('#album1 .author').text(album1.author);
$('#album1 .catagory').text(album1.catagory);
$('#album1 .price').text(album1.price);
$('#album1 .image').append(album1.image);

$('#album2 .title').text(album2.title);
$('#album2 .author').text(album2.author);
$('#album2 .catagory').text(album2.catagory);
$('#album2 .price').text(album2.price);
$('#album2 .image').append(album2.image);

var add_to_page = function(item) {

  var item_array = item.sellingPoints;

  var sp_lister = function(array) {
    var list = $('<li>'+array[0]+'</li>');
    for(var i = 1; i <item_array.length; i++){
      list +='<li>'+item_array+'</li>'
    }
    return(list);
  };


  var title = $('<div class="title">').html('<h2>'+ item.title + '</h2>');
  var author = $('<div class="author">').html('<h3>' + item.author + '</h3>');
  var catagory = $('<div class="catagory">').html('<h4>' + item.catagory + '</h4>');
  var price = $('<div class="price">').html(item.price);
  var image = $('<div class="image">').html($(item.image));
  var sellingPoints = $('<div class="sellingPoints">').html($('<ul></ul>')).html(sp_lister(item_array));
  $('#content').append($('<div id="'+item.id+'">').html(image).append(title).append(author).append(catagory).append(price).append(sellingPoints));
  console.log(title);
  console.log(author);
  console.log(catagory);
  console.log(price);
  console.log(sellingPoints);
  };
  
