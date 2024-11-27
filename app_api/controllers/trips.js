const mongoose = require('mongoose');
const Trip = require('../models/travlr'); //Register model
const Model = mongoose.model('trips');

//Get: /tripss - lists all the trips
//Regardless of outcome, response must include HTML status code
//and JSON message to the requestion client
const tripsList = async (req, res) => {
    const q = await Model
        .find({}) // No filter, return all records
        .exec((err, trips) => {;

        //Uncomment the following line to show results of querey
        //on the console
        //console.log(q);

            if (!q) {
               //Database returned no data
                return res
                    .status(404)
                    .json({"message": "trip not found"});
            } else if(err){ 
                //Return resulting trip list
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(trips)
            }
        });
};

const tripsFindByCode = async(req, res) => {
    const q = await Model
        .find({'code' : req.params.tripCode }) //Return single record
        .exec();

    if(!q)
    {
        return res
                .status(404)
                .json(err);
    } else { 
        return res
            .status(200)
            .json(q);
    }
};

module.exports = {
    tripsList,
    tripsFindByCode
};