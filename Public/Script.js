const button = document.getElementById("generateBtn");

button.addEventListener("click", async () => {
  const prompt = document.getElementById("prompt").value;
  if (!prompt) {
    alert("Please enter a message prompt!");
    return;
  }

  try {
    const res = await fetch("/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    });

    const data = await res.json();
    document.getElementById("output").value = data.message;

  } catch (err) {
    alert("Something went wrong. Try again!");
    console.error(err);
  }
});
