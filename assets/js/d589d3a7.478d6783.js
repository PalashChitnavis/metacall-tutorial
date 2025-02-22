"use strict";(self.webpackChunkmetacall_tutorial=self.webpackChunkmetacall_tutorial||[]).push([[924],{3808:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>h});const l=JSON.parse('{"id":"getting-started","title":"Getting Started with Metacall","description":"Metacall is a polyglot tool that allows calling functions, methods, procedures between different programming languages.","source":"@site/docs/getting-started.md","sourceDirName":".","slug":"/getting-started","permalink":"/metacall-tutorial/docs/getting-started","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","next":{"title":"How Metacall works","permalink":"/metacall-tutorial/docs/how-metacall-works"}}');var s=n(4848),r=n(8453);const i=n.p+"assets/images/example-usage-2c3813e6e0c681e602e16730b6fe6eb9.png",c=n.p+"assets/images/metacall-meme-c6c8c27df95278a0da5b16bb1ea90a00.png",a={sidebar_position:1},d="Getting Started with Metacall",o={},h=[{value:"Example Usage",id:"example-usage",level:3},{value:"Use Cases of Metacall",id:"use-cases-of-metacall",level:3},{value:"Components of Metacall",id:"components-of-metacall",level:3},{value:"Languages supported by Metacall",id:"languages-supported-by-metacall",level:3}];function x(e){const t={code:"code",em:"em",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"getting-started-with-metacall",children:"Getting Started with Metacall"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Metacall"})," is a ",(0,s.jsx)(t.strong,{children:"polyglot"})," tool that allows calling ",(0,s.jsx)(t.em,{children:"functions"}),", ",(0,s.jsx)(t.em,{children:"methods"}),", ",(0,s.jsx)(t.em,{children:"procedures"})," between different programming languages."]}),"\n",(0,s.jsxs)(t.p,{children:["With ",(0,s.jsx)(t.strong,{children:"Metacall"})," you can call ",(0,s.jsx)(t.em,{children:"Python"})," functions from ",(0,s.jsx)(t.em,{children:"NodeJS"}),", run ",(0,s.jsx)(t.em,{children:"C#"})," methods from ",(0,s.jsx)(t.em,{children:"Golang"})," and much more."]}),"\n",(0,s.jsx)(t.h3,{id:"example-usage",children:"Example Usage"}),"\n",(0,s.jsxs)(t.p,{children:["Invoking a ",(0,s.jsx)(t.em,{children:"Python"})," function inside a ",(0,s.jsx)(t.em,{children:"JavaScript"})," file."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"index.js"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"  const {sum} = require('./main.py');\n  console.log(\"Hello from Node.js\");\n  sum(3, 4);\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"main.py"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-py",children:'  def sum(a,b):\n    print("Hello from Python")\n    print(f"Sum of {a} and {b} is {a+b}")\n'})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"Output :"})}),"\n","\n",(0,s.jsx)("img",{src:i}),"\n",(0,s.jsx)(t.h3,{id:"use-cases-of-metacall",children:"Use Cases of Metacall"}),"\n",(0,s.jsx)(t.p,{children:"The main use case of Metacall is to combine multiple programming languages, allowing the weaknesses of one language to be offset by the strengths of another."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Use Case"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Language Combination"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Strengths"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Real-Time Data Processing + ML"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Go + Python"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Go: Speed and concurrency; Python: ML and data analysis."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"High-Performance Web Server"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Node.js + Rust"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Node.js: Scalability; Rust: Performance and memory safety."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Enterprise Application Development"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Ruby + C#"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Ruby: Rapid prototyping; C#: Enterprise features and strong typing."})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"components-of-metacall",children:"Components of Metacall"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Metacall CLI"}),": This is a ",(0,s.jsx)(t.code,{children:"CLI"})," runtime tool that lets you execute and manage code across multiple languages directly from the command line. To install Metacall CLI visit: ",(0,s.jsx)("a",{href:"/docs/category/installating-metacall-cli/",children:(0,s.jsx)(t.code,{children:"CLI Installation Docs"})})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Metacall Library"}),": The MetaCall Library acts as a module for each programming language, which can be installed using package managers like ",(0,s.jsx)(t.code,{children:"npm"})," for JavaScript, ",(0,s.jsx)(t.code,{children:"pip"})," for Python, and others. It enables seamless integration of files and functions across different languages, making it easy to connect and communicate between them. To install Metacall Library for your projects visit: ",(0,s.jsx)("a",{href:"/docs/category/using-metacall",children:(0,s.jsx)(t.code,{children:"Using Metacall Library"})})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"languages-supported-by-metacall",children:"Languages supported by Metacall"}),"\n",(0,s.jsxs)(t.p,{children:["Metacall supports ",(0,s.jsx)(t.code,{children:"Node.js (JavaScript), Python, and Ruby"})," out of the box. This means you can start using these languages immediately without any additional setup. However, if you want to integrate other programming languages (like C#, R, or others), you\u2019ll need to install their respective compilers or interpreters. To build Metacall for additional languages please visit: ",(0,s.jsx)("a",{href:"/docs/category/using-metacall",children:(0,s.jsx)(t.code,{children:"Using Metacall"})})]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Language"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Tag"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Runtime"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Version"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Python"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"py"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Python C API"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"3.2 <= version <= 3.9"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"NodeJS"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"node"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"N API"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"10.22.0 <= version <= 17.x.x"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Ruby"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"rb"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Ruby C API"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"2.1 <= version <= 2.7"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"TypeScript"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"ts"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"TypeScript Language Service API"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"4.2.3"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"JavaScript"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"js"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"V8"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"5.1.117"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"C#"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"cs"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"NetCore"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"1.0.0 <= version <= 7.0.4"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Cobol"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"cob"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"GNU/Cobol"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"version >= 1.1.0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"RPC"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"rpc"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"cURL"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"version >= 7.64.0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Java"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"java"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"JVM"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"version >= 11"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"WebAssembly"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"wasm"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Wasmtime"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.27 <= version <= 8.0.1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"C"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"c"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"libclang - Tiny C Compiler - libffi"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"1.2 <= version <= 3.2"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Rust"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"rs"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"rustc - libffi"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"nightly-2021-12-04"})]})]})]}),"\n","\n",(0,s.jsx)(t.p,{children:"Now that you know what Metacall is, learn how it works behind the scenes. \ud83d\ude80"}),"\n",(0,s.jsx)("img",{src:c})]})}function g(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var l=n(6540);const s={},r=l.createContext(s);function i(e){const t=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),l.createElement(r.Provider,{value:t},e.children)}}}]);