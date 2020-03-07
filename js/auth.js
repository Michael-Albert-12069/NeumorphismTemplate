
var key = "1296513791";
var passwd;
var uname;

var authkey;


var x = document.getElementById('passwd');
x.setAttribute("type", "password");


function authorize(){
//    window.alert(hash(document.getElementById('passwd').value));
	passwd = document.getElementById('passwd').value;
	uname = document.getElementById('uname').value;

	authkey = uname + passwd;
	if(hash(authkey) == key){
		window.alert("you gucci");
		window.alert();
		sessionStorage.setItem(hash(uname), hash(passwd));
		window.location = hash(uname) + ".html";

	} else {
		window.alert("you guccin't");
	}
}
//window.alert(sessionStorage.getItem(2084094355));


function leavePage(){
        //    window.alert(hash(document.getElementById('passwd').value));
              if(hash(document.getElementById('passwd').value) != pswd){
                window.location = "https://google.com";
              }
        
}



function hash(string) { 
                  
    var hash = 0; 
      
    if (string.length == 0) return hash; 
      
    for (i = 0; i < string.length; i++) { 
        char = string.charCodeAt(i); 
        hash = ((hash << 5) - hash) + char; 
        hash = hash & hash; 
    } 
      
    return hash; 
} 

//screw you using the console

(function(){
 
  var _z = console;
  Object.defineProperty( window, "console", {
		get : function(){
		    if( _z._commandLineAPI ){
			throw "screw you using the console";
		          }
		    return _z; 
		},
		set : function(val){
		    _z = val;
		}
  });
 
})();

function encrypt(str) {
    var amount = 1;
	// Wrap the amount
	if (amount < 0)
		return caesarShift(str, amount + 26);

	// Make an output variable
	var output = '';

	// Go through each character
	for (var i = 0; i < str.length; i ++) {

		// Get the character we'll be appending
		var c = str[i];

		// If it's a letter...
		if (c.match(/[a-z]/i)) {

			// Get its code
			var code = str.charCodeAt(i);

			// Uppercase letters
			if ((code >= 65) && (code <= 90))
				c = String.fromCharCode(((code - 65 + amount) % 26) + 65);

			// Lowercase letters
			else if ((code >= 97) && (code <= 122))
				c = String.fromCharCode(((code - 97 + amount) % 26) + 97);

		}

		// Append
		output += c;

	}

	// All done!
	return output;

}

window.console.log = function(){
    console.error('Sorry , developers tools are blocked here....');
    window.console.log = function() {
        return false;
    }
  }
  
  console.log('test');	