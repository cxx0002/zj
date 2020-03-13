<template>
  <div class="album">
    <div v-if="token">
      <mt-header :title="title" class="header" fixed>
        <a slot="left" @click="back">
          <mt-button icon="back"></mt-button>
        </a>
      </mt-header>
      <div :class="type">
        <img :src="banner" alt class="banner" />
        <div v-for="(item,key) in list" :key="key">
          <div :class="item.type==1?'content':''" v-if="item.type==1">
            <div class="title font1" v-if="type=='type1'">{{item.title}}</div>
            <div class="title font2" v-if="type=='type2'">{{item.title}}</div>
            <div class="title font3" v-if="type=='type3'">{{item.title}}</div>
            <div class="detail">
              <div>
                <img src="../../assets/img/book.png" alt />
                <div class="product">
                  <p>我的老婆是冥王</p>
                  <p>东风啸</p>
                  <div>
                    <span>45万人气</span>
                    <span>留存95%</span>
                    <div class="btn">立即阅读</div>
                  </div>
                </div>
              </div>
              <div
                class="bookdetail"
              >【书籍简介】重生在封神大战之前的上古时代，李长寿成了一个小小的炼气士，没有什么气运加身，也不是什么注定的大劫之子，他只有一个想要长生不老的修仙梦。为了能在残酷的洪荒安身立命，他努力不沾因果，杀人必扬其灰，凡事谋而后动，从不轻易步入危险之中。藏底牌，修遁术，炼丹毒，掌神通，不动稳如老狗，一动石破天惊，动后悄声走人。 本来李长寿规划中，自己会一直躲在山中平安无事的修行成仙，直到有一年，他的老师父静极思动，又给他……收了个师妹回来……</div>
            </div>
          </div>

          <div :class="item.type==2?'content2':''" v-if="item.type==2">
            <div class="title font1" v-if="type=='type1'">{{item.title}}</div>
            <div class="title font2" v-if="type=='type2'">{{item.title}}</div>
            <div class="title font3" v-if="type=='type3'">{{item.title}}</div>
            <div class="detail">
              <div class="bookdetail" @click="toDetail">
                <img src="../../assets/img/book.png" alt />
                <span>我的老婆是冥王</span>
                <font>东风啸</font>
              </div>
              <div class="bookdetail" @click="toDetail">
                <img src="../../assets/img/book.png" alt />
                <span>我的老婆是冥王</span>
                <font>东风啸</font>
              </div>
              <div class="bookdetail" @click="toDetail">
                <img src="../../assets/img/book.png" alt />
                <span>我的老婆是冥王</span>
                <font>东风啸</font>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!token"></div>
  </div>
