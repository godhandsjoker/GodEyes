class GodEyesFace {
    constructor(root) {
        this.root = root;
        this.$face = $(
            `
                <div>

    <body>
    <video id="video" width="640" height="480" autoplay></video>
    <button id="snap">Snap Photo</button>
    <canvas id="canvas" width="640" height="480"></canvas>
    <h2>Please click the button</h2>
    </body>
    <script type="text/javascript">
        var aVideo = document.getElementById('video');
        var aCanvas = document.getElementById('canvas');
        var ctx = aCanvas.getContext('2d');

        navigator.getUserMedia = navigator.getUserMedia ||
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia ||
            navigator.msGetUserMedia; //获取媒体对象（这里指摄像头）
        navigator.getUserMedia({
            video: true
        }, gotStream, noStream); //参数1获取用户打开权限；参数二是一个回调函数，自动传入视屏流，成功后调用，并传一个视频流对象，参数三打开失败后调用，传错误信息

        function gotStream(stream) {

            // video.src = URL.createObjectURL(stream); // 老写法
            aVideo.srcObject = stream;

            aVideo.onerror = function () {
                stream.stop();
            };
            stream.onended = noStream;
            aVideo.onloadedmetadata = function () {
                // alert('Success!!!');
            };
        }

        function noStream(err) {
            alert(err);
        }

        document.getElementById("snap").addEventListener("click", function () {
            ctx.drawImage(aVideo, 0, 0, 640, 480); //将获取视频绘制在画布上
            alert("login in");
        });
    </script>
</div>
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
        this.$face = this.$menu.find('.godeyes-menu-field-item-face');
        this.$hand = this.$menu.find('.godeyes-menu-field-item-hand');
        this.$admin = this.$menu.find('.godeyes-menu-field-item-admin');

        this.start();
    }

    start() {
        this.add_listening_events();
    }

    add_listening_events() {
        let outer = this;
        this.$face.click(function () {
            console.log("face click");
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
