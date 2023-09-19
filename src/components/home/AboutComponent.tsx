function AboutComponent() {
    return (<>

        <div className="p-[30px] bg-blue-400 rounded-b-lg shd text-white">
            <h2 className="text-2xl font-bold pb-5 text-center">Despre mine</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:w-2/3 mx-auto">

                <div className="pr-5 mx-auto sm:mx-0">
                    <img src="/image/profile.png" alt="" className="rounded-3xl h-[300px]"/>
                </div>

                <p className="grid items-center text-justify pt-5 sm:pt-0 pl-5">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and
                    scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap
                    into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                    th..
                </p>
            </div>
        </div>
    </>)
}

export default AboutComponent;