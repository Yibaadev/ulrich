document.addEventListener('DOMContentLoaded', () => {
    // Fonction pour masquer le préloader et afficher le contenu après le chargement
    function hidePreloader() {
        // On cache le préloader après 1.5 secondes
        gsap.to(".dot", {
            y: -60,
            stagger: {
                each: 0.2,
                repeat: -1,
                yoyo: true
            }
        });
        gsap.to(".dot", {
            y: 60,
            stagger: {
                each: 0.2,
                repeat: -1,
                yoyo: true
            },
            opacity: 0.1
        });
        gsap.to(".preloader", {
            opacity: 0,
            duration: 1,
            display: "none",  // Pour garantir que le préloader disparaît
            onComplete: () => {
                // Après la fin de l'animation du préloader, on affiche le contenu
                gsap.to("#content", {
                    opacity: 1,
                    duration: 1,
                    display: "block"
                });
            }
        });
    }

    // Appel de la fonction pour cacher le préloader et afficher le contenu
    hidePreloader();

    // Animation du logo avec GSAP
    gsap.to(".logo", {
        duration: 1,
        rotationX: 360,
        rotationY: 180,
        rotationZ: 90,
        perspective: 1000,
        yoyo: true,
        repeat: 1
    });

    // Animation des liens de navigation
    gsap.to("#anim", {
        duration: 1,
        rotationX: 360,
        rotationY: 180,
        rotationZ: 90,
        perspective: 1000,
        yoyo: true,
        repeat: 1
    });

    // Animation du bouton de contact
    gsap.to(".contact", {
        duration: 1,
        rotationX: 360,
        rotationY: 180,
        rotationZ: 90,
        perspective: 1000,
        yoyo: true,
        repeat: 1
    });

    // Sélection des lettres dans le texte d'accueil
    const letters = document.querySelectorAll('.letter');
    gsap.from(letters, {
        opacity: 0,            // Démarre avec une opacité à 0 (lettres invisibles)
        y: -100,              // Commence au-dessus de sa position finale, à -100px (déplacement vertical)
        duration: 1,          // Durée de l'animation
        stagger: {
          each: 0.2,          // Chaque lettre commence avec un délai de 0.1 seconde
          yoyo: true,         // Lorsque la lettre arrive, elle remontera légèrement avant de redescendre pour créer l'effet de rebond
          repeat: 1,          // Pas de répétition (chaque lettre tombera une seule fois)
        },
        ease: "bounce.out",   // Easing "bounce" pour simuler l'effet de rebond au moment où la lettre "tombe"
    });

    // Animation du texte d'accueil
    const welcome = document.querySelector(".p-welcome");
    gsap.from(welcome, {
        duration: 2,
        scale: 0.5,
        ease: "bounce.out",
    });

    gsap.to(".p-welcome", {
        duration: 2,
        scale: 1,
        ease: "bounce.in",
    });

    // Animation du nom
    const names = document.querySelector('.name');
    gsap.from(names, {
        duration: 1,
        opacity: 0,
        y: 20,
        stagger: 0.1,
        ease: "power2.out"
    });

    // Animation des boutons
    const btn1 = document.querySelector('.btn-1');
    gsap.from(btn1, {
        opacity: 0,
        y: -50,
        duration: 1,
        stagger: 0.6,
        ease: "power3.out"
    });

    const btn2 = document.querySelector('.btn-2');
    gsap.from(btn2, {
        opacity: 0,
        rotationY: 360,
        duration: 1,
        yoyo: true,
        stagger: 0.6,
        ease: "power3.out"
    });

    // Animation avec timeline GSAP
    const tl = gsap.timeline();
    tl.to(".letter", {
        opacity: 1,
        y: -50,
        duration: 1,
        yoyo: true,
        repeat: 1,
        stagger: 0.2,
    })
    .to(".name", {
        duration: 1,
        opacity: 0,
        y: 20,
        stagger: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power2.out"
    })
    .to(".btn-1", {
        opacity: 0,
        y: -50,
        duration: 1,
        stagger: 0.6,
        yoyo: true,
        repeat: 1,
        ease: "power3.out"
    })
    .to(".btn-2", {
        opacity: 0,
        rotationY: 360,
        duration: 1,
        yoyo: true,
        repeat: 1,
        stagger: 0.6,
        ease: "power3.out"
    });

    // Animation de l'image dans la section About
    let aboutImg = document.querySelector(".about-img");
    gsap.from(aboutImg, {
        opacity: 0,
        scale: 0.8,
        duration: 2,
        ease: "bounce.out"
    });

    // Animation de l'image du profil
    let img = document.querySelector(".img-box img");
    gsap.from(img, {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: "power3.out"
    });



    
    barba.init({
        sync: true,
        transitions: [{
            name: 'page-transition',
            leave(data) {
                let done = this.async();
                
                // Animation de sortie de la page actuelle avec un effet de zoom et déplacement
                gsap.to(data.current.container, {
                    opacity: 0,
                    scale: 1.2, // Zoom avant de quitter
                    y: 200, // Déplace la page actuelle vers le bas
                    duration: 5, // Durée de l'animation de sortie
                    ease: 'power2.out',
                    onComplete: done
                });
                
                // Optionnel: changer la couleur de fond avant le départ
                gsap.to('body', {
                    backgroundColor: '#333', // Nouvelle couleur de fond
                    duration: 5,
                    ease: 'power2.out'
                });
            },
            enter(data) {
                // Animation d'entrée pour la nouvelle page
                gsap.from(data.next.container, {
                    opacity: 0,
                    scale: 0.8, // Zoom arrière en arrivant
                    y: -100,  // Déplacer la nouvelle page vers le bas
                    duration: 5,
                    ease: 'power2.out'
                });
    
                // Optionnel: réinitialiser la couleur de fond à la couleur originale
                gsap.to('body', {
                    backgroundColor: '#f9f9f9', // Couleur de fond initiale
                    duration: 5,
                    ease: 'power2.out'
                });
            }
        }]
    });
})
