import React from "react";

export const Categories = {
    MASO: "maso",
    TOPINKA: "topinka",
    SYR: "sýr"
}

export class Ingredient {
    constructor(ID, name, category) {
        this.ID = ID;
        this.name = name;
        this.category = category;
    }
}

export const PizzaContext = React.createContext({ingredients :
    [
        new Ingredient(1, "kuřecí", Categories.MASO),
        new Ingredient(2, "hovězí", Categories.MASO),
        new Ingredient(3, "vepřové", Categories.MASO),
        new Ingredient(8, "salám", Categories.MASO),
        new Ingredient(9, "šunka", Categories.MASO),
        new Ingredient(10, "slanina", Categories.MASO),
        new Ingredient(4, "čedar", Categories.SYR),
        new Ingredient(5, "mocarela", Categories.SYR),
        new Ingredient(6, "smetanový základ", Categories.TOPINKA),
        new Ingredient(7, "rajčatový základ", Categories.TOPINKA)
    ]
});


