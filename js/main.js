$(function () {
    let theme = $('#theme');
    let green = $('#to-green');
    let red = $('#to-red');
    let blue = $('#to-blue');

    ChangeTheme();
    green.click(function () {
        color("css/green.css");
    });

    red.click(function () {
        color("css/red.css");
    });

    blue.click(function () {
        color("css/blue.css");
    });

    function color(color) {
        localStorage.setItem('color', color);
        ChangeTheme();
    }

    function ChangeTheme() {
        if (localStorage.getItem('color')) {
            theme.attr("href", localStorage.getItem('color'));

        } else {
            theme.attr("href", "css/green.css");
        }
    }



    //slider
    if (window.location.href.indexOf('index') > -1) {
        $('.galeria').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            responsive: true
        });
    }

    //Post
    if (window.location.href.indexOf('index') > -1) {
        let posts = [
            {
                title: 'Prueba de titulo1',
                date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') + ' de ' + moment().format('YYYY'),
                content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex molestiae consectetur officia nulla nesciunt, consequatur consequuntur enim, soluta rerum saepe dignissimos dolore corporis vitae ipsum magnam exercitationem et sequi sit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, voluptas, excepturi saepe repudiandae earum itaque labore eius maxime, maiores odit    corporis sint ipsum id alias eaque libero architecto ullam quos?"
            },
            {
                title: 'Prueba de titulo 2',
                date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') + ' de ' + moment().format('YYYY'),
                content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex molestiae consectetur officia nulla nesciunt, consequatur consequuntur enim, soluta rerum saepe dignissimos dolore corporis vitae ipsum magnam exercitationem et sequi sit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, voluptas, excepturi saepe repudiandae earum itaque labore eius maxime, maiores odit    corporis sint ipsum id alias eaque libero architecto ullam quos?"
            },
            {
                title: 'Prueba de titulo 3',
                date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') + ' de ' + moment().format('YYYY'),
                content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex molestiae consectetur officia nulla nesciunt, consequatur consequuntur enim, soluta rerum saepe dignissimos dolore corporis vitae ipsum magnam exercitationem et sequi sit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, voluptas, excepturi saepe repudiandae earum itaque labore eius maxime, maiores odit    corporis sint ipsum id alias eaque libero architecto ullam quos?"
            },
            {
                title: 'Prueba de titulo 4',
                date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') + ' de ' + moment().format('YYYY'),
                content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex molestiae consectetur officia nulla nesciunt, consequatur consequuntur enim, soluta rerum saepe dignissimos dolore corporis vitae ipsum magnam exercitationem et sequi sit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, voluptas, excepturi saepe repudiandae earum itaque labore eius maxime, maiores odit    corporis sint ipsum id alias eaque libero architecto ullam quos?"
            },
            {
                title: 'Prueba de titulo 5',
                date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') + ' de ' + moment().format('YYYY'),
                content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex molestiae consectetur officia nulla nesciunt, consequatur consequuntur enim, soluta rerum saepe dignissimos dolore corporis vitae ipsum magnam exercitationem et sequi sit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, voluptas, excepturi saepe repudiandae earum itaque labore eius maxime, maiores odit    corporis sint ipsum id alias eaque libero architecto ullam quos?"
            },
            {
                title: 'Prueba de titulo 6',
                date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') + ' de ' + moment().format('YYYY'),
                content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex molestiae consectetur officia nulla nesciunt, consequatur consequuntur enim, soluta rerum saepe dignissimos dolore corporis vitae ipsum magnam exercitationem et sequi sit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, voluptas, excepturi saepe repudiandae earum itaque labore eius maxime, maiores odit    corporis sint ipsum id alias eaque libero architecto ullam quos?"
            }

        ];
        posts.forEach((item, index) => {
            let post = `
                        <article class="post">
                            <h2>${item.title}</h2>
                            <span class="date">${item.date}</span>
                            <p>${item.content}</p>
                            <a href="#" class="button-more">Leer mas</a>
                        </article>                    
                    `;
            $('#posts').append(post);

        });
    }


    //scroll arriba de la web
    $('.subir').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    //Login falso
    $('#login form').submit(function () {
        let form_name = $('#form-name').val()
        localStorage.setItem("username", form_name);
        location.reload();
    });
    let form_name = localStorage.getItem('username');
    if (form_name) {
        let about_parrafo = $("#about p");
        let sesion = $('#menu ul');
        about_parrafo.html('<br><strong>Bienvenido, ' + form_name + '<strong> ');
        sesion.append('<li><a href="#" id="logout">Cerrar sesion</a></li>');
        $('#login').hide();
        $('#logout').click(function () {
            localStorage.clear();
            location.reload();

        });

    }

    if (window.location.href.indexOf('about') > -1) {
        $('#acordeon').accordion();
    }

});