import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useState, useEffect } from 'react'

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '200px',
    //transition: 'perspective 0.1s ease-out 0.05s'
    transition: 'perspective 1s cubic-bezier(0, 1, 0, 1) 0s'
  },
  cuboctahedron: {
    width: '200px',
    height: '200px',
    position: 'relative',
    transformStyle: 'preserve-3d',
    transform: 'translateZ(-100px)',
    transition: 'transform 3s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0s'
  },
  square: {
    borderRadius: '10px',
    position: 'absolute',
    width: '200px',
    height: '200px',
    backgroundSize: 'contain'
  },
  front: {
    backgroundImage: 'url("https://user-images.githubusercontent.com/70653539/189468859-e6956fd3-a157-4865-8949-38d56881370e.jpg")',
    transform: 'rotateY(0deg) translateZ(100px) scale(0.7) rotate(45deg)'
  },
  back: {
    backgroundImage: 'url("https://user-images.githubusercontent.com/70653539/189468864-f43da62c-0552-4d44-b3fe-cae8f4b19159.gif")',
    transform: 'rotateY(180deg) translateZ(100px) scale(0.7) rotate(45deg)'
  },
  left: {
    backgroundImage: 'url("https://user-images.githubusercontent.com/70653539/189468865-40041935-3ab3-4921-b5b9-6851fbe1e546.jpg")',
    transform: 'rotateY(-90deg) translateZ(100px) scale(0.7) rotate(45deg)'
  },
  right: {
    backgroundImage: 'url("https://user-images.githubusercontent.com/70653539/189468866-2728e134-0306-437a-967e-95b686a5dd17.jpg")',
    transform: 'rotateY(90deg) translateZ(100px) scale(0.7) rotate(45deg)'
  },
  top: {
    backgroundImage: 'url("https://user-images.githubusercontent.com/70653539/189468869-7374df98-187f-40d5-baea-a60a64464488.jpg")',
    transform: 'rotateX(90deg) translateZ(100px) scale(0.7) rotate(45deg)'
  },
  bottom: {
    backgroundImage: 'url("https://user-images.githubusercontent.com/70653539/189468870-49187c22-6dd5-44e4-8a60-d8f60241723e.jpg")',
    transform: 'rotateX(-90deg) translateZ(100px) scale(0.7) rotate(45deg)'
  }
};

const MichaelbrzostekPage = () => {
  const [animationEnabled, setAnimationEnabled] = useState(false);
  const [transform, setTransfrom] = useState('rotate(-45deg)');
  const [perspective, setPerspective] = useState('100000px');
  useEffect(() => {
    const interval = setInterval(() => {
      if(animationEnabled){
        setTransfrom(`translateZ(${Math.random()*180}px) rotateX(${(Math.random()-0.5)*500}deg) rotateY(${(Math.random()-0.5)*500}deg)`);
        setPerspective('400px');
      }
    }, 3000);
    return () => {clearInterval(interval)};
  });

  return (
    <>
      <MetaTags title="Michaelbrzostek" description="Michaelbrzostek page" />
      <div style={{...styles.container, perspective: perspective}} onClick={() => {setAnimationEnabled(!animationEnabled)}}>
        <div id="cube" style={{...styles.cuboctahedron, transform: transform}}>
          <div style={{...styles.square, ...styles.front}}>
          </div>
          <div style={{...styles.square, ...styles.back}}>
          </div>
          <div style={{...styles.square, ...styles.left}}>
          </div>
          <div style={{...styles.square, ...styles.right}}>
          </div>
          <div style={{...styles.square, ...styles.top}}>
          </div>
          <div style={{...styles.square, ...styles.bottom}}>
          </div>
        </div>
      </div>
    </>
  )
}

export default MichaelbrzostekPage