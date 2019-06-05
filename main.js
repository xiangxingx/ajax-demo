button.addEventListener('click', (e) => {
  let request = new XMLHttpRequest() // 声明一个XMLHttpRequest对象；
  // console.log(request) XMLHttpRequest属性在此
  request.open('GET', '/xxx') // 配置request；xhrReq.open(method, url, async, user, password);async默认为true;
  request.send() // 发送请求
  console.log(request.readyState)

  request.onreadystatechange = () => { // 监听readyState的状态
    if (request.readyState === 4) {
      console.log('响应完成')
      if (request.status >= 200 && request.status < 300) {
        console.log('请求成功')
        let string = request.responseText // 响应文本
        let object = window.JSON.parse(string) // 将符合JSON语法的字符串，转化为JS对应的值；parse解析；
        console.log(object)
      } else if (request.status >= 400) {
        console.log('请求失败')
      }
    }
  }

})

