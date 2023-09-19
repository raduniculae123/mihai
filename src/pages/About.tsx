import React from 'react';
import CardComponent from "../components/layout/CardComponent";

function About() {
    return (
        <>

            <h2 className="font-bold text-xl p-20 text-justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="p-3 px-10">
                    <CardComponent>
                        <p>Lorems simply dummy text of </p>
                    </CardComponent>
                </div>

                <div className="p-3 px-10">
                    <CardComponent>
                        <p>Lorems simply dummy text of </p>
                    </CardComponent>
                </div>
            </div>
        </>
    );
}

export default About;