</template>
<script>
import Banner1 from "@/assets/img/banner1.png";
import Banner2 from "@/assets/img/banner2.png";
import Banner3 from "@/assets/img/banner3.png";
import Titlebg1 from "@/assets/img/titlebg1.png";
import { MessageBox } from "mint-ui";
export default {
  name: "Album",
  data() {
    return {
      banner: "",
      list: [
        {
          type: 1,
          title: "修仙觅长生",
          bookList: [123]
        },
        {
          type: 2,
          title: "女生专栏",
          bookList: [123]
        }
      ],
      titlebg1: Titlebg1,
      title: "测试标题",
      type: "type1",
      token: "111",
      supportFunctionList: []
    };
  },
  mounted() {
    this.$bridge.callhandlerAndroid(
      "td_js_function_headerBg",
      {
        background: "#ffffff"
      },
      function(responseData) {}
    );
    let that = this;
    setTimeout(() => {
      this.$bridge.callhandlerAndroid(
        "td_js_function_nativeInfo",
        {},
        function responseCallback(data) {
          that.supportFunctionList = JSON.parse(data).supportFunctionList;
          that.token = JSON.parse(data).header;
        }
      );
      if (that.token == "") {
        MessageBox({
          title: "提示",
          message: "当前版本不支持,请更新至最新版本",
          showCancelButton: false,
          showConfirmButton: false,
          closeOnClickModal: false
        });
      }
    }, 0);
    if (this.type == "type1") {
      this.banner = Banner1;
    } else if (this.type == "type2") {
      this.banner = Banner2;
    } else {
      this.banner = Banner3;
    }
  },
  methods: {
    toDetail() {
      this.$router.push({
        name: "Detail",
        query: {
          type: this.type,
          bookName: "我的老婆是冥王"
        }
      });
    },
    back() {
      // if (this.supportFunctionList.indexOf("td_js_function_exit") > -1) {
      //   this.$bridge.callhandlerAndroid("td_js_function_exit", {}, function(
      //     responseData
      //   ) {});
      // } else {
      //   MessageBox({
      //     title: "提示",
      //     message: "当前版本不支持，请更新至最新版本",
      //     showCancelButton: false,
      //     closeOnClickModal: false
      //   });
      // }
      if (this.type == "type1") {
        this.type = "type2";

        this.banner = Banner2;
      } else if (this.type == "type2") {
        this.type = "type3";

        this.banner = Banner3;
      } else {
        this.type = "type1";

        this.banner = Banner1;
      }
    }
  }
};
</script>
<style scoped>
.album {
  width: 100%;
  overflow-x: hidden;
}
.header {
  padding: 0 45px;
  background: #fff;
  height: 100px;
  line-height: 100px;
  font-size: 36px;
  font-weight: bold;
  color: rgba(0, 0, 0, 1);
}
.type1 {
  padding-top: 82px;
  background: #9cc8e2;
  padding-bottom: 100px;
}
.type1 .banner {
  width: 100%;
}
.type1 .content .title,
.type1 .content2 .title {
  background: url("../../assets/img/titlebg1.png");
  background-repeat: no-repeat;
  width: 333px;
  height: 83px;
  background-size: contain;
  margin: 0 auto;
  font-weight: 600;
  font-size: 32px;
  color: rgba(255, 255, 255, 1);
  font-family: "maobi";
  line-height: 100px;
  padding-left: 60px;
}
.type1 .content .detail {
  /* height: 668px; */
  margin: 58px 32px 92px;
  padding: 27px;
  background: #5c9cbd;
  border-radius: 8px;
}
.type1 .content .detail div:nth-of-type(1) {
  display: flex;
}
.type1 .content .detail div:nth-of-type(1) img {
  width: 178px;
  height: 237px;
}
.type1 .content .detail .product {
  display: flex;
  flex-direction: column;
}
.type1 .content .detail .product p:nth-of-type(1) {
  padding-top: 54px;
  padding-left: 23px;
  font-size: 32px;

  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 31px;
}
.type1 .content .detail .product p:nth-of-type(2) {
  padding-top: 22px;
  padding-left: 24px;
  font-size: 26px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
.type1 .content .detail .product > div {
  padding-left: 20px;
  padding-top: 40px;
}
 .content .detail .product div span{

  padding: 8px 10px !important;
 }
.type1 .content .detail .product div span {
  margin-top: 16px;
  font-size: 22px;
  box-sizing: border-box;
  font-weight: 500;
  color: rgba(15, 96, 138, 1);
  border: 1px solid rgba(15, 96, 138, 1);
  opacity: 0.8;
  border-radius: 6px;
  margin-right: 11px;
}
.type1 .content .detail .product div .btn {
  height: 59px;
  background: rgba(15, 96, 138, 1);
  border-radius: 12px;
  line-height: 59px;
  font-size: 30px;
  font-weight: 500;
  color: #fff;
  padding: 0 16px;
  position: absolute;
  right: 54px;
}
.type1 .content .bookdetail {
  padding-top: 44px;
  padding-bottom: 40px;
  font-size: 26px;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 36px;
  text-align: justify;
}
.type1 .content2 .detail {
  margin: 58px 32px 92px;
  padding: 27px;
  background: #5c9cbd;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  text-align: center;
}
.type1 .content2 .detail .bookdetail {
  display: flex;
  flex-direction: column;
  text-align: left;
}
.type1 .content2 .detail .bookdetail img {
  width: 178px;
  height: 237px;
  margin: 0 auto;
}
.type1 .content2 .detail .bookdetail span {
  font-size: 30px;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  padding: 23px 10px 54px;
  text-align: left;
  line-height: 34px;
}
.type1 .content2 .detail .bookdetail font {
  font-size: 26px;
  font-weight: 300;
  color: rgba(255, 255, 255, 1);
  line-height: 34px;
}
.content2 .detail .bookdetail font {
  padding: 0 18px !important;
}

/*  类型2 */
.type2 {
  padding-top: 82px;
  background: #ffefae;
  padding-bottom: 100px;
}
.type2 .banner {
  width: 100%;
}
.type2 .content .title,
.type2 .content2 .title {
  background: url("../../assets/img/titlebg2.png");
  background-repeat: no-repeat;
  width: 333px;
  height: 83px;
  background-size: contain;
  margin: 0 auto;
  font-weight: 600;
  font-size: 34px;
  color: rgba(255, 255, 255, 1);
  /* font-family: "楷体"; */
  line-height: 75px;
  /* padding-left: 68px; */
  text-align: center;
}
.type2 .content .detail {
  /* height: 668px; */
  margin: 58px 32px 92px;
  padding: 27px;
  background: #fbbd4e;
  border-radius: 8px;
}
.type2 .content .detail div:nth-of-type(1) {
  display: flex;
}
.type2 .content .detail div:nth-of-type(1) img {
  width: 178px;
  height: 237px;
}
.type2 .content .detail .product {
  display: flex;
  flex-direction: column;
}
.type2 .content .detail .product p:nth-of-type(1) {
  padding-top: 54px;
  padding-left: 23px;
  font-size: 32px;

  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 31px;
}
.type2 .content .detail .product p:nth-of-type(2) {
  padding-top: 22px;
  padding-left: 24px;
  font-size: 26px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
.type2 .content .detail .product > div {
  padding-left: 20px;
  padding-top: 40px;
}

.type2 .content .detail .product div span {
  margin-top: 16px;
  /* height: 35px;
  padding: 0 8px;
  line-height: 32px; */
  font-size: 22px;
  font-weight: 500;
  color: #fd5913;
  border: 1px solid #fd5913;
  opacity: 0.9;
  border-radius: 6px;
  margin-right: 11px;
}
.type2 .content .detail .product div .btn {
  height: 59px;
  background: #f36f05;
  border-radius: 12px;
  line-height: 59px;
  font-size: 30px;

  font-weight: 500;
  color: #fff;
  padding: 0 16px;
  position: absolute;
  right: 54px;
}
.type2 .content .bookdetail {
  padding-top: 44px;
  font-size: 26px;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 36px;
  text-align: justify;
}
.type2 .content2 .detail {
  margin: 58px 32px 92px;
  padding: 27px;
  background: #fbbd4e;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  text-align: center;
}
.type2 .content2 .detail .bookdetail {
  display: flex;
  flex-direction: column;
  text-align: left;
}
.type2 .content2 .detail .bookdetail img {
  width: 178px;
  height: 237px;
  margin: 0 auto;
}
.type2 .content2 .detail .bookdetail span {
  font-size: 30px;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  padding: 23px 10px 54px;
  text-align: left;
  line-height: 34px;
}
.type2 .content2 .detail .bookdetail font {
  font-size: 26px;
  font-weight: 300;
  color: rgba(255, 255, 255, 1);
  line-height: 34px;
  padding: 0 10px;
}

/*  类型2 */
.type3 {
  padding-top: 82px;
  background: #fee9b2;
  padding-bottom: 100px;
}
.type3 .banner {
  width: 100%;
}
.type3 .content .title,
.type3 .content2 .title {
  background: url("../../assets/img/titlebg3.png");
  background-position: center;
  background-repeat: no-repeat;
  width: 333px;
  height: 83px;
  background-size: contain;
  margin: 0 auto;
  font-size: 40px;
  font-weight: bold;
  color: rgba(200, 133, 73, 1);
  font-family: "楷体";
  line-height: 70px;
  /* padding-left: 68px; */
  text-align: center;
}
.type3 .content .detail {
  /* height: 668px; */
  margin: 58px 32px 92px;
  padding: 27px;
  background: #f7af75;
  border-radius: 8px;
}
.type3 .content .detail div:nth-of-type(1) {
  display: flex;
}
.type3 .content .detail div:nth-of-type(1) img {
  width: 178px;
  height: 237px;
}
.type3 .content .detail .product {
  display: flex;
  flex-direction: column;
}
.type3 .content .detail .product p:nth-of-type(1) {
  padding-top: 54px;
  padding-left: 23px;
  font-size: 32px;

  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 31px;
}
.type3 .content .detail .product p:nth-of-type(2) {
  padding-top: 22px;
  padding-left: 24px;
  font-size: 26px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
.type3 .content .detail .product > div {
  padding-left: 20px;
  padding-top: 40px;
}
.type3 .content .detail .product div span {
  margin-top: 16px;
  /* height: 35px;
  line-height: 32px;
  padding: 0 8px; */
  font-size: 22px;
  font-weight: 500;
  color: #cd3b14;
  border: 1px solid #94170b;
  opacity: 0.8;
  border-radius: 6px;
  margin-right: 11px;
}
.type3 .content .detail .product div .btn {
  height: 59px;
  background: #94170b;
  border-radius: 12px;
  line-height: 59px;
  font-size: 30px;
  font-weight: 500;
  color: #fff;
  padding: 0 16px;
  position: absolute;
  right: 54px;
}
.type3 .content .bookdetail {
  padding-top: 44px;
  font-size: 26px;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 36px;
  text-align: justify;
}
.type3 .content2 .detail {
  margin: 58px 32px 92px;
  padding: 27px;
  background: #f7af75;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  text-align: center;
}
.type3 .content2 .detail .bookdetail {
  display: flex;
  flex-direction: column;
  text-align: left;
}
.type3 .content2 .detail .bookdetail img {
  width: 178px;
  height: 237px;
  margin: 0 auto;
}
.type3 .content2 .detail .bookdetail span {
  font-size: 30px;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  padding: 23px 10px 54px;
  text-align: left;
  line-height: 34px;
}
.type3 .content2 .detail .bookdetail font {
  font-size: 26px;
  font-weight: 300;
  color: rgba(255, 255, 255, 1);
  line-height: 34px;
  padding: 0 10px;
}
</style>