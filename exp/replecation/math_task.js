function load_biography(dt) {
	window.biography = dt;
}

function load_test() {
	window.test = {
	  "answer_time": 7000,
	  "target": [
	    "17 + 33", 
	    "67 + 26",  
	    "28 + 26", 
	    "15 + 14", 
    	"12 + 13",
	    "58 + 21", 
	    "41 + 12", 
	    "41 + 40", 
	    "20 + 31", 
	    "17 + 76", 
	    "53 + 13", 
	    "12 + 24", 
	    "75 + 23", 

	    ],
	  "answer_duration": [],
	  "get_duration": function() {
	   	//максимум 7000 - 5 // 1400 минимум 0
	   	if(this.answer_duration.length > 3)
	    	return(math.median(this.answer_duration.slice(3))/5)
	    return(50)
	  }
	}
}

function load_main() {
	let sequences = {};

	sequences.priming_type = [{"1":1,"2":2,"3":3,"4":3,"5":1,"6":2,"7":3,"8":1,"9":2,"10":2,"11":3,"12":1,"13":2,"14":1,"15":3,"16":1,"17":2,"18":3,"19":2,"20":3,"21":1,"22":3,"23":1,"24":2,"25":3,"26":1,"27":2,"28":3,"29":1,"30":2,"31":3,"32":1,"33":2,"34":1,"35":3,"36":2,"37":1,"38":2,"39":3,"40":1,"41":3,"42":2,"43":2,"44":1,"45":3,"46":1,"47":3,"48":2,"49":2,"50":1,"51":3,"52":1,"53":3,"54":2,"55":2,"56":1,"57":3,"58":2,"59":1,"60":3,"61":1,"62":3,"63":2,"64":2,"65":1,"66":3,"67":2,"68":3,"69":1,"70":2,"71":1,"72":3,"73":1,"74":3,"75":2,"76":3,"77":2,"78":1,"79":3,"80":2,"81":1,"82":2,"83":3,"84":1,"85":2,"86":3,"87":1,"88":2,"89":1,"90":3,"id":1},{"1":2,"2":3,"3":1,"4":1,"5":2,"6":3,"7":2,"8":3,"9":1,"10":1,"11":2,"12":3,"13":1,"14":3,"15":2,"16":3,"17":1,"18":2,"19":3,"20":1,"21":2,"22":2,"23":3,"24":1,"25":2,"26":3,"27":1,"28":1,"29":2,"30":3,"31":2,"32":3,"33":1,"34":3,"35":2,"36":1,"37":3,"38":1,"39":2,"40":3,"41":2,"42":1,"43":3,"44":2,"45":1,"46":2,"47":1,"48":3,"49":1,"50":3,"51":2,"52":3,"53":2,"54":1,"55":3,"56":2,"57":1,"58":1,"59":3,"60":2,"61":2,"62":1,"63":3,"64":3,"65":2,"66":1,"67":3,"68":1,"69":2,"70":1,"71":3,"72":2,"73":3,"74":2,"75":1,"76":1,"77":3,"78":2,"79":2,"80":1,"81":3,"82":3,"83":1,"84":2,"85":1,"86":2,"87":3,"88":3,"89":2,"90":1,"id":2},{"1":3,"2":1,"3":2,"4":2,"5":3,"6":1,"7":1,"8":2,"9":3,"10":3,"11":1,"12":2,"13":3,"14":2,"15":1,"16":2,"17":3,"18":1,"19":1,"20":2,"21":3,"22":1,"23":2,"24":3,"25":1,"26":2,"27":3,"28":2,"29":3,"30":1,"31":1,"32":2,"33":3,"34":2,"35":1,"36":3,"37":2,"38":3,"39":1,"40":2,"41":1,"42":3,"43":1,"44":3,"45":2,"46":3,"47":2,"48":1,"49":3,"50":2,"51":1,"52":2,"53":1,"54":3,"55":1,"56":3,"57":2,"58":3,"59":2,"60":1,"61":3,"62":2,"63":1,"64":1,"65":3,"66":2,"67":1,"68":2,"69":3,"70":3,"71":2,"72":1,"73":2,"74":1,"75":3,"76":2,"77":1,"78":3,"79":1,"80":3,"81":2,"82":1,"83":2,"84":3,"85":3,"86":1,"87":2,"88":1,"89":3,"90":2,"id":3},{"1":3,"2":2,"3":1,"4":2,"5":1,"6":3,"7":1,"8":2,"9":3,"10":3,"11":1,"12":2,"13":3,"14":1,"15":2,"16":1,"17":2,"18":3,"19":3,"20":2,"21":1,"22":2,"23":3,"24":1,"25":3,"26":2,"27":1,"28":2,"29":3,"30":1,"31":2,"32":1,"33":3,"34":2,"35":1,"36":3,"37":2,"38":3,"39":1,"40":3,"41":2,"42":1,"43":1,"44":3,"45":2,"46":1,"47":3,"48":2,"49":3,"50":1,"51":2,"52":3,"53":1,"54":2,"55":2,"56":3,"57":1,"58":1,"59":2,"60":3,"61":1,"62":2,"63":3,"64":2,"65":3,"66":1,"67":2,"68":3,"69":1,"70":3,"71":1,"72":2,"73":2,"74":1,"75":3,"76":2,"77":1,"78":3,"79":3,"80":1,"81":2,"82":2,"83":1,"84":3,"85":1,"86":3,"87":2,"88":1,"89":3,"90":2,"id":4},{"1":1,"2":3,"3":2,"4":1,"5":3,"6":2,"7":3,"8":1,"9":2,"10":2,"11":3,"12":1,"13":1,"14":2,"15":3,"16":2,"17":3,"18":1,"19":2,"20":1,"21":3,"22":3,"23":1,"24":2,"25":1,"26":3,"27":2,"28":1,"29":2,"30":3,"31":3,"32":2,"33":1,"34":1,"35":3,"36":2,"37":1,"38":2,"39":3,"40":1,"41":3,"42":2,"43":2,"44":1,"45":3,"46":2,"47":1,"48":3,"49":2,"50":3,"51":1,"52":2,"53":3,"54":1,"55":1,"56":2,"57":3,"58":2,"59":3,"60":1,"61":2,"62":3,"63":1,"64":1,"65":2,"66":3,"67":3,"68":1,"69":2,"70":1,"71":2,"72":3,"73":3,"74":2,"75":1,"76":3,"77":2,"78":1,"79":2,"80":3,"81":1,"82":3,"83":2,"84":1,"85":3,"86":2,"87":1,"88":3,"89":2,"90":1,"id":5},{"1":2,"2":1,"3":3,"4":3,"5":2,"6":1,"7":2,"8":3,"9":1,"10":1,"11":2,"12":3,"13":2,"14":3,"15":1,"16":3,"17":1,"18":2,"19":1,"20":3,"21":2,"22":1,"23":2,"24":3,"25":2,"26":1,"27":3,"28":3,"29":1,"30":2,"31":1,"32":3,"33":2,"34":3,"35":2,"36":1,"37":3,"38":1,"39":2,"40":2,"41":1,"42":3,"43":3,"44":2,"45":1,"46":3,"47":2,"48":1,"49":1,"50":2,"51":3,"52":1,"53":2,"54":3,"55":3,"56":1,"57":2,"58":3,"59":1,"60":2,"61":3,"62":1,"63":2,"64":3,"65":1,"66":2,"67":1,"68":2,"69":3,"70":2,"71":3,"72":1,"73":1,"74":3,"75":2,"76":1,"77":3,"78":2,"79":1,"80":2,"81":3,"82":1,"83":3,"84":2,"85":2,"86":1,"87":3,"88":2,"89":1,"90":3,"id":6},{"1":1,"2":3,"3":2,"4":3,"5":1,"6":2,"7":1,"8":3,"9":2,"10":2,"11":3,"12":1,"13":3,"14":2,"15":1,"16":1,"17":3,"18":2,"19":1,"20":3,"21":2,"22":3,"23":1,"24":2,"25":1,"26":2,"27":3,"28":3,"29":1,"30":2,"31":3,"32":2,"33":1,"34":1,"35":3,"36":2,"37":3,"38":1,"39":2,"40":2,"41":1,"42":3,"43":1,"44":3,"45":2,"46":1,"47":2,"48":3,"49":1,"50":2,"51":3,"52":2,"53":1,"54":3,"55":2,"56":1,"57":3,"58":1,"59":2,"60":3,"61":1,"62":2,"63":3,"64":1,"65":2,"66":3,"67":2,"68":1,"69":3,"70":3,"71":1,"72":2,"73":2,"74":1,"75":3,"76":2,"77":1,"78":3,"79":1,"80":3,"81":2,"82":1,"83":2,"84":3,"85":2,"86":3,"87":1,"88":3,"89":1,"90":2,"id":7},{"1":3,"2":2,"3":1,"4":1,"5":2,"6":3,"7":2,"8":1,"9":3,"10":3,"11":1,"12":2,"13":1,"14":3,"15":2,"16":2,"17":1,"18":3,"19":3,"20":2,"21":1,"22":1,"23":2,"24":3,"25":3,"26":1,"27":2,"28":1,"29":2,"30":3,"31":1,"32":3,"33":2,"34":3,"35":2,"36":1,"37":1,"38":2,"39":3,"40":1,"41":3,"42":2,"43":2,"44":1,"45":3,"46":2,"47":3,"48":1,"49":3,"50":1,"51":2,"52":1,"53":3,"54":2,"55":1,"56":3,"57":2,"58":2,"59":3,"60":1,"61":3,"62":1,"63":2,"64":3,"65":1,"66":2,"67":1,"68":3,"69":2,"70":2,"71":3,"72":1,"73":3,"74":2,"75":1,"76":3,"77":2,"78":1,"79":3,"80":2,"81":1,"82":3,"83":1,"84":2,"85":1,"86":2,"87":3,"88":2,"89":3,"90":1,"id":8},{"1":2,"2":1,"3":3,"4":2,"5":3,"6":1,"7":3,"8":2,"9":1,"10":1,"11":2,"12":3,"13":2,"14":1,"15":3,"16":3,"17":2,"18":1,"19":2,"20":1,"21":3,"22":2,"23":3,"24":1,"25":2,"26":3,"27":1,"28":2,"29":3,"30":1,"31":2,"32":1,"33":3,"34":2,"35":1,"36":3,"37":2,"38":3,"39":1,"40":3,"41":2,"42":1,"43":3,"44":2,"45":1,"46":3,"47":1,"48":2,"49":2,"50":3,"51":1,"52":3,"53":2,"54":1,"55":3,"56":2,"57":1,"58":3,"59":1,"60":2,"61":2,"62":3,"63":1,"64":2,"65":3,"66":1,"67":3,"68":2,"69":1,"70":1,"71":2,"72":3,"73":1,"74":3,"75":2,"76":1,"77":3,"78":2,"79":2,"80":1,"81":3,"82":2,"83":3,"84":1,"85":3,"86":1,"87":2,"88":1,"89":2,"90":3,"id":9},{"1":3,"2":1,"3":2,"4":1,"5":3,"6":2,"7":1,"8":2,"9":3,"10":1,"11":2,"12":3,"13":3,"14":2,"15":1,"16":1,"17":3,"18":2,"19":1,"20":3,"21":2,"22":2,"23":1,"24":3,"25":2,"26":3,"27":1,"28":2,"29":3,"30":1,"31":3,"32":2,"33":1,"34":1,"35":2,"36":3,"37":3,"38":2,"39":1,"40":1,"41":3,"42":2,"43":2,"44":3,"45":1,"46":1,"47":2,"48":3,"49":3,"50":1,"51":2,"52":2,"53":1,"54":3,"55":1,"56":2,"57":3,"58":2,"59":1,"60":3,"61":3,"62":2,"63":1,"64":2,"65":3,"66":1,"67":1,"68":3,"69":2,"70":1,"71":2,"72":3,"73":1,"74":2,"75":3,"76":3,"77":1,"78":2,"79":3,"80":1,"81":2,"82":1,"83":2,"84":3,"85":3,"86":2,"87":1,"88":2,"89":3,"90":1,"id":10},{"1":2,"2":3,"3":1,"4":3,"5":2,"6":1,"7":3,"8":1,"9":2,"10":3,"11":1,"12":2,"13":1,"14":3,"15":2,"16":3,"17":2,"18":1,"19":2,"20":1,"21":3,"22":1,"23":3,"24":2,"25":1,"26":2,"27":3,"28":1,"29":2,"30":3,"31":1,"32":3,"33":2,"34":2,"35":3,"36":1,"37":1,"38":3,"39":2,"40":3,"41":2,"42":1,"43":3,"44":1,"45":2,"46":2,"47":3,"48":1,"49":1,"50":2,"51":3,"52":3,"53":2,"54":1,"55":2,"56":3,"57":1,"58":1,"59":3,"60":2,"61":2,"62":1,"63":3,"64":1,"65":2,"66":3,"67":3,"68":2,"69":1,"70":2,"71":3,"72":1,"73":3,"74":1,"75":2,"76":2,"77":3,"78":1,"79":1,"80":2,"81":3,"82":3,"83":1,"84":2,"85":1,"86":3,"87":2,"88":3,"89":1,"90":2,"id":11},{"1":1,"2":2,"3":3,"4":2,"5":1,"6":3,"7":2,"8":3,"9":1,"10":2,"11":3,"12":1,"13":2,"14":1,"15":3,"16":2,"17":1,"18":3,"19":3,"20":2,"21":1,"22":3,"23":2,"24":1,"25":3,"26":1,"27":2,"28":3,"29":1,"30":2,"31":2,"32":1,"33":3,"34":3,"35":1,"36":2,"37":2,"38":1,"39":3,"40":2,"41":1,"42":3,"43":1,"44":2,"45":3,"46":3,"47":1,"48":2,"49":2,"50":3,"51":1,"52":1,"53":3,"54":2,"55":3,"56":1,"57":2,"58":3,"59":2,"60":1,"61":1,"62":3,"63":2,"64":3,"65":1,"66":2,"67":2,"68":1,"69":3,"70":3,"71":1,"72":2,"73":2,"74":3,"75":1,"76":1,"77":2,"78":3,"79":2,"80":3,"81":1,"82":2,"83":3,"84":1,"85":2,"86":1,"87":3,"88":1,"89":2,"90":3,"id":12},{"1":1,"2":2,"3":3,"4":2,"5":1,"6":3,"7":3,"8":2,"9":1,"10":2,"11":3,"12":1,"13":3,"14":1,"15":2,"16":1,"17":2,"18":3,"19":2,"20":3,"21":1,"22":2,"23":3,"24":1,"25":3,"26":1,"27":2,"28":3,"29":1,"30":2,"31":1,"32":3,"33":2,"34":1,"35":3,"36":2,"37":2,"38":1,"39":3,"40":1,"41":3,"42":2,"43":1,"44":3,"45":2,"46":3,"47":2,"48":1,"49":2,"50":1,"51":3,"52":1,"53":3,"54":2,"55":3,"56":1,"57":2,"58":3,"59":1,"60":2,"61":2,"62":1,"63":3,"64":3,"65":1,"66":2,"67":2,"68":3,"69":1,"70":1,"71":3,"72":2,"73":3,"74":1,"75":2,"76":1,"77":3,"78":2,"79":1,"80":2,"81":3,"82":2,"83":3,"84":1,"85":2,"86":3,"87":1,"88":2,"89":1,"90":3,"id":13},{"1":2,"2":3,"3":1,"4":1,"5":3,"6":2,"7":2,"8":1,"9":3,"10":3,"11":1,"12":2,"13":2,"14":3,"15":1,"16":2,"17":3,"18":1,"19":3,"20":1,"21":2,"22":1,"23":2,"24":3,"25":1,"26":2,"27":3,"28":1,"29":2,"30":3,"31":2,"32":1,"33":3,"34":3,"35":2,"36":1,"37":3,"38":2,"39":1,"40":3,"41":2,"42":1,"43":3,"44":2,"45":1,"46":2,"47":1,"48":3,"49":3,"50":2,"51":1,"52":2,"53":1,"54":3,"55":2,"56":3,"57":1,"58":1,"59":2,"60":3,"61":3,"62":2,"63":1,"64":2,"65":3,"66":1,"67":3,"68":1,"69":2,"70":2,"71":1,"72":3,"73":2,"74":3,"75":1,"76":2,"77":1,"78":3,"79":3,"80":1,"81":2,"82":1,"83":2,"84":3,"85":3,"86":1,"87":2,"88":1,"89":3,"90":2,"id":14},{"1":3,"2":1,"3":2,"4":3,"5":2,"6":1,"7":1,"8":3,"9":2,"10":1,"11":2,"12":3,"13":1,"14":2,"15":3,"16":3,"17":1,"18":2,"19":1,"20":2,"21":3,"22":3,"23":1,"24":2,"25":2,"26":3,"27":1,"28":2,"29":3,"30":1,"31":3,"32":2,"33":1,"34":2,"35":1,"36":3,"37":1,"38":3,"39":2,"40":2,"41":1,"42":3,"43":2,"44":1,"45":3,"46":1,"47":3,"48":2,"49":1,"50":3,"51":2,"52":3,"53":2,"54":1,"55":1,"56":2,"57":3,"58":2,"59":3,"60":1,"61":1,"62":3,"63":2,"64":1,"65":2,"66":3,"67":1,"68":2,"69":3,"70":3,"71":2,"72":1,"73":1,"74":2,"75":3,"76":3,"77":2,"78":1,"79":2,"80":3,"81":1,"82":3,"83":1,"84":2,"85":1,"86":2,"87":3,"88":3,"89":2,"90":1,"id":15},{"1":2,"2":1,"3":3,"4":3,"5":2,"6":1,"7":2,"8":1,"9":3,"10":2,"11":1,"12":3,"13":1,"14":2,"15":3,"16":3,"17":1,"18":2,"19":1,"20":3,"21":2,"22":3,"23":1,"24":2,"25":1,"26":3,"27":2,"28":1,"29":3,"30":2,"31":3,"32":2,"33":1,"34":3,"35":2,"36":1,"37":3,"38":1,"39":2,"40":3,"41":1,"42":2,"43":2,"44":1,"45":3,"46":3,"47":1,"48":2,"49":1,"50":2,"51":3,"52":3,"53":2,"54":1,"55":2,"56":3,"57":1,"58":3,"59":2,"60":1,"61":1,"62":2,"63":3,"64":1,"65":2,"66":3,"67":1,"68":3,"69":2,"70":1,"71":2,"72":3,"73":3,"74":1,"75":2,"76":2,"77":1,"78":3,"79":1,"80":2,"81":3,"82":3,"83":2,"84":1,"85":2,"86":1,"87":3,"88":2,"89":1,"90":3,"id":16},{"1":1,"2":3,"3":2,"4":2,"5":1,"6":3,"7":1,"8":3,"9":2,"10":1,"11":3,"12":2,"13":3,"14":1,"15":2,"16":2,"17":3,"18":1,"19":2,"20":1,"21":3,"22":2,"23":3,"24":1,"25":3,"26":2,"27":1,"28":2,"29":1,"30":3,"31":2,"32":1,"33":3,"34":2,"35":1,"36":3,"37":1,"38":2,"39":3,"40":2,"41":3,"42":1,"43":3,"44":2,"45":1,"46":2,"47":3,"48":1,"49":3,"50":1,"51":2,"52":1,"53":3,"54":2,"55":1,"56":2,"57":3,"58":1,"59":3,"60":2,"61":3,"62":1,"63":2,"64":2,"65":3,"66":1,"67":2,"68":1,"69":3,"70":3,"71":1,"72":2,"73":2,"74":3,"75":1,"76":1,"77":3,"78":2,"79":3,"80":1,"81":2,"82":1,"83":3,"84":2,"85":1,"86":3,"87":2,"88":1,"89":3,"90":2,"id":17},{"1":3,"2":2,"3":1,"4":1,"5":3,"6":2,"7":3,"8":2,"9":1,"10":3,"11":2,"12":1,"13":2,"14":3,"15":1,"16":1,"17":2,"18":3,"19":3,"20":2,"21":1,"22":1,"23":2,"24":3,"25":2,"26":1,"27":3,"28":3,"29":2,"30":1,"31":1,"32":3,"33":2,"34":1,"35":3,"36":2,"37":2,"38":3,"39":1,"40":1,"41":2,"42":3,"43":1,"44":3,"45":2,"46":1,"47":2,"48":3,"49":2,"50":3,"51":1,"52":2,"53":1,"54":3,"55":3,"56":1,"57":2,"58":2,"59":1,"60":3,"61":2,"62":3,"63":1,"64":3,"65":1,"66":2,"67":3,"68":2,"69":1,"70":2,"71":3,"72":1,"73":1,"74":2,"75":3,"76":3,"77":2,"78":1,"79":2,"80":3,"81":1,"82":2,"83":1,"84":3,"85":3,"86":2,"87":1,"88":3,"89":2,"90":1,"id":18},{"1":3,"2":1,"3":2,"4":1,"5":3,"6":2,"7":2,"8":3,"9":1,"10":2,"11":3,"12":1,"13":1,"14":3,"15":2,"16":1,"17":3,"18":2,"19":2,"20":1,"21":3,"22":3,"23":2,"24":1,"25":2,"26":1,"27":3,"28":2,"29":3,"30":1,"31":1,"32":3,"33":2,"34":3,"35":1,"36":2,"37":2,"38":3,"39":1,"40":3,"41":2,"42":1,"43":2,"44":3,"45":1,"46":2,"47":3,"48":1,"49":3,"50":1,"51":2,"52":2,"53":3,"54":1,"55":3,"56":1,"57":2,"58":2,"59":3,"60":1,"61":1,"62":3,"63":2,"64":3,"65":2,"66":1,"67":1,"68":3,"69":2,"70":2,"71":1,"72":3,"73":2,"74":1,"75":3,"76":2,"77":3,"78":1,"79":3,"80":1,"81":2,"82":1,"83":3,"84":2,"85":3,"86":1,"87":2,"88":3,"89":1,"90":2,"id":19},{"1":1,"2":2,"3":3,"4":2,"5":1,"6":3,"7":1,"8":2,"9":3,"10":1,"11":2,"12":3,"13":3,"14":2,"15":1,"16":2,"17":1,"18":3,"19":3,"20":2,"21":1,"22":2,"23":1,"24":3,"25":1,"26":3,"27":2,"28":1,"29":2,"30":3,"31":2,"32":1,"33":3,"34":1,"35":2,"36":3,"37":3,"38":1,"39":2,"40":1,"41":3,"42":2,"43":1,"44":2,"45":3,"46":1,"47":2,"48":3,"49":1,"50":2,"51":3,"52":1,"53":2,"54":3,"55":2,"56":3,"57":1,"58":1,"59":2,"60":3,"61":3,"62":2,"63":1,"64":2,"65":1,"66":3,"67":3,"68":2,"69":1,"70":3,"71":2,"72":1,"73":3,"74":2,"75":1,"76":3,"77":1,"78":2,"79":1,"80":2,"81":3,"82":2,"83":1,"84":3,"85":1,"86":2,"87":3,"88":2,"89":3,"90":1,"id":20},{"1":2,"2":3,"3":1,"4":3,"5":2,"6":1,"7":3,"8":1,"9":2,"10":3,"11":1,"12":2,"13":2,"14":1,"15":3,"16":3,"17":2,"18":1,"19":1,"20":3,"21":2,"22":1,"23":3,"24":2,"25":3,"26":2,"27":1,"28":3,"29":1,"30":2,"31":3,"32":2,"33":1,"34":2,"35":3,"36":1,"37":1,"38":2,"39":3,"40":2,"41":1,"42":3,"43":3,"44":1,"45":2,"46":3,"47":1,"48":2,"49":2,"50":3,"51":1,"52":3,"53":1,"54":2,"55":1,"56":2,"57":3,"58":3,"59":1,"60":2,"61":2,"62":1,"63":3,"64":1,"65":3,"66":2,"67":2,"68":1,"69":3,"70":1,"71":3,"72":2,"73":1,"74":3,"75":2,"76":1,"77":2,"78":3,"79":2,"80":3,"81":1,"82":3,"83":2,"84":1,"85":2,"86":3,"87":1,"88":1,"89":2,"90":3,"id":21},{"1":3,"2":1,"3":2,"4":1,"5":3,"6":2,"7":1,"8":3,"9":2,"10":1,"11":3,"12":2,"13":1,"14":2,"15":3,"16":2,"17":1,"18":3,"19":3,"20":2,"21":1,"22":1,"23":2,"24":3,"25":1,"26":3,"27":2,"28":2,"29":3,"30":1,"31":3,"32":1,"33":2,"34":3,"35":2,"36":1,"37":1,"38":3,"39":2,"40":1,"41":3,"42":2,"43":1,"44":2,"45":3,"46":1,"47":2,"48":3,"49":1,"50":3,"51":2,"52":3,"53":2,"54":1,"55":1,"56":3,"57":2,"58":1,"59":2,"60":3,"61":2,"62":1,"63":3,"64":1,"65":3,"66":2,"67":2,"68":1,"69":3,"70":2,"71":3,"72":1,"73":3,"74":1,"75":2,"76":3,"77":1,"78":2,"79":3,"80":1,"81":2,"82":3,"83":2,"84":1,"85":3,"86":1,"87":2,"88":2,"89":1,"90":3,"id":22},{"1":1,"2":2,"3":3,"4":2,"5":1,"6":3,"7":2,"8":1,"9":3,"10":3,"11":2,"12":1,"13":2,"14":3,"15":1,"16":3,"17":2,"18":1,"19":1,"20":3,"21":2,"22":3,"23":1,"24":2,"25":2,"26":1,"27":3,"28":1,"29":2,"30":3,"31":1,"32":2,"33":3,"34":2,"35":1,"36":3,"37":2,"38":1,"39":3,"40":3,"41":2,"42":1,"43":3,"44":1,"45":2,"46":3,"47":1,"48":2,"49":2,"50":1,"51":3,"52":1,"53":3,"54":2,"55":3,"56":2,"57":1,"58":3,"59":1,"60":2,"61":3,"62":2,"63":1,"64":2,"65":1,"66":3,"67":1,"68":3,"69":2,"70":3,"71":1,"72":2,"73":2,"74":3,"75":1,"76":1,"77":2,"78":3,"79":1,"80":2,"81":3,"82":1,"83":3,"84":2,"85":1,"86":2,"87":3,"88":1,"89":3,"90":2,"id":23},{"1":2,"2":3,"3":1,"4":3,"5":2,"6":1,"7":3,"8":2,"9":1,"10":2,"11":1,"12":3,"13":3,"14":1,"15":2,"16":1,"17":3,"18":2,"19":2,"20":1,"21":3,"22":2,"23":3,"24":1,"25":3,"26":2,"27":1,"28":3,"29":1,"30":2,"31":2,"32":3,"33":1,"34":1,"35":3,"36":2,"37":3,"38":2,"39":1,"40":2,"41":1,"42":3,"43":2,"44":3,"45":1,"46":2,"47":3,"48":1,"49":3,"50":2,"51":1,"52":2,"53":1,"54":3,"55":2,"56":1,"57":3,"58":2,"59":3,"60":1,"61":1,"62":3,"63":2,"64":3,"65":2,"66":1,"67":3,"68":2,"69":1,"70":1,"71":2,"72":3,"73":1,"74":2,"75":3,"76":2,"77":3,"78":1,"79":2,"80":3,"81":1,"82":2,"83":1,"84":3,"85":2,"86":3,"87":1,"88":3,"89":2,"90":1,"id":24},{"1":2,"2":1,"3":3,"4":1,"5":3,"6":2,"7":2,"8":3,"9":1,"10":2,"11":1,"12":3,"13":1,"14":3,"15":2,"16":3,"17":2,"18":1,"19":2,"20":1,"21":3,"22":1,"23":2,"24":3,"25":3,"26":2,"27":1,"28":2,"29":1,"30":3,"31":2,"32":3,"33":1,"34":3,"35":2,"36":1,"37":2,"38":3,"39":1,"40":1,"41":3,"42":2,"43":3,"44":2,"45":1,"46":2,"47":3,"48":1,"49":2,"50":1,"51":3,"52":2,"53":3,"54":1,"55":1,"56":2,"57":3,"58":2,"59":3,"60":1,"61":1,"62":2,"63":3,"64":1,"65":2,"66":3,"67":2,"68":1,"69":3,"70":2,"71":1,"72":3,"73":3,"74":2,"75":1,"76":1,"77":2,"78":3,"79":1,"80":3,"81":2,"82":3,"83":1,"84":2,"85":1,"86":3,"87":2,"88":2,"89":1,"90":3,"id":25},{"1":3,"2":2,"3":1,"4":3,"5":2,"6":1,"7":1,"8":2,"9":3,"10":1,"11":3,"12":2,"13":3,"14":2,"15":1,"16":1,"17":3,"18":2,"19":3,"20":2,"21":1,"22":2,"23":3,"24":1,"25":1,"26":3,"27":2,"28":3,"29":2,"30":1,"31":3,"32":1,"33":2,"34":2,"35":1,"36":3,"37":3,"38":1,"39":2,"40":3,"41":2,"42":1,"43":1,"44":3,"45":2,"46":1,"47":2,"48":3,"49":1,"50":3,"51":2,"52":3,"53":1,"54":2,"55":2,"56":3,"57":1,"58":1,"59":2,"60":3,"61":2,"62":3,"63":1,"64":2,"65":3,"66":1,"67":3,"68":2,"69":1,"70":1,"71":3,"72":2,"73":1,"74":3,"75":2,"76":3,"77":1,"78":2,"79":2,"80":1,"81":3,"82":1,"83":2,"84":3,"85":3,"86":2,"87":1,"88":1,"89":3,"90":2,"id":26},{"1":1,"2":3,"3":2,"4":2,"5":1,"6":3,"7":3,"8":1,"9":2,"10":3,"11":2,"12":1,"13":2,"14":1,"15":3,"16":2,"17":1,"18":3,"19":1,"20":3,"21":2,"22":3,"23":1,"24":2,"25":2,"26":1,"27":3,"28":1,"29":3,"30":2,"31":1,"32":2,"33":3,"34":1,"35":3,"36":2,"37":1,"38":2,"39":3,"40":2,"41":1,"42":3,"43":2,"44":1,"45":3,"46":3,"47":1,"48":2,"49":3,"50":2,"51":1,"52":1,"53":2,"54":3,"55":3,"56":1,"57":2,"58":3,"59":1,"60":2,"61":3,"62":1,"63":2,"64":3,"65":1,"66":2,"67":1,"68":3,"69":2,"70":3,"71":2,"72":1,"73":2,"74":1,"75":3,"76":2,"77":3,"78":1,"79":3,"80":2,"81":1,"82":2,"83":3,"84":1,"85":2,"86":1,"87":3,"88":3,"89":2,"90":1,"id":27},{"1":1,"2":2,"3":3,"4":1,"5":3,"6":2,"7":1,"8":3,"9":2,"10":2,"11":1,"12":3,"13":1,"14":3,"15":2,"16":1,"17":2,"18":3,"19":1,"20":2,"21":3,"22":3,"23":2,"24":1,"25":1,"26":3,"27":2,"28":1,"29":3,"30":2,"31":1,"32":2,"33":3,"34":1,"35":3,"36":2,"37":2,"38":1,"39":3,"40":3,"41":2,"42":1,"43":1,"44":2,"45":3,"46":3,"47":2,"48":1,"49":2,"50":1,"51":3,"52":1,"53":3,"54":2,"55":3,"56":1,"57":2,"58":2,"59":1,"60":3,"61":2,"62":3,"63":1,"64":1,"65":3,"66":2,"67":1,"68":3,"69":2,"70":3,"71":2,"72":1,"73":2,"74":1,"75":3,"76":2,"77":1,"78":3,"79":1,"80":3,"81":2,"82":2,"83":3,"84":1,"85":3,"86":1,"87":2,"88":3,"89":2,"90":1,"id":28},{"1":2,"2":3,"3":1,"4":3,"5":2,"6":1,"7":2,"8":1,"9":3,"10":3,"11":2,"12":1,"13":2,"14":1,"15":3,"16":2,"17":3,"18":1,"19":3,"20":1,"21":2,"22":1,"23":3,"24":2,"25":3,"26":2,"27":1,"28":3,"29":2,"30":1,"31":2,"32":3,"33":1,"34":3,"35":2,"36":1,"37":3,"38":2,"39":1,"40":1,"41":3,"42":2,"43":2,"44":3,"45":1,"46":2,"47":1,"48":3,"49":1,"50":3,"51":2,"52":3,"53":2,"54":1,"55":2,"56":3,"57":1,"58":1,"59":3,"60":2,"61":1,"62":2,"63":3,"64":2,"65":1,"66":3,"67":2,"68":1,"69":3,"70":2,"71":1,"72":3,"73":3,"74":2,"75":1,"76":3,"77":2,"78":1,"79":2,"80":1,"81":3,"82":3,"83":1,"84":2,"85":1,"86":2,"87":3,"88":1,"89":3,"90":2,"id":29}]
	sequences.priming = {
	  "1":"8 + 4",
	  "2":"6 + 2",
	  "3":"7 + 3",
	  "4":"3 + 2",
	  "5":"9 + 2",
	  "6":"5 + 4",
	  "7":"7 + 4",
	  "8":"5 + 2",
	  "9":"9 + 6",
	  "10":"8 + 9",
	  "11":"9 + 5",
	  "12":"9 + 2",
	  "13":"8 + 7",
	  "14":"4 + 5",
	  "15":"4 + 1",
	  "16":"2 + 6",
	  "17":"8 + 9",
	  "18":"4 + 2",
	  "19":"3 + 4",
	  "20":"2 + 4",
	  "21":"1 + 3",
	  "22":"5 + 3",
	  "23":"8 + 5",
	  "24":"6 + 6",
	  "25":"2 + 3",
	  "26":"7 + 6",
	  "27":"6 + 3",
	  "28":"8 + 2",
	  "29":"7 + 4",
	  "30":"7 + 8",
	  "31":"5 + 3",
	  "32":"4 + 1",
	  "33":"1 + 2",
	  "34":"8 + 2",
	  "35":"3 + 6",
	  "36":"5 + 2",
	  "37":"2 + 3",
	  "38":"5 + 5",
	  "39":"2 + 2",
	  "40":"3 + 6",
	  "41":"7 + 9",
	  "42":"4 + 3",
	  "43":"6 + 3",
	  "44":"8 + 3",
	  "45":"1 + 6",
	  "46":"1 + 8",
	  "47":"7 + 7",
	  "48":"8 + 9",
	  "49":"5 + 6",
	  "50":"9 + 5",
	  "51":"8 + 2",
	  "52":"1 + 5",
	  "53":"8 + 1",
	  "54":"5 + 7",
	  "55":"9 + 2",
	  "56":"8 + 6",
	  "57":"7 + 1",
	  "58":"5 + 1",
	  "59":"3 + 8",
	  "60":"1 + 4",
	  "61":"9 + 1",
	  "62":"6 + 4",
	  "63":"1 + 1",
	  "64":"3 + 1",
	  "65":"7 + 9",
	  "66":"8 + 5",
	  "67":"6 + 4",
	  "68":"2 + 3",
	  "69":"7 + 9",
	  "70":"3 + 6",
	  "71":"1 + 1",
	  "72":"3 + 1",
	  "73":"9 + 3",
	  "74":"6 + 1",
	  "75":"1 + 8",
	  "76":"2 + 7",
	  "77":"6 + 8",
	  "78":"2 + 4",
	  "79":"6 + 7",
	  "80":"3 + 8",
	  "81":"2 + 8",
	  "82":"3 + 1",
	  "83":"8 + 4",
	  "84":"4 + 6",
	  "85":"4 + 7",
	  "86":"3 + 9",
	  "87":"5 + 1",
	  "88":"9 + 6",
	  "89":"2 + 1",
	  "90":"6 + 2"
	}
	sequences.targets = {
	  "1":"12 + 25",
	  "2":"17 + 12",
	  "3":"19 + 27",
	  "4":"15 + 16",
	  "5":"30 + 22",
	  "6":"22 + 51",
	  "7":"20 + 48",
	  "8":"39 + 23",
	  "9":"32 + 50",
	  "10":"59 + 34",
	  "11":"16 + 50",
	  "12":"39 + 48",
	  "13":"29 + 40",
	  "14":"36 + 58",
	  "15":"54 + 38",
	  "16":"22 + 76",
	  "17":"51 + 43",
	  "18":"53 + 19",
	  "19":"28 + 22",
	  "20":"15 + 58",
	  "21":"25 + 53",
	  "22":"44 + 38",
	  "23":"11 + 27",
	  "24":"50 + 29",
	  "25":"22 + 16",
	  "26":"56 + 29",
	  "27":"26 + 72",
	  "28":"67 + 19",
	  "29":"27 + 35",
	  "30":"48 + 25",
	  "31":"46 + 17",
	  "32":"56 + 38",
	  "33":"35 + 33",
	  "34":"46 + 43",
	  "35":"39 + 60",
	  "36":"17 + 30",
	  "37":"36 + 44",
	  "38":"13 + 75",
	  "39":"45 + 47",
	  "40":"44 + 53",
	  "41":"20 + 32",
	  "42":"71 + 14",
	  "43":"36 + 39",
	  "44":"46 + 45",
	  "45":"46 + 11",
	  "46":"12 + 49",
	  "47":"59 + 32",
	  "48":"49 + 33",
	  "49":"64 + 27",
	  "50":"56 + 29",
	  "51":"79 + 12",
	  "52":"67 + 17",
	  "53":"11 + 79",
	  "54":"52 + 19",
	  "55":"56 + 29",
	  "56":"44 + 28",
	  "57":"66 + 28",
	  "58":"28 + 26",
	  "59":"31 + 59",
	  "60":"17 + 35",
	  "61":"19 + 15",
	  "62":"27 + 57",
	  "63":"47 + 46",
	  "64":"55 + 18",
	  "65":"36 + 29",
	  "66":"67 + 16",
	  "67":"45 + 46",
	  "68":"54 + 38",
	  "69":"24 + 19",
	  "70":"14 + 78",
	  "71":"25 + 16",
	  "72":"13 + 38",
	  "73":"44 + 18",
	  "74":"41 + 49",
	  "75":"27 + 27",
	  "76":"18 + 17",
	  "77":"39 + 44",
	  "78":"49 + 47",
	  "79":"14 + 67",
	  "80":"37 + 54",
	  "81":"25 + 29",
	  "82":"18 + 48",
	  "83":"57 + 19",
	  "84":"23 + 69",
	  "85":"17 + 37",
	  "86":"37 + 19",
	  "87":"11 + 19",
	  "88":"59 + 32",
	  "89":"11 + 29",
	  "90":"27 + 55"
	}
	sequences.priming_right = {
		"1" : "12",
		"2" : "9",
		"3" : "10",
		"4" : "5",
		"5" : "11",
		"6" : "9",
		"7" : "11",
		"8" : "7",
		"9" : "15",
		"10" : "17",
		"11" : "14",
		"12" : "11",
		"13" : "15",
		"14" : "9",
		"15" : "5",
		"16" : "8",
		"17" : "17",
		"18" : "6",
		"19" : "7",
		"20" : "6",
		"21" : "4",
		"22" : "8",
		"23" : "13",
		"24" : "12",
		"25" : "5",
		"26" : "13",
		"27" : "9",
		"28" : "10",
		"29" : "11",
		"30" : "15",
		"31" : "8",
		"32" : "5",
		"33" : "3",
		"34" : "10",
		"35" : "9",
		"36" : "7",
		"37" : "5",
		"38" : "10",
		"39" : "4",
		"40" : "9",
		"41" : "16",
		"42" : "7",
		"43" : "9",
		"44" : "11",
		"45" : "7",
		"46" : "9",
		"47" : "14",
		"48" : "17",
		"49" : "11",
		"50" : "14",
		"51" : "10",
		"52" : "6",
		"53" : "9",
		"54" : "12",
		"55" : "11",
		"56" : "14",
		"57" : "8",
		"58" : "6",
		"59" : "11",
		"60" : "5",
		"61" : "10",
		"62" : "10",
		"63" : "2",
		"64" : "4",
		"65" : "16",
		"66" : "13",
		"67" : "10",
		"68" : "5",
		"69" : "16",
		"70" : "9",
		"71" : "2",
		"72" : "4",
		"73" : "12",
		"74" : "7",
		"75" : "9",
		"76" : "9",
		"77" : "14",
		"78" : "6",
		"79" : "13",
		"80" : "11",
		"81" : "10",
		"82" : "4",
		"83" : "12",
		"84" : "10",
		"85" : "11",
		"86" : "12",
		"87" : "6",
		"88" : "15",
		"89" : "3",
		"90" : "8"
	}
	sequences.priming_wrong = {
		"1": "15", 
		"2": "7", 
		"3": "13", 
		"4": "7", 
		"5": "19", 
		"6": "1", 
		"7": "13", 
		"8": "5", 
		"9": "18", 
		"10": "11", 
		"11": "15", 
		"12": "12", 
		"13": "13", 
		"14": "8", 
		"15": "6", 
		"16": "9", 
		"17": "15", 
		"18": "8", 
		"19": "5", 
		"20": "9", 
		"21": "8", 
		"22": "5", 
		"23": "15", 
		"24": "13", 
		"25": "2", 
		"26": "18", 
		"27": "7", 
		"28": "11", 
		"29": "10", 
		"30": "19", 
		"31": "5", 
		"32": "8", 
		"33": "7", 
		"34": "14", 
		"35": "3", 
		"36": "2", 
		"37": "7", 
		"38": "16", 
		"39": "6", 
		"40": "8", 
		"41": "13", 
		"42": "5", 
		"43": "6", 
		"44": "13", 
		"45": "6", 
		"46": "11", 
		"47": "16", 
		"48": "18", 
		"49": "10", 
		"50": "17", 
		"51": "12", 
		"52": "5", 
		"53": "7", 
		"54": "13", 
		"55": "18", 
		"56": "19", 
		"57": "5", 
		"58": "7", 
		"59": "17", 
		"60": "1", 
		"61": "15", 
		"62": "13", 
		"63": "7", 
		"64": "1", 
		"65": "11", 
		"66": "17", 
		"67": "13", 
		"68": "3", 
		"69": "10", 
		"70": "6", 
		"71": "8", 
		"72": "7", 
		"73": "16", 
		"74": "5", 
		"75": "2", 
		"76": "5", 
		"77": "19", 
		"78": "9", 
		"79": "15", 
		"80": "12", 
		"81": "17", 
		"82": "8", 
		"83": "18", 
		"84": "37", 
		"85": "16", 
		"86": "14", 
		"87": "3", 
		"88": "11", 
		"89": "2", 
		"90": "6"
	}

	window.main = {
	  prime: Object.assign({}, sequences.priming), 
	  prime_type: Object.assign({}, sequences.priming_type[window.biography.subject_number-1]), 
	  target:  Object.assign({}, sequences.targets), 
	  right: Object.assign({}, sequences.priming_right), 
	  wrong: Object.assign({}, sequences.priming_wrong),
	  answers: {},
	  answer_duration: [],
	  get_from_type: function(i) {
	  	i++;
	  	if (this.prime_type[i] == 3) return this.prime[i];
	  	return this.prime[i] + " = " + (this.prime_type[i] == 1?this.right[i]:this.wrong[i]);
	  },
	  get_answer: function(key) {
	  	return this.answers[key]
	  },
	  set_answer: function(key, value) {
	  	this.answers[key] = value
	  },
	  is_skip: function() {
	  	return window.main.last_time < window.test.answer_time
	  }

	}
	delete sequences;
}
