import "../../styles/Card.css";
import React from 'react'

export default function Card() {
    const cartItem = [
        { id: 1, title: "Flower Box",img:'./src/img/2-01.webp' },
        { id: 2, title: "Orchids",img:'./src/img/orchids.webp'  },
        { id: 3, title: "Pots",img:'./src/img/web6-05.webp'},
        { id: 4,  title: "Birthday",img:'./src/img/web9-04.webp' },
        { id: 5, title: "Woshe Royal",img:'./src/img/web1-01.webp'},
        { id: 6,  title: "Ceremony design",img:'./src/img/woshe_pic_3-07_1.webp' },
      ];

  return (
    <div className="card-container">

      <div className="card-grid">

       {cartItem.map((item)=>( 
       <div key={item.id}  className="card-card">
          <img src={item.img} alt="" className="card-img" />
          <p  className="card-title">{item.title}</p>
      </div>
    ))

    }
  </div>
       
    </div>
  )
}