class GodEyesFace {
    constructor(root) {
        this.root = root;
        this.$face = $(
            `
    <div style="text-align:center;">
    <video id="video" width="500" height="600" controls>
    </video>
    <canvas id="canvas" width="500" height="600"></canvas>
    <div style="text-align:center;">
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
class GodEyesHand {
    constructor(root) {
        this.root = root;
        this.$hand = $(
            `
            <div1>
            <head>
                nihao
            </head>

            <body style="text-align:center;">
                <p>指纹识别</p>
                端口返回信息：
                
                <a href="Webshell:">·
                    <button id="finger">match</button>
                </a>
                <br></br>
                <m href="">
                    <button id="find">find</button>
                </m>
                
                
            </body>
            <script src="https://cdn.bootcss.com/jquery/3.6.1/jquery.js" type="text/javascript" ></script>
	        <script type="text/javascript">
            
            
            setTimeout(()=>{
                console.log("nihao")
            },0)
            setTimeout(()=>{
                document.getElementById("finger").addEventListener("click", function () {
                    alert("请把手放上机子")
                });
            },0)
            setTimeout(()=>{
                document.getElementById("find").addEventListener("click", function () {
                    $.get("/static/js/src/hand/缓存文件.txt",{},function(data){
                        data
                        var a = data.search("�ѳ�");
                        var b = data.search("ID")
                        var c = data.search("感器中没有")
                        console.log(data)
                        console.log(a);
                        console.log(b);
                        console.log(c);
                        if(a>=0){
                            console.log(data);
                            alert("已超时！请重试");
                            $("p").append('<br>');
                            $("p").append("已超时！请重试")
                        }else if(b>=0){
                            $.getJSON("/static/js/src/hand/字典.json",{},function(dic){
                                for(var i = 0; i<dic.length;i++){
                                    if(data.search(dic[i].handId)){
                                        console.log(dic[i].name);
                                        alert("欢迎你," + dic[i].name + "同学!");
                                        $("p").append('<br>');
                                        $("p").append(dic[i].name);
                                        break;
                                    }
                                }
                            },"text");
                        }else if(c>=0){
                            console.log("请先添加指纹");
                            alert("请先添加指纹!");
                            $("p").append('<br>');
                            $("p").append("请先添加指纹!");
                        }
                    },"text");
                });   
            },1000) 
    
	        </script>
                
            </div1>
            
            `
        );
        this.hide();
        this.root.$godeyes.append(this.$hand);

        this.start();
    }

    start() {

    }

    show() {
        this.$hand.show();
    }

    hide() {
        this.$hand.hide();
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
                    <!-- <div class="godeyes-menu-field-item godeyes-menu-field-item-admin">
                        管理员
                    </div> -->
                </div>
            </div>
            `
        );
        this.root.$godeyes.append(this.$menu);
        this.$face = this.$menu.find('.godeyes-menu-field-item-face');
        this.$hand = this.$menu.find('.godeyes-menu-field-item-hand');
        // this.$admin = this.$menu.find('.godeyes-menu-field-item-admin');

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
            outer.hide();
            outer.root.hand.show();
        });
        // this.$admin.click(function () {
        //     console.log("click admin");
        // });
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
        this.hand = new GodEyesHand(this);
        this.start();
    }

    start() {

    }
}
