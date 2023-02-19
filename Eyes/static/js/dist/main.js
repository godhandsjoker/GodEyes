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
class GodEyesMenu {
    constructor(root) {
        this.root = root;
        this.$menu = $(
            `
            <div class="godeyes-menu">
            <div class="godeyes-menu-field">
                <div class="godeyes-menu-field-item godeyes-menu-field-item-face">
                    人脸识别
                </div>
                <br>
                <div class="godeyes-menu-field-item godeyes-menu-field-item-hand">
                    指纹识别
                </div>
                <br>
                <div class="godeyes-menu-field-item godeyes-menu-field-item-admin">
                    管理员
                </div>
            </div>
        </div>
            `
        );
        this.root.$godeyes.append(this.$menu);
        this.$face = this.$menu.find('godeyes-menu-field-item-face');
        this.$hand = this.$menu.find('godeyes-menu-field-item-hand');
        this.$admin = this.$menu.find('godeyes-menu-field-item-admin');

        this.start();
    }

    start() {
        this.add_listening_events();
    }

    add_listening_events() {
        let outer = this;
        this.$face.click(function () {
            outer.hide();
            outer.root.face.show();
        });
        this.$hand.click(function () {
            console.log("click hand");
        });
        this.$admin.click(function () {
            console.log("click admin");
        });
    }

    show() {
        this.$menu.show();
    }

    hide() {
        this.$menu.hide();
    }
}
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
