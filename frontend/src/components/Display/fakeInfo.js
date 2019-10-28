// ============================================================
// FAKE INFO HOME
// ============================================================

// eslint-disable-next-line no-unused-expressions
let randomImg = () => {return `https://source.unsplash.com/random/${Math.floor((Math.random() * 100) + 1)}`};

const fakeInfoHome =

[
    {   
        groupTitle: "Ultimas Listas", 
        groupType: "scrollH", 
        groupUrl: "/listas", 
        items:
            [
                {image: randomImg(), type: "squareM", description: "Bikinis Chic", author: "Mafer Neyra"},
                {image: randomImg(), type: "squareM", description: "Vestidos Rua", author: "Palodirtyano"},
                {image: randomImg(), type: "squareM", description: "Fitness Queen", author: "Ale Chavez"},
                {image: randomImg(), type: "squareM", description: "Bikinis Chic", author: "Mafer Neyra"},
                {image: randomImg(), type: "squareM", description: "Vestidos Rua", author: "Palodirtyano"},
                {image: randomImg(), type: "squareM", description: "Fitness Queen", author: "Ale Chavez"},
                {image: randomImg(), type: "squareM", description: "Bikinis Chic", author: "Mafer Neyra"},
                {image: randomImg(), type: "squareM", description: "Vestidos Rua", author: "Palodirtyano"},
                {image: randomImg(), type: "squareM", description: "Fitness Queen", author: "Ale Chavez"},
            ]
    },
    {
        groupTitle: "Creadores", 
        groupType: "scrollH", 
        groupUrl: "/creadores", 
        items:
            [
                {image: randomImg(), type: "circleM", description: "Palodirtyano"},
                {image: randomImg(), type: "circleM", description: "Mafer Neyra"},
                {image: randomImg(), type: "circleM", description: "Ximena Moral"},
                {image: randomImg(), type: "circleM", description: "Palodirtyano"},
                {image: randomImg(), type: "circleM", description: "Mafer Neyra"},
                {image: randomImg(), type: "circleM", description: "Ximena Moral"},
                {image: randomImg(), type: "circleM", description: "Palodirtyano"},
                {image: randomImg(), type: "circleM", description: "Mafer Neyra"},
                {image: randomImg(), type: "circleM", description: "Ximena Moral"},
        
            ]
    },
    {groupTitle: "Marcas", groupType: "scrollH", groupUrl: "/marcas", items:
[
        {image: randomImg(), type: "circleM", description: "Capittana"},
        {image: randomImg(), type: "circleM", description: "Late La Tela"},
        {image: randomImg(), type: "circleM", description: "Naga"},
        {image: randomImg(), type: "circleM", description: "Capittana"},
        {image: randomImg(), type: "circleM", description: "Late La Tela"},
        {image: randomImg(), type: "circleM", description: "Naga"},
        {image: randomImg(), type: "circleM", description: "Capittana"},
        {image: randomImg(), type: "circleM", description: "Late La Tela"},
        {image: randomImg(), type: "circleM", description: "Naga"},
]},
    {groupTitle: "Categorias", groupType: "scrollH", groupUrl: "/categorias", items:
[
        {image: randomImg(), type: "circleM", description: "Ropas de baño"},
        {image: randomImg(), type: "circleM", description: "Vestidos"},
        {image: randomImg(), type: "circleM", description: "Calzado"},
        {image: randomImg(), type: "circleM", description: "Ropas de baño"},
        {image: randomImg(), type: "circleM", description: "Vestidos"},
        {image: randomImg(), type: "circleM", description: "Calzado"},
        {image: randomImg(), type: "circleM", description: "Ropas de baño"},
        {image: randomImg(), type: "circleM", description: "Vestidos"},
        {image: randomImg(), type: "circleM", description: "Calzado"},
]},

];

// ============================================================
// FAKE INFO CATEGORIAS
// ============================================================

const fakeInfoCategorias =

