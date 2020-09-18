import React from "react"

export const Slider:React.FC = () => (
    
<div className="container pr-5 pl-5">
    <h3 className="mt-3">New Arrivals</h3>
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    
    <div className="carousel-inner">
        <div className="carousel-item active ">
        <div className="row no-gutters">
        <div className="col-3">
            <div className="row no-gutters">
                <img className="img-fluid" src="https://cdn.analoguelife.com/system/products/744/mainimage/T_59_10_mn.20151121231915826992114.small.jpg"></img>
            </div>
            <div className="row no-gutters">
                <img className="img-fluid" src="https://cdn.analoguelife.com/system/products/1502/mainimage/L_AA.20200911233320727949616.small.jpg"></img>
            </div>
        </div>

        <div className="col-6">
            <img className="img-fluid" src="https://cdn.analoguelife.com/system/products/3541/mainimage/521-12_mn.20200914040520169459724.middle.jpg"></img>
        </div>

        <div className="col-3">
            <div className="row no-gutters">
                <img className="img-fluid" src="https://cdn.analoguelife.com/system/products/5188/mainimage/Es-1-2-Mn.20200905082720107755447.small.jpg"></img>
            </div>
            <div className="row no-gutters ">
                <img className="img-fluid " src="https://cdn.analoguelife.com/system/products/5188/mainimage/Es-1-2-Mn.20200905082720107755447.small.jpg"></img>
            </div>
        </div>
        </div>
        </div>

        <div className="carousel-item">
        <div className="row no-gutters">
        <div className="col-3">
            <div className="row no-gutters">
                <img className="img-fluid" src="https://cdn.analoguelife.com/system/products/4315/mainimage/TA-26-mn.20200620091820601221755.small.jpg"></img>
            </div>
            <div className="row no-gutters">
                <img className="img-fluid" src="https://cdn.analoguelife.com/system/products/3525/mainimage/chabako_mn.20181118010618597915337.small.jpg"></img>
            </div>
        </div>

        <div className="col-6">
            <img className="img-fluid" src="https://cdn.analoguelife.com/system/products/3820/mainimage/Mk-61-2-mn.20200804082220187655679.middle.jpg"></img>
        </div>

        <div className="col-3">
            <div className="row no-gutters">
                <img className="img-fluid" src="https://cdn.analoguelife.com/system/products/2279/mainimage/T-200-2-L_A.20191023093119981598014.small.jpg"></img>
            </div>
            <div className="row no-gutters ">
                <img className="img-fluid " src="https://cdn.analoguelife.com/system/products/5130/mainimage/0001_MN.20200814073420733812666.small.jpg"></img>
            </div>
        </div>
        </div>
        </div>
        
    </div>
    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span><svg width="4em" height="3em" viewBox="0 0 16 16" className="bi bi-chevron-compact-left">
    <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
    </svg></span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span><svg width="4em" height="3em" viewBox="0 0 16 16" className="bi bi-chevron-compact-right">
    <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
    </svg></span>
    </a>
    <div className="row mt-5 ">
    <ol className="carousel-indicators row mt-5 ">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1" ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2" ></li>
        </ol>
    </div>
    </div>
    
</div>

    
  
    

  
  
)