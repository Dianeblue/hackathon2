var book1 = {
  title: "House of Leaves",
  author: "Mark ZD",
  catagory: "mystery thriller",
  price: 29.99,
  image: '<img src="http://images.randomhouse.com/cover/9780375420528">'
}

var book2 = {
  title: "Raw Shark Texts",
  author: "Steven Hall",
  catagory: "mystery thriller",
  price: 29.99,
  image: '<img src="https://ryansreviews.files.wordpress.com/2008/01/the_raw_shark_texts.jpg">'
}

var album1 = {
  title: "AFI",
  author: "Sing The Sorrow",
  catagory: "rock",
  price: 29.99,
  image: '<img src="http://ecx.images-amazon.com/images/I/71IWxedFjgL._SX355_.jpg">'
}

var album2 = {
  title: "Brand New",
  author: "Deja Entendu",
  catagory: "rock",
  price: 29.99,
  image: '<img src="https://upload.wikimedia.org/wikipedia/en/7/7b/Brand_New_Deja_Entendu.jpg">'
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
