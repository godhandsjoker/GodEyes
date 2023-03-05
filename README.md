# 天眼项目

## 项目运行指南

首先可以使用Python创建一个虚拟环境，这里不过多介绍

接下来使用

```python
pip install -r requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple
```

安装相对应的依赖以及包结构，接下来运行Django项目

在GodEyes目录下进行执行

```python
python3 manage runserver 0.0.0.0:8000
```

接下来就可以在网页端进行访问

```
http://localhost:8000/
```

## 项目文件结构

templates目录：管理Html文件

urls目录：管理路由，即链接与函数的对应关系

views目录：管理http函数

models目录：管理数据库数据

static目录：管理静态文件
    css：
    js：
    image：
    audio：

consumers目录：管理WebSocker函数