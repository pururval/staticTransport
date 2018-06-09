$(document).ready(function(){

	if( navigator.geolocation ){
		// setInterval(function(){
		navigator.geolocation.getCurrentPosition(success, fail);
		// console.log("jsUpdate");
	// },2000);
	}
	else{
			$("p").html("HTML5 Not Supported");
		}
});

function success(position){
	setInterval(function(){
		var inputBox1 = document.getElementById('info1');
		inputBox1.value = position.coords.latitude;
		var inputBox2 = document.getElementById('info2');
		inputBox2.value = position.coords.longitude;

		$("p2").html("Latitude: "+  position.coords.latitude+
	 		 "<br/>    Longitude: "+  position.coords.longitude+
	 			"<br/>   Accuracy: "+  position.coords.accuracy);
				console.log("jsUpdate");
	},3000);


 	var googleLatLng = new google.maps.LatLng(
		position.coords.latitude, position.coords.longitude);
	var mapOtn = {
		zoom:7,
		center   : googleLatLng,
		mapTypeId: google.maps.MapTypeId.ROAD
	}

	var Pmap = document.getElementById("map");
	var map = new google.maps.Map(Pmap, mapOtn);

	// getting total number of Buses
	var ref = firebase.database().ref('Buses/');

	ref.on("value", function(snapshot) {
	var total=snapshot.numChildren();
	// console.log(total+" values in firebase");

				//interating to get all coords and marking them
					for(var i=0; i<=total;i++){
								var rootRef = firebase.database().ref('Buses/').child(''+i);
								var lat, long;
								rootRef.on('value',function(snapshot){
									lat = snapshot.child('info1').val();
									long = snapshot.child('info2').val();

									addMarker(map,"ID = "+i+ ", "+ lat + ","+ long,lat,long);
								});
							 // addMarker(map,"ID = "+i,lat,long);
					}
	});
}
function addMarker(map, title, lati, longi){
	var googleLatLng = new google.maps.LatLng(lati, longi);
	var markerOptn={
		position:googleLatLng,
		map:map,
		title:title,
		// animation:google.maps.Animation.DROP
	};

	var marker = new google.maps.Marker(markerOptn);
}

function fail(error){
	var errorType = {
		0:"Unknown Error",
		1:"Permission denied by the user",
		2:"Position of the user not available",
		3:"Request timed out"
	};

	var errMsg = errorType[error.code];

	if(error.code == 0 || error.code == 2){
		errMsg = errMsg+" - "+error.message;
	}
	$("p").html(errMsg);
};
