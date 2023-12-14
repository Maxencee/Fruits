'use strict';
(function(){
    const Fruits = ["apple", "banana", "carot", "grape", "orange", "pear", "strawberry", "watermelon"];

    // const Fruit = Component.new('fruit-component', {
    //     // shadow: true,
    //     observe: [
    //         "data-fruit",
    //     ],
    //     render: function () {
    //         return `<div class="fruit-inline ${this.fruit}" data-fruit="${this.fruit}">
    //             <img src="./assets/fruits/${this.fruit}.svg"/></div>`;
    //     },
    //     attributes: {
    //         class: "fruit"
    //     },
    //     events: {
    //         onCreate: function () {
    //             this.classList.add(this.fruit);
    //             this.dataset.fruit = this.fruit;
    //             this.style = `--delay: ${this.delay}ms`;
    //         },
    //         onDestroy: function () {
    //         },
    //         onMove: function () {
    //         },
    //         onAttributeChange: function (name, value, old) {
    //         },
    //         click: function (evt) {
    //             // this.dataset.fruit = "wesh";
    //         }
    //     }
    // });

    const FruitMachineLine = Component.new('fruitline-component', {
        // shadow: true,
        observe: [
        ],
        render: function () {
            return this.fruits.map(fruit => {
                return `<div class="fruit-inline ${fruit}" data-fruit="${fruit}"><img src="./assets/fruits/${fruit}.svg"/></div>`
            }).join('');
        },
        attributes: {
            class: "fruitline"
        },
        events: {
            onCreate: function () {
                this.style = `--delay: ${this.delay}ms`;
            },
            onDestroy: function () {
            },
            onMove: function () {
            },
            onAttributeChange: function (name, value, old) {
            }
        }
    });

    let blur_timeout;
    let container = $('.fruitlines-container');
    let button = $('.fruitmachine button');

    function rollFruits () {
        button.classList.add('active')
        button.removeEventListener('click', rollFruits);
        clearTimeout(blur_timeout);

        blur_timeout = setTimeout(() => {
            button.classList.remove('active');
            button.addEventListener('click', rollFruits);
            // button.click();
        }, 800);

        container.innerHTML = null;
        [0, 1, 2].forEach(e => {
            container.appendChild(FruitMachineLine.instance({ fruits: [0, 1, 2].map(() => Fruits[Random(0, Fruits.length)]), delay: e * 150 }));
        });
    }

    button.addEventListener('click', rollFruits);

    rollFruits();

    // document.body.appendChild(FruitSelection.instance({ fruit: 'none' }));

    // Fruits.forEach(fruit => {
    //     document.body.appendChild(FruitSelection.instance({ fruit: fruit }));
    // });
    // document.body.appendChild(FruitMachineLine.instance({ fruits: [0, 1, 2].map(() => Fruits[Random(0, Fruits.length)] )}));
    // document.body.appendChild(FruitMachineLine.instance({ fruits: [0, 1, 2].map(() => Fruits[Random(0, Fruits.length)] )}));
    // document.body.appendChild(FruitBasket.instance({ fruits: [0, 1, 2].map(() => Fruits[Random(0, Fruits.length)] )}));
})();