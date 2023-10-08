import React from 'react'

export default function Craousal() {
    
    return (
        <div >
            <div id="carouselExampleFade" className="carousel slide" data-bs-ride="carousel" style={{objectFit : "contain !important"}}>

                <div className="carousel-inner" id="carousel"> 
                    <div className='carousel-caption mb-3' style={{ zIndex: "10" }}>
                        <form className="d-flex">
                            <input className="form-control me-2 bg-dark text-white "  type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success bg-success text-white" type="submit" >Search</button>
                        </form>
                    </div>
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-item active">
                        <img src="https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/16714-birthday-cake-600x600.jpg?ext=.jpg" className="d-block w-100" alt="..." 
                        style={{
                            maxHeight: "500px",
                            filter : "brightness(30%)"
                        }}/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://assets.winni.in/product/primary/2023/3/83221.jpeg?dpr=1&w=1000" className="d-block w-100" alt="..."
                        style={{
                            maxHeight: "500px",
                            filter : "brightness(30%)"
                        }}/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.fnp.com/images/pr/l/v20221205202052/black-forest-cake-half-kg-eggless_1.jpg" className="d-block w-100" alt="..."
                        style={{
                            maxHeight: "500px",
                            filter : "brightness(30%)"
                        }} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}





