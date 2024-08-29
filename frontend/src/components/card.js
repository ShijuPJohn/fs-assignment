import React from 'react';

function Card({card}) {
    return (
        <div className={"h-[10rem w-[20rem] bg-gray-200 m-auto px-4 py-2 rounded-xl"}>
            <div className="card-title-part">
                <h3 className="card-title">
                    {card.title}
                </h3>
            </div>

        </div>
    );
}

export default Card;