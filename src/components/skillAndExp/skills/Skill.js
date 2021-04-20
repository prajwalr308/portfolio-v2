import React from 'react';
import {Bar} from 'react-chartjs-2';

const data = {
  labels: ['React.js', 'html', 'css', 'javascript', 'node', 'mongoDB',''],
  datasets: [
    
    {
      label: 'skill scores',
      backgroundColor: [
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(54, 162, 235)',
        'rgb(54, 162, 235)',
        'rgb(54, 162, 235)',
        'rgb(54, 162, 235)',
        'rgb(54, 162, 235)',
        'rgb(54, 162, 235)',
        
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
      <h2 style={{visibility: 'hidden'}}>bar</h2>
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
