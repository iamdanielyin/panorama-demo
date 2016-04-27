/**
 * 主模块文件
 * Created by yinfx on 16-4-27.
 */
pannellum.viewer('panorama', {
    "type": "multires",
    "multiRes": {
        "basePath": "/images/R0010020_20160307125604_OUTPUT",
        "path": "/%l/%s%y_%x",
        "fallbackPath": "/fallback/%s",
        "extension": "jpg",
        "tileResolution": 512,
        "maxLevel": 3,
        "cubeResolution": 1704
    },
    "autoLoad": true,
    "compass": true,
    "autoRotate": -2,
    "title": "基于开源ThreeJS全景图展示开发",
    "author": "yinfxs"
});