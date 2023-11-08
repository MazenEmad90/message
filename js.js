let pops = document.querySelectorAll(".pop");
let reload= document.querySelector("button")

pops.forEach(pop => {
    pop.addEventListener("click", function(){
        pop.classList.toggle("active");
    });
    // pop.onclick = function() {
    //     pop.style.cursor = "grabbing";
    // };
});

reload.onclick= function(){
    // Reload the website
location.reload();
}

