
function ContentResume() {

    const divStyle = {
        paddingRight: "0em",
        paddingLeft: "0em"
    }

    return(
        //<!-- Container -->
        <div className="container-fluid" style={divStyle}>

            <div className="row">
                <div className="col-lg-3">
                </div>

                <div className="col-lg-6">

                    <div className="row p-3">
                        <h3><b>Professional profile:</b></h3>
                        <p>Experienced game programmer who has ability to quickly learn new development tools & languages and has many years of experience in Korean game industry which features leading-edge online & mobile gaming and also a dedicated team member with a passion for video games and the game industry. </p>
                    </div>

                    <div className="row p-3">
                        <h3><b>Education:</b></h3>
                        <p>Ajou University, March 2000 – June 2007 (2003-2005, Military Service in Korea Army)
                        <br />Bachelor’s degree in computer science
                        </p>
                    </div>
                        
                    <div className="row p-3">
                        <h3><b>Skills:</b></h3>
                        <p>12 years of game programming experience, Object-Oriented Programming, C++ C#, C, 3D Math, Scrum and agile development, Mobile(iOS / Android) Game Development, Online Game Development, Skeletal Animation</p>
                    </div>

                    <div className="row p-3">
                        <h3><b>Tools:</b></h3>
                        <p>Unreal Engine 5, Unity Engine, Visual Studio, SVN, Git, Cocos2D, Blender</p>
                    </div>

                </div>

                <div className="col-lg-3">
                </div>     
            </div>       
        </div> 

    );

}