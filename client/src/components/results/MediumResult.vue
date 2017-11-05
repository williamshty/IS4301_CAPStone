<template>
  <div>
    <b-card>
      <h4 style="text-align: center">Your risk tolerance has been assessed as <b>“Medium”</b></h4>
      <br>
      <b-row>
        <b-col cols="2">
        </b-col>
        <b-col cols="8">
          <ul>
            <li><h5>
              You are generally comfortable with achieving a moderate level of return potential on your investment coupled with a moderate level of risk.
            </h5></li>
            <li><h5>
              Capital values can fluctuate and may fall below your original investment. Fluctuation is expected to be higher than products that are suitable for investors in lower risk tolerance categories, but not as much as for higher risk tolerance categories.
            </h5></li>
            <li><h5>
              Investment products with risk rating 3 or below are likely to be suitable for you.
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
          labels: ['%Cash Equivalents', '%Bonds', '%Stocks'],
          datasets: [
            {
              backgroundColor: ['#c0392b', '#d35400', '#f39c12'],
              data: [15, 15, 70]
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

