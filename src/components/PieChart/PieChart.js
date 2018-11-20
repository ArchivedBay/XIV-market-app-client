import React, { Component } from 'react';
import Moment from 'moment';
import { Pie, Bar, Line } from 'react-chartjs-2'

class PieChart extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      chartData: {
        labels: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
        datasets: [{
          label: 'Number of sales',
          data: [
            0,0,0,0,0,0,0
          ],
          backgroundColor: 'rgba(33, 145, 81, 0.2)', 
        }]
      }
    };
  }

  componentDidMount(){
    if(this.props.historyData){
      let occurrenceDataObject = {},
          occurrenceArray = [];

      // grab the day from the unix stamp
      this.props.historyData.forEach( (sale) => {
        let day = Moment.unix(sale.PurchaseDate).format("dddd")
        // create an object of sale counts for each day
        occurrenceDataObject[day] = occurrenceDataObject.hasOwnProperty(day) ? occurrenceDataObject[day] + 1 : 1     
      });

      //push the data into an array for sorting
      for(let day in occurrenceDataObject){
        occurrenceArray.push( [day, occurrenceDataObject[day]] );
      }

      // set state with the new data
      let sortedCounts = occurrenceArray.sort( (a,b) => b[1] - a[1] );

      this.setState({
        chartData: {
          labels: sortedCounts.map((day) => day[0]),
          datasets: [{
            data: sortedCounts.map((day) => day[1]),
            backgroundColor: [
              'rgba(219, 61, 40,1)',
              'rgba(219, 162, 40, 1)',
              'rgba(201, 219, 40,1)',
              'rgba(76, 219, 40, 1)',
              'rgba(40, 219, 144, 1)',
              'rgba(40, 153, 219, 1)',
              'rgba(92, 48, 175, 1)'
            ]
          }]
        }
      })
    }
  }

  render() {
    return (
      <div className="PieChart">
        {this.props.historyData ? <Pie data={this.state.chartData} options={{}} /> : null}
      </div>
    );
  }
}

export default PieChart;