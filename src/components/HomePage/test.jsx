import React from "react";


export const Testing = () => {
    
const first = [
    {
      id: 1,
      name: 'Cola',
      price: '15',
      count: '2'
    },
    {
      id: 2,
      name: 'Sprite',
      price: '10',
      count: '1'
    }
  ];
  
  const second = [
    {
      id: 1,
      name: 'Cola',
      price: '15',
      count: '0'
    },
    {
      id: 2,
      name: 'Sprite',
      price: '10',
      count: '0'
    },
    {
      id: 3,
      name: 'Fanta',
      price: '11',
      count: '0'
    },
    {
      id: 4,
      name: 'Pepsi',
      price: '9',
      count: '0'
    },
    {
      id: 5,
      name: 'Merinda',
      price: '8',
      count: '0'
    },
    {
      id: 6,
      name: '7UP',
      price: '7',
      count: '0'
    },
  ];

  
  for(let i = 0; i < second.length; i++){
    if(first.some((item) => item.id === second[i].id)){
      second.splice(i, 1);
      console.log("SSS", second);
      i--;
    }      
  }
  
  let third = second.concat(first);
  console.log("TTT", third);
  let sumCount = 0;
  
  third.forEach(item => {
    sumCount += +(item.count);
  })
  

  console.log(sumCount)
    return (
        <>
            <div>
                 
            </div>
        </>
    );
};


