 var botao = document.getElementById("tema");
        botao.addEventListener("click", function () {
            document.body.classList.toggle("claro");
            if (document.body.classList.contains("claro")) {
                botao.textContent = "☾";
            } else {
                botao.textContent = "☀";
            }
        });