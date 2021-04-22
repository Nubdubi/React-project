import React,{useState,useRef} from 'react'
import Cards from '../../component/Card'
function Right() {
    const triggerRef1 = React.createRef<SVGSVGElement>();
      const ref = useRef(null)
      const [hovered, setHoverd] = useState(false)

    return (
        <div className="left-side">
            {/* 좌측 */}
          {/* 상의 */}
          <div className="top items item1">
            <div className="top line">
              top
            </div>
           <Cards/>
          </div>
          {/* 하의 */}
          <div className="bottom items">
              <div className="top line">
                bottom
            </div>
           <Cards/>
          </div>
          {/* 신발 */}
          <div className="foot items">
              <div className="top line">
                shoes
            </div>
           <Cards/>
          </div>




        </div>
    )
}

export default Right
