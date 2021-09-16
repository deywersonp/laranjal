const usernameHeader = document.querySelector('[data-tipo="username--header"]');
const userImgHeader = document.querySelector('[data-tipo="userImg--header"]');

document.addEventListener("DOMContentLoaded", async () => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    if (!token) {
        window.location.href = "./login.html";
    }

    const url = `http://localhost:8000/consultores/${userId}`;

    const obterDadosConsultor = await fetch(url, {
        method: "GET",
        headers: {
            "content-type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });

    const consultor = await obterDadosConsultor.json();

    usernameHeader.innerHTML = consultor.apelido;

    if (!consultor.imagem) {
        userImgHeader.setAttribute("src", "../images/no-avatar-user.png");
    } else {
        userImgHeader.setAttribute("src", consultor.imagem);
    }
});

userImgHeader.addEventListener("click", (e) => {
    window.location.href = "./perfil.html";
});