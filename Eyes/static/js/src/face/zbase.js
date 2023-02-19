class GodEyesFace {
    constructor(root) {
        this.root = root;
        this.$face = $(
            `
            Hello, World
            `
        );
        this.hide();
        this.root.$godeyes.append(this.$face);

        this.start();
    }

    start() {

    }

    show() {
        this.$face.show();
    }

    hide() {
        this.$face.hide();
    }
}
