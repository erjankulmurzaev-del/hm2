import React from 'react'
import './DesignerSection.css';
import foto from '../../img/foto1.png';
import foto2 from '../../img/foto2.png';
import foto3 from '../../img/foto3.png';
import CategoryCard from '../../ui/CategoryCard';


export default function DesignerSection() {
    const categories = [
    {
      id: 1,
      title: 'Accessories',
      description: 'Complete your ensemble with designer accessories such as handbags, scarves, belts, and hats.',
      image: foto,
      bgColor: '#d4e4db',
    },
    {
      id: 2,
      title: 'Dresses',
      description: 'Explore a stunning range of designer dresses, including evening gowns and chic day dresses.',
      image: foto2,
      bgColor: '#eaeaea',
    },
    {
      id: 3,
      title: 'Outerwear',
      description: 'Browse luxurious designer coats, jackets, and blazers to stay stylishly warm during colder seasons.',
      image: foto3,
      bgColor: '#e2e2e2',
    },
  ];
  return (
<section className="designer-section">
      <div className="designer-header">
        <h2 className="designer-main-title">Designer Clothes For You</h2>
        <p className="designer-subtitle">
          Immerse yourself in the world of luxury fashion with our meticulously crafted designer clothes!
        </p>
      </div>

      <div className="categories-grid">
        {categories.map((item) => (
          <CategoryCard
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
            bgColor={item.bgColor}
          />
        ))}
      </div>
    </section>  )
}