[
    {groupTitle: "Ropas de baño", groupType: "scrollH", groupUrl: "/categorias/swimwear", items:
[
        {image: randomImg(), type: "squareM", description: "Bikini Ibiza", author: "Capittana", price: 59.99},
        {image: randomImg(), type: "squareM", description: "Onepiece Cutie", author: "Naga", price: 34.99},
        {image: randomImg(), type: "squareM", description: "Bikini Animal Print", author: "Late La Tela", price: 29.99},
        {image: randomImg(), type: "squareM", description: "Bikini Ibiza", author: "Capittana", price: 59.99},
        {image: randomImg(), type: "squareM", description: "Onepiece Cutie", author: "Naga", price: 34.99},
        {image: randomImg(), type: "squareM", description: "Bikini Animal Print", author: "Late La Tela", price: 29.99},
        {image: randomImg(), type: "squareM", description: "Bikini Ibiza", author: "Capittana", price: 59.99},
        {image: randomImg(), type: "squareM", description: "Onepiece Cutie", author: "Naga", price: 34.99},
        {image: randomImg(), type: "squareM", description: "Bikini Animal Print", author: "Late La Tela", price: 29.99},

]},
    {groupTitle: "Vestidos", groupType: "scrollH", groupUrl: "/categorias/vestidos", items:
[
        {image: randomImg(), type: "squareM", description: "Vestido Duquesa", author: "Naga", price: 75.99},
        {image: randomImg(), type: "squareM", description: "Vestido Marina", author: "Capittana", price: 34.99},
        {image: randomImg(), type: "squareM", description: "Vestido Duquesa", author: "Late La Tela", price: 19.99},
        {image: randomImg(), type: "squareM", description: "Vestido Duquesa", author: "Naga", price: 75.99},
        {image: randomImg(), type: "squareM", description: "Vestido Marina", author: "Capittana", price: 34.99},
        {image: randomImg(), type: "squareM", description: "Vestido Duquesa", author: "Late La Tela", price: 19.99},
        {image: randomImg(), type: "squareM", description: "Vestido Duquesa", author: "Naga", price: 75.99},
        {image: randomImg(), type: "squareM", description: "Vestido Marina", author: "Capittana", price: 34.99},
        {image: randomImg(), type: "squareM", description: "Vestido Duquesa", author: "Late La Tela", price: 19.99},
]},
    {groupTitle: "Calzado", groupType: "scrollH", groupUrl: "/categorias/calzado", items:
[
        {image: randomImg(), type: "squareM", description: "Botas Old Country", author: "Capittana", price: 99.99},
        {image: randomImg(), type: "squareM", description: "Valerines Mary Poppins", author: "Late La Tela", price: 65.99},
        {image: randomImg(), type: "squareM", description: "Tacos Femme Fatale", author: "Naga", price: 149.99},
        {image: randomImg(), type: "squareM", description: "Botas Old Country", author: "Capittana", price: 99.99},
        {image: randomImg(), type: "squareM", description: "Valerines Mary Poppins", author: "Late La Tela", price: 65.99},
        {image: randomImg(), type: "squareM", description: "Tacos Femme Fatale", author: "Naga", price: 149.99},
        {image: randomImg(), type: "squareM", description: "Botas Old Country", author: "Capittana", price: 99.99},
        {image: randomImg(), type: "squareM", description: "Valerines Mary Poppins", author: "Late La Tela", price: 65.99},
        {image: randomImg(), type: "squareM", description: "Tacos Femme Fatale", author: "Naga", price: 149.99},
]},
    {groupTitle: "Blusas", groupType: "scrollH", groupUrl: "/categorias/blusas", items:
[
        {image: randomImg(), type: "squareM", description: "Blusa Boss Woman", author: "Capittana", price: 59.99},
        {image: randomImg(), type: "squareM", description: "Blusa Flower Power", author: "Late La Tela", price: 49.99},
        {image: randomImg(), type: "squareM", description: "Blusa Suit Up", author: "Naga", price: 199.99},
        {image: randomImg(), type: "squareM", description: "Blusa Boss Woman", author: "Capittana", price: 59.99},
        {image: randomImg(), type: "squareM", description: "Blusa Flower Power", author: "Late La Tela", price: 49.99},
        {image: randomImg(), type: "squareM", description: "Blusa Suit Up", author: "Naga", price: 199.99},
        {image: randomImg(), type: "squareM", description: "Blusa Boss Woman", author: "Capittana", price: 59.99},
        {image: randomImg(), type: "squareM", description: "Blusa Flower Power", author: "Late La Tela", price: 49.99},
        {image: randomImg(), type: "squareM", description: "Blusa Suit Up", author: "Naga", price: 199.99},
]},

];

