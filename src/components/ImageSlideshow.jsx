import { useState, useEffect } from 'react'
import './ImageSlideshow.css'

// 이미지 경로 배열
const images = [
  '/dogphoto/1.jpg',
  '/dogphoto/2.jpg',
  '/dogphoto/3.jpg',
  '/dogphoto/4.jpg',
  '/dogphoto/5.jpg',
]

function ImageSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 1500) // 1.5초 간격

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="slideshow-container">
      <div className="slideshow-wrapper">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Dog photo ${index + 1}`}
            className={`slideshow-image ${
              index === currentIndex ? 'active' : ''
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default ImageSlideshow

