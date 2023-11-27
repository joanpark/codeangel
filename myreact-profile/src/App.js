import logo from './logo.svg';
import './App.css';
import './my.css';

function App() {


  const renderTest = ()=>{
    let renderList = []

    for(let i=0; i<10; i++){
      renderList.push (

        <>
        <div className="row p-3">
          {/* 왼쪽 빈 컬럼 */}
          <div className="col-md-3"> 
          </div>        

          <div className="col-md-6"> 
        
          <h3> Lead Developer @ Returnless (fulltime) </h3>

          <p> Eindhoven | https://returnless.com </p>

          <p> As the Lead Developer at Returnless, me and the team are developing an all-in-one Return Platform. Using Laravel combined with Vapor and a beautiful Vue3 / Tailwind front-end we deliver a sweatless return experience for our customers.</p>
          </div>

          {/* 오른쪽 빈 컬럼 */}
          <div className="col-md-3"> 
          </div>      
        </div>     
        </>
      )
    }

    return renderList
  }

  // 자바스크립트에서 변수 선언 : const, let, var
  const myStyle = {
      backgroundColor : "red"
  }

  const myName = "Junghyun Park"

  return (

    // JSX - javascript + XML(HTML)

    <>

    <div className="row my-padding" style={myStyle}>
      <div className="col-md-2"> 
          Me
      </div>         
      <div className="col-md-4"> 
      </div>         
      <div className="col-md-6 text-end"> 
        <pre>About    Projects</pre>
      </div>        
    </div>  

    <div className="row p-3">
                   
    </div>  




    {
      renderTest()
    }


    </>
  );
}

export default App;
