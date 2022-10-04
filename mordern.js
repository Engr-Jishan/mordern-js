// function num() {
//     return 10;
// }

// let num = () => {
//     return 10;
// }
// let num = (a, b) => a + b;

// console.log(num(20, 10));

// Es6 ger arrow function
// var javascript = {
//     name: "javaScript",
//     libraries: ["React", "Angular", "Vue"],
//     printLibraries: function () {
//         this.libraries.forEach(function (a) {
//             console.log(`${this.name} loves ${a}`);
//         });
//     },
// };

// javaScript.printLibraries();

// var javaScript = {
//     name: "javaScript",
//     libraries: ["React", "Angular", "Vue"],
//     printLibraries: function () {
//         this.libraries.forEach(function (a) {
//             console.log(`${this.name} loves ${a}`);
//         });
//     },
// };

// javaScript.printLibraries();

// Another arrow function
var javascript = {
    name: "javaScript",
    from: "Also",
    libraries: ["React", "Angular", "Vue"],
    librariesPrint: function () {
        this.libraries.forEach((a) => console.log(`${this.name}
        ${this.from} loves ${a}`));
    },
};

javascript.librariesPrint();