button.addEventListener('click', () => {
  $.ajax({
    url: '/xxx',
    method: 'GET',
  }).then(
    (responseText) => {
      console.log(responseText);
      return responseText
    },
    (request) => { console.log(request) }
  ).then(
    (上一次的处理结果) => { console.log(上一次的处理结果) },
    (request) => { console.log(request) }
  )
})

