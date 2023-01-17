export const SortingMixin = {
  methods: {
    sortCars(sortWord) {
      switch (sortWord) {
        case "By name ascending":
          this.sortByNameAscending();
          break;
        case "By name descending":
          this.sortByNameDescending();
          break;
        case "By price ascending":
          this.sortByPriceAscending();
          break;
        case "By price descending":
          this.sortByPriceDescending();
          break;
        case "By horsepower ascending":
          this.sortByHorsepowerAscending();
          break;
        case "By horsepower descending":
          this.sortByHorsepowerDescending();
          break;
        case "By origin ascending":
          this.sortByOriginAscending();
          break;
        case "By origin descending":
          this.sortByOriginDescending();
          break;
        case "By cylinders ascending":
          this.sortByCylindersAscending();
          break;
        case "By cylinders descending":
          this.sortByCylindersDescending();
          break;
        case "By displacement ascending":
          this.sortByDisplacementAscending();
          break;
        case "By displacement descending":
          this.sortByDisplacementDescending();
          break;
        case "By weight ascending":
          this.sortByWeightAscending();
          break;
        case "By weight descending":
          this.sortByWeightDescending();
          break;
        case "By miles per gallon ascending":
          this.sortByMilesAscending();
          break;
        case "By miles per gallon descending":
          this.sortByMilesDescending();
          break;
        default:
          break;
      }
    },
    sortByNameAscending() {
      this.cars.sort((a, b) => (a.Name < b.Name ? -1 : 1));
      this.updateVisibleCars();
    },
    sortByNameDescending() {
      this.cars.sort((a, b) => (a.Name > b.Name ? -1 : 1));
      this.updateVisibleCars();
    },
    sortByPriceAscending() {
      this.cars.sort((a, b) => (a.Price < b.Price ? -1 : 1));
      this.updateVisibleCars();
    },
    sortByPriceDescending() {
      this.cars.sort((a, b) => (a.Price > b.Price ? -1 : 1));
      this.updateVisibleCars();
    },
    sortByHorsepowerAscending() {
      this.cars.sort((a, b) => (a.Horsepower < b.Horsepower ? -1 : 1));
      this.updateVisibleCars();
    },
    sortByHorsepowerDescending() {
      this.cars.sort((a, b) => (a.Horsepower > b.Horsepower ? -1 : 1));
      this.updateVisibleCars();
    },
    sortByOriginAscending() {
      this.cars.sort((a, b) => (a.Origin < b.Origin ? -1 : 1));
      this.updateVisibleCars();
    },
    sortByOriginDescending() {
      this.cars.sort((a, b) => (a.Origin > b.Origin ? -1 : 1));
      this.updateVisibleCars();
    },
    sortByCylindersAscending() {
      this.cars.sort((a, b) => (a.Cylinders < b.Cylinders ? -1 : 1));
      this.updateVisibleCars();
    },
    sortByCylindersDescending() {
      this.cars.sort((a, b) => (a.Cylinders > b.Cylinders ? -1 : 1));
      this.updateVisibleCars();
    },
    sortByDisplacementAscending() {
      this.cars.sort((a, b) => (a.Displacement < b.Displacement ? -1 : 1));
      this.updateVisibleCars();
    },
    sortByDisplacementDescending() {
      this.cars.sort((a, b) => (a.Displacement > b.Displacement ? -1 : 1));
      this.updateVisibleCars();
    },
    sortByWeightAscending() {
      this.cars.sort((a, b) => (a.Weight_in_lbs < b.Weight_in_lbs ? -1 : 1));
      this.updateVisibleCars();
    },
    sortByWeightDescending() {
      this.cars.sort((a, b) => (a.Weight_in_lbs > b.Weight_in_lbs ? -1 : 1));
      this.updateVisibleCars();
    },
    sortByMilesAscending() {
      this.cars.sort((a, b) =>
        a.Miles_per_Gallon < b.Miles_per_Gallon ? -1 : 1
      );
      this.updateVisibleCars();
    },
    sortByMilesDescending() {
      this.cars.sort((a, b) =>
        a.Miles_per_Gallon > b.Miles_per_Gallon ? -1 : 1
      );
      this.updateVisibleCars();
    }
  }
};
