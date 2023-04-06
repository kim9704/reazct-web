function Orther(props) {
    return (
        <div className='orther_item' style={{
            width:'33%',
            height:'4em'
        }}>
            <div className='img' style={{
                textAlign:'center'
            }}>
                <img
                style={{
                    backgroundColor:'#D9D9D9',
                    borderRadius:'50%',
                    padding:10,
                    width:'2em',
                    height:'2em'
                }}
                 src={props.icon} />
            </div>
            <div style={{
                textAlign:'center'
            }}>
                <h5 style={{
                    margin:0,
                    fontSize:'0.8em',
                    fontWeight:400
                }}>{props.name}</h5>
            </div>
        </div>
    );
  }
  
  export default Orther;
  
  