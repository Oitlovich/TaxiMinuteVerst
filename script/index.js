window.addEventListener('scroll', () => {
    const upparrow = document.getElementsByClassName('upperbutton_section')[0]
    
    window.pageYOffset > 700 ? upparrow.classList.remove("upperbutton_section_nodisplay") : upparrow.classList.add("upperbutton_section_nodisplay")
});
const text1 = document.getElementsByClassName("mark1text") [0];
const img1 = document.getElementsByClassName("mark1img") [0];
text1.addEventListener("mouseover", function(){
    text1.classList.add('display_none')
    img1.classList.remove('display_none')
});
img1.addEventListener("mouseout", function(){
    img1.classList.add('display_none')
    text1.classList.remove("display_none")
});
const text2 = document.getElementsByClassName("mark2text") [0];
const img2= document.getElementsByClassName("mark2img") [0];
text2.addEventListener("mouseover", function(){
    text2.classList.add('display_none')
    img2.classList.remove('display_none')
});
img2.addEventListener("mouseout", function(){
    img2.classList.add('display_none')
    text2.classList.remove("display_none")
});
const text3 = document.getElementsByClassName("mark3text") [0];
const img3 = document.getElementsByClassName("mark3img") [0];
text3.addEventListener("mouseover", function(){
    text3.classList.add('display_none')
    img3.classList.remove('display_none')
});
img3.addEventListener("mouseout", function(){
    img3.classList.add('display_none')
    text3.classList.remove("display_none")
});

