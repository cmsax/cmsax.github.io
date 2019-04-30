<template>
  <div class="main-container">
    <header>{{ title }}</header>
    <main>
      <ul class="list">
        <li v-for="(item, index) in list" :key="index">
          <a :href="item.link">
            <h3>{{ item.title }}</h3>
          </a>
          <p>{{ item.intro }}</p>
        </li>
      </ul>
      <ul class="social">
        <a :href="item.href" target="_blank" v-for="(item, index) in social" :key="index">
          <li>{{ item.title }}</li>
        </a>
      </ul>
    </main>
    <footer>
      &copy;{{ new Date().getFullYear() }} All Rights Reserved.
      <p class="beian">{{ icp + "号"}}</p> &nbsp; <p class="beian">{{ icp + "-1号"}}</p>
      <p class="beian">{{ beian }}</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      title: "Mingshi's Homepage",
      icp: "鄂ICP备17017753",
      beian: "鄂公安网备42010602001703",
      list: [
        {
          title: "Tech Blog",
          intro: "Stories about NLP, Quant, Linux and Deep Learning.",
          link: "/articles"
        },
        {
          title: "Essays",
          intro: "About everything else except coding.",
          link: "/essays"
        },
        {
          title: "Weibo Backup",
          intro: "Precious weibo posts that need to be harbored.",
          link: "/harbor"
        }
      ],
      social: [
        {
          title: "Email",
          href: "mailto:cmsax@live.com"
        },
        {
          title: "GitHub",
          href: "https://github.com/cmsax"
        },
        {
          title: "Weibo",
          href: "https://weibo.com?name=caonimaweibo."
        }
      ]
    };
  },
  methods: {},
  mounted: function() {}
};
</script>
<style>
body {
  background-color: black;
  padding: 0px 20px;
}
header {
  font-weight: 800;
  font-size: 24px;
  color: white;
  text-align: center;
  margin-bottom: 40px;
  text-shadow: 3px 3px 1px red;
}
.main-container {
  max-width: 500px;
  min-width: 250px;
  margin: 0 auto;
  text-align: center;
  margin-top: 12vh;
}
.title {
  font-size: 22px;
  font-weight: 800;
}
ul {
  padding: 0px;
  margin: 0px;
}
ul.list a {
  color: black;
  text-decoration: none;
}
ul.list a:hover {
  text-decoration: underline;
}
ul.list li:hover {
  box-shadow: 5px 6px 1px red;
}
ul.list li {
  background-color: white;
  box-shadow: 4px 5px 3px red;
  border-radius: 5px;
  padding: 20px;
  text-align: left;
  list-style: none;
  margin-bottom: 20px;
}
li h3 {
  font-size: 20px;
  font-weight: 800;
}
.list p {
  font-size: 16px;
  font-weight: 600;
  margin: 0px;
}
ul.social {
  text-align: center;
  list-style: none;
  margin-top: 20px;
}
.social li {
  display: inline;
  padding: 5px;
  background-color: white;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 800;
  margin: 0 10px;
}
.social a li {
  color: black;
  text-decoration: none;
  padding: 6px 12px;
}
footer {
  color: black;
  font-weight: 800;
  font-size: 12px;
  margin-top: 40px;
  text-shadow: 1px 1px 0px dimgrey;
}
footer p {
  color: black;
  font-size: 10px !important;
  opacity: 0.1;
}
footer p.beian {
  color: white;
  font-size: 8px !important;
  opacity: 0.4;
}
</style>
