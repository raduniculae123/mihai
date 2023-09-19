import React, {useState} from 'react';

// Define a type for the form data
type FormData = {
    name: string;
    email: string;
    phone: string;
    message: string;
};

function Contact() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [formErrors, setFormErrors] = useState<{ emailOrPhone?: string }>({});
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Validate the form
        const errors: { emailOrPhone?: string } = {};
        if (!formData.email && !formData.phone) {
            errors.emailOrPhone = 'Telefonul sau email-ul este obligatoriu.';
        }
        setFormErrors(errors);

        // If there are no errors and either email or phone is provided, you can perform your submission logic here
        if (Object.keys(errors).length === 0 && (formData.email || formData.phone)) {
            // Submit the form or perform any other actions
            setFormSubmitted(true);
        }
    };

    return (
        <>
            <div
                className="flex justify-center align-middle rounded-lg min-h-[500px] flex-col md:flex-row m-5 mt-10 sm:mt-[50px] sm:mx-[50px] shd bg-gradient-to-b from-blue-600 to-blue-400">
                <div
                    className="md:w-2/5 h-80 md:h-auto bg-cover bg-right rounded-t-lg md:rounded-none md:rounded-s-lg"
                    style={{backgroundImage: "url('image/contact.jpg')"}}
                />

                <div className="md:w-3/5 p-5 grid">
                    {formSubmitted ? (
                        <div className=" flex justify-center items-center h-100">
                            <div className="text-white text-center">Mesajul a fost trimis cu succes!</div>
                        </div>
                    ) : (
                        <>
                            <div className="text-white text-center mb-4 text-2xl font-bold">Formular de contact</div>

                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Nume"
                                        className="rounded w-full p-2"
                                        onChange={handleInputChange}
                                        value={formData.name}
                                    />
                                </div>

                                <div className="mb-4">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        className="rounded w-full p-2"
                                        onChange={handleInputChange}
                                        value={formData.email}
                                    />

                                    {formErrors.emailOrPhone && (
                                        <p className="text-red-500 text-sm">{formErrors.emailOrPhone}</p>
                                    )}
                                </div>

                                <div className="mb-4">
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Telefon"
                                        className="rounded w-full p-2"
                                        onChange={handleInputChange}
                                        value={formData.phone}
                                    />
                                </div>

                                <div className="mb-4">
                          <textarea
                              name="message"
                              placeholder="Mesaj"
                              rows={4}
                              className="rounded w-full p-2"
                              onChange={handleInputChange}
                              value={formData.message}
                          />
                                </div>

                                <div className="mb-4 text-right">
                                    <button
                                        className="bg-blue-300 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded transition ease-in-out delay-50 shd"
                                    >
                                        Trimite
                                    </button>
                                </div>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default Contact;
