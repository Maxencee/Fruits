const Component = {
    /**
     * Js Component
     * @param {string} tag 
     * @param {object} component 
     * @returns HTMLElement
     */
    new: function (tag, component) {
        let classEntity = class extends this.element {};
        classEntity.component = component;
        classEntity.observe = component.observe ?? [];
        customElements.define(tag, classEntity);
        return classEntity;
    },
    element: class extends HTMLElement {
        static instance (data) {
            return new this(data, this.component, this.observe);
        }

        constructor (data, component, observe) {
            super();
            this.component = component;
            this.observe = observe;
            Object.keys(data).forEach(k => this[k] = data[k]);
            this.innerHTML = this.component.render.bind(this)();
            if(this.component.shadow) this.attachShadow({ mode: "open" });
            Object.entries(this.component.events).forEach(([name, callback]) => {
                if(["onCreate", "onMove", "onDestroy", "onAttributeChange"].includes(name)) return;
                // console.log(name);
                this.addEventListener(name, (evt) => callback.bind(this)(evt));
            });
        }
    
        connectedCallback() {
            Object.entries(this.component.attributes).forEach(([attr, value]) => {
                this.setAttribute(attr, value);
                // this[attr] = value;
            });

            this.component.events.onCreate.bind(this)();
        }
    
        adoptedCallback() {
            this.component.events.onMove.bind(this)();
        }
    
        disconnectedCallback() {
            this.component.events.onDestroy.bind(this)();
        }
    
        static get observedAttributes() {
            return this.observe;
        }
    
        attributeChangedCallback(name, old, value) {
            this.component.events.onAttributeChange.bind(this)(name, value, old);
            // this[name] = value;
        }
    }
}