// ============================================================
// FAKE INFO CATEGORIA
// ============================================================

const fakeInfoCategoria =

[
    {groupTitle: "Ropas de Baño", groupType: "scrollV", items:
    [
        {image: randomImg(), type: "squareL", description: "Bikini Ibiza", author: "Capittana", price: 59.99},
        {image: randomImg(), type: "squareL", description: "Onepiece Cutie", author: "Naga", price: 34.99},
        {image: randomImg(), type: "squareL", description: "Bikini Animal Print", author: "Late La Tela", price: 29.99},
        {image: randomImg(), type: "squareL", description: "Bikini Ibiza", author: "Capittana", price: 59.99},
        {image: randomImg(), type: "squareL", description: "Onepiece Cutie", author: "Naga", price: 34.99},
        {image: randomImg(), type: "squareL", description: "Bikini Animal Print", author: "Late La Tela", price: 29.99},
        {image: randomImg(), type: "squareL", description: "Bikini Ibiza", author: "Capittana", price: 59.99},
        {image: randomImg(), type: "squareL", description: "Onepiece Cutie", author: "Naga", price: 34.99},
        {image: randomImg(), type: "squareL", description: "Bikini Animal Print", author: "Late La Tela", price: 29.99},
        {image: randomImg(), type: "squareL", description: "Bikini Ibiza", author: "Capittana", price: 59.99},

    ]}
];

// ============================================================
// FAKE INFO CREADORES
// ============================================================

const fakeInfoCreadores =

