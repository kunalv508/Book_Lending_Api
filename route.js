let validate = require("./validate.js");
let controller = require("./controller.js");
module.exports = [
	{  
		method : 'GET',
		path : '/',
		handler: function (request, reply) {
		        reply('Book Lending Api!!!');
		}
    },
    {  
		method : 'POST',
		path : '/addBook',
		handler :  controller.addBook,
		config : {
			validate: {
			    payload : validate.bookSchema
			}
		}  

    },
    {  
		method : 'POST',
		path : '/updateBook',
		handler :  controller.addBook,
		config : {
			validate: {
			    payload : validate.bookSchema
			}
		}  

    },
    {  
		method : 'Get',
		path : '/getBook/{bookId}',
		handler : controller.getBook,
        config : {
        	validate: {
			    params: validate.checkId
			}
        }    

    },
    {  
		method: 'Get',
		path: '/getAllBook',
		handler: controller.getAllBook
		
    },
    {  
		method : 'Get',
		path : '/deleteBook/{bookId}',
		handler : controller.deleteBook,
        config : {
        	validate: {
			    params: validate.checkId
			}
        }    

    },
    {  
		method : 'Get',
		path : '/getBookByGenre/{genre}',
		handler : controller.getBookByGenre,  

    },
    {  
		method : 'Get',
		path : '/getBookByTitle/{title}',
		handler : controller.getBookBytitle,  

    }
    ,
    {  
		method : 'Get',
		path : '/getBookByAuthor/{author}',
		handler : controller.getBookByAuthor,  

    }
] 