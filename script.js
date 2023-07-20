*/button code/*

function showIngredientInfo(index) {
    var ingredientInfo = document.getElementsByClassName("ingredients-info")[index - 1];
    if (ingredientInfo.style.display === "none") {
        ingredientInfo.style.display = "block";
    } else {
        ingredientInfo.style.display = "none";
    }
}
