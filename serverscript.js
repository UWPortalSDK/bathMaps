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
     	db.Execute('INSERT INTO ratings VALUES (@name, @value)');
    }
    
    return getAvg();
}

function getAvg() {
    var raw = db.Execute('SELECT AVG(rating) FROM ratings WHERE washroom = @name GROUP BY washroom');
    var average = JSON.parse(raw);
    return average[0].Column1;
}
