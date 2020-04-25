var db = require('../db');
var shortid = require('shortid');

module.exports = {
  
  index: (req, res) => {
    res.render('trans/index', {
      transactions: db.get('transactions').value()
    })
  },
  
  create: (req, res) =>{
    res.render('trans/create', {
      books: db.get('books').value(),
      users: db.get('users').value(),
      
    })
  },
  
  postCreate: (req, res) => {
    req.body.id = shortid.generate();
    req.body.isComplete = false;
    db.get("transactions").push(req.body).write();
    res.redirect("/transactions");
  },
  
  complete: (req, res) => {
    var id = req.params.id;
    db.get('transactions').find({id: id}).assign({isComplete: true}).write();
    res.redirect("/transactions");
  }
}