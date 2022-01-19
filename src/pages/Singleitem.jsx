import img from "../Resources/mens/aj-3.jpg"


function Singleitem() {
    return (
    <>
        <div className="si-col-1">
            <div className="card">
                <img src={img} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">
                        {"Aditya"} {"Gupta"}
                    </h5>
                    <p className="card-text">{"fshhfhha"}</p>
                    <p className="card-text">{"dsfbaafhfahabadb"}</p>
                    {/* <p className="card-text">
                        {dayjs(item?.date).format("DD MMMM YYYY")}
                    </p> */}
                </div>
            </div>
        </div>


    </>  
    )
}

export default Singleitem
