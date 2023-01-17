<template>
  <div class="finance">
      <v-parallax src="../assets/bg.jpeg"
      height="200"
      >
      <v-container>
        <v-row>
          <v-col class="col-12 col-sm-12 col-md-12 col-lg-12 text-center my-auto">
            <h2 class="bannerheadingh2">FINANCE</h2>
          </v-col>
        </v-row>
      </v-container>
  </v-parallax>
    <v-container>
      <v-row justify="center" align="center">
        <v-col class="col-12 col-sm-12 col-md-6 col-lg-6">
          <h1>Calculate Repayments</h1>
            <form @submit.prevent="calculate">
              <v-row>
                <v-col class="col-12">
                  <v-text-field
                    v-model.number="loanAmount"
                    label="Loan Amount"
                    ></v-text-field>
                </v-col>
                <v-col class="col-12">
                  <v-text-field
                    v-model.number="interestRate"
                    label="Interest Rate"
                    ></v-text-field>
                </v-col>
                <v-col class="col-12">
                  <v-text-field
                    v-model.number="numMonths"
                    label="Number Of Months To Pay Off Loan"
                    ></v-text-field>
                </v-col>
                <v-col class="col-12 text-center">
                  <v-btn class="mainheadingcolor white--text" type="submit">calculate monthly payment</v-btn>
                </v-col>
              </v-row>
          </form>
        </v-col>
        <v-col class="col-12 col-sm-12 col-md-6 col-lg-6 text-center">
            <h1>Monthly Payment:</h1>
            <h1>{{ monthlyPayment.toFixed(2) }}</h1>
            <!-- <v-img src="../assets/finance (1).gif" width="100%" /> -->
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>


<script>
export default {
    data: () => ({
      loanAmount: '',
      interestRate: 10,
      numMonths: '',
      monthlyPayment: 0,
  }),
  methods: {
    calculate() {
      if (!this.formValid) {
        return;
      }
      const { loanAmount, interestRate, numMonths } = this;
      this.monthlyPayment = (loanAmount * (1 + interestRate / 100)) / numMonths;
    },
  },
  computed:{
    formValid() {
          const { loanAmount, interestRate, numMonths } = this;
          return (
            +loanAmount >= 0 &&
            0 <= +interestRate &&
            +interestRate <= 100 &&
            +numMonths > 0
          );
      },
  },
    // currencyFormat(num) {
    // return "R" + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "R1,")
    // }
}
</script>

<style lang="scss">
//     input, select {
//   display: inline-block;
//   background-color: #fff;
//   color: #888;
//   border: 2px solid #888;
//   border-radius: 2px;
//   height: 56px;
//   width: 100%;
//   font-size: 24px;
//   padding: 0 16px;
//   margin-bottom: 24px;
  
//   &:focus {
//     background-color: #fff;
//     color: #3200ff;
//     border-color: #3200ff;
//     outline: 0;
//   }
  
// }

// input[type=number]::-webkit-inner-spin-button, 
// input[type=number]::-webkit-outer-spin-button { 
//   -webkit-appearance: none; 
//   margin: 0; 
// }

// .payment {
//   color: #000;
//   font-size: 48px;
//   text-align: center;
//   font-weight: bold;
//   transition: all 0.3s ease-in;
  
//   @media (max-width: 512px){
//     font-size: 40px;
//     transition: all 0.3s ease-in;
//   }
  
//   @media (max-width: 400px){
//     font-size: 32px;
//     transition: all 0.3s ease-in;
//   }
  
// }

</style>