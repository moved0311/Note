---
margin: 0.1
width: 1400
height: 800
theme: night
---

## Cross-Domain Communication

---

登入後的token怎麼在不同網域下共享？

---

1. CORS(跨域資源共享)
2. JSONP(JSON with Padding)
3. <span class="highlight">postMessage</span>
4. 使用中間伺服器
5. 共享域名或子域

---

步驟
1. 登入頁登入後將token存在local storage (https://login.cnyes.com)
2. 其他頁面A, 用iframe元素載入 https://login.cnyes.com 網域下的頁面B
3. B往上層發送token，同時A會監聽iframe事件接收token
4. A將token存起來(local storage)

---

login page

```html
  <h1>Login Page</h1>
  <button id="sendToken">Send Token to Subdomain</button>

  <script>
    let token = 123
    localStorage.setItem('sso', token)
    document.getElementById('sendToken').addEventListener('click', function() {
      console.log('send...', token)
      window.top.postMessage(token, 'http://localhost:3001/')
    });
  </script>
```

---

Page A

```html
  <h1>Page A</h1>
  <p id="message">Waiting for token...</p>
  <iframe src="http://localhost:3000"></iframe>

  <script>
    window.addEventListener('message', function(event) {
      if (event.origin !== 'http://localhost:3000') {
        return;
      }

      let token = event.data
      console.log("Received: ", token)
      localStorage.setItem('sso', token)
      document.getElementById('message').innerText = 'Received token: ' + event.data;
    }, false);
  </script>
```

---

<style>
.highlight {
  color: yellow;
}

pre,code {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

p, ul {
  font-size: 36px;
  line-height: 36px;
  text-align: left;
}

li {
  margin-bottom: 24px;
  margin-top: 24px;
}

ul > li > ul {
  font-size: 28px;
}

code  {
  padding: 2px 4px;
  font-size: 90%;
  color: #c7254e; 
  background-color: #f9f2f4;
  border-radius: 4px;
}

.code-fit-content {
  pre > code {
    max-height: fit-content;
  }
}
</style>