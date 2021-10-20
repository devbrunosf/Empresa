window.onload = function() {
    window.scroll(0, 0, 'smooth', behavior = 'smooth')
};

window.setTimeout(function() {
    // Primeia arrow (main) pula para o step1...
    var step1 = document.querySelector('.step1').getBoundingClientRect()

    scrollStep1 = () => {
        window.scroll(0, step1.y, 'smooth', behavior = 'smooth')
    }

    let arrowMain = document.querySelector('#arrowMain').addEventListener('click', scrollStep1)

    // Segunda arrow (step1) pula para o step2...
    var step2 = document.querySelector('.step2').getBoundingClientRect()

    let arrowStep1 = document.querySelector('#arrowStep1').addEventListener('click', function() {
        window.scroll(0, step2.y, 'smooth', behavior = 'smooth')
    })

    // Terceira arrow (step2) pula para o step3...
    var step3 = document.querySelector('.step3').getBoundingClientRect()

    let arrowStep2 = document.querySelector('#arrowStep2').addEventListener('click', function() {
        window.scroll(0, step3.y, 'smooth', behavior = 'smooth')
    })

    // Quarta arrow (step3) pula para o footer...
    var footer = document.querySelector('footer').getBoundingClientRect()

    let arrowStep3 = document.querySelector('#arrowStep3').addEventListener('click', function() {
        window.scroll(0, footer.y, 'smooth', behavior = 'smooth')
    })

    // Marca a primeira bolinha...
    var span1 = document.querySelector('nav').children[0].children[0]
    span1.style.background = 'yellow'

    var span2 = document.querySelector('nav').children[0].children[1]
    var span3 = document.querySelector('nav').children[0].children[2]
    var span4 = document.querySelector('nav').children[0].children[3]
    var span5 = document.querySelector('nav').children[0].children[4]

    // Clica nas bolinhas e vai até o step...
    span1.addEventListener("click", function(event) {
        event.preventDefault
        window.scroll(0, 0, 'smooth', behavior = 'smooth')
    })
    span2.addEventListener("click", function(event) {
        event.preventDefault
        window.scroll(0, step1.y, 'smooth', behavior = 'smooth')
    })
    span3.addEventListener("click", function(event) {
        event.preventDefault
        window.scroll(0, step2.y, 'smooth', behavior = 'smooth')
    })
    const contato = document.querySelector('header').children[0].children[1]
    contato.addEventListener('click', function() {
        window.scroll(0, step3.y, 'smooth', behavior = 'smooth')
    })
    span4.addEventListener("click", function(event) {
        event.preventDefault
        window.scroll(0, step3.y, 'smooth', behavior = 'smooth')
    })
    span5.addEventListener("click", function(event) {
        event.preventDefault
        window.scroll(0, footer.y, 'smooth', behavior = 'smooth')
    })

    window.addEventListener('scroll', function() {
        var main = document.querySelector('main').getBoundingClientRect();
        var step1 = document.querySelector('.step1').getBoundingClientRect();
        var step2 = document.querySelector('.step2').getBoundingClientRect();
        var step3 = document.querySelector('.step3').getBoundingClientRect();

        // Marca as bolinhas de acordo com o step...
        var altura = window.screen.height / 2;
        if (main.y < -altura) {
            // Marca a (2ª) bolinha de navegação...
            span2.style.background = 'yellow';
            span1.style.background = '';
        } else {
            span2.style.background = '';
            span1.style.background = 'yellow';
        }

        if (step1.y < -altura) {
            // Marca a (3ª) bolinha de navegação...
            span3.style.background = 'yellow';
            span2.style.background = '';
        } else {
            span3.style.background = '';
        }

        if (step2.y < -altura) {
            // Marca a (4ª) bolinha de navegação...
            span4.style.background = 'yellow';
            span3.style.background = '';
        } else {
            span4.style.background = '';
        }

        if (step3.y < -altura) {
            // Marca a (5ª) bolinha de navegação...
            span5.style.background = 'yellow';
            span4.style.background = '';
        } else {
            span5.style.background = '';
        }

        // Recolher imagem
        var img = document.querySelector('figure').children[0];

        if (main.y < -10) {
            img.style.transform = 'translateY(-15px)'
        } else if (main.y > -10) {
            img.style.transform = 'translateY(0px)'
        }

        img.addEventListener("click", function() {
            window.scroll(0, 0, 'smooth', behavior = 'smooth')
        })

        // Esconder no scroll...

        const mainSpan = document.querySelector('main');
        const mainSpan1 = mainSpan.children[0].children[0].children[0];
        const mainSpan2 = mainSpan.children[0].children[0].children[1];
        const mainSpan3 = mainSpan.children[0].children[0].children[2];
        const mainSpan4 = mainSpan.children[0].children[0].children[3];

        if (main.y < -145) {
            mainSpan1.style.opacity = '0'
            mainSpan1.style.transition = '.3s'
        } else {
            mainSpan1.style.opacity = '1'
            mainSpan1.style.transition = '.5s'
        }

        if (main.y < -225) {
            mainSpan2.style.opacity = '0'
            mainSpan2.style.transition = '.3s'
        } else {
            mainSpan2.style.opacity = '1'
            mainSpan2.style.transition = '.5s'
        }

        if (main.y < -275) {
            mainSpan3.style.opacity = '0'
            mainSpan3.style.transition = '.3s'
        } else {
            mainSpan3.style.opacity = '1'
            mainSpan3.style.transition = '.5s'
        }

        if (main.y < -325) {
            mainSpan4.style.opacity = '0'
            mainSpan4.style.transition = '.3s'
        } else {
            mainSpan4.style.opacity = '1'
            mainSpan4.style.transition = '.5s'
        }

        // Faz aparecer as div's do step1 no scroll...
        const step1Div = document.querySelector('.step1');
        const step1Div1 = step1Div.children[0].children[0];
        const step1Div2 = step1Div.children[0].children[1];

        // Começam ocultas
        step1Div1.style.opacity = '0'
        step1Div1.style.transition = '.5s'
        step1Div2.style.opacity = '0'
        step1Div2.style.transition = '.5s'

        if (step1.y < 475) {
            step1Div1.style.opacity = '1'
            step1Div1.style.transition = '1s'
            step1Div2.style.opacity = '1'
            step1Div2.style.transition = '1s'
        }
    })


}, 1000);