[
    {groupTitle: "Palodirtyano", groupType: "scrollH", groupUrl: "/creadores/palodirtyano", items:
[
        {image: randomImg(), type: "squareM", description: "Bikini Ibiza", author: "Capittana", price: 59.99},
        {image: randomImg(), type: "squareM", description: "Onepiece Cutie", author: "Naga", price: 34.99},
        {image: randomImg(), type: "squareM", description: "Bikini Animal Print", author: "Late La Tela", price: 29.99},
        {image: randomImg(), type: "squareM", description: "Bikini Ibiza", author: "Capittana", price: 59.99},
        {image: randomImg(), type: "squareM", description: "Onepiece Cutie", author: "Naga", price: 34.99},
        {image: randomImg(), type: "squareM", description: "Bikini Animal Print", author: "Late La Tela", price: 29.99},
        {image: randomImg(), type: "squareM", description: "Bikini Ibiza", author: "Capittana", price: 59.99},
        {image: randomImg(), type: "squareM", description: "Onepiece Cutie", author: "Naga", price: 34.99},
        {image: randomImg(), type: "squareM", description: "Bikini Animal Print", author: "Late La Tela", price: 29.99},

]},
    {groupTitle: "Mafer Neyra", groupType: "scrollH", groupUrl: "/creadores/maferneyra", items:
[
        {image: randomImg(), type: "squareM", description: "Vestido Duquesa", author: "Naga", price: 75.99},
        {image: randomImg(), type: "squareM", description: "Vestido Marina", author: "Capittana", price: 34.99},
        {image: randomImg(), type: "squareM", description: "Vestido Duquesa", author: "Late La Tela", price: 19.99},
        {image: randomImg(), type: "squareM", description: "Vestido Duquesa", author: "Naga", price: 75.99},
        {image: randomImg(), type: "squareM", description: "Vestido Marina", author: "Capittana", price: 34.99},
        {image: randomImg(), type: "squareM", description: "Vestido Duquesa", author: "Late La Tela", price: 19.99},
        {image: randomImg(), type: "squareM", description: "Vestido Duquesa", author: "Naga", price: 75.99},
        {image: randomImg(), type: "squareM", description: "Vestido Marina", author: "Capittana", price: 34.99},
        {image: randomImg(), type: "squareM", description: "Vestido Duquesa", author: "Late La Tela", price: 19.99},
]},
    {groupTitle: "Ximena Moral", groupType: "scrollH", groupUrl: "/creadores/ximenamoral", items:
[
        {image: randomImg(), type: "squareM", description: "Botas Old Country", author: "Capittana", price: 99.99},
        {image: randomImg(), type: "squareM", description: "Valerines Mary Poppins", author: "Late La Tela", price: 65.99},
        {image: randomImg(), type: "squareM", description: "Tacos Femme Fatale", author: "Naga", price: 149.99},
        {image: randomImg(), type: "squareM", description: "Botas Old Country", author: "Capittana", price: 99.99},
        {image: randomImg(), type: "squareM", description: "Valerines Mary Poppins", author: "Late La Tela", price: 65.99},
        {image: randomImg(), type: "squareM", description: "Tacos Femme Fatale", author: "Naga", price: 149.99},
        {image: randomImg(), type: "squareM", description: "Botas Old Country", author: "Capittana", price: 99.99},
        {image: randomImg(), type: "squareM", description: "Valerines Mary Poppins", author: "Late La Tela", price: 65.99},
        {image: randomImg(), type: "squareM", description: "Tacos Femme Fatale", author: "Naga", price: 149.99},
]},
    {groupTitle: "Alejandra Chavez", groupType: "scrollH", groupUrl: "/creadores/alechavez", items:
[
        {image: randomImg(), type: "squareM", description: "Blusa Boss Woman", author: "Capittana", price: 59.99},
        {image: randomImg(), type: "squareM", description: "Blusa Flower Power", author: "Late La Tela", price: 49.99},
        {image: randomImg(), type: "squareM", description: "Blusa Suit Up", author: "Naga", price: 199.99},
        {image: randomImg(), type: "squareM", description: "Blusa Boss Woman", author: "Capittana", price: 59.99},
        {image: randomImg(), type: "squareM", description: "Blusa Flower Power", author: "Late La Tela", price: 49.99},
        {image: randomImg(), type: "squareM", description: "Blusa Suit Up", author: "Naga", price: 199.99},
        {image: randomImg(), type: "squareM", description: "Blusa Boss Woman", author: "Capittana", price: 59.99},
        {image: randomImg(), type: "squareM", description: "Blusa Flower Power", author: "Late La Tela", price: 49.99},
        {image: randomImg(), type: "squareM", description: "Blusa Suit Up", author: "Naga", price: 199.99},
]},

];

// ============================================================
// FAKE INFO CREADOR
// ============================================================

const fakeInfoCreador =

