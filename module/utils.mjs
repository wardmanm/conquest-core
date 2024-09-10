export async function preloadHandlebarsTemplates() {
    const templatePaths = [
    ];
    const paths = {};
    for ( const path of templatePaths ) {
      paths[path.replace(".hbs", ".html")] = path;
      paths[`conquest-core.${path.split("/").pop().replace(".hbs", "")}`] = path;
    }
    return loadTemplates(templatePaths);
}