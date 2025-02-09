const products = [
  {
    id: 1,
    name: "Nintendo Switch 64 GB Console OLED Model",
    description: "Designed with an 8-inch screen size, the Nintendo Switch OLED has a 60 FPS value.",
    color: "red",
    price: 49.99,
    stock: 10,
    rating: 3,
    images: [
      { source: "https://cdn.dsmcdn.com/ty1439/product/media/images/prod/QC/20240724/14/702febfd-c503-37c8-8035-a5539c601488/1_org_zoom.jpg", alt: "Nintendo Switch OLED Front View" },
      { source: "https://cdn.dsmcdn.com/ty1372/product/media/images/prod/QC/20240612/14/488fa1e0-0d8c-352a-b1a7-0e616580246d/1_org_zoom.jpg", alt: "Nintendo Switch OLED Side View" }
    ],
    brand: "Nintendo",
    category: "Electronics",
    active: true,
    stockAddedDate: "2024-08-12",
  },
  {
    id: 2,
    name: "Playstation 5 Slim Digital Edition Console",
    description: "Released in 2020, this is the latest console in the PlayStation series.",
    color: "white",
    price: 99.99,
    stock: 20,
    rating: 3,
    images: [
      { source: "https://cdn.dsmcdn.com/ty1439/product/media/images/prod/QC/20240723/23/16a2f881-ec34-3a84-abe4-9a9cce59f68d/1_org_zoom.jpg", alt: "Playstation 5 Slim Front View" },
      { source: "https://cdn.dsmcdn.com/ty1473/product/media/images/prod/QC/20240811/10/480b10da-71ab-3cbf-8d19-3eafe621e8ea/1_org_zoom.jpg", alt: "Playstation 5 Slim Side View" }
    ],
    brand: "Sony",
    category: "Fashion",
    active: true,
    stockAddedDate: "2024-08-15",
  },
  {
    id: 3,
    name: "Switch 64 GB Console OLED Model",
    description: "Released in 2020, this is the latest console in the PlayStation series.",
    color: "white",
    price: 49.99,
    stock: 30,
    rating: 4,
    images: [
      { source: "https://cdn.dsmcdn.com/ty1403/product/media/images/prod/QC/20240705/11/d17f7849-ccc0-373b-ac68-f5e56c3d52f8/1_org_zoom.jpg", alt: "Switch OLED Front View" },
      { source: "https://cdn.dsmcdn.com/ty1475/product/media/images/prod/QC/20240809/23/908d46a4-0fd6-375b-8a86-a15bb1d0e4a7/1_org_zoom.jpg", alt: "Switch OLED Side View" }
    ],
    brand: "Sony",
    category: "Electronics",
    active: true,
    stockAddedDate: "2024-08-17",
  },
  {
    id: 4,
    name: "Playstation 5 Slim Standard",
    description: "Released in 2020, this is the latest console in the PlayStation series.",
    color: "white",
    price: 99.99,
    stock: 40,
    rating: 5,
    images: [
      { source: "https://cdn.dsmcdn.com/ty1439/product/media/images/prod/QC/20240724/08/89f75fca-ad31-3b43-a68e-98f397ecc032/1_org_zoom.jpg", alt: "Playstation 5 Slim Standard Front View" },
      { source: "https://cdn.dsmcdn.com/ty1470/product/media/images/prod/QC/20240809/14/a47ae603-2504-361d-a235-7441e822a39f/1_org_zoom.jpg", alt: "Playstation 5 Slim Standard Side View" }
    ],
    brand: "Sony",
    category: "Fashion",
    active: true,
    stockAddedDate: "2024-08-20",
  },
  {
    id: 5,
    name: "Playstation 5 Slim Digital Edition",
    description: "Released in 2020, this is the latest console in the PlayStation series.",
    color: "white",
    price: 49.99,
    stock: 50,
    rating: 3,
    images: [
      { source: "https://cdn.dsmcdn.com/ty1435/product/media/images/prod/QC/20240722/15/15f6bc0f-e5c5-32ba-8c4e-2eafe0977e42/1_org_zoom.jpg", alt: "Playstation 5 Slim Digital Edition Front View" },
      { source: "https://cdn.dsmcdn.com/ty603/product/media/images/20221118/16/217741105/626789178/1/1_org_zoom.jpg", alt: "Playstation 5 Slim Digital Edition Side View" }
    ],
    brand: "Sony",
    category: "Electronics",
    active: true,
    stockAddedDate: "2024-07-23",
  },
  {
    id: 6,
    name: "Xbox Controller Stand",
    description: "Released in 2020, this is the latest console in the PlayStation series.",
    color: "white",
    price: 99.99,
    stock: 60,
    rating: 1,
    images: [
      { source: "https://cdn.dsmcdn.com/ty1363/product/media/images/prod/QC/20240612/15/2005a7cc-9b21-3857-a3b7-6d9c815637c7/1_org_zoom.jpg", alt: "Xbox Controller Stand Front View" },
      { source: "https://cdn.dsmcdn.com/ty1427/product/media/images/prod/QC/20240718/10/d54ae22f-d10d-3b10-a3cc-32358d435756/1_org_zoom.jpg", alt: "Xbox Controller Stand Side View" }
    ],
    brand: "Sony",
    category: "Sport",
    active: true,
    stockAddedDate: "2024-08-26",
  },
  {
    id: 7,
    name: "One S 1 TB Display 12 Months",
    description: "Released in 2020, this is the latest console in the PlayStation series.",
    color: "white",
    price: 49.99,
    stock: 70,
    rating: 2,
    images: [
      { source: "https://cdn.dsmcdn.com/ty1358/product/media/images/prod/QC/20240607/11/77bff604-57cd-31b5-a3ba-d11f3d6bc750/1_org_zoom.jpg", alt: "One S 1 TB Display Front View" },
      { source: "https://cdn.dsmcdn.com/ty627/product/media/images/20221208/4/230465462/146540889/1/1_org_zoom.jpg", alt: "One S 1 TB Display Side View" }
    ],
    brand: "Sony",
    category: "Electronics",
    active: true,
    stockAddedDate: "2024-08-29",
  },
  {
    id: 8,
    name: "Playstation 5 Slim Standard",
    description: "Released in 2020, this is the latest console in the PlayStation series.",
    color: "white",
    price: 99.99,
    stock: 80,
    rating: 4,
    images: [
      { source: "https://cdn.dsmcdn.com/ty1405/product/media/images/prod/QC/20240707/13/1cf20386-2283-3b89-b091-dc6bae852532/1_org_zoom.jpg", alt: "Playstation 5 Slim Standard Front View" },
      { source: "https://cdn.dsmcdn.com/ty259/product/media/images/20211130/16/2087441/326346503/1/1_org_zoom.jpg", alt: "Playstation 5 Slim Standard Side View" }
    ],
    brand: "Sony",
    category: "Funny",
    active: true,
    stockAddedDate: "2024-07-02",
  },
  {
    id: 9,
    name: "Playstation 5 Marvels Spiderman",
    description: "Released in 2020, this is the latest console in the PlayStation series.",
    color: "white",
    price: 95,
    stock: 50,
    rating: 5,
    images: [
      { source: "https://cdn.dsmcdn.com/ty1149/product/media/images/prod/SPM/PIM/20240126/11/ba5c9f7a-4910-31f3-ae4d-9fddcb984d22/1_org_zoom.jpg", alt: "Playstation 5 Marvels Spiderman Front View" },
      { source: "https://cdn.dsmcdn.com/ty1355/product/media/images/prod/QC/20240606/02/e9a6d9f3-f2e8-39ad-98dc-e1da0192291f/1_org_zoom.jpg", alt: "Playstation 5 Marvels Spiderman Side View" }
    ],
    brand: "Sony",
    category: "Playstation",
    active: true,
    stockAddedDate: "2024-07-05",
  },
];

export default products;
