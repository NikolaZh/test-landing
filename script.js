function agreeForm() {
  let form = document.querySelector("form");
  if (form.political.checked) form.submit.disabled = 0;
  else form.submit.disabled = 1;
}
