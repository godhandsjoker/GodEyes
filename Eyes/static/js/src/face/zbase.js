class GodEyesFace {
    constructor(root) {
        this.root = root;
        this.$face = $(
            `
                <div>
    <video id="video" width="500" height="600" controls>
    </video>
    <canvas id="canvas" width="500" height="600"></canvas>
    <div>
        <button id="capture">拍照</button>
        <button id="close">关闭摄像头</button>
    </div>

    <script>
        let video = document.getElementById('video');
        let canvas = document.getElementById('canvas');
        let context = canvas.getContext('2d');
        var mediaStreamTrack;

        //访问用户媒体设备的兼容方法
        function getUserMedia(constraints, success, error) {
            if (navigator.mediaDevices.getUserMedia) {
                //最新的标准API
                navigator.mediaDevices.getUserMedia(constraints).then(success).catch(error);
            } else if (navigator.webkitGetUserMedia) {
                //webkit核心浏览器
                navigator.webkitGetUserMedia(constraints, success, error)
            } else if (navigator.mozGetUserMedia) {
                //firfox浏览器
                navigator.mozGetUserMedia(constraints, success, error);
            } else if (navigator.getUserMedia) {
                //旧版API
                navigator.getUserMedia(constraints, success, error);
            }
        }

        function success(stream) {
            //兼容webkit核心浏览器
            let CompatibleURL = window.URL || window.webkitURL;
            //将视频流设置为video元素的源
            //video.src = CompatibleURL.createObjectURL(stream);

            // 播放
            video.srcObject = stream;
            video.play();
            mediaStreamTrack = stream
        }

        function error(error) {
            alert('调用摄像头失败')
        }

        if (navigator.mediaDevices.getUserMedia || navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia) {
            getUserMedia({ video: { width: 300, height: 400 } }, success, error);
        } else {
            alert('不支持访问用户媒体');
        }

        // 拍照
        document.getElementById('capture').addEventListener('click', function () {
            context.drawImage(video, 0, 0, 500, 600);
            // photoSrc 就是拍照得到的base64的图片数据，将数据传递给后端就可以了
            var photoSrc = document.getElementById("canvas").toDataURL("image/jpeg", 0.8);
            $.ajax({
                url: "http://localhost:8000/settings/getinfo/",
                type: "GET",
                data: {
                    IMG: photoSrc,
                },
                success: function (resp) {
                   console.log(resp);
                   if (resp.result === "success") {
                       alert("Login Success!");
                   } else {
                       alert("Wrong!");
                   }
                }
            });
        })

        // 关闭摄像头
        document.getElementById('close').addEventListener('click', function () {
            if (mediaStreamTrack) {
                mediaStreamTrack.getTracks()[0].stop();
            }
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
