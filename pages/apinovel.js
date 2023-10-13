const btn = document.querySelector("#btn");
const img = document.querySelector("#text");

const NOVELAI_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Il8zeERtU284SzNadz6Z0";
// Asegúrate de que NOVELAI_API_KEY contenga tu clave de API

btn.addEventListener("click", async () => {
  if (input.value === "") {
    alert("Please enter a prompt!");
    return;
  }

  btn.disabled = true;

  const res = await fetch("https://api.novelai.net/ai/generate-stream", {
    method: "POST",
    body: JSON.stringify({
      prompt: input.value,
      n: 1,
      size: "1024x1024",
    }),
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${NOVELAI_API_KEY}`,
    },
  });

  const data = await res.json();
  console.log(data);

  input.value = "";

  img.src = data.data[0].url;
  btn.disabled = false;
});
