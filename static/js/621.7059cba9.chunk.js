"use strict";(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[621],{7621:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var r=n(2791),i=n(1523),o=n(3289),a=n(184),s=function(e){var t=e.data;return(0,a.jsx)("article",{className:"degree-container",children:(0,a.jsxs)("header",{children:[(0,a.jsx)("h4",{className:"degree",children:t.degree}),(0,a.jsxs)("p",{className:"school",children:[(0,a.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},c=function(e){var t=e.data;return(0,a.jsxs)("div",{className:"education",children:[(0,a.jsx)("div",{className:"link-to",id:"education"}),(0,a.jsx)("div",{className:"title",children:(0,a.jsx)("h3",{children:"Education"})}),t.map((function(e){return(0,a.jsx)(s,{data:e},e.school)}))]})};c.defaultProps={data:[]};var l=c,u=function(e){var t=e.data;return(0,a.jsxs)("article",{className:"jobs-container",children:[(0,a.jsxs)("header",{children:[(0,a.jsxs)("h4",{children:[(0,a.jsx)("a",{href:t.link,children:t.company})," - ",t.position]}),(0,a.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),(0,a.jsx)("ul",{className:"points",children:t.points.map((function(e){return(0,a.jsx)("li",{children:e},e)}))})]})},d=function(e){var t=e.data;return(0,a.jsxs)("div",{className:"experience",children:[(0,a.jsx)("div",{className:"link-to",id:"experience"}),(0,a.jsx)("div",{className:"title",children:(0,a.jsx)("h3",{children:"Experience"})}),t.map((function(e){return(0,a.jsx)(u,{data:e},e.company)}))]})};d.defaultProps={data:[]};var m=d;function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=n(9611);function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function g(e,t){if(t&&("object"===f(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function b(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var i=h(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return g(this,n)}}var v=n(4942),j=n(1413),x=function(e){var t=e.handleClick,n=e.active,r=e.label;return(0,a.jsx)("button",{className:"skillbutton ".concat(n[r]?"skillbutton-active":""),type:"button",onClick:function(){return t(r)},children:r})},k=function(e){var t=e.data,n=e.categories,r=t.category,i=t.competency,o=t.title,s={background:n.filter((function(e){return r.includes(e.name)})).map((function(e){return e.color}))[0]},c=(0,j.Z)((0,j.Z)({},s),{},{width:"".concat(String(Math.min(100,Math.max(i/5*100,0))),"%")});return(0,a.jsxs)("div",{className:"skillbar clearfix",children:[(0,a.jsx)("div",{className:"skillbar-title",style:s,children:(0,a.jsx)("span",{children:o})}),(0,a.jsx)("div",{className:"skillbar-bar",style:c}),(0,a.jsxs)("div",{className:"skill-bar-percent",children:[i," / 5"]})]})};k.defaultProps={categories:[]};var w=k,C=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&(0,y.Z)(e,t)}(o,e);var t,n,r,i=b(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=i.call(this,e)).handleChildClick=function(e){t.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,r){return(0,j.Z)((0,j.Z)({},n),{},(0,v.Z)({},r,e===r&&!t.buttons[r]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},t.state=function(e){var t=e.categories,n=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return(0,j.Z)((0,j.Z)({},e),{},(0,v.Z)({},t,!1))}),{All:!0}),skills:n}}({categories:e.categories,skills:e.skills}),t}return t=o,(n=[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All");return this.state.skills.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return(0,a.jsx)(w,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return(0,a.jsx)(x,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return(0,a.jsxs)("div",{className:"skills",children:[(0,a.jsx)("div",{className:"link-to",id:"skills"}),(0,a.jsxs)("div",{className:"title",children:[(0,a.jsx)("h3",{children:"Skills"}),(0,a.jsx)("p",{children:"Here is a honest overview of my skills from my perspective."})]}),(0,a.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),(0,a.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}])&&p(t.prototype,n),r&&p(t,r),Object.defineProperty(t,"prototype",{writable:!1}),o}(r.Component);C.defaultProps={skills:[],categories:[]};var S=C,N=function(e){var t=e.data,n=e.last;return(0,a.jsxs)("li",{className:"course-container",children:[(0,a.jsxs)("a",{href:t.link,children:[(0,a.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),(0,a.jsx)("p",{className:"course-name",children:t.title})]}),!n&&(0,a.jsx)("div",{className:"course-dot",children:(0,a.jsx)("p",{className:"course-name",children:" \u2022"})})]})};N.defaultProps={last:!1};var P=N,L=function(e){return e.sort((function(e,t){var n=0;return e.university>t.university?n=-1:e.university<t.university||e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map((function(t,n){return(0,a.jsx)(P,{data:t,last:n===e.length-1},t.title)}))},O=function(e){var t=e.data;return(0,a.jsxs)("div",{className:"courses",children:[(0,a.jsx)("div",{className:"link-to",id:"courses"}),(0,a.jsx)("div",{className:"title",children:(0,a.jsx)("h3",{children:"Selected Courses"})}),(0,a.jsx)("ul",{className:"course-list",children:L(t)})]})};O.defaultProps={data:[]};var R=O,M=function(){return null},D=[{title:"Computer Architecture",number:"EECS470",link:"https://www.eecs.umich.edu/courses/eecs470/",university:"Michigan"},{title:"Advanced Compiler",number:"EECS583",link:"https://web.eecs.umich.edu/~mahlke/courses/583f23/",university:"Michigan"},{title:"Real-time Programming",number:"CS452",link:"https://uwflow.com/course/cs452",university:"Waterloo"},{title:"Compiler Construction",number:"CS444",link:"https://uwflow.com/course/cs444",university:"Waterloo"},{title:"Computer Graphics",number:"CS488",link:"https://uwflow.com/course/cs488",university:"Waterloo"},{title:"Distributed Systems",number:"CS454",link:"https://uwflow.com/course/cs454",university:"Waterloo"},{title:"Concurrency",number:"CS343",link:"https://uwflow.com/course/cs343",university:"Waterloo"},{title:"Principle of Programming Languages",number:"CS442",link:"https://uwflow.com/course/cs442",university:"Stanford"},{title:"Introduction to Artificial Intelligence",number:"CS486",link:"https://uwflow.com/course/cs486",university:"Waterloo"}],I=[{school:"University of Waterloo",degree:"BMath CS",link:"https://cs.uwaterloo.ca/current-undergraduate-students/majors#BCSvsBMathCS",year:2019},{school:"University of Michigan",degree:"MS CS",link:"https://cse.engin.umich.edu/academics/graduate/graduate-programs/masters-in-cse/",year:2023}],Z=[{company:"d-Matrix",position:"ML Compiler Intern",link:"https://www.d-matrix.ai/",daterange:"May 2023 - Sep 2023",points:["Integrated StableHLO Dialect in d-Matrix Compiler under MLIR, achieving end-to-end testing of Large Language Model including BERT and GPT2 through StableHLO","Developed Reference Backend for high-level IR by leveraging Linalg Dialect in MLIR and Torch-MLIR, enabling testing the correctness of optimizations for high-level IR on CPU bypassing machine-level IR and hardware simulator","Collaborated on the development of d-Matrix\u2019s DNN accelerator\u2019s memory layout in high-level IR, extending support for tiling of MatMul within Vector Dialect in MLIR"]},{company:"University of Waterloo",position:"Undergraduate Research Assistant - Cforall",link:"https://cforall.uwaterloo.ca/",daterange:"May 2022 - Sep 2022",points:["Performed deep-dive into thread-safe Linux syscall routines with GDB disassembler","Implemented pthread emulation in C-for-all programming language with user-level threading primitives provided by the runtime system significantly speeding up pthread routines in C-for-all while preserving the original pthread routines for constructing runtime system through the interposing technique"]},{company:"University of Waterloo",position:"Undergraduate Research Assistant - Libfibre",link:"https://git.uwaterloo.ca/mkarsten/libfibre/-/tree/master/src",daterange:"Jan 2022 - May 2022",points:["Implemented a glue layer between std::thread and libfibre (a user-level threading library) in GCC that adds user-level threading in C++","Researched the underlying mechanism of C++ thread and methods of modifying and building GCC"]},{company:"Baidu",position:"C++ R&D Intern",link:"https://cforall.uwaterloo.ca/",daterange:"May 2021 - Sep 2021",points:["Implemented blacklist filter in feed ads recommender system preventing blocked advertisements from returning to the users; enhanced overall valid view rate by 36% and revenue by 3% of feed-ads on Huawei media","Programmed routine MapReduce scripts to automate the aggregation and filter of millions of customer data; Developed real-time reports with Sqlite3 and Pandas to process and visualize fluctuations of statistical data of feed ads"]},{company:"Momenta",position:"C++ R&D Intern",link:"https://git.uwaterloo.ca/mkarsten/libfibre/-/tree/master/src",daterange:"Dec 2020 - May 2021",points:["Utilized C++ ROS callback routines to record rosbags under specific scenarios for training deep-learning models","Developed Python scripts to extract vehicles locations from collected rosbags, fusing and transforming vehicles positions and velocities from different cameras to one uniform world space","Designed two deep-learning networks with Pytorch: one utilized Resnet to predict surrounding vehicles positions in a single frame; the other composed CNN with self-attention to predict vehicles velocity and acceleration in the long run, enhancing the accuracy of predicting surrounding vehicles velocity by 8%","Designed and implemented the deep-learning inference module from scratch that fuses pedestrians velocities and positions precisely, replacing the old pedestrian penetration module which did not have inference capability"]}],E=n(907);var A=n(181);var B,G=[{title:"Bash",competency:3,category:["tools","Languages"]},{title:"Git",competency:4,category:["tools"]},{title:"Numpy",competency:4,category:["Data Science","System","Python"]},{title:"Pytorch",competency:4,category:["Data Science","Python"]},{title:"Python",competency:5,category:["Languages","Python"]},{title:"C++",competency:5,category:["Languages"]},{title:"R",competency:3,category:["Languages","Data Science"]},{title:"C",competency:5,category:["Languages","System"]},{title:"Redboot",competency:3,category:["tools","System"]},{title:"ARM Assembly",competency:4,category:["Languages","System","Compiler"]},{title:"JCup",competency:4,category:["Languages","Compiler"]},{title:"LLVM",competency:5,category:["Compiler"]},{title:"MLIR",competency:5,category:["Compiler"]},{title:"TVM",competency:3,category:["Compiler"]},{title:"CompilerGym",competency:4,category:["Compiler"]},{title:"JFlex",competency:4,category:["Languages","Compiler"]},{title:"X86 Assembly",competency:4,category:["Languages","Compiler","System"]},{title:"Docker",competency:4,category:["tools"]},{title:"Rust",competency:3,category:["Languages"]},{title:"Haskell",competency:3,category:["Languages"]},{title:"OCaml",competency:3,category:["Languages"]},{title:"Smalltalk",competency:3,category:["Languages"]},{title:"Prolog",competency:3,category:["Languages"]},{title:"Pascal",competency:3,category:["Languages"]},{title:"Erlang",competency:3,category:["Languages"]},{title:"OpenGL",competency:4,category:["Graphics","tools"]},{title:"GLSL",competency:3,category:["Graphics","Languages"]},{title:"glm",competency:4,category:["Graphics","tools"]},{title:"GDB",competency:4,category:["tools","System"]},{title:"Ros",competency:3,category:["tools","System"]}].map((function(e){return(0,j.Z)((0,j.Z)({},e),{},{category:e.category.sort()})})),U=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858"],W=(B=new Set(G.reduce((function(e,t){var n=t.category;return e.concat(n)}),[])),function(e){if(Array.isArray(e))return(0,E.Z)(e)}(B)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(B)||(0,A.Z)(B)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort().map((function(e,t){return{name:e,color:U[t]}})),T=["Education","Experience","Skills","Courses"],_=function(){return(0,a.jsx)(o.Z,{title:"Resume",description:"Luke Zhu's Resume.",children:(0,a.jsxs)("article",{className:"post",id:"resume",children:[(0,a.jsx)("header",{children:(0,a.jsxs)("div",{className:"title",children:[(0,a.jsx)("h2",{"data-testid":"heading",children:(0,a.jsx)(i.rU,{to:"resume",children:"Resume"})}),(0,a.jsx)("div",{className:"link-container",children:T.map((function(e){return(0,a.jsx)("h4",{children:(0,a.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),(0,a.jsx)(l,{data:I}),(0,a.jsx)(m,{data:Z}),(0,a.jsx)(S,{skills:G,categories:W}),(0,a.jsx)(R,{data:D}),(0,a.jsx)(M,{})]})})}},4942:function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})},1413:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(4942);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}}}]);
//# sourceMappingURL=621.7059cba9.chunk.js.map