const form = document.querySelector("#form-login");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const url = `http://localhost:8000/login`;
    const email = document.querySelector('[data-tipo="email"]');
    const password = document.querySelector('[data-tipo="password"]');

    const api = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
            email: email.value,
            senha: password.value
        }),
        headers: {
            "content-type": "application/json"
        }
    });

    const data = await api.json();

    if (!api.ok && data.includes('e-mail') && !data.includes('senha')) {
        const spanErrorEmail = document.getElementById("span-error--email");
        email.classList.add("erro");
        spanErrorEmail.classList.add("error-span");
        spanErrorEmail.innerHTML = data;
    } else if (!api.ok && data.includes('senha') && !data.includes('e-mail')) {
        const spanErrorPassword = document.getElementById("span-error--password");
        password.classList.add("erro");
        spanErrorPassword.classList.add("error-span");
        spanErrorPassword.innerHTML = data;
    } else if (api.status === 404) {
        const spanErrorNotFound = document.getElementById("span-error--notFound");
        spanErrorNotFound.classList.add("span-error-404");
        spanErrorNotFound.innerHTML = data;
    }

    const { token } = data;
    if (token) {
        window.location.href = "./home.html";
        localStorage.setItem("token", token);
    }
});