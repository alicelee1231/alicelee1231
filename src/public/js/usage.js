function aaa() {
  const title = document.getElementById('title').value;
  const userId = document.getElementById('userId').value;
  const content = document.getElementById('content').value;
  const areas = document.getElementById('areas');
  const area = areas.options[areas.selectedIndex].value;
  const type = document.getElementById('type');
  const sort = type.options[type.selectedIndex].value;
  const period = document.getElementById('period').value;
  const goal = document.getElementById('goal').value;

  //
  axios

    .post('/usage', {
      area,
      title,
      userId,
      area,
      content,
      sort,
      period,
      goal,
    })

    .then((res) => {
      div.innerText = res.data.title;
      div.innerText = res.data.userId;
      div.innerText = res.data.area;
      div.innerText = res.data.content;
      div.innerText = res.data.sort;
      div.innerText = res.data.period;
      div.innerText = res.data.goal;
    });
}
