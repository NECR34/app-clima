import React, {useState} from "react";

const DataCart = ({newLocation}) => {

    const [city, setCity] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        console.log({city});
        if(city === "" || !city)
        return;

        newLocation(city);
}

    return (
        <div>
            <form onSubmit={onSubmit}>

                <div>
                    <input type="text" className="form" placeholder="City" onChange={(e) => setCity(e.target.value)} />
                    <button className="btn"type="submit">search</button>
                </div>

            </form>
        </div>
    );

}

export default DataCart;