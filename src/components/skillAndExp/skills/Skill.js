import React from 'react';
import {Bar} from 'react-chartjs-2';

const data = {
  labels: ['React.js', 'html', 'css', 'javascript', 'node', 'mongoDB',''],
  datasets: [
    
    {
      label: 'skill scores',
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(0, 161, 255, 0.85)',
      hoverBorderColor: 'rgba(0, 161, 255, 1)',
      data: [100,90,90, 100,80,75,0]
    }
  ]
};

const Skill = () => {
    return (
      <div>
      <h2>bar</h2>
        <Bar
          
          data={data}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: true,
            scales: {
              xAxes: [{
                  gridLines: {
                      color: "rgba(0, 0, 0, 0)",
                  }
              }],
              yAxes: [{
                  gridLines: {
                      color: "rgba(0, 0, 0, 0)",
                  }   
              }]
          }
          }}
        />
      </div>
    );
  
}


export default Skill
