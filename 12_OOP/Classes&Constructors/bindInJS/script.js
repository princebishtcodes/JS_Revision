const click = document.querySelector('.click');
const button = document.querySelector('.start');

class React {
    constructor() {
        this.library = "React";
        this.server = "https://localhost:300";
        button.addEventListener('click', this.handleClick
            .bind(this));
    }

    handleClick() {
        click.textContent = "Button Clicked..."
        console.log(this);
        console.log("Button Clicked")
    }
}

const app = new React();