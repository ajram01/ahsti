// components/MapEmbed.tsx
export default function MapAdminCustom({ location }: { location: string }) {
    return (
        <div className="w-full h-[408px] rounded-lg overflow-hidden">

            <iframe src={location}
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    );
}
