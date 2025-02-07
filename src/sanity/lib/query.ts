export const getAllproductsQuery = `*[_type == "product"] {
    _id,
    title,
    price,
    "image": image.asset->url,
    description
  }`;