// if (step1.y < 0) {
//     console.log("Zero");
//     // arrow.style.display = 'flex';
//     // arrow.style.opacity = '1';
//     // arrow.style.transition = '.5s';
// } else {
//     const arrow = document.querySelector('.arrow');
//     console.log("Dois");
// }
// window.addEventListener('scroll', function() {
//     const step1 = document.querySelector('.step1').getBoundingClientRect();
//     console.log(step1.y);
// })

// window.addEventListener('scroll', function() {
//     const main = document.querySelector('main').style.transform = "translateY(-100px)";;
//     scrollX.transform = "translateY(-100px)";
//     console.log(this.scrollY);

//     const main = document.querySelector('main');
//     const span1 = document.querySelector('main').children[0].children[0].children[0];
//     const span2 = document.querySelector('main').children[0].children[0].children[1];
//     const span3 = document.querySelector('main').children[0].children[0].children[2];

//     if (window.scrollY > 100) {
//         span1.style.transform = "translateY(-100px)";
//         span1.style.opacity = '0';
//         span1.style.transition = '.5s';
//     } else {
//         span1.style.transform = "translateY(0px)";
//         span1.style.opacity = '1';
//         span1.style.transition = '.5s';
//     }

//     if (window.scrollY > 185) {
//         span2.style.transform = "translateY(-100px)";
//         span2.style.opacity = '0';
//         span2.style.transition = '.5s';
//     } else {
//         span2.style.transform = "translateY(0px)";
//         span2.style.opacity = '1';
//         span2.style.transition = '.5s';
//     }

//     if (window.scrollY > 270) {
//         span3.style.transform = "translateY(-100px)";
//         span3.style.opacity = '0';
//         span3.style.transition = '.5s';
//     } else {
//         span3.style.transform = "translateY(0px)";
//         span3.style.opacity = '1';
//         span3.style.transition = '.5s';
//     }
// })

// window.scroll(0, 0, 'smooth', behavior = 'smooth');
// const form = document.querySelector('form');
// form.addEventListener("click", (formName));

// const nomeid = document.querySelector('#nomeid');

// function formName() {
//     if (nomeid.value.length == 0) {
//         nomeid.focus();
//     }
// }