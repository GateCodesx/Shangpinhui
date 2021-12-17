//创建虚拟数据引入接口
import Mock from 'mockjs';
//把json数据进行引入，虽然没有暴露，但依旧可以正常引入
import floor from './floor.json';
import banner from './banner.json';

//mock数据：具有两个参数，一个是数据请求地址  第二个是请求数据
Mock.mock("/mock/banner", { code: 200, data: banner });
Mock.mock("/mock/floor", { code: 200, data: floor });