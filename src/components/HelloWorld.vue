<template>
  <div @mousemove="bgTransform" @keyup.up='keyUp' @keyup.down="keyDown">
    <div v-if="isShowMsg" class="hello" :style="currentItem.specialTheme">
      <div class="hello-msg">
        {{ msg }}
      </div>
    </div>
    <div v-if="shouldSuggest" class="suggestion">
      <span :style="currentItem.specialTheme">
        <a target="_blank" href="https://www.mozilla.org">Try FireFox!</a>
      </span>
    </div>
    <div class="header">
        <div class="logo" @mouseover="showMsg" @mouseout="hideMsg">
            <img :src="avatar" alt="">
        </div>
        <div style="padding-top: 11px;" class="right">
            UNOIOU
        </div>
    </div>
    <div class="container background">
          <div :style="currentItem.specialStyleClass" style="max-width: inherit;">
            <img :style="{transform: 'translate(' + translateBg.x + 'px,' + translateBg.y + 'px)'}" :src="currentItem.img" alt="">
        </div>
    </div>
    <div class="main row">
        <div class="row main-center">
            <div class="col-md-3">
                <div :style="currentItem.specialTheme" class="red-box">
                    <small>{{left.span}}</small>
                    <h2>{{ currentItem.title }}</h2>
                    <ul>
                      <li v-for="(item, index) in left.list" :key="index">
                        <a @click="slipItem" :data-index='index' href="javascript:">{{ item.label }}</a>
                      </li>
                    </ul>
                    <small>
                      <a :href="'mailto:'+left.email">{{left.bottom}}</a>
                      <a class="padding-left" :href="weibo" target="blank">follow me</a>
                      <a class="padding-left" v-if="currentItem.donate" :href="currentItem.donate" target="blank">donate</a>
                    </small>
                </div>
            </div>
            <div class="col-md-3 offset-md-6">
                <small :style="currentItem.specialTheme">{{currentItem.label}}</small>
                <h1>{{currentItem.intro}}</h1>
                <h3>{{currentItem.extra}}</h3>
            </div>
        </div>
    </div>

    <footer class="d-none d-lg-block">
        <div class="footer hidden-sm hidden-xs">
            <ul class="left">
                <li>Copyright &copy; 2018 UNOIOU.COM All rights reserved</li>
            </ul>
            <ul class="right">
                <li>ICP备案：{{icp}}</li>
            </ul>
        </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      icp: "鄂ICP备17017753号",
      theme: "",
      shouldSuggest: false,
      isShowMsg: false,
      msg: "",
      translateBg: { x: 0, y: 0 },
      avatar: "http://cdn.unoiou.com/unoavatar.jpg",
      weibo: "https://weibo.com/cmsax",
      imgSrc: "http://cdn.unoiou.com/unobg.jpg",
      currentIndex: 0,
      left: {
        list: [
          {
            label: "about",
            img: "http://cdn.unoiou.com/unobg.jpg",
            intro: "I'm a graduate student majoring in Computer Science.",
            extra: "Graduated in 2021.",
            title: "Hey! What's up!"
          },
          {
            label: "code",
            img: "http://cdn.unoiou.com/201810193.jpg",
            intro:
              "I specialize in Web development with .NET, Python, Golang and Front-End languages.",
            extra: "",
            title: "It's about thinking."
          },
          {
            label: "work",
            img: "http://cdn.unoiou.com/201810043.jpg",
            intro:
              "I'm a full-stack web developer, besides, I write some Websites / Wechat app as part-time job.",
            extra: "Are you in demand?",
            title: "build everything."
          },
          {
            label: "research",
            img: "http://cdn.unoiou.com/201809233.jpg",
            intro:
              "My general research area is Natural Language Processing. My research interests includes Machine Comprehension, Semantic Analysis and Entity-Relation Extraction.",
            extra: "Wanna find out more? Just search with Microsft Research.",
            title: "never settle."
          },
          {
            label: "vision",
            img: "",
            intro:
              "Microsoft is my favorite company, its vision, 'Empower each person on this planet to achieve more', has inspired me a lot.",
            extra: "",
            title: "Build a better world together."
          },
          {
            label: "dreamlist",
            img: "http://cdn.unoiou.com/SurfaceHome_HL_ImagePanel_2_V1.png",
            specialStyleClass: {
              background: "linear-gradient(#85585b,#3a1f21)",
              paddingTop: "90px",
              transform: "translate3d(0px, -1px, 0px)",
              boxShadow:
                "rgba(0, 0, 0, 0.66) 0px 19px 43px, rgba(0, 0, 0, 0.54) 0px 4px 11px"
            },
            specialTheme: {
              background: "#515151 none repeat scroll 0% 0%"
            },
            noBoxShadow: true,
            intro:
              "Surface Laptop, MSDN Subscription and latest version of Xbox.",
            extra: "",
            donate: "http://cdn.unoiou.com/donate.png",
            title: "Productivity & Creativity."
          }
        ],
        title: "Hey! What's up!",
        span: "unoiou.com",
        bottom: "contact me",
        email: "i@unoiou.com"
      }
    };
  },
  props: ["idioms"],
  computed: {
    currentItem: function() {
      return this.left.list[this.currentIndex];
    }
  },
  methods: {
    slipItem: function(event) {
      this.currentIndex = event.target.attributes["data-index"].value;
    },
    getMousePos: function(event) {
      var e = event || window.event;
      var scrollX =
        document.documentElement.scrollLeft || document.body.scrollLeft;
      var scrollY =
        document.documentElement.scrollTop || document.body.scrollTop;
      var x = e.pageX || e.clientX + scrollX;
      var y = e.pageY || e.clientY + scrollY;
      return {
        x: x,
        y: y
      };
    },
    bgTransform: function(e) {
      let p = this.getMousePos(e);
      this.translateBg = {
        x: (document.body.clientWidth / 2 - p.x) * 0.02,
        y: (document.body.clientHeight / 2 - p.y) * 0.02
      };
    },
    keyUp: function() {
      if (this.currentIndex > 0) {
        this.currentIndex -= 1;
      }
    },
    keyDown: function() {
      if (this.currentIndex < this.left.list.length - 1) {
        this.currentIndex += 1;
      }
    },
    showMsg: function() {
      this.msg = this.randomMsg();
      this.isShowMsg = true;
    },
    hideMsg: function() {
      this.isShowMsg = false;
    },
    randomMsg: function() {
      return this.idioms[Math.floor(Math.random() * this.idioms.length)];
      // return 23;
    }
  },
  mounted: function() {
    var MobileDetect = require("mobile-detect"),
      md = new MobileDetect(navigator.userAgent);
    if (md.phone()) {
      window.location.href = "http://blog.unoiou.com";
    } else if (navigator.userAgent.toLowerCase().indexOf("firefox") === -1) {
      this.shouldSuggest = true;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.suggestion {
  display: block;
  width: 100%;
  position: absolute;
  z-index: 99;
  top: 0px;
  text-align: center;
  transform: translateY(-35px);
  transition: all cubic-bezier(0.68, -0.55, 0.27, 1.55) 1s;
}
.suggestion:hover {
  transform: translateY(-4px);
}
.suggestion span {
  background-color: #f0360b;
  color: white;
  display: inline-block;
  padding: 10px 5px 10px 5px;
  border-radius: 0px 0px 8px 8px;
}
.suggestion span a {
  color: white;
  text-decoration: none;
}
.hello {
  position: absolute;
  top: 40px;
  left: 70px;
  padding: 0px 6px 1px 6px;
  border-radius: 0px 10px 10px 10px;
  color: white;
  line-height: 30px;
  background-color: #f0360b;
  transition: all ease 0.4s;
  font-family: 宋体, SimSun;
  z-index: 2;
}

.padding-left {
  padding-left: 30px;
}
.offset-md-6 small {
  text-transform: uppercase;
}
footer {
  position: absolute;
  bottom: 0px;
  display: block;
  padding: 20px 30px 10px 30px;
  width: 100vw;
  color: gray;
  font-size: 12px;
  font-weight: 200;
}

footer ul {
  list-style: none;
  margin: 0px;
  padding: 0px;
}

ul.left {
  float: left;
}

ul.right {
  float: right;
}

.red-box {
  min-height: 300px;
  background-color: #f0360b;
  color: white;
  padding: 20px 20px 20px 100px;
  min-width: 400px;
}

.red-box small {
  font-size: 80%;
  font-weight: 200;
  opacity: 0.8;
  text-transform: uppercase;
}

.red-box h2 {
  text-transform: uppercase;
  line-height: 26px;
  font-weight: 200;
  opacity: 0.9;
}

.red-box li {
  line-height: 21px;
}

.red-box ul {
  margin: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
  list-style: none;
  padding: 0px;
  font-size: 24px;
  font-weight: 200;
  text-transform: uppercase;
  opacity: 0.9;
  margin-top: 90px;
  margin-bottom: 30px;
}

.main {
  position: absolute;
  padding: 0px 100px;
  width: 100%;
  top: 0px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
}

.row.main-center {
  max-height: 300px;
}

.col-md-3 {
  padding: 0px;
}

.background {
  z-index: -1;
  padding: 0px;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.background img {
  max-width: inherit;
}

.offset-md-6 {
  min-height: 300px;
  padding: 20px 0px 20px 0px;
  min-width: 200px;
}

.offset-md-6 h1 {
  font-size: 30px;
  line-height: 33px !important;
  margin: 0px !important;
  /* text-transform: uppercase; */
  font-weight: 200;
}

.offset-md-6 h3 {
  margin-top: 20px;
  font-weight: 200;
  font-size: 20px;
}

.header {
  position: absolute;
  width: 100vw;
  padding: 10px 30px;
  font-size: 12px;
  font-weight: 200;
  color: gray;
  display: flex;
  justify-content: space-between;
  z-index: 2;
}

.logo {
  width: 40px;
  height: 40px;
}

.logo img {
  width: inherit;
  height: inherit;
  border-radius: 50%;
  transition: all cubic-bezier(0.8, 0.01, 0.13, 1) 0.1s;
}

.logo img:hover {
  /* box-shadow: rgba(0, 0, 0, 0.66) 0px 19px 43px,
    rgba(0, 0, 0, 0.54) 0px 4px 11px; */
  -moz-transform: scaleX(-1);
  -webkit-transform: scaleX(-1);
  -o-transform: scaleX(-1);
  transform: scaleX(-1);
  filter: FlipH();
}

.red-box a {
  color: white;
  text-decoration: none;
}

.red-box a:hover {
  font-weight: 400;
}

.offset-md-6 small {
  background: #f0360b;
  color: white;
}
</style>
