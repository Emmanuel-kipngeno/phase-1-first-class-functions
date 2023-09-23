
function receivesAFunction(callback) {
    callback();
}

module.exports = {
    receivesAFunction,
};
function wakeUp() {
    console.log("Wake up early at 6 AM.");
}

function returnsANamedFunction() {
    return function namedRoutine() {
        console.log("Perform a named routine.");
    };
}

const myNamedRoutine = returnsANamedFunction();

receivesCallback(wakeUp);

console.log("Watch a game");
myNamedRoutine();
console.log();

const myAnonymousRoutine = function() {
    console.log("Do a workout at the gym");
};

console.log("Watch a game");
myAnonymousRoutine();
console.log();
