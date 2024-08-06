export interface IProduct {
  name: string;
  price: string;
}

class CoffeeDrink implements IProduct {
  name: string;
  price: string;

  constructor(name: string, price: string) {
    this.name = name;
    this.price = price;
  }
}

class SpecialDrink implements IProduct {
  name: string;
  price: string;

  constructor(name: string, price: string) {
    this.name = name;
    this.price = price;
  }
}

class NonAlcoholicDrink implements IProduct {
  name: string;
  price: string;

  constructor(name: string, price: string) {
    this.name = name;
    this.price = price;
  }
}

class AlcoholicDrink implements IProduct {
  name: string;
  price: string;

  constructor(name: string, price: string) {
    this.name = name;
    this.price = price;
  }
}

export interface IMenu {
  coffeeDrinkList: CoffeeDrink[];
  specialDrinkList: SpecialDrink[];
  nonAlcoholicDrinkList: NonAlcoholicDrink[];
  alcoholicDrinkList: AlcoholicDrink[];
}

export const menu: IMenu = {
  coffeeDrinkList: [
    new CoffeeDrink("LATTE | CAPUCCINO", "10"),
    new CoffeeDrink("FILTRADO | AMERICANO", "8"),
    new CoffeeDrink("ESPRESSO SIMPLE | DOBLE", "8"),
    new CoffeeDrink("CORTADITO | MACCIATO", "8"),
    new CoffeeDrink("MATCHA", "14"),
    new CoffeeDrink("CHOCO CALIENTE", "14"),
  ],
  specialDrinkList: [
    new SpecialDrink("COLD BREW", "12"),
    new SpecialDrink("COLD BREW TONIC", "14"),
    new SpecialDrink("MANDARINA COLD BREW", "14"),
    new SpecialDrink("ICED LATTE | ICED MATCHA", "14"),
    new SpecialDrink("COSMO MULE", "14"),
  ],
  nonAlcoholicDrinkList: [
    new NonAlcoholicDrink("JUGO DE NARANJA | COLD PRESSED", "10"),
    new NonAlcoholicDrink("ICED TEA", "10"),
    new NonAlcoholicDrink("AGUA CON GAS", "9"),
    new NonAlcoholicDrink("SODA - CUATRO BACTERIAS", "9"),
  ],
  alcoholicDrinkList: [
    new AlcoholicDrink("CERVEZA ARTESANAL", "16"),
    new AlcoholicDrink("MATACUY TONIC", "25"),
    new AlcoholicDrink("VERMÚ | CAMPARI", "20"),
    new AlcoholicDrink("VERMÚ TONIC | CAMPARI TONIC", "23"),
  ],
};
