console.log("test %d.", 1234567890);



let myTest = ["en", "to"];
console.log(myTest.entries)
for ([index, nummer] of myTest.entries())[
    console.log("%d. %s", index+1, nummer)
]