[
    {groupTitle: "Listas", groupType: "scrollH", groupUrl: "/creadores/palodirtyano/lista", items:
[
        {image: randomImg(), type: "squareM", description: "Bikinis Chic"},
        {image: randomImg(), type: "squareM", description: "Vestidos Rua"},
        {image: randomImg(), type: "squareM", description: "Fitness Queen"},
        {image: randomImg(), type: "squareM", description: "Bikinis Chic"},
        {image: randomImg(), type: "squareM", description: "Vestidos Rua"},
        {image: randomImg(), type: "squareM", description: "Fitness Queen"},
        {image: randomImg(), type: "squareM", description: "Bikinis Chic"},
        {image: randomImg(), type: "squareM", description: "Vestidos Rua"},
        {image: randomImg(), type: "squareM", description: "Fitness Queen"},

]},
    {groupTitle: "Vestidos", groupType: "scrollH", groupUrl: "/creadores/palodirtyano/vestidos", items:
[
        {image: randomImg(), type: "squareM", description: "Vestido Duquesa", author: "Naga", price: 75.99},
        {image: randomImg(), type: "squareM", description: "Vestido Marina", author: "Capittana", price: 34.99},
        {image: randomImg(), type: "squareM", description: "Vestido Duquesa", author: "Late La Tela", price: 19.99},
        {image: randomImg(), type: "squareM", description: "Vestido Duquesa", author: "Naga", price: 75.99},
        {image: randomImg(), type: "squareM", description: "Vestido Marina", author: "Capittana", price: 34.99},
        {image: randomImg(), type: "squareM", description: "Vestido Duquesa", author: "Late La Tela", price: 19.99},
        {image: randomImg(), type: "squareM", description: "Vestido Duquesa", author: "Naga", price: 75.99},
        {image: randomImg(), type: "squareM", description: "Vestido Marina", author: "Capittana", price: 34.99},
        {image: randomImg(), type: "squareM", description: "Vestido Duquesa", author: "Late La Tela", price: 19.99},
]},
    {groupTitle: "Calzado", groupType: "scrollH", groupUrl: "/creadores/palodirtyano/calzado", items:
[
        {image: randomImg(), type: "squareM", description: "Botas Old Country", author: "Capittana", price: 99.99},
        {image: randomImg(), type: "squareM", description: "Valerines Mary Poppins", author: "Late La Tela", price: 65.99},
        {image: randomImg(), type: "squareM", description: "Tacos Femme Fatale", author: "Naga", price: 149.99},
        {image: randomImg(), type: "squareM", description: "Botas Old Country", author: "Capittana", price: 99.99},
        {image: randomImg(), type: "squareM", description: "Valerines Mary Poppins", author: "Late La Tela", price: 65.99},
        {image: randomImg(), type: "squareM", description: "Tacos Femme Fatale", author: "Naga", price: 149.99},
        {image: randomImg(), type: "squareM", description: "Botas Old Country", author: "Capittana", price: 99.99},
        {image: randomImg(), type: "squareM", description: "Valerines Mary Poppins", author: "Late La Tela", price: 65.99},
        {image: randomImg(), type: "squareM", description: "Tacos Femme Fatale", author: "Naga", price: 149.99},
]},
    {groupTitle: "Blusas", groupType: "scrollH", groupUrl: "/creadores/palodirtyano/blusas", items:
[
        {image: randomImg(), type: "squareM", description: "Blusa Boss Woman", author: "Capittana", price: 59.99},
        {image: randomImg(), type: "squareM", description: "Blusa Flower Power", author: "Late La Tela", price: 49.99},
        {image: randomImg(), type: "squareM", description: "Blusa Suit Up", author: "Naga", price: 199.99},
        {image: randomImg(), type: "squareM", description: "Blusa Boss Woman", author: "Capittana", price: 59.99},
        {image: randomImg(), type: "squareM", description: "Blusa Flower Power", author: "Late La Tela", price: 49.99},
        {image: randomImg(), type: "squareM", description: "Blusa Suit Up", author: "Naga", price: 199.99},
        {image: randomImg(), type: "squareM", description: "Blusa Boss Woman", author: "Capittana", price: 59.99},
        {image: randomImg(), type: "squareM", description: "Blusa Flower Power", author: "Late La Tela", price: 49.99},
        {image: randomImg(), type: "squareM", description: "Blusa Suit Up", author: "Naga", price: 199.99},
]},

];

// ============================================================
// FAKE INFO MARCAS
// ============================================================

const fakeInfoMarcas =

