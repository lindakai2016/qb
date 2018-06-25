/**
 * 处理websocket连接信息
 * 1.是否关于头文件的处理也放在这里？ 是
 * 2.是否兼容多条连接？ 问题3告诉我们，在这个文件中开始连接，这使得兼容多条连接具有可能性，结论参见问题6
 * 3.是否还要有开始连接的动作？ 开始连接的动作只在此文件中完成，不再每次使用中
 * 4.问题3带来的项目只要启动就会建立一条websocket连接，不论进入那个页面，是否有问题？否
 * 5.如果只有一个server端，为什么还要有多条链接？ 结论参见问题6
 * 6.这条是关于多条连接的结论，目前只处理一个server中一条连接。原因：建立websocket连接本身耗时，且一条能做完成的事，为什么要分多条。关于多条连接的事情暂不考虑。
 * 7.一个onMessage方法
 * 8.需要头文件的config，
 * 9.一个队列处理消息，onMessage只是把头文件和回调关联起来，在消息返回时，找到对应回调处理
 * 10.需要创建一个回调字典和消息队列
 * 11.一个字段name对应一个头文件，对应一个回调。
 * 12.在调用onMessage方法时，回调字典添加一条记录
 */





