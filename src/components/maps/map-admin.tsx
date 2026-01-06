// components/MapEmbed.tsx
export default function MapAdmin() {
    return (
        <div className="w-full h-[400px] rounded-lg overflow-hidden">

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8520.947936598199!2d-98.23925312392835!3d26.199382777079528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8665a7446b7d7f47%3A0x9e4b2d0ea27ffdc2!2s500%20S%2015th%20St%2C%20McAllen%2C%20TX%2078501!5e1!3m2!1sen!2sus!4v1767712968412!5m2!1sen!2sus"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    );
}
