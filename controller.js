let database = require("./database.js");
function addBook(request, reply) {
	database.writeBookData(
					request.payload.isbn,
					request.payload.title,
					request.payload.availability,
					request.payload.author,
					request.payload.genre,
					request.payload.pubInfo
				)
	//console.log(request.payload.pubInfo.publishDate.toISOString().substring(0, 10))
    reply(request.payload)
}

function getBook(request, reply) {
	database.getBook(request.params.bookId,reply)
}
function getAllBook(request, reply) {
	database.getAllBook(reply)
}

function updateBook(request, reply) {
	database.writeBookData(
					request.payload.isbn,
					request.payload.title,
					request.payload.availability,
					request.payload.author,
					request.payload.genre,
					request.payload.pubInfo
				)
	//console.log(request.payload.pubInfo.publishDate.toISOString().substring(0, 10))
    reply(request.payload)
}
function deleteBook(request, reply) {
	database.deleteBook(request.params.bookId,reply)
}

function getBookByGenre(request, reply) {
	database.getBookByGenre(request.params.genre,reply)
}
function getBookBytitle(request, reply) {
	console.log(request.params.title);
	database.getBookBytitle(request.params.title,reply)
}
function getBookByAuthor(request, reply) {
	console.log(request.params.author);
	database.getBookByAuthor(request.params.author,reply)
}
module.exports = {
  addBook : addBook,
  getBook : getBook,
  getAllBook : getAllBook,
  updateBook : updateBook,
  deleteBook : deleteBook,
  getBookByGenre : getBookByGenre,
  getBookBytitle : getBookBytitle,
  getBookByAuthor : getBookByAuthor
}