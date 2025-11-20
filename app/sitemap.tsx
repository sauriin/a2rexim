export default async function sitemap() {
    const base = "https://www.a2rexim.com";

    const routes = ["", "/about", "/products", "/contact", "/getQuote"].map(
        (route) => ({
            url: `${base}${route}`,
            lastModified: new Date(),
        })
    );

    const productRoutes = [
        "whole-spices",
        "vegetables",
        "fruits",
        "eco-friendly-products",
    ].map((slug) => ({
        url: `${base}/products/${slug}`,
        lastModified: new Date(),
    }));

    return [...routes, ...productRoutes];
}
