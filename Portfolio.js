/*function splitText(element, options = { type: 'chars' }) {
    const textContent = element.textContent;
    const wrapper = document.createElement('span');
    element.innerHTML = ''; // Vide le contenu de l'élément
  
    if (options.type === 'chars') {
      // Découper le texte en lettres
      Array.from(textContent).forEach((char) => {
        const charSpan = document.createElement('span');
        charSpan.textContent = char;
        wrapper.appendChild(charSpan);
      });
    } else if (options.type === 'words') {
      // Découper le texte en mots
      const words = textContent.split(' ');
      words.forEach((word) => {
        const wordSpan = document.createElement('span');
        wordSpan.textContent = word + ' '; // Ajoute un espace après chaque mot
        wrapper.appendChild(wordSpan);
      });
    } else if (options.type === 'lines') {
      // Découper le texte en lignes (sur la base des retours à la ligne)
      const lines = textContent.split('\n');
      lines.forEach((line) => {
        const lineSpan = document.createElement('span');
        lineSpan.textContent = line + '\n'; // Ajoute un retour à la ligne après chaque ligne
        wrapper.appendChild(lineSpan);
      });
    }
  
    // Ajouter le contenu découpé à l'élément original
    element.appendChild(wrapper);
    return wrapper;
  }

   document.addEventListener('DOMContentLoaded',()=>{
    gsap.to(".logo",{
    duration: 1,
    rotationX:360,
    rotationY:180,
    rotationZ:90,
    perspective:1000,
    perspectiveZ:100,
    yoyo:true, 
    repeat: 1
    });
   })

   document.addEventListener('DOMContentLoaded',()=>{
    gsap.to("#anim",{
    duration: 1,
    rotationX:360,
    rotationY:180,
    rotationZ:90,
    perspective:1000,
    perspectiveZ:100,
    yoyo:true, 
    repeat: 1
    });
   })

   document.addEventListener('DOMContentLoaded',()=>{
    gsap.to(".contact",{
    duration: 1,
    rotationX:360,
    rotationY:180,
    rotationZ:90,
    perspective:1000,
    perspectiveZ:100,
    yoyo:true, 
    repeat: 1
    });
   })

   const letters = document.querySelector('.letter');

   gsap.from(letters, {
     opacity: 0,      
     y: -50,          
     duration: 1,     
     stagger: 0.2  

   });


   const welcome = document.querySelector(".p-welcome");
   gsap.from(welcome,{
    duration: 2,
    scale: 0.5,
    ease: "bounce.out",
   }) 

    gsap.to(".p-welcome", {
    duration: 2, 
    scale: 1,    
    ease: "bounce.in", 
  })


   const names = document.querySelector('.name');
   gsap.from(names,{
    duration: 1,      
    opacity: 0,        
    y: 20,             
    stagger: 0.1,      
    ease: "power2.out" 
});

const btn1 = document.querySelector('.btn-1');
gsap.from(btn1,{
    opacity: 0,   
    y: -50,        
    duration: 1,   
    stagger: 0.6, 
    ease: "power3.out" 
});
   
const btn2 = document.querySelector('.btn-2');
gsap.from(btn2,{
    opacity: 0,   
    rotationY:360,       
    duration: 1, 
    yoyo:true,  
    stagger: 0.6, 
    ease: "power3.out" 
});



sequentiellement avec les Times Lines
const tl = gsap.timeline();
tl.to(".letter", {
    opacity: 0,      
    y: -50,          
    duration: 1, 
    yoyo:true,  
    repeat: 1,
    stagger:0.2,  
  })
 .to(".name", {
    duration: 1,      
    opacity: 0,        
    y: 20,             
     stagger: 0.1,
     yoyo:true,
     repeat: 1,      
     ease: "power2.out" 
})
.to(".btn-1", {
    opacity: 0,   
    y: -50,        
    duration: 1,   
    stagger: 0.6, 
    yoyo:true,
    repeat: 1,
    ease: "power3.out" 
}) 

.to(".btn-2",{ 
         opacity: 0,   
        rotationY:360,       
        duration: 1, 
        yoyo:true, 
        repeat: 1,
        stagger: 0.6, 
        ease: "power3.out" 
    })

   /*letters = document.addEventListener((".letter"),function(){     
        
    }) */

   /*const tv = gsap.timeline(); 
   tv.addLabel("debut") 
   .to(".letter", {x: 100}) 
   .addLabel("milieu") 
   .to(".name", {y: 50}) 
   .addLabel("fin");
   tv.to(".btn-1", {rotation: 
   360}, "milieu"); tv.play("milieu"); 
   tv.seek("fin");*/

   /*let aboutimg = document.querySelector(".about-img");
   gsap.from(aboutimg,{
       /* rotationX: 360,
        rotationY:360,
        duration: 2,
   })*/

   /*-----------------------Scrolltrigger-----------------------
  document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)

let social = document.querySelector(".about-img");
 gsap.to(social, {scrollTrigger:".about-img",
   x: 500,
   duration: 1,
   repeat: 1,
   yoyo:true
   })


   let img = document.querySelector(".img-box");
   gsap.to(img,{scrollTrigger: ".img-box",
   x : -500,
   duration : 1,
   toggleActions: "onEnter onLeave onENterBack onLEaveBack",/*--Toogle Actions--
   repeat:1,
   yoyo:true
   })
  })

  --------------------------------------------------------------------------------------------------*/



