// components/MapEmbed.tsx
export default function MapAdmin() {
    return (
        <div className="w-full h-[400px] rounded-lg overflow-hidden">

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6572.473830292434!2d-98.23853922514284!3d26.199910290360314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8665a74439510a23%3A0xe163a9df2481af67!2s1420%20Erie%20Ave%2C%20McAllen%2C%20TX%2078501!5e1!3m2!1sen!2sus!4v1760553115173!5m2!1sen!2sus"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
        </iframe>
        </div>
  );
}
