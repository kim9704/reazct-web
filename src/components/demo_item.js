
function DemItem() {
    return (
        <div className='demo_item' style={{
            padding:20,
            boxShadow:'0 0 5px 5px #d5d5d5',
            backgroundColor:'white',
            borderRadius:10,
            fontSize:'0.8em',
            marginRight:15
        }}>
        <div className='tiile'>
            <h3 style={{
                margin:0
            }}>AAPL</h3>
            <h4 style={{
                margin:0
            }}>Apple Inc</h4>
        </div>
        <div className='content'>
            <h2 style={{
                margin:0,
                marginTop:10
            }}>$166.17</h2>
            <h4 style={{
                margin:0,
                color:'green'
            }}>+0.77%</h4>
        </div>
    </div>
    );
  }
  
  export default DemItem;
  
  