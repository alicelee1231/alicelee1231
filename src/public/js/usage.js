function enroll() {
  const area = document.getElementById('area').value;
  const title = document.getElementById('title').value;
  const userId = document.getElementById('userId').value;

  axios

    .post('/usage', {
      area,
      title,
      userId,
    })

    .then((res) => {
      const div = document.createElement('div');
      div.innerText = res.data.area;
      div.innerText = res.data.title;
      div.innerText = res.data.userId;
    });
}
