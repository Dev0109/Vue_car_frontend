var moment = require("moment");
export const ValidationMixin = {
  methods: {
    checkForm() {
      this.errors = [];
      this.success = false;
      if (!this.car) {
        this.errors.push("Car name is required!");
        return;
      } else if (this.car.length < 3) {
        this.errors.push("Car name should be at least 3 symbols!");
        return;
      } else if (!this.price) {
        this.errors.push("Car price is required!");
        return;
      } else if (
        this.price < 100 ||
        this.price > 9999999 ||
        isNaN(this.price)
      ) {
        this.errors.push("Car price should be between 3 and 7 digits!");
        return;
      } else if (this.miles < 1 || this.miles > 100 || isNaN(this.miles)) {
        this.errors.push(
          "Miles per Gallon should be between 1 and 100 digits!"
        );
        return;
      } else if (
        this.cylinders < 1 ||
        this.cylinders > 20 ||
        isNaN(this.cylinders)
      ) {
        this.errors.push("Cylinders should be between 1 and 20 digits!");
        return;
      } else if (
        this.displacement < 2000 ||
        this.displacement > 15000 ||
        isNaN(this.displacement)
      ) {
        this.errors.push(
          "Displacement should be between 2000 and 15000 digits!"
        );
        return;
      } else if (
        this.horsepower < 60 ||
        this.horsepower > 2000 ||
        isNaN(this.horsepower)
      ) {
        this.errors.push("Horsepower should be between 60 and 2000 digits!");
        return;
      } else if (
        this.weight < 1000 ||
        this.weight > 10000 ||
        isNaN(this.weight)
      ) {
        this.errors.push("Weight should be between 1000 and 10000 digits!");
        return;
      } else if (
        this.quantity < 1 ||
        this.quantity > 20 ||
        isNaN(this.quantity)
      ) {
        this.errors.push("Quantity should be between 1 and 20 digits!");
        return;
      } else if (
        this.acceleration < 2 ||
        this.acceleration > 30 ||
        isNaN(this.acceleration)
      ) {
        this.errors.push("Acceleration should be between 2 and 30 digits!");
        return;
      } else if (this.origin.length !== 2) {
        this.errors.push("Car origin should be at least 3 symbols!");
        return;
      } else if (!this.checkDate(this.date)) {
        this.errors.push("Please, provide a valid date format!");
        return;
      } else if (!this.checkImage(this.image)) {
        this.errors.push("Please, provide valid image format!");
        return;
      }

      this.AddCar();
      this.success = true;
      this.errors = [];
    },
    resetForm() {
      this.car = "";
      this.price = null;
      this.miles = null;
      this.cylinders = null;
      this.displacement = null;
      this.horsepower = null;
      this.weight = null;
      this.success = false;
      this.date = null;
      this.origin = null;
      this.quantity = null;
      this.acceleration = null;
      this.errors = [];
      this.date = null;
      this.image = null;
    },
    checkDate(date) {
      return moment(date, "DD.MM.YYYY", true).isValid();
    },
    checkImage(url) {
      return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
    }
  }
};
