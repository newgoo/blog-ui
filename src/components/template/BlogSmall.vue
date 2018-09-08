<template>
  <div style="background:#eee;padding: 20px">
    <Card :bordered="false">
      <div slot="title">
        <Row>
          <Col span="20">
            <router-link :to="{name:'detail',params:{id: blog.id}}">
              <p>{{blog.title}}</p>
            </router-link>
            <i class="dt">{{blog.author}}在{{formateDate(blog.add_time)}}发布</i>
          </Col>
          <Col span="4">
            <div class="tit">
              <i class="fa fa-eye" aria-hidden="true"></i>
              <i>{{blog.views}}</i>
            </div>
          </Col>
        </Row>
      </div>
      <p>
        <!--<vue-markdown v-highlight>{{blog.introduce}}</vue-markdown>-->
        {{blog.introduce}}
      </p>
    </Card>
  </div>

</template>

<script>
  // import VueMarkdown from 'vue-markdown';
  import {dat} from '../../util/date';

  export default {
    props: ['blog'],
    // components: {
    //   'vue-markdown': VueMarkdown
    // },
    methods: {
      formateDate(date) {
        let dt = new Date(date * 1000);
        return dat(dt, 'yyyy-MM-dd hh:mm');
      }
    }
  };
</script>

<style lang="scss" scoped>
  .tit {
    height: 30px;
    text-align: right;
    line-height: 30px;
  }

  .dt {
    font-size: 12px;
  }
</style>
