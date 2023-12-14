'use strict';
(function(){
    const Fruits = ["apple", "banana", "carot", "grape", "orange", "pear", "watermelon"];

    for (let i = 0; i < 24; i++) {
        $(".container").appendChild(Line.instance({
            fruits: [
                Fruits[Random(0, Fruits.length)],
                Fruits[Random(0, Fruits.length)],
                Fruits[Random(0, Fruits.length)],
                Fruits[Random(0, Fruits.length)],
                Fruits[Random(0, Fruits.length)]
            ]
        }));
    }
})();