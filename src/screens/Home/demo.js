import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import $ from "jquery";
import DemItem from '../../components/demo_item'

function Demo() {
    return (
        <div style={{
            padding:10
        }}>
            <div className='demo' style={{
                flex:1,
                display:'flex'
            }}>
                {/* demo flex */}
                <DemItem />
                <DemItem />
                <DemItem />
            </div>
        </div>
    );
  }
  
  export default Demo;
  
  