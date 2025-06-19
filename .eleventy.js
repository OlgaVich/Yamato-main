export default async function(eleventyConfig) {
  // Výchozí výstupní složka je: _site
  // Zkopírovat složku images/ do _site/images
  eleventyConfig.addPassthroughCopy("images");
  // Zkopírovat složku css/ to _site/css/
  eleventyConfig.addPassthroughCopy("css");
  // Zkopírovat složku downloads/ to _site/downloads/
  eleventyConfig.addPassthroughCopy("downloads");
  // Zkopírovat složku _redirects/ to _site/js/
  eleventyConfig.addPassthroughCopy("_redirects");
  // Zkopírovat složku favicon/ to _site/js/
  eleventyConfig.addPassthroughCopy("favicon.ico");
 
}

export const config = {
  // jako šablonu nebo soubor s obsahem
  // můžeme použít následující formáty
  templateFormats: ["njk", "html", "md"],

  // jako šablonovací jazyk zvolíme pro všechny
  // formáty výše jazyk Nunjucks
  markdownTemplateEngine: "njk",
  htmlTemplateEngine: "njk",
  dataTemplateEngine: "njk",
};
