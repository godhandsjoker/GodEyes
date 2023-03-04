import base64
import uuid
import re
import cv2
import glob
import os
from django.http import JsonResponse


def getinfo_right(request):
    return JsonResponse({
        'result': "success",
    })


def getinfo_wrong(request):
    return JsonResponse({
        'result': "wrong",
    })


def decode_image(src):
    # 1、信息提取
    result = re.search("data:image/(?P<ext>.*?);base64,(?P<data>.*)", src, re.DOTALL)
    if result:
        ext = result.groupdict().get("ext")
        data = result.groupdict().get("data")

    else:
        raise Exception("Do not parse!")

    # 2、base64解码
    img = base64.urlsafe_b64decode(data)

    # 3、二进制文件保存
    filename = "{}.{}".format(uuid.uuid4(), ext)
    PATH = "./IMAGE/" + filename
    with open(PATH, "wb") as f:
        f.write(img)

    return filename


def trainer():
    pass


# print(recogizer)
# names = []
# warningtime = 0

def face_detect_demo(img):
    recogizer = cv2.face.LBPHFaceRecognizer_create()
    recogizer.read('./trainer/trainer.yml')
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)  # 转换为灰度
    face_detector = cv2.CascadeClassifier('./haarcascade_frontalface_alt2.xml')
    face = face_detector.detectMultiScale(
        gray, 1.1, 5, cv2.CASCADE_SCALE_IMAGE, (100, 100), (300, 300))
    # face=face_detector.detectMultiScale(gray)
    for x, y, w, h in face:
        cv2.rectangle(img, (x, y), (x + w, y + h), color=(0, 0, 255), thickness=2)
        cv2.circle(img, center=(x + w // 2, y + h // 2), radius=w //
                                                                2, color=(0, 255, 0), thickness=1)
        # 人脸识别
        ids, confidence = recogizer.predict(gray[y:y + h, x:x + w])
        # print('标签id:',ids,'置信评分：', confidence)
        if confidence > 80:
            return False
        else:
            return True


def check(filename):
    FILEPATH = "./IMAGE/"
    FILE = FILEPATH + filename
    img = cv2.imread(FILE)
    if face_detect_demo(img):
        return True
    return False


# WSI_MASK_PATH = './IMAGE/'  # 存放图片的文件夹路径
# paths = glob.glob(os.path.join(WSI_MASK_PATH, '*.jpeg'))
# paths.sort()
# for i in paths:
#     img = cv2.imread(i)
#     if face_detect_demo(img):
#         print("YES")
#     else:
#         print("NO")


def getinfo(request):
    platform = request.GET.get('IMG')
    filename = decode_image(platform)
    check(filename)
    if check(filename):
        return getinfo_right(request)
    else:
        return getinfo_wrong(request)
