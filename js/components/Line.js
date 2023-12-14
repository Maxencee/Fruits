const Line = Component.new('line-component', {
    // shadow: true,
    observe: [
    ],
    render: function () {
        return "";
    },
    attributes: {
        class: "line-container"
    },
    events: {
        onCreate: function () {
            this.fruits.forEach(element => {
                let c = FruitComponent.instance({ fruit: element });
                this.appendChild(c);
            });
        },
        onDestroy: function () {
        },
        onMove: function () {
        },
        onAttributeChange: function (name, value, old) {
        }
    }
});