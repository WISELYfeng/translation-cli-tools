import * as commander  from "commander";

const program = new commander.Command()

program.version('0.0.1')

// 用于解析参数
program.parse(process.argv)