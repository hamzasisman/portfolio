import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoH from '../../../assets/images/logo-h.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 15,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoH}
        alt="JavaScript,  Developer"
      />

      <svg
        width="845"
        height="956"
        viewBox="0 0 845 956"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g
          className='svg-container'
          transform='tranlate(0 457 scale(.1 -.1)'
          fill='none'
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M40.8032 40.9091H0.803223V956H226.53V916H266.53V590.677H578.751V956H804.033V916H844.033V0.909058H618.751V40.9091H578.751V365.788H266.53V0.909058H40.8032V40.9091ZM40.8032 916H223.53V953H3.80322V43.9091H40.8032V916ZM43.8032 43.9091V913H223.53H226.53H263.53V547.677H621.751V913H841.033V3.90906H621.751V43.9091V368.788H581.751L266.53 365.788L263.53 3.90906H43.8032V43.9091ZM578.751 368.788L266.53 365.788L263.53 3.90906V368.788H578.751ZM581.751 365.788H618.751V43.9091H581.751V365.788ZM801.033 916H618.751V550.677H266.53V587.677H581.751V953H801.033V916Z"
            fill="none"
            ref={outlineLogoRef}
          />
        </g>
      </svg>

    </div>
  )
}

export default Logo
