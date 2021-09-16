const form = document.getElementById("form-update");

const username = document.querySelector('[data-tipo="username"]');
const email = document.querySelector('[data-tipo="email"]');
const password = document.querySelector('[data-tipo="password"]');
const confirmPassword = document.querySelector('[data-tipo="confirmPassword"]');
const userImg = document.querySelector('[data-tipo="profile-img"]');
const inputUserImg = document.getElementById("userProfileImg");

const usernameHeader = document.querySelector('[data-tipo="username--header"]');
const userImgHeader = document.querySelector('[data-tipo="userImg--header"]');

const spanErrorUsername = document.getElementById("span-error--username");
const spanErrorEmail = document.getElementById("span-error--email");
const spanErrorPassword = document.getElementById("span-error--password");
const spanErrorConfirmPassword = document.getElementById("span-error--confirmPassword");
const spanErrorOthers = document.getElementById("span-error--others");

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
    username.setAttribute("value", consultor.apelido);
    email.setAttribute("value", consultor.email);

    if (!consultor.imagem) {
        userImg.setAttribute("src", "../images/no-avatar-user.png");
        userImgHeader.setAttribute("src", "../images/no-avatar-user.png");
    } else {
        userImg.setAttribute("src", consultor.imagem);
        userImgHeader.setAttribute("src", consultor.imagem);
    }

    return consultor;
});

let imagemAtualizada;
let urlImagem;
let base64Img;

const uploadImagem = async (event) => {
    const file = event.target.files[0];
    const base64 = await convertBase64(file);
    let base = base64.replace("data:image/png;base64,", "");
    base = base.replace("data:image/jpeg;base64,", "");
    base = base.replace("data:image/jpg;base64,", "");

    base64Img = base;

    const reader = new FileReader();
    reader.onload = () => {
        if (reader.readyState === 2) {
            imagemAtualizada = reader.result;
        }
    }
    reader.readAsDataURL(event.target.files[0]);
};

const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
            reject(error);
        };
    });
};

inputUserImg.addEventListener("change", (e) => {
    uploadImagem(e);
});

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");

    if (!token) {
        window.location.href = "./login.html";
    }

    const url = `http://localhost:8000/consultores`;
    let data;

    if (password.value.length > 0 && confirmPassword.value !== password.value) {
        confirmPassword.classList.add("erro");
        spanErrorConfirmPassword.classList.add("error-span");
        spanErrorConfirmPassword.innerHTML = "As senhas não coincidem";
        return
    }

    const atualizarPerfil = await fetch(url, {
        method: "PATCH",
        body: JSON.stringify({
            apelido: username.value,
            senha: password.value,
            imagem: base64Img
        }),
        headers: {
            "content-type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });

    if (!atualizarPerfil.ok) {
        data = await atualizarPerfil.json()
    }

    if (!atualizarPerfil.ok && data.includes('apelido')) {
        username.classList.add("erro");
        spanErrorUsername.classList.add("error-span");
        spanErrorUsername.innerHTML = data;
        return
    } else if (!atualizarPerfil.ok) {
        spanErrorOthers.classList.add("span-error-others");
        spanErrorOthers.innerHTML = data;
        return
    }

    document.location.reload(true);
    usernameHeader.innerHTML = consultor.apelido;
    userImgHeader.setAttribute("src", consultor.imagem);
    username.setAttribute("value", consultor.apelido);
    email.setAttribute("value", consultor.email);
    userImg.setAttribute("src", consultor.imagem);
});