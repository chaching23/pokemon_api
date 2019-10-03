const mongoose = require("mongoose");
const Shark = mongoose.model("Shark");

module.exports = {
    index: function(req, res) {
        res.render("show_all");
    
    
    },

    quotes: function(req, res) {
        res.render("new");
            }
         }
   


