[
    {groupTitle: "Late La Tela", groupType: "scrollH", groupUrl: "/marcas/latelatela", items:
[
        {image: randomImg(), type: "squareM", description: "Bikini Ibiza", author: "Late La Tela", price: 59.99},
        {image: randomImg(), type: "squareM", description: "Onepiece Cutie", author: "Late La Tela", price: 34.99},
        {image: randomImg(), type: "squareM", description: "Bikini Animal Print", author: "Late La Tela", price: 29.99},
        {image: randomImg(), type: "squareM", description: "Bikini Ibiza", author: "Late La Tela", price: 59.99},
        {image: randomImg(), type: "squareM", description: "Onepiece Cutie", author: "Late La Tela", price: 34.99},
        {image: randomImg(), type: "squareM", description: "Bikini Animal Print", author: "Late La Tela", price: 29.99},
        {image: randomImg(), type: "squareM", description: "Bikini Ibiza", author: "Late La Tela", price: 59.99},
        {image: randomImg(), type: "squareM", description: "Onepiece Cutie", author: "Late La Tela", price: 34.99},
        {image: randomImg(), type: "squareM", description: "Bikini Animal Print", author: "Late La Tela", price: 29.99},
]},
    {groupTitle: "Capittana", groupType: "scrollH", groupUrl: "/marcas/capittana", items:
[
        {image: randomImg(), type: "squareM", description: "Vestido Duquesa", author: "Capittana", price: 75.99},
        {image: randomImg(), type: "squareM", description: "Vestido Marina", author: "Capittana", price: 34.99},
        {image: randomImg(), type: "squareM", description: "Vestido Duquesa", author: "Capittana", price: 19.99},
        {image: randomImg(), type: "squareM", description: "Vestido Duquesa", author: "Capittana", price: 75.99},
        {image: randomImg(), type: "squareM", description: "Vestido Marina", author: "Capittana", price: 34.99},
        {image: randomImg(), type: "squareM", description: "Vestido Duquesa", author: "Capittana", price: 19.99},
        {image: randomImg(), type: "squareM", description: "Vestido Duquesa", author: "Capittana", price: 75.99},
        {image: randomImg(), type: "squareM", description: "Vestido Marina", author: "Capittana", price: 34.99},
        {image: randomImg(), type: "squareM", description: "Vestido Duquesa", author: "Capittana", price: 19.99},
]},
    {groupTitle: "Naga", groupType: "scrollH", groupUrl: "/marcas/naga", items:
[
        {image: randomImg(), type: "squareM", description: "Botas Old Country", author: "Naga", price: 99.99},
        {image: randomImg(), type: "squareM", description: "Valerines Mary Poppins", author: "Naga", price: 65.99},
        {image: randomImg(), type: "squareM", description: "Tacos Femme Fatale", author: "Naga", price: 149.99},
        {image: randomImg(), type: "squareM", description: "Botas Old Country", author: "Naga", price: 99.99},
        {image: randomImg(), type: "squareM", description: "Valerines Mary Poppins", author: "Naga", price: 65.99},
        {image: randomImg(), type: "squareM", description: "Tacos Femme Fatale", author: "Naga", price: 149.99},
        {image: randomImg(), type: "squareM", description: "Botas Old Country", author: "Naga", price: 99.99},
        {image: randomImg(), type: "squareM", description: "Valerines Mary Poppins", author: "Naga", price: 65.99},
        {image: randomImg(), type: "squareM", description: "Tacos Femme Fatale", author: "Naga", price: 149.99},
]},
    {groupTitle: "Vivi Woo", groupType: "scrollH", groupUrl: "/marcas/viviwoo", items:
[
        {image: randomImg(), type: "squareM", description: "Blusa Boss Woman", author: "Vivi Woo", price: 59.99},
        {image: randomImg(), type: "squareM", description: "Blusa Flower Power", author: "Vivi Woo", price: 49.99},
        {image: randomImg(), type: "squareM", description: "Blusa Suit Up", author: "Vivi Woo", price: 199.99},
        {image: randomImg(), type: "squareM", description: "Blusa Boss Woman", author: "Vivi Woo", price: 59.99},
        {image: randomImg(), type: "squareM", description: "Blusa Flower Power", author: "Vivi Woo", price: 49.99},
        {image: randomImg(), type: "squareM", description: "Blusa Suit Up", author: "Vivi Woo", price: 199.99},
        {image: randomImg(), type: "squareM", description: "Blusa Boss Woman", author: "Vivi Woo", price: 59.99},
        {image: randomImg(), type: "squareM", description: "Blusa Flower Power", author: "Vivi Woo", price: 49.99},
        {image: randomImg(), type: "squareM", description: "Blusa Suit Up", author: "Vivi Woo", price: 199.99},
]},

];

// ============================================================
// FAKE INFO MARCA
// ============================================================

const fakeInfoMarca =


