import React from 'react';

const CurrentOffers = () => {
    return (
        <div className="my-10 mx-[10%]">
            <label className="input input-bordered flex items-center gap-2">
                Name
                <input type="text" className="grow" placeholder="Daisy" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
                Email
                <input type="text" className="grow" placeholder="daisy@site.com" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow" placeholder="Search" />
                <kbd className="kbd kbd-sm">⌘</kbd>
                <kbd className="kbd kbd-sm">K</kbd>
            </label>
            <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow" placeholder="Search" />
                <span className="badge badge-info">Optional</span>
            </label>
            <h2>Flash sale</h2>
            <h2>Best deals</h2>
            <h2>Latest products</h2>
            <h2>Just for you</h2>
        </div>
    );
};

export default CurrentOffers;