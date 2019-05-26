let accordion = document.getElementsByClassName("accordion");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let accordionContent = this.nextElementSibling;
    if (accordionContent.style.maxHeight){
        accordionContent.style.maxHeight = null;
    } else {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    } 
  });
}