import * as commander  from "commander";
import {translate} from './main'

const program = new commander.Command()

program
.version('0.0.1')
.name('translate')
.usage('<English>')
.arguments('<English>')  // 获取命令输入参数
.action(function(english){
    console.log(english);
    translate(english)
});

// 用于解析参数
program.parse(process.argv)