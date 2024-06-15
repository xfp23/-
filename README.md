# 命令行题目解题

## windows：
 1.列出竞赛资料：
 ```cmd
dir /s /b ***F:\竞赛资料***\*.zip
```

2.使用命令查询网络地址配置结果，IP地址
```cmd
ipconfig/all
```

3.使用命令查看root用户进程信息的界面
```cmd
ps -U root -u root u
```
4.终端中使用命令查看属于当前用户的进程信息的界面
```cmd
ps -u $USER
```

# ziggbee模块开发
** 选取2个ZigBee 模块，记为“终端”和“控制端” **
1.设备上电或重置后，初始化程序，LED1和LED2依次亮起一次，然后熄灭

```c

```
2. 在“控制端”操作按键并通过串口向PC 发送字符串信息,“控制端”第1 次按下 SW1(功能)键，本模块的LED2亮，发送字符串信息“控制端LED2 亮”;
```c

```
3.第二次按下 SW1 键时,“终端”的 ZigBee 模块的 LED2 亮，发送字符串信息“终端 LED2 亮”;
```

```
