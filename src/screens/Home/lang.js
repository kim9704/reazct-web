
function Lang() {
    return (
        <div className="lang" style={{
            width:'100%',
            height:'40px',
            display:'flex'
        }}>
            <div style={{
                flex:1
            }}>
            </div>
            <div>
                <img style={{
                    width:26,
                    height:30,
                    marginTop:5
                }} src={require('../../assets/world.png')}/>
            </div>
            <select style={{
                height:'30px',
                width:'50px',
                backgroundColor:'#E5E5E5',
                marginLeft:'auto',
                margin:5
            }}>
                <option value='VN'>VN</option>
                <option value='EN'>EN</option>
                <option value='CN'>CN</option>
            </select>
            
        </div>
    );
  }
  
  export default Lang;
  
  