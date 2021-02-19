var accuracy = 0.9
function start(a) {
	var model = {t:{},l:{},a:{}};
	var tlength = 0
	var output = "";
	var usemes = {}
	a = a.split("  ");
	//selecting first character:
	var aaa = randItem(a)
	var aaaa = Math.floor(Math.random()*(aaa.length/2))*2
	output=aaa[aaaa]+aaa[aaaa+1] //<- beautiful code
	//training:
	for (var item in a) {
		var char = a[item];
		tlength += char.length
		for (var i = 0; i < char.length; i+=2) {
			var turnment = char[i];
			var length = char[i+1];
			var lt = char[i+2]
			var ll = char[i+3]
			var la = lt + ll
			var aset = turnment + length
			//setup for adding layer 2
			if (model.t[turnment] === undefined) {
				model.t[turnment] = {}
				model.t[turnment].occ = 1
			} else {
				model.t[turnment].occ += 1
			}
			
			if (model.l[length] === undefined) {
				model.l[length] = {}
				model.l[length].occ = 1
			} else {
				model.l[length].occ += 1
			}
			
			if (model.a[aset] === undefined) {
				model.a[aset] = {}
				model.a[aset].occ = 1
			} else {
				model.a[aset].occ += 1
			}
			//add layer 2
			if(model.t[turnment][lt] === undefined){
				model.t[turnment][lt] = 1
			}else{
				model.t[turnment][lt] += 1
			}
			
			if (model.l[length][ll] === undefined) {
				model.l[length][ll] = 1
			} else {
				model.l[length][ll] += 1
			}
			
			if (model.a[aset][la] === undefined) {
				model.a[aset][la] = 1
			} else {
				model.a[aset][la] += 1
			}
		}
	}
	//generating result:
	{
		var ax = model.a
		for (var n = 0; n < Math.round(tlength/(a.length)*Math.random()+3); n++) {
			var latest = output.charAt(output.length-2)+output.charAt(output.length-1)
			output += findGreatest(ax)
		}
	}
	//outputting:
	log(output)
	console.log(model)
}
var data = 
`a1x1b1c2z2a1  x1x1x1x1c2b2f2b2  e5a2a5  x2c1b1  f2b2b2z2b2b2  x2b2z2b2b2  f1e1e2e1e1e1e5f1z2b2  x1x1z1f1f1z1x1  x2x2  b2x2z2f2x2a1  x1x1z1e2z2b2  z2x2f1x1  x1x1c2f2c1x1  x1x1c2x2g1x1  a1a1a1a1a1a1a1a1  x2x2b1b1b1  a1a1a1a1a5f5z5f5a1a1a1  x2x2b1b1b1g2a1  g2f2b2  b2x2z2f2x2  z2e1e1e1e2  c2x2f2x2  c2x2f2x2b2x2f2x2  a2x2z2b2z2x2  a2z2b2z2a2  b1x1c2x2g1x1`
function log(arg) {
	document.getElementById("out").innerHTML = arg
}
function randItem(arr) {
	return arr[Math.floor(Math.random()*arr.length)]
}
function findGreatest(arr) {
	var gr = 0;
	var grn = "x1";
	var itm = ""
	for (var prop in arr) {
		var val = arr[prop]
		if (val.occ>=gr&&Math.random()>accuracy&&prop!=="occ") {
			gr = val.occ;
			grn = prop;
		}
	}
	return grn;
}