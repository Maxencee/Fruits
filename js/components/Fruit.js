let StoreCurrentSelected = null;

const FruitComponent = Component.new('fruit-component', {
    // shadow: true,
    observe: [
    ],
    render: function () {
        return `<div class="fruit-container" data-fruit="${this.fruit}"><img src="./assets/fruits/${this.fruit}.svg"/></div>`;
    },
    attributes: {
        class: "fruit"
    },
    events: {
        onCreate: function () {
            this.classList.add(this.fruit);
        },
        onDestroy: function () {
        },
        onMove: function () {
            console.log("Moved !");
        },
        onAttributeChange: function (name, value, old) {
        },
        click: function (evt) {
            console.log("clicked");
            if(StoreCurrentSelected) {
                let t = this.innerHTML;
                let c = this.className;

                StoreCurrentSelected.classList.remove('selected');

                this.innerHTML = StoreCurrentSelected.innerHTML;
                this.className = StoreCurrentSelected.className;
                StoreCurrentSelected.innerHTML = t;
                StoreCurrentSelected.className = c;

                let kf = [
                    { transform: "rotate(6deg) scale(1.6)" },
                    { transform: "rotate(0deg) scale(1)" },
                ];

                let opts =  {
                    duration: 270,
                    fillMode: 'fowards',
                    timing: 'ease-in'
                };

                this.animate(kf, opts);
                StoreCurrentSelected.animate(kf, opts);
                StoreCurrentSelected = null;
            } else {
                this.classList.add('selected');
                StoreCurrentSelected = this;
            }
        }
    }
});