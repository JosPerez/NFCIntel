'use strict';
var TAFFY = require('./taffydb-master/taffy.js').taffy;

var NFID = TAFFY([{"id":null,"Time":null,"Date":null}]);

function addData(id,time,date){
	NFID.insert({"id":id,"Time":time,"Date":date});
}
function removeByID(id){
	NIFID({id:id}).remove();
}
function findByID(id){
	return NIFID({id:id});
}