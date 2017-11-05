<template>
  <div>
    <b-card>
      <h4 style="text-align: center">Your risk tolerance has been assessed as <b>“Aggressive”</b></h4>
      <br>
      <b-row>
        <b-col cols="2">
        </b-col>
        <b-col cols="8">
          <ul>
            <li><h5>
              You are generally comfortable with maximising your return potential on investment coupled with maximized risk.
            </h5></li>
            <li><h5>
              Capital values can fluctuate widely and may fall substantially below your original investment. You understand the risk/reward equation, and are comfortable with this level of fluctuation.
            </h5></li>
            <li><h5>
              Investment products with risk rating 5 or below are likely to be suitable for you.
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
              data: [80, 20]
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


