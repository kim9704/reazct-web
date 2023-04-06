import Info from './components/info'
import Orther from './components/orther'
function Person() {
  return (
    <div style={{
        padding:20
    }}>
        <div>
            <h5 style={{
                margin:0,
                fontSize:18,
                fontWeight:300
            }}>ID: <span style={{
                letterSpacing:1
            }}>5545615411</span></h5>
        </div>
        <Info />
       {/* Phaanf chonj lwaj */}
       <div className='orther' style={{
            boxShadow:'0 0 3px 3px #d5d5d5',
            minHeight:160,
            borderRadius:10,
            backgroundColor:'white',
            padding:'20px 10px',
            display:'flex',
            flexWrap:'wrap',
            marginTop:10
        }}>
           <Orther
            name='Following'
            icon={require('../../assets/search.png')}
            url=''
            />
           <Orther
           name='Following'
           icon={require('../../assets/search.png')} />
           <Orther
           name='Following'
           icon={require('../../assets/search.png')} />
           <Orther
            name='Following'
            icon={require('../../assets/search.png')}/>
           <Orther
           name='Following'
           icon={require('../../assets/search.png')} />
           <Orther
           name='Following'
           icon={require('../../assets/search.png')} />
        </div>
        <div className='menulist' style={{
            boxShadow:'0 0 3px 3px #d5d5d5',
            minHeight:160,
            borderRadius:10,
            backgroundColor:'white',
            padding:'20px 10px',
            display:'flex',
            flexWrap:'wrap',
            marginTop:10
        }}>
          
        </div>
    </div>
  );
}

export default Person;

