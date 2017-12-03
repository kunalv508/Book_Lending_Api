# Book Lending Api
Book Lending API using Node.js

Team Member: 
Mario Kurniawan, Kunal Verma, Harinder Kalra

Database used: Firebase

Dependencies:
Hapi, Joi

Instructions:
1. Unzip Node Modules First
2. Install Node and dependencies given above
3. Method=POST

Example for Add Book Service:
API URL= http://servername/addBook

{"isbn":"123","title":"san","availability":"yes","author":"san","genre":"san","pubInfo":{"publishDate":"12-13-2013","publisher":"test"}}

4.Method=GET
API URL= http://servername/getBook

/getBook/12322    for getting particular book by its isbn passing one parameter
/getAllBook  for getting all books in database
/deleteBook/1233   for deleting particular book using isbn as a parameter
/getBookByGenre/k
/getBookByTitle/s
/getBookByAuthor/san


