const form = document.querySelector("#form-register");

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    let data;

    const url = `http://localhost:8000/consultores`;
    const username = document.querySelector('[data-tipo="username"]');
    const email = document.querySelector('[data-tipo="email"]');
    const password = document.querySelector('[data-tipo="password"]');
    const confirmPassword = document.querySelector('[data-tipo="confirmPassword"]');

    const spanErrorUsername = document.getElementById("span-error--username");
    const spanErrorEmail = document.getElementById("span-error--email");
    const spanErrorPassword = document.getElementById("span-error--password");
    const spanErrorConfirmPassword = document.getElementById("span-error--confirmPassword");
    const spanErrorOthers = document.getElementById("span-error--others");


    if (confirmPassword.value !== password.value) {
        confirmPassword.classList.add("erro");
        spanErrorConfirmPassword.classList.add("error-span");
        spanErrorConfirmPassword.innerHTML = "As senhas não coincidem";
        return
    }

    const api = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
            apelido: username.value,
            email: email.value,
            senha: password.value
        }),
        headers: {
            "content-type": "application/json"
        }
    })

    if (!api.ok) {
        data = await api.json()
    }

    if (!api.ok && data.includes('apelido') && !data.includes('e-mail') && !data.includes('senha')) {
        username.classList.add("erro");
        spanErrorUsername.classList.add("error-span");
        spanErrorUsername.innerHTML = data;
        return
    } else if (!api.ok && data.includes('e-mail') && !data.includes('apelido') && !data.includes('senha')) {
        email.classList.add("erro");
        spanErrorEmail.classList.add("error-span");
        spanErrorEmail.innerHTML = data;
        return
    } else if (!api.ok && data.includes('senha') && !data.includes('apelido') && !data.includes('e-mail')) {
        password.classList.add("erro");
        spanErrorPassword.classList.add("error-span");
        spanErrorPassword.innerHTML = data;
        return
    } else if (!api.ok) {
        spanErrorOthers.classList.add("span-error-others");
        spanErrorOthers.innerHTML = data;
        return
    }

    window.location.href = "./login.html";
});