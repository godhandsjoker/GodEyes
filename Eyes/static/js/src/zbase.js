class GodEyes {
    constructor(id) {
        this.id = id;
        this.$godeyes = $('#' + id);
        this.menu = new GodEyesMenu(this);
        this.face = new GodEyesFace(this);

        this.start();
    }

    start() {

    }
}
