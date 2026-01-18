// .eleventy.js
module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("style.css");
    eleventyConfig.addPassthroughCopy("style.css");
    eleventyConfig.addPassthroughCopy("projects.css");
    eleventyConfig.addPassthroughCopy("active-link.js");
    eleventyConfig.addPassthroughCopy("Assets");

    // Spune-i lui Eleventy sa urmareasca aceste foldere/fisiere pentru a declansa rebuild-ul
    // ATENTIE: Acestea sunt cai relative la radacina PROIECTULUI
    eleventyConfig.addWatchTarget("./Assets/");
    eleventyConfig.addWatchTarget("./active-link.js");
    // Dacă ai și fișiere CSS care nu sunt în Sass/Less, adaugă-le și pe ele:
    eleventyConfig.addWatchTarget("./style.css");
    eleventyConfig.addWatchTarget("./projects.css");

    return {
        // Opțional: Definește directorul de intrare (sursa)
        dir: {
            input: ".", 
            output: "_site" // Directorul unde va genera fișierele HTML finale
        }
    };
};