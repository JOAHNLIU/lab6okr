function dialogWithUser() {
    var userName = prompt("Як вас звати?", "Ім'я користувача");
    if (userName) {
        alert("Привіт, " + userName + "! Ласкаво просимо на наш сайт.");
    } else {
        alert("Привіт! Ласкаво просимо на наш сайт.");
    }

    var userAge = prompt("Скільки вам років?", "Вік");
    if (userAge) {
        if (userAge < 18) {
            alert("Ви ще занадто молоді!");
        } else if (userAge >= 18 && userAge <= 60) {
            alert("Ви в найкращому віці для насолоди життям!");
        } else {
            alert("Ви маєте багато життєвого досвіду!");
        }
    }

    var userLikesSite = confirm("Вам подобається наш сайт?");
    if (userLikesSite) {
        alert("Ми раді, що вам подобається наш сайт!");
    } else {
        alert("Вибачте, що вам не подобається наш сайт. Ми постараємося його покращити.");
    }
}
