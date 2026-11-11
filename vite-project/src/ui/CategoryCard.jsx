import React from 'react'
import './CategoryCard.css';

export default function CategoryCard({ image, title, description, bgColor }) {
  return (
<div className="category-card">
      <div className="category-img-wrapper" style={{ backgroundColor: bgColor || '#e8ede9' }}>
        <img src={image} alt={title} className="category-img" />
      </div>
      <h3 className="category-title">{title}</h3>
      <p className="category-desc">{description}</p>
    </div>
      )
}
