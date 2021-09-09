import img1 from '../assets/img1.jfif'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import '../components/slider.css'
import { useRef } from 'react'

const Slider = ()=>{
    const slideShow = useRef(null)

    const prev = ()=>{
        console.log("prev")
    }
    const next = ()=>{
        const primerELemento = slideShow.current.children[0]
        slideShow.current.style.transition = `300ms ease-out all`
        slideShow.current.style.transform = `translateX(-${slideShow.current.children[0].offsetWidth}px)`
        const transicion = ()=>{
            slideShow.current.style.transition = `none`
        slideShow.current.style.transform = `translateX(0)`
        slideShow.current.appendChild(primerELemento)
        }
        slideShow.current.addEventListener('transitionend', transicion)
    }
    return (
        <div className="containerSlider">

       
        <div className="slideContainer" ref={slideShow}>
            <div>
                <a href="https://google.com">
                    <img src={img1} alt="" />
                </a>
            </div>
            <div>
                <a href="https://google.com">
                    <img src={img2} alt="" />
                </a>
            </div>
            <div>
                <a href="https://google.com">
                    <img src={img3} alt="" />
                </a>
            </div>
           
        </div>
        <div>
                <button onClick={()=>prev()}></button>
                <button onClick={()=>next()}></button>
            </div>
        </div>
    )

}
export default Slider