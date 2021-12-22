
import Crossword from "../models/crossword.js"

export const getnewsfeed =  (req, res) => {
   let cross; 
    Crossword.find({}, function (err, Crosswords) {
        // console.log(Crosswords);
        if (err) {
            cross = "error";
        }
        else {
            cross = Crosswords;
            res.send(cross);
        }
        console.log(cross);


    })
    // console.log(cross);
    // res.send(cross);
}