function createTable() {
    var result = {};

    var queryResult = db.Execute('SELECT TOP 1 * FROM ratings');
    var row = JSON.parse(queryResult);

    if (row.length > 0 && typeof row[0].Error != 'undefined') {
        db.Execute('CREATE TABLE ratings (washroom varchar(255), rating int)');
        result = '{"status":"tableCreated"}';
    } else {
		result = '{"status":"tableExist"}';
    }
    return JSON.stringify(result);
}

function addRating() {
    var washroomName = args.Get("name");
    var score = args.Get("value");
    
 	if (score > 5 || score < 1) {
   		return '{"result":"error"}';  	   
    } else {
     	db.Execute('INSERT INTO ratings VALUES (washroomName, score)');
    }
}

function getAvg() {
	var washroomName = args.Get("name");
    var average = db.Execute('SELECT washroom, AVG(rating) FROM ratings WHERE washroom = washroomName GROUP BY washroom').column1;
    return average;
}
