// Set the configuration for your app
  // TODO: Replace with your project's config object
let firebase = require("firebase");
let config = {
apiKey: "apiKey",
	authDomain: "bookslendingapi.firebaseapp.com",
	databaseURL: "https://bookslendingapi.firebaseio.com/",
	storageBucket: "bucket.appspot.com"
};
firebase.initializeApp(config);

// Get a reference to the database service
let database = firebase.database();
//console.log(database);
function writeBookData(isbn,title, availability, author, genre, pubInfo) {
	database.ref('books/' + isbn).set({
		title : title,
		availability : availability,
		author : author,
		genre : genre,
		pubInfo : pubInfo
	});
}

function getBook(isbn,reply){
	database.ref('/books/' + isbn).on("value",function(snapshot) {
	  
	  if( snapshot.val() == null){
	  	let data = {};
		data.status = false
		data.msg = "isbn not found";
		console.log(data);
	  	reply(data);
	  }	
	  else
	  	reply(snapshot.val());
	});
}
function getAllBook(reply){
	database.ref('/books/').on("value",function(snapshot) {
	  if( snapshot.val() == null){
	  	let data = {};
		data.status = false
		data.msg = "no data found";
	  	reply(data);
	  }	
	  else
	  	reply(snapshot.val());
	});
}
function deleteBook(isbn, reply) {
  database.ref('books/' + isbn).remove();
  	let data = {};
	data.status = false
	data.msg = "data removed successfully";
	reply(data);
}
function getBookByGenre(genre,reply){
	database.ref('/books/').orderByChild('genre').startAt(genre).endAt(genre+"\uf8ff").on("value",function(snapshot) {
	  
	  if( snapshot.val() == null){
	  	let data = {};
		data.status = false
		data.msg = "no matching data found";
	  	reply(data);
	  }	
	  else
	  	reply(snapshot.val());
	});
}
function getBookBytitle(title,reply){
	database.ref('/books/').orderByChild('title').startAt(title).endAt(title+"\uf8ff").on("value",function(snapshot) {
	  
	  if( snapshot.val() == null){
	  	let data = {};
		data.status = false
		data.msg = "no matching data found";
	  	reply(data);
	  }	
	  else
	  	reply(snapshot.val());
	});
}
function getBookByAuthor(author,reply){
	database.ref('/books/').orderByChild('author').startAt(author).endAt(author).on("value",function(snapshot) {
	  
	  if( snapshot.val() == null){
	  	let data = {};
		data.status = false
		data.msg = "no matching data found";
	  	reply(data);
	  }	
	  else
	  	reply(snapshot.val());
	});
}
module.exports = {
  writeBookData : writeBookData,
  getBook : getBook,
  getAllBook : getAllBook,
  deleteBook : deleteBook,
  getBookByGenre : getBookByGenre,
  getBookBytitle : getBookBytitle,
  getBookByAuthor : getBookByAuthor

}