[
    {groupTitle: "Listas", groupType: "scrollH", groupUrl: "/marcas/capittana/lista", items:
[
        {image: randomImg(), type: "squareM", description: "Colección primavera"},
        {image: randomImg(), type: "squareM", description: "Invierno en Liquidación"},
        {image: randomImg(), type: "squareM", description: "Favoritas del Mes"},
        {image: randomImg(), type: "squareM", description: "Colección primavera"},
        {image: randomImg(), type: "squareM", description: "Invierno en Liquidación"},
        {image: randomImg(), type: "squareM", description: "Favoritas del Mes"},
        {image: randomImg(), type: "squareM", description: "Colección primavera"},
        {image: randomImg(), type: "squareM", description: "Invierno en Liquidación"},
        {image: randomImg(), type: "squareM", description: "Favoritas del Mes"},

]},
    {groupTitle: "Vestidos", groupType: "scrollH", groupUrl: "/marcas/capittana/vestidos", items:
[
        {image: randomImg(), type: "squareM", description: "Vestido Duquesa", author: "Naga", price: 75.99},
        {image: randomImg(), type: "squareM", description: "Vestido Marina", author: "Capittana", price: 34.99},
        {image: randomImg(), type: "squareM", description: "Vestido Duquesa", author: "Late La Tela", price: 19.99},
        {image: randomImg(), type: "squareM", description: "Vestido Duquesa", author: "Naga", price: 75.99},
        {image: randomImg(), type: "squareM", description: "Vestido Marina", author: "Capittana", price: 34.99},
        {image: randomImg(), type: "squareM", description: "Vestido Duquesa", author: "Late La Tela", price: 19.99},
        {image: randomImg(), type: "squareM", description: "Vestido Duquesa", author: "Naga", price: 75.99},
        {image: randomImg(), type: "squareM", description: "Vestido Marina", author: "Capittana", price: 34.99},
        {image: randomImg(), type: "squareM", description: "Vestido Duquesa", author: "Late La Tela", price: 19.99},
]},
    {groupTitle: "Calzado", groupType: "scrollH", groupUrl: "/marcas/capittana/calzado", items:
[
        {image: randomImg(), type: "squareM", description: "Botas Old Country", author: "Capittana", price: 99.99},
        {image: randomImg(), type: "squareM", description: "Valerines Mary Poppins", author: "Late La Tela", price: 65.99},
        {image: randomImg(), type: "squareM", description: "Tacos Femme Fatale", author: "Naga", price: 149.99},
        {image: randomImg(), type: "squareM", description: "Botas Old Country", author: "Capittana", price: 99.99},
        {image: randomImg(), type: "squareM", description: "Valerines Mary Poppins", author: "Late La Tela", price: 65.99},
        {image: randomImg(), type: "squareM", description: "Tacos Femme Fatale", author: "Naga", price: 149.99},
        {image: randomImg(), type: "squareM", description: "Botas Old Country", author: "Capittana", price: 99.99},
        {image: randomImg(), type: "squareM", description: "Valerines Mary Poppins", author: "Late La Tela", price: 65.99},
        {image: randomImg(), type: "squareM", description: "Tacos Femme Fatale", author: "Naga", price: 149.99},
]},
    {groupTitle: "Blusas", groupType: "scrollH", groupUrl: "/marcas/capittana/blusas", items:
[
        {image: randomImg(), type: "squareM", description: "Blusa Boss Woman", author: "Capittana", price: 59.99},
        {image: randomImg(), type: "squareM", description: "Blusa Flower Power", author: "Late La Tela", price: 49.99},
        {image: randomImg(), type: "squareM", description: "Blusa Suit Up", author: "Naga", price: 199.99},
        {image: randomImg(), type: "squareM", description: "Blusa Boss Woman", author: "Capittana", price: 59.99},
        {image: randomImg(), type: "squareM", description: "Blusa Flower Power", author: "Late La Tela", price: 49.99},
        {image: randomImg(), type: "squareM", description: "Blusa Suit Up", author: "Naga", price: 199.99},
        {image: randomImg(), type: "squareM", description: "Blusa Boss Woman", author: "Capittana", price: 59.99},
        {image: randomImg(), type: "squareM", description: "Blusa Flower Power", author: "Late La Tela", price: 49.99},
        {image: randomImg(), type: "squareM", description: "Blusa Suit Up", author: "Naga", price: 199.99},
]},

];

// ============================================================
// FAKE INFO LISTAS
// ============================================================

const fakeInfoListas =

