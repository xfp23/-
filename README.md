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
**选取2个ZigBee 模块，记为“终端”和“控制端”**

1.设备上电或重置后，初始化程序，LED1和LED2依次亮起一次，然后熄灭

```c
#include "ioCC2530.h"

#define LED1_PIN 0   // P1_1
#define LED2_PIN 1   // P1_0

void init_LEDs() {
    // 设置P1_1和P1_0为输出
    P1SEL &= ~(1 << LED1_PIN);
    P1DIR |= (1 << LED1_PIN);
    P1 &= ~(1 << LED1_PIN);

    P1SEL &= ~(1 << LED2_PIN);
    P1DIR |= (1 << LED2_PIN);
    P1 &= ~(1 << LED2_PIN);
}

void delay_ms(unsigned int ms) {
    unsigned int i, j;
    for (i = 0; i < ms; i++)
        for (j = 0; j < 535; j++);
}

void init_sequence() {
    // LED1亮起
    P1 |= (1 << LED1_PIN);
    delay_ms(500);  // 等待500ms
    P1 &= ~(1 << LED1_PIN);  // LED1熄灭

    // LED2亮起
    P1 |= (1 << LED2_PIN);
    delay_ms(500);  // 等待500ms
    P1 &= ~(1 << LED2_PIN);  // LED2熄灭
}

int main() {
    // 初始化LED端口
    init_LEDs();

    // 执行LED初始化序列
    init_sequence();

    // 此处可以添加其他初始化或主要功能代码

    // 进入无限循环，保持程序运行
    while (1) {
        // 可以添加其他的功能代码，或者保持空循环
    }

    return 0;
}

```
2. 在“控制端”操作按键并通过串口向PC 发送字符串信息,“控制端”第1 次按下 SW1(功能)键，本模块的LED2亮，发送字符串信息“控制端LED2 亮”;
```c

```
3.第二次按下 SW1 键时,“终端”的 ZigBee 模块的 LED2 亮，发送字符串信息“终端 LED2 亮”;
```c

```
