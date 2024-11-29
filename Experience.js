barba.init({
    transitions: [
        {
            name: 'default-transition',
            leave(data) {
                // Fondu de sortie
                $(data.current.container).fadeOut(300);
            },
            enter(data) {
                // Fondu d'entrée
                return $(data.next.container).fadeIn(300);
            }
        }
    ]
});