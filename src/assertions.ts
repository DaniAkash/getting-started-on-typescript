const $input = document.querySelector("#text-field") as HTMLInputElement;

$input.autofocus = true;

$input.addEventListener("input", event => {
  const target = event.currentTarget as HTMLInputElement;
  console.log(target.value);
})