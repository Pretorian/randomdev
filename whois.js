var developers = { 
    "jxk3" : { "fullName": "Jamie Kirby", "email":  "jxk3@akc.org", "bio" : "Jamie has worked at the AKC for 11 years.  He has lived in NC his entire life.  For the past several years he has primarily focused on Java web service development."}
};


var userId = process.argv[2];

console.log ("About " + developers[userId]["fullName"] + ":");
console.log (developers[userId]["bio"]);
console.log ("Contact at " + developers[userId]["email"] + "");
