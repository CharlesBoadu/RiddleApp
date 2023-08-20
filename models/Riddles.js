const Client = require("../database.js");

class Riddles {
    async getRiddles() {
        try {
            const res = await Client.query('SELECT * FROM all_riddles');
            return res.rows;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

}

module.exports = Riddles;