
function View() {
    return (
        <div style={{
            backgroundColor:'#2F2F2F',
            border: '1px solid',
            display:'flex',
            height:50,
            marginTop:3
        }}>
            <h4 style={{
                color:'white',
                margin:0,
                lineHeight:'50px',
                marginLeft:'20px',
                fontWeight:300,
                width:'30%'
            }}>USD/VND</h4>
            <h5 style={{
                color:'white',
                margin:0,
                lineHeight:'50px',
                fontWeight:300,
                width:'25%'
            }}>USD/VND</h5>
            <div style={{
                color:'white',
                margin:0,
                lineHeight:'50px',
                fontWeight:300,
                width:'20%'
            }}>
                <img />
            </div>
            <h5 style={{
                color:'#07d107',
                margin:0,
                lineHeight:'50px',
                marginLeft:'20px',
                fontWeight:300,
                width:'25%'
            }}>0.454545%</h5>
        </div>
    );
  }
  
  export default View;
  
  