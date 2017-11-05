<template>
  <form-wizard next-button-text="Save and Continue" :start-index="0" @on-complete="onComplete()" class="form-wizard" color="#f1c40f">
    <h2 slot="title">Risk Profile Questionnaire</h2>
    <tab-content title="Basic Information":before-change="test()">
      <b-form>
        <b-row>
          <b-col cols="2"></b-col>
          <b-col cols="8">
            <h4 style="text-align: center">Basic Customer Information</h4>
            <b-form-group label="1. What is your age group?">
              <b-form-select :options="Q1_Options" v-model="Q1_Result">
              </b-form-select>
            </b-form-group>
            <b-form-group label="2. What is your highest level of education">
              <b-form-select :options="Q2_Options" v-model="Q2_Result">
              </b-form-select>
            </b-form-group>
            <b-form-group label="3. Have you acquired any knowledge about investment before?">
              <b-form-select :options="Q3_Options" v-model="Q3_Result" :disabled="(Q2_Result === 'C')">
              </b-form-select>
            </b-form-group>
            <b-form-group label="4. Do you have any investment experience before?">
              <b-form-select :options="Q4_Options" v-model="Q4_Result" :disabled="(Q2_Result === 'A' || Q2_Result === 'B')">
              </b-form-select>
            </b-form-group>
            <b-form-group label="5. Estimated disposable monthly income (from all sources)">
              <b-form-select :options="Q5_Options" v-model="Q5_Result">
              </b-form-select>
            </b-form-group>
          </b-col>
          <b-col cols="2"></b-col>
        </b-row>
      </b-form>
    </tab-content>
    <tab-content title="Goals and Objectives">
      <b-form>
        <b-row>
          <b-col cols="2"></b-col>
          <b-col cols="8">
            <h4 style="text-align: center">Investment Goals and Objectives</h4>
            <b-form-group label="6. What is the estimated breakdown of your liquid assets?" v-if="Q5_Result==='C'||Q5_Result==='D'">
              <b-input-group left="Cash & deposits" right=".00" >
                <b-form-input v-model="Q6_Result1"></b-form-input>
              </b-input-group><br>
              <b-input-group left="Investment Products" right=".00">
                <b-form-input v-model="Q6_Result2"></b-form-input>
              </b-input-group><br>
              <b-input-group left="Outstanding loans or credits (excluding mortgage loan)" right=".00" >
                <b-form-input v-model="Q6_Result3"></b-form-input>
              </b-input-group><br>
            </b-form-group>
            <b-form-group label="7. Which statement best describe your main objective for this investment?">
              <b-form-select :options="Q7_Options" v-model="Q7_Result">
              </b-form-select>
            </b-form-group>
            <b-form-group label="8. I plan to invest in the next:" v-if="Q4_Result === 'YES'">
              <b-form-select :options="Q8_Options" v-model="Q8_Result">
              </b-form-select>
            </b-form-group>
          </b-col>
          <b-col cols="2"></b-col>
        </b-row>
      </b-form>
    </tab-content>
    <tab-content title="Risk Tolerance/Investment Profile" :before-change="calculateTotalMark()">
      <b-form>
        <b-row>
          <b-col cols="2"></b-col>
          <b-col cols="8">
            <h4 style="text-align: center">Risk Tolerance/Investment Profile</h4>
            <b-form-group label="9. Have you made 5 or more investment transactions in the past 3 years in any of the following derivative products? Structured Products, Premium Deposit, Futures, Swap, Options, Warrants, Instrument with embedded derivatives " v-if="Q4_Result === 'YES'">
              <b-form-select :options="Q9_Options" v-model="Q9_Result" >
              </b-form-select>
            </b-form-group>
            <b-form-group label="10. What derivatives products have you transacted in the past 3 years? You can choose more than one answer from below: " v-if="Q3_Result==='YES'">
              <b-form-select multiple :options="Q10_Options" v-model="Q10_Result" :disabled="Q9_Result==='NO'">
              </b-form-select>
            </b-form-group>
            <b-form-group label="11. Have you received any training or attended any courses related to derivatives offered
