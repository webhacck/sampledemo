const form = document.forms.keyform;

form.btn.addEventListener('click', () => {
  const word = form.keyword.value;
  const xhr = new XMLHttpRequest();

  xhr.open('GET', '/data?keyword='+word);

  xhr.onreadystatechange = () => {
    if(xhr.readyState === 4 && xhr.status === 200) {
      showValue(JSON.parse(xhr.response));
    }
  }
  
  xhr.send();
})


function showValue(value) {
  const info = document.getElementById('info');
  
  info.textContent = 'リポジトリ総数は、' + value.total_count + '個あります。';
}
