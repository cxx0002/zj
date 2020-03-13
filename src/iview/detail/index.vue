<template>
  <div class="detail">
    <mt-header title="书籍详情" class="header" fixed>
      <a slot="left" @click="back">
        <mt-button icon="back"></mt-button>
      </a>
    </mt-header>
    <div :class="type">
      <div class="contain">
        <div class="box">
          <img src="../../assets/img/book.png" alt />
          <div class="product">
            <p>我的老婆是冥王</p>
            <p>东风啸</p>
            <div>
              <span>45万人气</span>
              <span>留存95%</span>
            </div>
          </div>
        </div>
        <div
          class="bookdetail"
        >【书籍简介】重生在封神大战之前的上古时代，李长寿成了一个小小的炼气士，没有什么气运加身，也不是什么注定的大劫之子，他只有一个想要长生不老的修仙梦。为了能在残酷的洪荒安身立命，他努力不沾因果，杀人必扬其灰，凡事谋而后动，从不轻易步入危险之中。藏底牌，修遁术，炼丹毒，掌神通，不动稳如老狗，一动石破天惊，动后悄声走人。 本来李长寿规划中，自己会一直躲在山中平安无事的修行成仙，直到有一年，他的老师父静极思动，又给他……收了个师妹回来……</div>
      </div>
      <div class="footer">
        <div v-if="flag" @click="flag=!flag">加入书架</div>
        <div v-else class="yet"  @click="flag=!flag">已加入书架</div>
        <div>立即阅读</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        flag:true,
      title: "",
      type: ""
    };
  },
  mounted() {
    this.title = this.$route.query.bookName;
    this.type = this.$route.query.type;
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped>
.detail {
  width: 100%;
  height: 100%;
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
.bookdetail {
  font-size: 26px;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 36px;
  padding-top: 48px;
  text-align: justify;
}

.type1 {
  background: #99c9e2;
  width: 100%;
  height: 100%;
  padding-top: 100px;
}
.type1 img {
  width: 178px;
  height: 237px;
}
.type1 .contain {
  margin: 38px 32px;
  padding: 29px 29px 105px;
  background: #5c9cbd;
  border-radius: 8px;
}
.type1 .box {
  display: flex;
}
.type1 .box .product {
  display: flex;
  flex-direction: column;
}
.type1 .box .product p:nth-of-type(1) {
  padding-top: 54px;
  padding-left: 23px;
  font-size: 32px;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 31px;
}
.type1 .box .product p:nth-of-type(2) {
  padding-top: 22px;
  padding-left: 24px;
  font-size: 26px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
.type1 .box .product > div {
  padding-left: 20px;
  padding-top: 40px;
}
.type1 .box .product div span {
  margin-top: 16px;
  height: 35px;
  line-height: 35px;
  padding: 4px 7px;
  font-size: 22px;
  font-weight: 500;
  color: #0f608a;
  border:1Px solid rgba(15, 96, 138, 1);
  opacity: 0.9;
  border-radius: 6px;
  margin-right: 11px;
}

.type1 .footer {
  position: absolute;
  bottom: 86px;
  left: 34px;
  right: 34px;
  display: flex;
  justify-content: space-around;
}
.type1 .footer div {
  width: 296px;
  height: 82px;
  background: rgba(15, 96, 138, 1);
  border-radius: 12px;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 78px;
  font-size: 32px;
  text-align: center;
}
/* 类型2 */

.type2 {
  background: #fff0aa;
  width: 100%;
  height: 100%;
  padding-top: 100px;
}
.type2 img {
  width: 178px;
  height: 237px;
}
.type2 .contain {
  margin: 38px 32px;
  padding: 29px 29px 105px;
  background: #fbbd4e;
  border-radius: 8px;
}
.type2 .box {
  display: flex;
}
.type2 .box .product {
  display: flex;
  flex-direction: column;
}
.type2 .box .product p:nth-of-type(1) {
  padding-top: 54px;
  padding-left: 23px;
  font-size: 32px;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 31px;
}
.type2 .box .product p:nth-of-type(2) {
  padding-top: 22px;
  padding-left: 24px;
  font-size: 26px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
.type2 .box .product > div {
  padding-left: 20px;
  padding-top: 40px;
}
.type2 .box .product div span {
  margin-top: 16px;
  height: 35px;
  line-height: 35px;
  padding: 4px 7px;
  font-size: 22px;
  font-weight: 500;
  color: #FD5913;
  border:1Px solid #FD5913;
  opacity: 0.8;
  border-radius: 6px;
  margin-right: 11px;
}

.type2 .footer {
  position: absolute;
  bottom: 86px;
  left: 34px;
  right: 34px;
  display: flex;
  justify-content: space-around;
}
.type2 .footer div {
  width: 296px;
  height: 82px;
  background: #f36f05;
  border-radius: 12px;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 78px;
  font-size: 32px;
  text-align: center;
}

/* 类型3 */

.type3 {
  background: #fceab2;
  width: 100%;
  height: 100%;
  padding-top: 100px;
}
.type3 img {
  width: 178px;
  height: 237px;
}
.type3 .contain {
  margin: 38px 32px;
  padding: 29px 29px 105px;
  background: #f6b072;
  border-radius: 8px;
}
.type3 .box {
  display: flex;
}
.type3 .box .product {
  display: flex;
  flex-direction: column;
}
.type3 .box .product p:nth-of-type(1) {
  padding-top: 54px;
  padding-left: 23px;
  font-size: 32px;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 31px;
}
.type3 .box .product p:nth-of-type(2) {
  padding-top: 22px;
  padding-left: 24px;
  font-size: 26px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
.type3 .box .product > div {
  padding-left: 20px;
  padding-top: 40px;
}
.type3 .box .product div span {
  margin-top: 16px;
  height: 35px;
  line-height: 35px;
  padding: 4px 7px;
  font-size: 22px;
  font-weight: 500;
  color: #CD3B14;
  border:1Px solid #94170B;
  opacity: 0.9;
  border-radius: 6px;
  margin-right: 11px;
}

.type3 .footer {
  position: absolute;
  bottom: 86px;
  left: 34px;
  right: 34px;
  display: flex;
  justify-content: space-around;
}
.type3 .footer div {
  width: 296px;
  height: 82px;
  background: rgba(148, 23, 11, 1);
  border-radius: 12px;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 78px;
  font-size: 32px;
  text-align: center;
}
.type1 .yet{
    
background:rgba(137,178,200,1) !important;

color:rgba(45,129,172,1) !important;
}
.type2 .yet{
    
background:#E9D271 !important;

color:#E2863C!important;
}
.type3 .yet{
    
background:rgba(243,221,148,1) !important;

color:#CD6046 !important;
}
</style>