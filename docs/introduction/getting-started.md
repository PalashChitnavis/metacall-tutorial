---
sidebar_position: 1
---

# Getting Started with MetaCall

**MetaCall : The ultimate polyglot programming experience.**

**MetaCall** allows calling functions, methods or procedures between multiple programming languages.

- ### Examples
    - Embedding Python code in NodeJS.
    - Embedding Rust code in C/C++.
    - Embedding TypeScript code in Golang.
<br />
- ### Example Cases
    - [BeautifulSoup from Express](https://github.com/metacall/beautifulsoup-express-example): This example shows how to use [**METACALL** CLI](/source/cli/metacallcli) for building a **Polyglot Scraping API** that mixes NodeJS with Python.

    - [Higher Order Functions with Python & NodeJS](https://github.com/metacall/fn.py-javascript-example): An example of using [Fn.py](https://github.com/kachayev/fn.py) (Python) from JavaScript (NodeJS).

    - [Embedding NodeJS](https://github.com/metacall/embedding-nodejs-example): Example application for embedding NodeJS code into C/C++ using CMake as a build system.

    - [Embedding Python](https://github.com/metacall/embedding-python-example): Example application for embedding Python code into C/C++ using CMake as a build system.

    - [Embedding Ruby](https://github.com/metacall/embedding-ruby-example): Example application for embedding Ruby code into C/C++ using CMake as a build system.

    - [Mixing Go and TypeScript](https://github.com/metacall/golang-typescript-example): This example shows how to embed TypeScript into Go using METACALL. In other words, calling TypeScript functions from Go.

    - [Using `matplotlib` from C/C++](https://github.com/metacall/embedding-matplotlib-example): Example application for using Python `matplotlib` library into C/C++ using `gcc` for compiling it and installing **METACALL** by compining it by hand.

    - [Polyglot Redis Module](https://github.com/metacall/redis-module): Extend Redis DataBase modules with TypeScript, JavaScript, Python, C#, Ruby...

    - [Rotulin](https://github.com/metacall/rotulin): Example of a multi-language application built with **METACALL**. This application embeds a Django server with a Ruby DataBase and C# business layer based on ImageMagick.

<br />

- ### Supported languages and run-times

    <table style={{ width: '100%', textAlign: 'center', borderCollapse: 'collapse' }}>
  <thead>
    <tr>
      <th>Language</th>
      <th>Runtime</th>
      <th>Version</th>
      <th>Tag</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://www.python.org/">Python</a></td>
      <td><a href="https://docs.python.org/3/c-api/intro.html">Python C API</a></td>
      <td><strong>&gt;= 3.2 &lt;= 3.9</strong></td>
      <td>py</td>
    </tr>
    <tr>
      <td><a href="https://nodejs.org/">NodeJS</a></td>
      <td><a href="https://nodejs.org/api/n-api.html">N API</a></td>
      <td><strong>&gt;= 10.22.0 &lt;= 17.x.x</strong></td>
      <td>node</td>
    </tr>
    <tr>
      <td><a href="https://www.typescriptlang.org/">TypeScript</a></td>
      <td><a href="https://github.com/microsoft/TypeScript/wiki/Using-the-Language-Service-API">TypeScript Language Service API</a></td>
      <td><strong>4.2.3</strong></td>
      <td>ts</td>
    </tr>
    <tr>
      <td><a href="https://developer.mozilla.org/bm/docs/Web/JavaScript">JavaScript</a></td>
      <td><a href="https://v8.dev/">V8</a></td>
      <td><strong>5.1.117</strong></td>
      <td>js</td>
    </tr>
    <tr>
      <td><a href="https://dotnet.microsoft.com/">C#</a></td>
      <td><a href="https://github.com/dotnet/docs/blob/master/docs/core/tutorials/netcore-hosting.md">NetCore</a></td>
      <td><strong>&gt;= 1.0.0-preview2 &lt;= 7.0.4</strong></td>
      <td>cs</td>
    </tr>
    <tr>
      <td><a href="https://ruby-lang.org/">Ruby</a></td>
      <td><a href="https://silverhammermba.github.io/emberb/c/">Ruby C API</a></td>
      <td><strong>&gt;= 2.1 &lt;= 2.7</strong></td>
      <td>rb</td>
    </tr>
    <tr>
      <td><a href="https://sourceforge.net/projects/open-cobol/">Cobol</a></td>
      <td><a href="https://open-cobol.sourceforge.io/doxygen/gnucobol-2/libcob_8h.html">GNU/Cobol</a></td>
      <td><strong>&gt;= 1.1.0</strong></td>
      <td>cob</td>
    </tr>
    <tr>
      <td><a href="">File</a></td>
      <td>∅</td>
      <td><strong>0.1.0</strong></td>
      <td>file</td>
    </tr>
    <tr>
      <td><a href="">Mock</a></td>
      <td>∅</td>
      <td><strong>0.1.0</strong></td>
      <td>mock</td>
    </tr>
    <tr>
      <td><a href="https://en.wikipedia.org/wiki/Remote_procedure_call">RPC</a></td>
      <td><a href="https://curl.haxx.se/">cURL</a></td>
      <td><strong>&gt;=7.64.0</strong></td>
      <td>rpc</td>
    </tr>
    <tr>
      <td><a href="https://www.java.com">Java</a></td>
      <td><a href="https://en.wikipedia.org/wiki/Java_virtual_machine">JVM</a></td>
      <td><strong>&gt;=11</strong></td>
      <td>java</td>
    </tr>
    <tr>
      <td><a href="https://webassembly.org/">WebAssembly</a></td>
      <td><a href="https://github.com/bytecodealliance/wasmtime">Wasmtime</a></td>
      <td><strong>&gt;= 0.27 &lt;= 8.0.1</strong></td>
      <td>wasm</td>
    </tr>
    <tr>
      <td><a href="https://en.wikipedia.org/wiki/C_(programming_language)">C</a></td>
      <td><a href="https://clang.llvm.org/doxygen/group__CINDEX.html">libclang</a> - <a href="https://bellard.org/tcc/">Tiny C Compiler</a> - <a href="http://sourceware.org/libffi/">libffi</a></td>
      <td><strong>&gt;=12 - &gt;=2021-10-30 - &gt;=3.2</strong></td>
      <td>c</td>
    </tr>
    <tr>
      <td><a href="https://www.rust-lang.org/">Rust</a></td>
      <td><a href="https://doc.rust-lang.org/rustc/what-is-rustc.html">rustc</a> - <a href="http://sourceware.org/libffi/">libffi</a></td>
      <td><strong>nightly-2021-12-04</strong></td>
      <td>rs</td>
    </tr>
  </tbody>
    </table>