by banks, financial institutions, educational institutions, or professional organizations?" v-if="Q3_Result==='YES'">
              <b-form-select :options="Q11_Options" v-model="Q11_Result">
              </b-form-select>
            </b-form-group>
            <b-form-group label="12. Do you have any work experience relating to derivative products ?" v-if="Q3_Result==='YES'">
              <b-form-select :options="Q12_Options" v-model="Q12_Result">
              </b-form-select>
            </b-form-group>
            <b-form-group label="13. What derivatives products you have work experience.You can choose more than one answer from below">
              <b-form-select multiple :options="Q13_Options" v-model="Q13_Result" :disabled="Q12_Result==='NO'">
              </b-form-select>
            </b-form-group>
            <b-form-group label="14. What portion of your net worth would you like to set aside for investments?">
              <b-form-select :options="Q14_Options" v-model="Q14_Result">
              </b-form-select>
            </b-form-group>
            <b-form-group label="15. Which of the sample portfolio would be most attractive to you">
              <b-form-select :options="Q15_Options" v-model="Q15_Result">
              </b-form-select>
            </b-form-group>
            <b-form-group label="16. How much money have you set aside (outside of your pension / Central Provident Fund savings) to handle emergencies?">
              <b-form-select :options="Q16_Options" v-model="Q16_Result">
              </b-form-select>
            </b-form-group>
            <b-form-group label="17. Most investments can fluctuate both up and down (i.e. volatility). How much could your investment fall in value over a 12 month period before you begin to feel concerned and anxious?">
              <b-form-select :options="Q17_Options" v-model="Q17_Result">
              </b-form-select>
            </b-form-group>
          </b-col>
          <b-col cols="2"></b-col>
        </b-row>
      </b-form>
    </tab-content>
    <tab-content title="Assessment Result">
      <b-row>
        <b-col cols="2"></b-col>
        <b-col cols="8">
          <conservative-result v-if="totalMark<=8"></conservative-result>
          <medium-result v-else-if="totalMark<=13"></medium-result>
          <aggressive-result v-else></aggressive-result>
        </b-col>
        <b-col cols="2"></b-col>
      </b-row>
    </tab-content>
  </form-wizard>
</template>

