import React, {useEffect} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function HelpCenterScreen(props) {
    const [cards, setCards] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [searchTerm, setSearchTerm] = React.useState("");
    useEffect(() => {
        // Fetch data from an API
        axios.get('http://localhost:5000/api/v1/cards')
            .then(response => {
                console.log(response.data)
                setCards(response.data);
                setLoading(false);
            })
            .catch(error => {
                setLoading(false);
            });
    }, []);
    return (
        <>
            <div className="title-section-box flex flex-col justify-center items-center h-[40vh] w-full">
                <h1 className={"text-[3rem]"}>How can we help?</h1>
                <div
                    className="flex items-center border-gray-400 border-[2px] rounded-[5px] px-2 bg-white overflow-hidden">
                    <input
                        type="text"
                        placeholder="Search"
                        className="flex-grow px-1 py-2 focus:outline-none w-[30rem]"
                    />
                    <button className="search-btn bg-white h-full">
                        <FontAwesomeIcon icon={faArrowRight}/>
                    </button>

                </div>
            </div>
            <div className="cards-box flex-grow flex flex-row bg-amber">

            </div>
        </>
    );
}

export default HelpCenterScreen;