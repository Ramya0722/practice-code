document.addEventListener('DOMContentLoaded', function() {
    document.querySelector("#form").onsubmit = function(){
        const name = document.querySelector('#name').value;
        name.innerHTML = "Valid name: " +name;
    };


if (name.length < 5) {
    name.innerHTML = "This is too short(at least 5 chars)";
}
});