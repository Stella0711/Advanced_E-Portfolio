
// template_kl5iv9r
// service_rgys13m
// Public Key: 1Bf3r87f3sL1DeJoH


function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible"

    emailjs
    .sendForm(
        'service_rgys13m',
        'template_kl5iv9r',
        event.target,
        '1Bf3r87f3sL1DeJoH'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible"; 
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "The email service is temporarily unavailable. Please contact me directly on crystal.quigley@gmail.com"
        );
    })
}