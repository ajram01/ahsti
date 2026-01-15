import ContactRequestForm from "./ContactRequestForm";

export default function ContactRequest(emailProp: { email?: string }) {

    return (
        <div className="flex flex-col lg:flex-row mt-5 gap-5">

            <div className="bg-white flex w-full border-1 border-gray-300 shadow-md rounded-lg p-5">
                {emailProp.email ? (
                    <ContactRequestForm email={emailProp.email} />
                ) : (
                    <ContactRequestForm />
                )}
            </div>

        </div>


    );
}