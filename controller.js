const search = require('./service');

const getSavior = (req, res) => {

   const message = req.body.message;

   if(!message){
       res.status(400).json({
           message: 'Bad Request',
       });
   }

   const code = message.split(/\s+/g)[1];
   
   console.log(code);
   res.status(200).json({
      message: search(code)
   })
}

module.exports = {
    getSavior
};