[
    {groupTitle: "", groupType: "scrollV", items:
    [
        {image: randomImg(), type: "squareL", description: "Bikinis Chic", author: "Mafer Neyra"},
        {image: randomImg(), type: "squareL", description: "Vestidos Rua", author: "Palodirtyano"},
        {image: randomImg(), type: "squareL", description: "Fitness Queen", author: "Ale Chavez"},
        {image: randomImg(), type: "squareL", description: "Bikinis Chic", author: "Mafer Neyra"},
        {image: randomImg(), type: "squareL", description: "Vestidos Rua", author: "Palodirtyano"},
        {image: randomImg(), type: "squareL", description: "Fitness Queen", author: "Ale Chavez"},
        {image: randomImg(), type: "squareL", description: "Bikinis Chic", author: "Mafer Neyra"},
        {image: randomImg(), type: "squareL", description: "Vestidos Rua", author: "Palodirtyano"},
        {image: randomImg(), type: "squareL", description: "Fitness Queen", author: "Ale Chavez"},

    ]}
];



// ============================================================
// FAKE INFO LISTA
// ============================================================

const fakeInfoLista =

[
    {groupTitle: "Bikinis Chic", groupType: "scrollV", items:
    [
        {image: "https://source.unsplash.com/random/1", type: "squareL", description: "Bikini Ibiza", author: "Capittana", price: 59.99},
        {image: "https://source.unsplash.com/random/2", type: "squareL", description: "Onepiece Cutie", author: "Naga", price: 34.99},
        {image: "https://source.unsplash.com/random/3", type: "squareL", description: "Bikini Animal Print", author: "Late La Tela", price: 29.99},
        {image: "https://source.unsplash.com/random/4", type: "squareL", description: "Bikini Ibiza", author: "Capittana", price: 59.99},
        {image: "https://source.unsplash.com/random/5", type: "squareL", description: "Onepiece Cutie", author: "Naga", price: 34.99},
        {image: "https://source.unsplash.com/random/6", type: "squareL", description: "Bikini Animal Print", author: "Late La Tela", price: 29.99},
        {image: "https://source.unsplash.com/random/7", type: "squareL", description: "Bikini Ibiza", author: "Capittana", price: 59.99},
        {image: "https://source.unsplash.com/random/8", type: "squareL", description: "Onepiece Cutie", author: "Naga", price: 34.99},
        {image: "https://source.unsplash.com/random/9", type: "squareL", description: "Bikini Animal Print", author: "Late La Tela", price: 29.99},
        {image: "https://source.unsplash.com/random/10", type: "squareL", description: "Bikini Ibiza", author: "Capittana", price: 59.99},

    ]}
];

// ============================================================
// FAKE PRODUCTO
// ============================================================

    const fakeInfoProduct = 
    {
        image: [
            "https://source.unsplash.com/random/1", 
            "https://source.unsplash.com/random/2", 
            "https://source.unsplash.com/random/3", 
            "https://source.unsplash.com/random/4", 
            "https://source.unsplash.com/random/5", 
            "https://source.unsplash.com/random/6"
        ],
        type: "squareXL",
        description: "Bikini Ibiza",
        author: "Capittana",
        price: 59.99,
        shipping: 5.00,
        options: ["Negro", "Rojo", "Blanco"],
        sizes: ["XS", "S", "M", "L", "XL"],
    };

// ============================================================
// FAKE INFO CART
// ============================================================

const fakeInfoCart =
[
 {groupTitle: "", groupType: "cart", items:
    [
        {image: "https://source.unsplash.com/random/1", type: "squareS", description: "Bikini Ibiza", author: "Capittana", price: 59.99},
        {image: "https://source.unsplash.com/random/2", type: "squareS", description: "Onepiece Cutie", author: "Naga", price: 34.99},
        {image: "https://source.unsplash.com/random/3", type: "squareS", description: "Bikini Animal Print", author: "Late La Tela", price: 29.99},
        {image: "https://source.unsplash.com/random/4", type: "squareS", description: "Bikini Ibiza", author: "Capittana", price: 59.99},
    ]}
];

// ============================================================
// EXPORT
// ============================================================

export { fakeInfoHome, fakeInfoCategorias, fakeInfoCategoria, fakeInfoCreadores, fakeInfoCreador, 
        fakeInfoMarcas, fakeInfoMarca, fakeInfoListas, fakeInfoLista, fakeInfoProduct, fakeInfoCart};