<template>
<div>
  <b-card>
    <h4 style="text-align: center">Your risk tolerance has been assessed as <b>“Conservative”</b></h4>
    <br>
    <b-row>
      <b-col cols="2">
      </b-col>
      <b-col cols="8">
        <ul>
          <li><h5>
            You are generally comfortable with achieving minimal level of return potential on your investment coupled with minimal risks.

          </h5></li>
          <li><h5>
            Capital values of products that are potentially suitable for you can fluctuate and may fall below your original investment. In normal market conditions fluctuation is expected to be minimal (although this is not guaranteed), and you are comfortable with this level of fluctuation.

          </h5></li>
          <li><h5>
            Investment products with risk rating 1 are likely to be suitable for you.

          </h5></li>
        </ul>
        <h4 style="text-align: center"><b>Recommended investment portfolio</b></h4>
        <pie-chart :chart-data="datacollection"></pie-chart>
      </b-col>
      <b-col cols="2"></b-col>
    </b-row>
  </b-card>
</div>
</template>
<script>
  import PieChart from '../charts/PieChart'
  export default {
    components: {
      PieChart
    },
    data () {
      return {
        datacollection: {
          labels: ['%Equity', '%Fixed Income'],
          datasets: [
            {
              backgroundColor: ['#f39c12', '#34495e'],
              data: [30, 70]
            }
          ]
        }
      }
    },
    mounted () {
      this.fillData()
    },
    methods: {
      fillData () {
      }
    }
  }
</script>


