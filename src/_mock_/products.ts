// @ts-nocheck

import { Product } from "../common/types/Product.types";

export const mockProducts = [
    {
        "__typename": "Product",
        "id": "1",
        "name": "Laptop",
        "description": "Now equipped with seventh-generation Intel Core processors, Laptop is snappier than ever. From daily tasks like launching apps and opening files to more advanced computing, you can power through your day thanks to faster SSDs and Turbo Boost processing up to 3.6GHz.",
        "collections": [
            {
                "__typename": "Collection",
                "id": "2",
                "slug": "electronics",
                "name": "Electronics",
                "breadcrumbs": [
                    {
                        "__typename": "CollectionBreadcrumb",
                        "id": "1",
                        "name": "_root_collection_",
                        "slug": "_root_collection_"
                    },
                    {
                        "__typename": "CollectionBreadcrumb",
                        "id": "2",
                        "name": "Electronics",
                        "slug": "electronics"
                    }
                ]
            },
            {
                "__typename": "Collection",
                "id": "3",
                "slug": "computers",
                "name": "Computers",
                "breadcrumbs": [
                    {
                        "__typename": "CollectionBreadcrumb",
                        "id": "1",
                        "name": "_root_collection_",
                        "slug": "_root_collection_"
                    },
                    {
                        "__typename": "CollectionBreadcrumb",
                        "id": "2",
                        "name": "Electronics",
                        "slug": "electronics"
                    },
                    {
                        "__typename": "CollectionBreadcrumb",
                        "id": "3",
                        "name": "Computers",
                        "slug": "computers"
                    }
                ]
            }
        ],
        "facetValues": [
            {
                "__typename": "FacetValue",
                "facet": {
                    "__typename": "Facet",
                    "id": "1",
                    "code": "category",
                    "name": "category"
                },
                "id": "1",
                "code": "electronics",
                "name": "Electronics"
            },
            {
                "__typename": "FacetValue",
                "facet": {
                    "__typename": "Facet",
                    "id": "1",
                    "code": "category",
                    "name": "category"
                },
                "id": "2",
                "code": "computers",
                "name": "Computers"
            },
            {
                "__typename": "FacetValue",
                "facet": {
                    "__typename": "Facet",
                    "id": "2",
                    "code": "brand",
                    "name": "brand"
                },
                "id": "3",
                "code": "apple",
                "name": "Apple"
            }
        ],
        "featuredAsset": {
            "__typename": "Asset",
            "id": "1",
            "preview": "https://demo.vendure.io/assets/preview/71/derick-david-409858-unsplash__preview.jpg"
        },
        "assets": [
            {
                "__typename": "Asset",
                "id": "1",
                "preview": "https://demo.vendure.io/assets/preview/71/derick-david-409858-unsplash__preview.jpg"
            }
        ],
        "variants": [
            {
                "__typename": "ProductVariant",
                "id": "1",
                "name": "Laptop 13 inch 8GB",
                "priceWithTax": 155880,
                "currencyCode": "USD",
                "sku": "L2201308",
                "stockLevel": "IN_STOCK",
                "featuredAsset": null
            },
            {
                "__typename": "ProductVariant",
                "id": "2",
                "name": "Laptop 15 inch 8GB",
                "priceWithTax": 167880,
                "currencyCode": "USD",
                "sku": "L2201508",
                "stockLevel": "IN_STOCK",
                "featuredAsset": null
            },
            {
                "__typename": "ProductVariant",
                "id": "3",
                "name": "Laptop 13 inch 16GB",
                "priceWithTax": 263880,
                "currencyCode": "USD",
                "sku": "L2201316",
                "stockLevel": "IN_STOCK",
                "featuredAsset": null
            },
            {
                "__typename": "ProductVariant",
                "id": "4",
                "name": "Laptop 15 inch 16GB",
                "priceWithTax": 275880,
                "currencyCode": "USD",
                "sku": "L2201516",
                "stockLevel": "IN_STOCK",
                "featuredAsset": null
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "2",
        "name": "Tablet",
        "description": "If the computer were invented today, what would it look like? It would be powerful enough for any task. So mobile you could take it everywhere. And so intuitive you could use it any way you wanted — with touch, a keyboard, or even a pencil. In other words, it wouldn’t really be a \"computer.\" It would be Tablet.",
        "collections": [
            {
                "__typename": "Collection",
                "id": "2",
                "slug": "electronics",
                "name": "Electronics",
                "breadcrumbs": [
                    {
                        "__typename": "CollectionBreadcrumb",
                        "id": "1",
                        "name": "_root_collection_",
                        "slug": "_root_collection_"
                    },
                    {
                        "__typename": "CollectionBreadcrumb",
                        "id": "2",
                        "name": "Electronics",
                        "slug": "electronics"
                    }
                ]
            },
            {
                "__typename": "Collection",
                "id": "3",
                "slug": "computers",
                "name": "Computers",
                "breadcrumbs": [
                    {
                        "__typename": "CollectionBreadcrumb",
                        "id": "1",
                        "name": "_root_collection_",
                        "slug": "_root_collection_"
                    },
                    {
                        "__typename": "CollectionBreadcrumb",
                        "id": "2",
                        "name": "Electronics",
                        "slug": "electronics"
                    },
                    {
                        "__typename": "CollectionBreadcrumb",
                        "id": "3",
                        "name": "Computers",
                        "slug": "computers"
                    }
                ]
            }
        ],
        "facetValues": [
            {
                "__typename": "FacetValue",
                "facet": {
                    "__typename": "Facet",
                    "id": "1",
                    "code": "category",
                    "name": "category"
                },
                "id": "1",
                "code": "electronics",
                "name": "Electronics"
            },
            {
                "__typename": "FacetValue",
                "facet": {
                    "__typename": "Facet",
                    "id": "1",
                    "code": "category",
                    "name": "category"
                },
                "id": "2",
                "code": "computers",
                "name": "Computers"
            },
            {
                "__typename": "FacetValue",
                "facet": {
                    "__typename": "Facet",
                    "id": "2",
                    "code": "brand",
                    "name": "brand"
                },
                "id": "3",
                "code": "apple",
                "name": "Apple"
            }
        ],
        "featuredAsset": {
            "__typename": "Asset",
            "id": "2",
            "preview": "https://demo.vendure.io/assets/preview/b8/kelly-sikkema-685291-unsplash__preview.jpg"
        },
        "assets": [
            {
                "__typename": "Asset",
                "id": "2",
                "preview": "https://demo.vendure.io/assets/preview/b8/kelly-sikkema-685291-unsplash__preview.jpg"
            }
        ],
        "variants": [
            {
                "__typename": "ProductVariant",
                "id": "5",
                "name": "Tablet 32GB",
                "priceWithTax": 39480,
                "currencyCode": "USD",
                "sku": "TBL200032",
                "stockLevel": "IN_STOCK",
                "featuredAsset": null
            },
            {
                "__typename": "ProductVariant",
                "id": "6",
                "name": "Tablet 128GB",
                "priceWithTax": 53400,
                "currencyCode": "USD",
                "sku": "TBL200128",
                "stockLevel": "IN_STOCK",
                "featuredAsset": null
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "3",
        "name": "Wireless Optical Mouse",
        "description": "The Logitech M185 Wireless Optical Mouse is a great device for any computer user, and as Logitech are the global market leaders for these devices, you are also guaranteed absolute reliability. A mouse to be reckoned with!",
        "collections": [
            {
                "__typename": "Collection",
                "id": "2",
                "slug": "electronics",
                "name": "Electronics",
                "breadcrumbs": [
                    {
                        "__typename": "CollectionBreadcrumb",
                        "id": "1",
                        "name": "_root_collection_",
                        "slug": "_root_collection_"
                    },
                    {
                        "__typename": "CollectionBreadcrumb",
                        "id": "2",
                        "name": "Electronics",
                        "slug": "electronics"
                    }
                ]
            },
            {
                "__typename": "Collection",
                "id": "3",
                "slug": "computers",
                "name": "Computers",
                "breadcrumbs": [
                    {
                        "__typename": "CollectionBreadcrumb",
                        "id": "1",
                        "name": "_root_collection_",
                        "slug": "_root_collection_"
                    },
                    {
                        "__typename": "CollectionBreadcrumb",
                        "id": "2",
                        "name": "Electronics",
                        "slug": "electronics"
                    },
                    {
                        "__typename": "CollectionBreadcrumb",
                        "id": "3",
                        "name": "Computers",
                        "slug": "computers"
                    }
                ]
            }
        ],
        "facetValues": [
            {
                "__typename": "FacetValue",
                "facet": {
                    "__typename": "Facet",
                    "id": "1",
                    "code": "category",
                    "name": "category"
                },
                "id": "1",
                "code": "electronics",
                "name": "Electronics"
            },
            {
                "__typename": "FacetValue",
                "facet": {
                    "__typename": "Facet",
                    "id": "1",
                    "code": "category",
                    "name": "category"
                },
                "id": "2",
                "code": "computers",
                "name": "Computers"
            },
            {
                "__typename": "FacetValue",
                "facet": {
                    "__typename": "Facet",
                    "id": "2",
                    "code": "brand",
                    "name": "brand"
                },
                "id": "4",
                "code": "logitech",
                "name": "Logitech"
            }
        ],
        "featuredAsset": {
            "__typename": "Asset",
            "id": "3",
            "preview": "https://demo.vendure.io/assets/preview/a1/oscar-ivan-esquivel-arteaga-687447-unsplash__preview.jpg"
        },
        "assets": [
            {
                "__typename": "Asset",
                "id": "3",
                "preview": "https://demo.vendure.io/assets/preview/a1/oscar-ivan-esquivel-arteaga-687447-unsplash__preview.jpg"
            }
        ],
        "variants": [
            {
                "__typename": "ProductVariant",
                "id": "7",
                "name": "Wireless Optical Mouse",
                "priceWithTax": 2279,
                "currencyCode": "USD",
                "sku": "834444",
                "stockLevel": "IN_STOCK",
                "featuredAsset": null
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "4",
        "name": "32-Inch Monitor",
        "description": "The UJ59 with Ultra HD resolution has 4x the pixels of Full HD, delivering more screen space and amazingly life-like images. That means you can view documents and webpages with less scrolling, work more comfortably with multiple windows and toolbars, and enjoy photos, videos and games in stunning 4K quality. Note: beverage not included.",
        "collections": [
            {
                "__typename": "Collection",
                "id": "2",
                "slug": "electronics",
                "name": "Electronics",
                "breadcrumbs": [
                    {
                        "__typename": "CollectionBreadcrumb",
                        "id": "1",
                        "name": "_root_collection_",
                        "slug": "_root_collection_"
                    },
                    {
                        "__typename": "CollectionBreadcrumb",
                        "id": "2",
                        "name": "Electronics",
                        "slug": "electronics"
                    }
                ]
            },
            {
                "__typename": "Collection",
                "id": "3",
                "slug": "computers",
                "name": "Computers",
                "breadcrumbs": [
                    {
                        "__typename": "CollectionBreadcrumb",
                        "id": "1",
                        "name": "_root_collection_",
                        "slug": "_root_collection_"
                    },
                    {
                        "__typename": "CollectionBreadcrumb",
                        "id": "2",
                        "name": "Electronics",
                        "slug": "electronics"
                    },
                    {
                        "__typename": "CollectionBreadcrumb",
                        "id": "3",
                        "name": "Computers",
                        "slug": "computers"
                    }
                ]
            }
        ],
        "facetValues": [
            {
                "__typename": "FacetValue",
                "facet": {
                    "__typename": "Facet",
                    "id": "1",
                    "code": "category",
                    "name": "category"
                },
                "id": "1",
                "code": "electronics",
                "name": "Electronics"
            },
            {
                "__typename": "FacetValue",
                "facet": {
                    "__typename": "Facet",
                    "id": "1",
                    "code": "category",
                    "name": "category"
                },
                "id": "2",
                "code": "computers",
                "name": "Computers"
            },
            {
                "__typename": "FacetValue",
                "facet": {
                    "__typename": "Facet",
                    "id": "2",
                    "code": "brand",
                    "name": "brand"
                },
                "id": "5",
                "code": "samsung",
                "name": "Samsung"
            }
        ],
        "featuredAsset": {
            "__typename": "Asset",
            "id": "4",
            "preview": "https://demo.vendure.io/assets/preview/d2/daniel-korpai-1302051-unsplash__preview.jpg"
        },
        "assets": [
            {
                "__typename": "Asset",
                "id": "4",
                "preview": "https://demo.vendure.io/assets/preview/d2/daniel-korpai-1302051-unsplash__preview.jpg"
            }
        ],
        "variants": [
            {
                "__typename": "ProductVariant",
                "id": "8",
                "name": "32-Inch Monitor",
                "priceWithTax": 37200,
                "currencyCode": "USD",
                "sku": "LU32J590UQUXEN",
                "stockLevel": "IN_STOCK",
                "featuredAsset": null
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "5",
        "name": "Curvy Monitor",
        "description": "Discover a truly immersive viewing experience with this monitor curved more deeply than any other. Wrapping around your field of vision the 1,800 R screencreates a wider field of view, enhances depth perception, and minimises peripheral distractions to draw you deeper in to your content.",
        "collections": [
            {
                "__typename": "Collection",
                "id": "2",
                "slug": "electronics",
                "name": "Electronics",
                "breadcrumbs": [
                    {
                        "__typename": "CollectionBreadcrumb",
                        "id": "1",
                        "name": "_root_collection_",
                        "slug": "_root_collection_"
                    },
                    {
                        "__typename": "CollectionBreadcrumb",
                        "id": "2",
                        "name": "Electronics",
                        "slug": "electronics"
                    }
                ]
            },
            {
                "__typename": "Collection",
                "id": "3",
                "slug": "computers",
                "name": "Computers",
                "breadcrumbs": [
                    {
                        "__typename": "CollectionBreadcrumb",
                        "id": "1",
                        "name": "_root_collection_",
                        "slug": "_root_collection_"
                    },
                    {
                        "__typename": "CollectionBreadcrumb",
                        "id": "2",
                        "name": "Electronics",
                        "slug": "electronics"
                    },
                    {
                        "__typename": "CollectionBreadcrumb",
                        "id": "3",
                        "name": "Computers",
                        "slug": "computers"
                    }
                ]
            }
        ],
        "facetValues": [
            {
                "__typename": "FacetValue",
                "facet": {
                    "__typename": "Facet",
                    "id": "1",
                    "code": "category",
                    "name": "category"
                },
                "id": "1",
                "code": "electronics",
                "name": "Electronics"
            },
            {
                "__typename": "FacetValue",
                "facet": {
                    "__typename": "Facet",
                    "id": "1",
                    "code": "category",
                    "name": "category"
                },
                "id": "2",
                "code": "computers",
                "name": "Computers"
            },
            {
                "__typename": "FacetValue",
                "facet": {
                    "__typename": "Facet",
                    "id": "2",
                    "code": "brand",
                    "name": "brand"
                },
                "id": "5",
                "code": "samsung",
                "name": "Samsung"
            }
        ],
        "featuredAsset": {
            "__typename": "Asset",
            "id": "5",
            "preview": "https://demo.vendure.io/assets/preview/9c/alexandru-acea-686569-unsplash__preview.jpg"
        },
        "assets": [
            {
                "__typename": "Asset",
                "id": "5",
                "preview": "https://demo.vendure.io/assets/preview/9c/alexandru-acea-686569-unsplash__preview.jpg"
            }
        ],
        "variants": [
            {
                "__typename": "ProductVariant",
                "id": "9",
                "name": "Curvy Monitor 24 inch",
                "priceWithTax": 17249,
                "currencyCode": "USD",
                "sku": "C24F390",
                "stockLevel": "IN_STOCK",
                "featuredAsset": null
            },
            {
                "__typename": "ProductVariant",
                "id": "10",
                "name": "Curvy Monitor 27 inch",
                "priceWithTax": 20393,
                "currencyCode": "USD",
                "sku": "C27F390",
                "stockLevel": "IN_STOCK",
                "featuredAsset": null
            }
        ]
    }
] as Array<Product>;