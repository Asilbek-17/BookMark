var elBtn = document.querySelector(".features__link-js2")
var elBtnFirst = document.querySelector(".features__link--js")
var elSelectBox = document.querySelector(".features__book-box")
var elBtnThree = document.querySelector(".features__link-js3")
var elSelect = document.querySelector(".features__book-box--js")
var elBoxThree = document.querySelector(".features__book-box--js2")

elBtnFirst.addEventListener("click", function(){
    elSelectBox.classList.remove("book-none")
    elSelect.classList.remove("js-open")
    elBoxThree.classList.remove("box-three-open")
})

elBtn.addEventListener("click", function(){
    elSelectBox.classList.add("book-none")
    elSelect.classList.add("js-open")
    elBoxThree.classList.remove("box-three-open")
})

elBtnThree.addEventListener("click", function() {
    elBoxThree.classList.add("box-three-open")
    elSelectBox.classList.add("book-none")
    elSelect.classList.remove("js-open")
})