<script>
  import ConservativeResult from './results/ConservativeResult'
  import MediumResult from './results/MediumResult'
  import AggressiveResult from './results/AggressiveResult'
  import PostFormService from '../services/PostFormServices'
  export default {
    data () {
      return {
        reload: true,
        totalMark: 0,
        Q1_Result: '',
        Q2_Result: '',
        Q3_Result: '',
        Q4_Result: '',
        Q5_Result: '',
        Q6_Result: '',
        Q6_Result1: '',
        Q6_Result2: '',
        Q6_Result3: '',
        Q7_Result: '',
        Q8_Result: '',
        Q9_Result: '',
        Q10_Result: '',
        Q11_Result: '',
        Q12_Result: '',
        Q13_Result: '',
        Q14_Result: '',
        Q15_Result: '',
        Q16_Result: '',
        Q17_Result: '',
        Q1_Options: [
          '20-30', '30-40', '40-50', 'Above 50'
        ],
        Q2_Options: [
          {value: 'A', text: 'Primary'},
          {value: 'B', text: 'Secondary'},
          {value: 'C', text: 'Tertiary and above'}
        ],
        Q3_Options: [
          'YES', 'NO'
        ],
        Q4_Options: [
          'YES', 'NO'
        ],
        Q5_Options: [
          {value: 'A', text: 'S$1000-S$3000'},
          {value: 'B', text: 'S$3000-S$6000'},
          {value: 'C', text: 'S$6000-S$10000'},
          {value: 'D', text: 'S$10000 and above'}
        ],
//        Q6_Options: [
//          {value: '', text: ''}
//        ],
        Q7_Options: [
          {value: '1', text: 'To preserve capital and generate some income'},
          {value: '2', text: 'To generate moderate capital growth in long term'},
          {value: '3', text: 'To generate aggressive capital growth in short term'}
        ],
        Q8_Options: [
          'Less than 1 year',
          '1 - 3 years',
          '4 to 9 years',
          '10+ years'
        ],
        Q9_Options: [
          'YES', 'NO'
        ],
        Q10_Options: [
          {value: 'A', text: 'Structured Products'},
          {value: 'B', text: 'Premium Deposit'},
          {value: 'C', text: 'Futures'},
          {value: 'D', text: 'Swap'},
          {value: 'E', text: 'Options'},
          {value: 'F', text: 'Warrants'},
          {value: 'G', text: 'Instrument with embedded derivatives'}
        ],
        Q11_Options: [
          {value: 'A', text: 'No'},
          {value: 'B', text: 'Yes, offered by banks'},
          {value: 'C', text: 'Yes, offered by financial institutions'},
          {value: 'D', text: 'Yes, offered by educational institutions'},
          {value: 'E', text: 'Yes, offered by professional organizations'}
        ],
        Q12_Options: [
          'YES', 'NO'
        ],
        Q13_Options: [
          {value: 'A', text: 'Structured Products'},
          {value: 'B', text: 'Premium Deposit'},
          {value: 'C', text: 'Futures'},
          {value: 'D', text: 'Swap'},
          {value: 'E', text: 'Options'},
          {value: 'F', text: 'Warrants'},
          {value: 'G', text: 'Instrument with embedded derivatives'}
        ],
        Q14_Options: [
          {value: '1', text: '0%'},
          {value: '2', text: '0%-50%'},
          {value: '3', text: '>50%'}
        ],
        Q15_Options: [
          {value: '1', text: 'I am willing to accept a potential loss of up to 3% for up to 9% upside.'},
          {value: '2', text: 'I am willing to accept a potential loss of up to 10% for up to 18% upside.'},
          {value: '3', text: 'I am willing to accept a potential loss of up to 15% for up to 25% upside.'},
          {value: '4', text: 'I am willing to accept a potential loss of up to 20% for up to 31% upside.'},
          {value: '5', text: 'I am willing to accept a potential loss of up to 27% for up to 40% upside.'}
        ],
        Q16_Options: [
          {value: '1', text: 'More than six months of living expenses'},
          {value: '2', text: 'Between one and six months of living expenses'},
          {value: '3', text: 'Less than one months of living expenses'}
        ],
        Q17_Options: [
          {value: '1', text: 'Up to 5%'},
          {value: '2', text: 'Up to 25%'},
          {value: '3', text: 'More than 25%'}
        ]
      }
    },
    components: {
      ConservativeResult,
      MediumResult,
      AggressiveResult
    },
    methods: {
      test () {
      },
      calculateTotalMark () {
        this.totalMark = parseInt(this.Q7_Result) + parseInt(this.Q14_Result) + parseInt(this.Q15_Result) + parseInt(this.Q16_Result) + parseInt(this.Q17_Result)
      },
      async onComplete () {
        this.Q6_Result = this.Q6_Result1 + '; ' + this.Q6_Result2 + '; ' + this.Q6_Result3
        const response = await PostFormService.postForm({
          Q01: this.Q1_Result.toString(),
          Q02: this.Q2_Result.toString(),
          Q03: this.Q3_Result.toString(),
          Q04: this.Q4_Result.toString(),
          Q05: this.Q5_Result.toString(),
          Q06: this.Q6_Result.toString(),
          Q07: this.Q7_Result.toString(),
          Q08: this.Q8_Result.toString(),
          Q09: this.Q9_Result.toString(),
          Q10: this.Q10_Result.toString(),
          Q11: this.Q11_Result.toString(),
          Q12: this.Q12_Result.toString(),
          Q13: this.Q13_Result.toString(),
          Q14: this.Q14_Result.toString(),
          Q15: this.Q15_Result.toString(),
          Q16: this.Q16_Result.toString(),
          Q17: this.Q17_Result.toString()
        })
        console.log(response.data)
      }
    }
  }
</script>
<style scoped>
  .form-wizard{
    text-align: left;
  }
</style>
