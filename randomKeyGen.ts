let key=""
var randomBetween = (a,b) => Math.floor(((Math.random()*1000)%(b-a))+a)

for (let i = 0; i < 50; i++) key+= String.fromCharCode(randomBetween(65,122)) //65-122 (A-z)
console.log(key);