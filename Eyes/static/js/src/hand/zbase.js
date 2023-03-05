class GodEyesHand {
    constructor(root) {
        this.root = root;
        this.$hand = $(
            `
            <div1 style="text-align:center;">
            <div class="backgrondLogin">
            <body>
                <h2>指纹识别</h2>
                <h3>端口返回信息：</h3>
                
                <a href="Webshell:">
                    <button id="finger" style="display:block;margin:0 auto">match</button>
                </a>
                <br>
                <m href="">
                    <button id="find" style="display:block;margin:0 auto">find</button>
                </m>
            </body>
            </div>
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
