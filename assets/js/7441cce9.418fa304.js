(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[180],{3905:function(e,t,o){"use strict";o.d(t,{Zo:function(){return p},kt:function(){return d}});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(o),d=n,m=c["".concat(l,".").concat(d)]||c[d]||h[d]||a;return o?r.createElement(m,i(i({ref:t},p),{},{components:o})):r.createElement(m,i({ref:t},p))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<a;u++)i[u]=o[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}c.displayName="MDXCreateElement"},33803:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var r=o(74034),n=o(79973),a=(o(67294),o(3905)),i={slug:"starting-an-open-source-project-with-no-corporate-funding",title:"Starting an Open Source Project with No Corporate Backing with Ben Gubler",author:"MJ Amartaivan",author_title:"Co-Founder and CEO at Erxes Inc",author_image_url:"https://erxes.io/static/images/team/square/mend-orshikh.jpg",tags:["javascript","open source"]},s={permalink:"/interviews/starting-an-open-source-project-with-no-corporate-funding",source:"@site/interviews/starting-an-open-source-project-with-no-corporate-funding.md",title:"Starting an Open Source Project with No Corporate Backing with Ben Gubler",description:"At Erxes, we\u2019re obsessed with helping open source projects grow. We do this in a couple of different ways. First, we help open source projects grow through the use of our own open source marketing platform.",date:"2022-08-05T06:54:16.250Z",formattedDate:"August 5, 2022",tags:[{label:"javascript",permalink:"/interviews/tags/javascript"},{label:"open source",permalink:"/interviews/tags/open-source"}],readingTime:7.455,truncated:!0,nextItem:{title:"Having Targeted Goals in Open Source with Diana Chen",permalink:"/interviews/targeted-goals-for-growth-in-open-source"}},l=[{value:"The Interview",id:"the-interview",children:[]}],u={toc:l};function p(e){var t=e.components,o=(0,n.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"At Erxes, we\u2019re obsessed with helping open source projects grow. We do this in a couple of different ways. First, we help open source projects grow through the use of our ",(0,a.kt)("a",{parentName:"p",href:"https://erxes.io/"},"own open source marketing platform"),"."),(0,a.kt)("p",null,"Secondly, we work hard to educate open source project founders and contributors on a wide range of topics relating to marketing open source projects. From time to time, we interview leaders in the open source space for ",(0,a.kt)("a",{parentName:"p",href:"https://erxes.io/blog/"},"our blog"),", about their experiences managing and scaling their projects."),(0,a.kt)("p",null,"Today, Erxes had the opportunity to chat with Ben Gubler, the founder of ",(0,a.kt)("a",{parentName:"p",href:"https://squirrelly.js.org/"},"Squirrelly"),", about his experiences scaling his early stage open source project!"),(0,a.kt)("p",null,"Let\u2019s jump in and learn about Ben\u2019s journey so far!"),(0,a.kt)("h3",{id:"the-interview"},"The Interview"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://erxes.io/blog_wp/wp-content/uploads/2020/02/squirrelly-ben-gubler.png",alt:"Alt text"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Hello Ben and thank you for taking the time to chat with Erxes today about your project Squirrelly. This project is quite early stage still and in fact you\u2019ve just recently launched the most recent version of Squirrelly. Can you get this interview started by telling us what pushed you to create an open source project?")),(0,a.kt)("p",null,"My journey with Squirrelly actually began when I was learning how to use Express.js, and reading lots of articles and tutorials online. One article that I read explained how to create a simple template engine for Express, using a simple regular expression replace. I followed the steps in the tutorial, then modified the code to add a few features."),(0,a.kt)("p",null,"It was then that I really realized I had created something real and functional, and I decided to publish my package on NPM. As a programmer, I wanted to share what I had created with others, and I figured that to go open-source was the best way."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Obviously the decision to go open source didn\u2019t take place in a silo. I\u2019m sure you\u2019ve drawn considerable inspiration from other open source projects. In your opinion, what are some of the open source projects who you plan to model your growth after? What is it about their ",(0,a.kt)("a",{parentName:"strong",href:"https://erxes.io/growthHacking"},"growth strategies")," that you find most interesting?")),(0,a.kt)("p",null,"I\u2019ve always been especially interested in open-source projects started or maintained by just one person. I\u2019ve also focused on open-source template engine libraries, because that\u2019s what I\u2019m creating. Two of the open-source projects I really admire and would like to emulate are template engines: ",(0,a.kt)("a",{parentName:"p",href:"https://olado.github.io/doT/index.html"},"doT.js")," and ",(0,a.kt)("a",{parentName:"p",href:"https://ejs.co/"},"EJS"),". The projects are both fairly simple and were started by a single person, without corporate backing. Due to good publicity and the fact that developers who used them enjoyed the experience, they\u2019ve increased significantly in popularity."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Let\u2019s talk about your own growth for a moment. First, it seems like you\u2019re still quite focused on product development. What steps are you taking to get others involved in development? How are you going about getting word out for contributors? What method has proven most successful for you so far?"),"."),(0,a.kt)("p",null,"Actually, one of the best ways to get contributors and publicity for my project was to make it really easy for first-time open-source contributors to contribute. During Hacktoberfest of 2018, I used a GitHub app called first-timers-bot and listed a lot of issues that only first-time contributors were allowed to create pull requests for. This not only gave people the opportunity to contribute to open source for the first time, it drove traffic to Squirrelly and built contributor interest."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"I see a big spike in development in mid 2018, but then it slowed down. What activities were you engaged in during that time to gain such a big spike in interest?")),(0,a.kt)("p",null,"During the summer of 2018, I was out of school and finally had some free time. Squirrelly was my big project, and I really wanted to focus on developing it further. Then, after a major rewrite, I started to run performance benchmarks. I figured out that Squirrelly was really, really fast, faster than the other template engines out there. That gave me motivation and some confidence, and drove me to optimize, develop, and publicize Squirrelly even more."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"What growth strategies do you plan to use to help Squirrelly gain more attention after your newest release?")),(0,a.kt)("p",null,"One strategy that\u2019s brought me a lot of success in the past is writing publicity articles. I wrote an article for Hacker Noon that created a lot of interest in the last version of Squirrelly, and I\u2019m planning to do the same this year. I\u2019m also planning to post on Reddit and Hacker News, and write some tutorials using my product."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"What would you say are the three biggest growth roadblocks you face and how do you plan to overcome them?")),(0,a.kt)("p",null,"I would say the biggest roadblock to Squirrelly\u2019s growth is creating interest even with the number of JavaScript template engines out there. I recently saw a ",(0,a.kt)("a",{parentName:"p",href:"https://upload.wikimedia.org/wikipedia/commons/1/1b/Linux_Distribution_Timeline.svg"},"funny image")," that showed the number of Linux distributions available and template engines are very similar. Since you can make a simple template engine simply, lots of people create hobby template engines and publish them to ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"NPM"),"."),(0,a.kt)("p",null,"The second big roadblock is that technology is changing. People are switching from using template engines to using frameworks like ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/"},"React")," and ",(0,a.kt)("a",{parentName:"p",href:"https://vuejs.org/"},"Vue"),". Though there are still a lot of use-cases for template engines (generating non-HTML content, for example) \u2014 I think template engine use is probably generally declining."),(0,a.kt)("p",null,"The last big roadblock is time. I could spend all day writing documentation and tutorials, but I\u2019m a busy student with a lot of other commitments."),(0,a.kt)("p",null,"I think the solution to all of the problems above is wise publicity and driving contributions. If I focus on writing good articles about Squirrelly that showcase its strengths, people will be more likely to choose to use Squirrelly for future projects. Similarly, as I gain more contributors, community engagement will increase and the project will start to spread by word of mouth."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Are you thinking about monetization at all? What are some different monetization models you\u2019re exploring for Squirrelly?")),(0,a.kt)("p",null,"Monetization is something I\u2019ve been thinking quite a lot about, and I\u2019ve mainly been exploring three monetization models. The first is to put ads \u2014 in my case, through CodeFund \u2014 on the documentation website, and I\u2019ve already done that. The problem is that ads require a certain amount of daily traffic to become lucrative, meaning my project would have to become quite popular for ads to fund it."),(0,a.kt)("p",null,"Another model is the paid support model \u2014 people could pay a one-time payment and get continued tech support for Squirrelly. The problem with this model is that I plan to give support ASAP anyway, and various time commitments make it impossible to ensure that I\u2019m always on call."),(0,a.kt)("p",null,"The last method of monetization is probably the most popular, and it\u2019s the user donation model. Projects use platforms like OpenCollective, Patreon, and Liberapay to allow those who use it to fund further development. I\u2019ve been exploring this one quite a bit and it\u2019s the one I think has the most potential to adequately fund my work. Unfortunately, most people and companies don\u2019t donate, meaning you have to have a large user base in order to fund."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"In your opinion, which projects in the open source community have the most interesting or unique monetization models? What do you find interesting about the monetization models they use? Are there any takeaways here as it applies to Squirrelly?")),(0,a.kt)("p",null,"Another template engine library, ",(0,a.kt)("a",{parentName:"p",href:"https://handlebarsjs.com/"},"Handlebars"),", sells swag like t-shirts and mugs. The great thing about selling merchandise is that it\u2019s not only profitable but it builds community spirit around your project. I\u2019d love to sell merchandise \u2014 maybe something like laptop stickers \u2014 sometime in the future."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Lastly, if you could go back in time and start Squirrelly over again, what are three things you would do differently and why?")),(0,a.kt)("p",null,"Well, the first thing I would do differently is to pick my tooling better. When I first created the Squirrelly, I had the entire program in a single file. As I learned more as a programmer, I moved the program to Webpack, using Mocha for tests. Currently, Squirrelly is written in TypeScript, uses ",(0,a.kt)("a",{parentName:"p",href:"https://rollupjs.org/guide/en/"},"Rollup")," as a bundler, ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/terser"},"Terser")," for minifying, and Jest for tests and coverage."),(0,a.kt)("p",null,"The second thing I\u2019d do is focus on writing good tests during development. I\u2019ve caught multiple bugs just by running tests and looking at code coverage, and it\u2019s saved me time in the long run and given me assurance."),(0,a.kt)("p",null,"The last thing I\u2019d do is be more confident, take more risks, reach out to people for feedback. What\u2019s the worst that could happen?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Thank you greatly for taking the time to chat with ",(0,a.kt)("a",{parentName:"strong",href:"https://erxes.io/"},"Erxes")," today Ben. We really appreciate it. Many of ",(0,a.kt)("a",{parentName:"strong",href:"https://erxes.io/blog/"},"our blog")," readers are currently in the process of scaling their own open source projects, so insights like the ones you\u2019ve provided above, can help them get from where they are to where they want to be. To our blog readers, if you\u2019d like to learn more about Squirrelly, you can follow them on ",(0,a.kt)("a",{parentName:"strong",href:"https://github.com/squirrellyjs/squirrelly"},"GitHub")," or visit their ",(0,a.kt)("a",{parentName:"strong",href:"https://squirrelly.js.org/"},"website here"),".")))}p.isMDXComponent=!0}}]);