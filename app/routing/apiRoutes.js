var friends = require("../data/friends.js");

module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var userResults = req.body;
        var totalDif = 100;
        var matchName = '';
        var matchPhoto = '';
        var arr = userResults.scores;
        var resultsArray = [];
        for (var i = 0; i < arr.length; i++) {
            var j = parseInt(arr[i]);
            resultsArray.push(j)
        };

        friends.forEach(function (friend) {
            var val = 0;
            var diffArray = []
            for (var j = 0; j < friend.scores.length; j++) {
                val += Math.abs(friend.scores[j] - resultsArray[j])
            }
            if (val < totalDif) {
                totalDif = val;
                friendName = friend.name;
                friendPhoto = friend.photo;
                console.log(totalDif)
            }

        })
        res.json({
            name: friendName,
            photo: friendPhoto
        });

        friends.push(req.body);

    });
    function totalScore(array) {
        var total = 0;
        for (var i = 0; i < array.length; i++) {
            total += parseInt(array[i]);
        }
        return total;
    }

}
