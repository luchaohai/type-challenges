# Duplicate Declaration

> 此处针对的场景：不同文件里相同的type声明会报TS错误

原因分析：TypeScript 编译器在同一个tsconfig.json文件下会去做这类判断。
解决方案：修改命名或者增加命名空间