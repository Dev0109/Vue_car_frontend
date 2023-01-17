const axios = require("axios");
const baseURL = "https://1wk2xps2l4.execute-api.eu-west-1.amazonaws.com/default/SecondHandCarsAPI/vehiclesFilterSelect";
//console.log('baseURL', baseURL)
const baseAccountsURL = "http://localhost:3000/accounts";

export const LoadCars = {
    methods: {
        loadCars() {
            //   axios
            //     .get(baseURL)
            //     .then(response => {
            //       let cars = response.data;
            //       // console.log('this.cars', cars)
            //       this.updateVisibleCars();
            //       this.getNumberOfTabs();
            //     })
            //     .catch(function(error) {
            //       console.log(error);
            //     });
        }
    }
};
export const SliderMixin = {
    methods: {
        handeSliderRanges(ranges) {
            // axios.get(baseURL).then(response => {
            //     this.cars = response.data;
            //     let sorted = [];
            //     this.cars.forEach(car => {
            //         if (car.Price >= ranges[0] && car.Price <= ranges[1]) {
            //             sorted.push(car);
            //         }
            //     });
            //     this.cars = sorted;
            //     this.updateVisibleCars();
            //     this.getNumberOfTabs();
            // });
        }
    }
};
export const SingleCarAsync = {
    methods: {
        updateUserBalance() {
            if (this.mutableCar.Quantity > 0) {
                this.mutableCar.Quantity -= 1;
            } else {
                this.error = "Out of stock!";
                return;
            }

            let email = this.userEmail;
            let price = this.car.Price;
            let id = null;

            axios
                .get(baseAccountsURL)
                .then(response => {
                    response.data.forEach(account => {
                        if (account.email == email) {
                            let newBalance = account.balance - price;
                            if (newBalance < 0) {
                                this.error = "Not enough money!";
                                return;
                            }
                            id = account.id;
                            let url = baseAccountsURL + "/" + id;
                            let newAccount = {
                                email: email,
                                balance: newBalance
                            };
                            axios.patch(url, newAccount);
                            return;
                        }
                    });
                })
                .catch(function(error) {
                    console.log(error);
                });

            if (!this.mutableCar.Buyers) {
                this.mutableCar.Buyers = [];
                let newBuyer = {
                    Email: this.userEmail,
                    Quantity: 1,
                    CarID: this.mutableCar.id
                };
                this.mutableCar.Buyers.push(newBuyer);
            } else if (this.mutableCar.Buyers.length == 0) {
                let newBuyer = {
                    Email: this.userEmail,
                    Quantity: 1,
                    CarID: this.mutableCar.id
                };
                this.mutableCar.Buyers.push(newBuyer);
            } else {
                this.mutableCar.Buyers.forEach(buyer => {
                    if (buyer.Email == email) {
                        buyer.Quantity += 1;
                    }
                });
            }
        },
        buyCar() {
            this.updateUserBalance();
            this.updateCarInfo();
        },
        updateCarInfo() {
            let id = this.car.id;
            const url = baseURL + "/" + id;
            axios
                .patch(url, this.mutableCar)
                .then(response => {
                    response.data = this.mutableCar;
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        updatePrice() {
            this.car.Price = this.price;
            let id = this.car.id;
            const url = baseURL + "/" + id;
            axios
                .patch(url, this.car)
                .then(response => {
                    response.data = this.mutableCar;
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        updateQuantity() {
            this.car.Quantity = this.quantity;
            let id = this.car.id;
            const url = baseURL + "/" + id;
            axios
                .patch(url, this.car)
                .then(response => {
                    this.mutableCar = response.data;
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        delCar() {
            let id = "/" + this.car.id;
            const url = baseURL + id;
            axios
                .delete(url)
                .then(() => {
                    this.mutableCar = null;
                })
                .catch(function(error) {
                    console.log(error);
                })
                .finally(() => {
                    this.$emit("update");
                });
        }
    }
};

export const PostCarMixin = {
    methods: {
        AddCar() {
            let newCar = {
                Name: this.car,
                Miles_per_Gallon: this.miles,
                Cylinders: this.cylinders,
                Displacement: this.displacement,
                Horsepower: this.horsepower,
                Weight_in_lbs: this.weight,
                Acceleration: this.acceleration,
                Year: this.date,
                Origin: this.origin,
                Price: this.price,
                Quantity: this.quantity,
                Picture: this.image,
                id: null
            };
            axios.post(baseURL, newCar);
        }
    }
};

export const NextCarIdMixin = {
    mounted: function() {
        axios.get("http://localhost:3000/cars").then(response => {
            this.nextCarId = response.data.length;
        });
    }
};