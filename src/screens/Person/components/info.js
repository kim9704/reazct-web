function Person() {
    return (
        <div className='info' 
        style={{
            boxShadow:'0 0 3px 3px #d5d5d5',
            minHeight:100,
            borderRadius:10,
            backgroundColor:'white',
            marginTop:10,
            padding:10
        }}
        >
            <h5 style={{
                margin:0,
                fontSize:18,
                fontWeight:300
            }}>Balance: <span style={{
                fontSize:'0.9em',
                fontWeight:400
            }}>0.00$</span></h5>
            <div className="active" style={{
                marginTop:10
            }}>
                <button className="btn" style={{
                    border:'none',
                    borderRadius:5,
                    width:'47%',
                    padding:10,
                    marginRight:15
                }}>Nap</button>
                <button className="btn" style={{
                    border:'none',
                    borderRadius:5,
                    width:'47%',
                    padding:10,
                }}>Rut</button>
            </div>
            <div>
                <p style={{
                    fontSize:13
                }}>
                    Luu y: Vui long xac min tai khoan
                </p>
            </div>
        </div>
    );
  }
  
  export default Person;
  
  