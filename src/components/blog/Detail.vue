<template>
  <div>
    <div style="background:#eee;padding: 20px">
      <Card :bordered="false" class="ct">
        <h3>goruntime的调度底层实现</h3>
        <br/>
        <div>
          <span class="layer">2018-09-04 13:12:11</span>
          <span>标签:
            <a class="tag">golang</a>
            <a class="tag">底层</a>
          </span>
          <span>阅读(10)</span>
        </div>
        <hr/>
        <vue-markdown v-highlight :source="s" class="md-detail markdown"></vue-markdown>
      </Card>
      <div class="announce">未经允许不得转载</div>
    </div>
  </div>
</template>

<script>
  import VueMarkdown from 'vue-markdown';
  import {dat} from '../../util/date';

  export default {
    data() {
      return {
        blog: {id: 0, title: '', author: '', add_time: 0, content: '', update_time: 0, views: 0, introduce: ''},
        s: `goruntime的调度底层实现
---

### 概述
* G: \`Goruntime\` 代表go的运行代码片段
* M: \`Machine\` 代表的系统内核线程(工作线程)
* P: \`Processor\` 一个G需要运行所需的资源(上下文)

> G的运行需要P和M的支持，P和M关联和就形成了G的运行环境(内核线程和上下文)，其中每个P中有一个队列用于存储G，P会依次从G的队列中获取G来运行，下图为内核调度实体(KSE)和GMP之间的调度关系

![](http://www1.ituring.com.cn/figures/2017/manong_27_1/006.png)

### M--系统内核资源调用
> M的部分数据结构如下

\`\`\`
---------------------------------
|               M               |
|        (type m struct)        |
---------------------------------
| g0                *g          |    执行go启动时的运行时任务
| mstartfn          func        |    go 后面的函数
| curg              *g          |    当前运行的go函数指针
| p                 puintptr    |    当前M指向的P
| nextp             puintptr    |    当前M的下一个P
| spinning          bool        |    当前M是否在寻找可运行G(自旋)
| lockedg           *g          |    当前M锁定的G
---------------------------------
\`\`\`
**1. M 的创建**
* 加入到全局M列表中(便于系统查看M的信息,防止被垃圾回收)
* 起始函数和预连接的P创建
* 运行时给这个M创建一个内核线程

**2. M的分配**
- 分配栈的空间和信号初始化
- 执行起始函数(如果存在)--系统监控任务
- 如果不存在起始函数，则与P关联
- 运行时将M放入到空闲M列表中，便于运行时调用

**3. golang源码中的M**
* golang运行时中 默认M为10000个
* 可以通过\`runtime/debug.SetMaxThreads()\`控制M的个数
* 通常使用默认设置，如果设置M的个数不足系统正在运行的个数，会导致**panic**异常

### P--G在M中运行的环境
**1. P的的内容**
* 全局P列表,和M类似
* P会在多个M中切换关联(类似操作系统在切换时间片)
* \`runtime.GOMAXPROC()\`设置p的个数(P的最大物理个数为256个)
* P存在一个G的可运行队列(即将运行的goruntime)和一个G的自由队列(运行完的goruntime)
* 当用户创建一个goruntime时，首先会在P的自由G队列获取，没有获取到在创建，保证了G的复用

**2. P的状态**
* Pidle 当前P还未与任务M关联
* Prunning P已经和某个M关联
* Psyscall P和某个M关联中的G正在进行系统调用
* Pgcstop P需要停止调度(垃圾回收等，需要将所有P停止调度)
* Pdead P被遗弃(在用户调用\`runtime.GOMAXPROC()\`,多余的P就会进入这个状态)


### G-goruntime
**1. G的内容**
* 全局G列表，P和M类似
* 用户调用\`go\`只是一种语法糖，通知系统调用\`newproc\`，传入参数和方法

**2. 通过go新建一个协程，系统会干什么？**
* 参数是否合法
* 查找本地P的自由G列表，存在，使用这个G初始化函数，如果不存在则新建一个(重置G的状态和生成该G的ID)
* 将该G放入到本地P的runnext字段，如果该字段中有值，追加到本地P的队列最后，如果该队列已满，则会放入到调度器的G列表中
* 调度器以最快的方式让所有的G都完成(一轮调度)

**3. G的状态**
* Gidel 刚通过\`go\`语句新建，还未被分配
* Grunnable 当前G在可运行列表中等待运行
* Gsyscall 正在进行系统调用
* Gwaiting 正在等待
* Gdead 闲置状态(进入这个状态后，该G会进入M的自由列表)
* Gcopystack 当前G所在栈正在移动，(栈的伸缩)

### 核心元素的容器
**1. G、M和P的容器**
 中文名 | 源码中的名称| 作用域| 简要说明
---|---|---|---
全局M列表|\`runtime.allm\`|运行是系统|存放所有M的一个**单向链表**
全局P列表|\`runtime.allp\`|运行时系统|存放所有P的一个**数组**
全局G列表|\`rungtime.allg\`|运行时系统|存放所有G的一个**切片**
调度器空闲M列表|\`runtime.sched.midle\`|调度器|存放空闲M的一个**单向链表**
调度器空闲P列表|\`runtime.sched.pidle\`|调度器|存放空闲P的一个**数组**
调度器可运行G队列|\`runtime.sched.runqhead\`(头)和\`runtime.sched.runqhail\`(尾)|调度器|存放可运行的G**队列**
调度器的自由G列表|\`runtime.sched.gfreeStack\`和\`runtime.sched.gfreeNoStack\`|调度器|存放自由G**单向链表**
P的可运行G队列|\`runtime.p.runq\`|本地P|P的可运行P**队列**
P的自由G列表|\`runtime.p.gfree\`|本地P|P的自由G**单向链表**

### 调度器
`,
        b: `# Mysql的一些小操作
#### 优化导入和导出的效率
\`\`\`
[mysqld]
innodb_flush_log_at_trx_commit=0
innodb_log_buffer_size=8M
innodb_buffer_pool_size=2G
innodb_log_file_size=1024M

innodb_thread_concurrency=18
innodb_support_xa = 1
innodb_file_per_table = 1
innodb_file_format = Barracuda
interactive_timeout = 28800
wait_timeout = 28800
max_allowed_packet = 1G
\`\`\`

#### 更改mysql的编码方式

\`\`\`
[mysqld]
character-set-client-handshake = FALSE
character-set-server = utf8mb4
collation-server = utf8mb4_unicode_ci
init_connect='SET NAMES utf8mb4'
\`\`\`

\`\`\`
[client]
default-character-set=utf8mb4
\`\`\`
\`\`\`
[mysql]
default-character-set = utf8mb4
\`\`\`

#### 使用mysqldump极速导入导出
> 导出
\`\`\`
./mysqldump -u niucai --default-character-set=utf8mb4 -h rm-wz940wm1207cu508j.mysql.rds.aliyuncs.com -p niu_pp  > ./niu_pp.sql
\`\`\`

> 导入
\`\`\`
mysql -h 127.0.0.1 -P3307 -uroot -proot123
use cb8200
source /root/cb8200.sql
\`\`\`

#### 使用docker启动mysql
\`\`\`
docker run --restart=always --name mysql2 -v /data1/mysql/conf/:/etc/mysql/  -v /data1/mysql:/var/lib/mysql  --privileged=true -e MYSQL_ROOT_PASSWORD=root123 -p 3306:3306 -d mysql:5.6
\`\`\`

#### 查看是否命中缩影
\` SELECT * FROM \`user_operation\`  WHERE (operation = '1') AND (uid!='22031') AND (game_code = '5') AND (qi >='2018091') ORDER BY created desc\``
      };
    },
    components: {
      'vue-markdown': VueMarkdown
    },
    mounted() {
      this.$store.dispatch('GetOneBlogAPi', this.$route.params.id).catch((error) => {
        console.error(error);
        return error;
      });
      this.blog = this.$store.getters.getBlogDetail;
    },
    computed: {
      BlogDetail() {
        this.blog = this.$store.getters.getBlogDetail;
        return this.$store.getters.getBlogDetail;
      }
    },
    methods: {
      formateDate(date) {
        let dt = new Date(date * 1000);
        return dat(dt, 'yyyy-MM-dd hh:mm');
      }
    },
    watch: {
      '$route'(to, from) {
        this.$store.dispatch('GetOneBlogAPi', to.params.id);
      }
    }
    // activated() {
    //   this.$store.dispatch('GetOneBlogAPi', this.$route.params.id);
    // }
  };
</script>

<style lang="scss" scoped>
  /*.ct {*/
  /*padding-left: 5%;*/
  /*padding-right: 5%;*/
  /*padding-top: 20px;*/
  /*padding-bottom: 20px;*/
  /*}*/

  .tit {
    font-size: 20px;
    height: 30px;
  }

  .layer {
    width: 50px;
  }

  .tag {
    font-size: 14px;
    font-weight: 600;
  }

  /*.md-detail {*/
  /*line-height: 1.8;*/
  /*font-size: 12px;*/
  /*}*/
  .announce {
    margin-bottom: 20px;
    padding: 15px;
    font-size: 14px;
    font-weight: 500;
    color: #337ab7;
    word-wrap: normal;
    word-break: break-word !important;
    word-break: break-all;
    white-space: pre;
    overflow: auto;
    border-radius: 0;
    background: #f6f6f6;
    -webkit-text-size-adjust: none;
    display: block;
    line-height: 1.5;
    border: 1px solid #DADADA;
  }

</style>

