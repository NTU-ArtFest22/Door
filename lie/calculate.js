var qs = [];
var ans = [];
var timerecord = [];
var pulse = [];

var scoretable = {
	2:[10,1,10],
	4:[10,10,10,10],
	5:[10,10,10,10,10,10],
	6:[10,1,10],
	7:[10,1,10],
	8:[10,1,10],
	9:[10,1,10],
	10:[10,1,10],
	11:[10,1,10],
	12:[10,1,10],
	14:[1,10,10],
	16:[10,1,10],
	20:[10,1,10],
	21:[10,1,10],
	22:[10,1,10],
	23:[10,1,10]
}

function liepanelty(qs,ans,pulse){

}

function caltimespend(timerecord){

	console.log('timerecord',timerecord);
	var time = [];

	for(var i = 0; i < timerecord.length-1; i++)
		time[i] = timerecord[i+1] - timerecord[i];

	return time;
}

function caltmean(qs,timerecord){

	var timespend = caltimespend(timerecord);
	
	var tmean = 0;
	var record = 0;
	
	for(var i = 0; i < qs.length; i++){
		
		var q = qs[i];

		if(!(q in scoretable)){
			record ++;
			tmean += timespend[i];		
		}
	}
	tmean /= record
	return tmean;
}

var cal = function(qs,ans,timerecord,pulse){
	
	var tmean = caltmean(qs,timerecord);
	
	var totalscore = 0;
	
	for(var i = 0; i < qs.length; i++){
		
		var q = qs[i];
		var a = ans[i];
		
		if(q in scoretable){
			var score = scoretable[q][a];
			var adjust_score = score*(tmean/(score+tmean));
			totalscore += adjust_score;
			console.log('q',q,'a',a,'score',score,'tmean',tmean,'totalscore',totalscore);
		}
	}

	return parseInt(totalscore);
}

module.exports.qs = qs;
module.exports.ans = ans;
module.exports.timerecord = timerecord;
module.exports.pulse = pulse;
module.exports.cal = cal;
