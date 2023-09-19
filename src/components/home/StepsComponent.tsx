function StepsComponent() {
    return (<>

        <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="p-5">
                <img src="image/1.jpg" alt=""/>
            </div>

            <div className="text-center grid items-center p-5">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                    th</p>
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="text-center grid items-center p-5 order-2 sm:order-none">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                    th</p>
            </div>

            <div className="p-5 order-1 sm:order-none">
                <img src="image/2.jpg" alt=""/>
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="p-5">
                <img src="image/3.jpg" alt=""/>
            </div>

            <div className="text-center grid items-center p-5">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                    th</p>
            </div>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="text-center grid items-center p-5 order-2 sm:order-none">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                    th</p>
            </div>

            <div className="p-5 order-1 sm:order-none">
                <img src="image/4.jpg" alt=""/>
            </div>
        </div>


    </>)
}

export default StepsComponent;