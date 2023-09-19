function ContactComponent() {
    return (<>

        <div className="p-10 bg-blue-400 text-center">
            <h2 className="text-2xl text-blue-950 font-bold pb-5">
                Contactează-mă
            </h2>

            <div className="flex w-100">
                <form className="m-auto">
                    <div className="mb-4">
                        <input type="text" name="name" placeholder="Nume"/>
                    </div>

                    <div className="mb-4">
                        <input type="text" name="email" placeholder="Email/Telefon"/>
                    </div>

                    <div className="mb-4">
                        <button
                            className="bg-blue-300 hover:bg-blue-200 text-white font-bold py-2 px-4 rounded transition ease-in-out delay-50 cursor-pointer"> Trimite
                        </button>
                    </div>

                </form>
            </div>

        </div>
    </>)
}

export default ContactComponent;