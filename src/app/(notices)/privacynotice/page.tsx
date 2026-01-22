import ContinuousCarousel from "@/components/carousels/SliderImages";
import ContactSection from "@/components/contactsection";
import { CTASection } from "@/components/cta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Notice | AHSTI",
  description: "Read AHSTI’s privacy notice explaining how we collect, use, and protect your personal information.",
};

export default function PrivacyNotice() {
  return (
    <div className="bg-[#F5F7FA]">
      <div className="max-w-[1140px] w-full py-10 px-4 mx-auto flex flex-col">
        <h1>Online Privacy Notice</h1>

        <p>
          This privacy notice discloses the privacy practices for www.ahsti.org. This
          privacy notice applies solely to information collected by this website. It
          will notify you of the following:
        </p><br />

        <ol className="list-decimal list-inside">
          <li>
            What personally identifiable information is collected from you through the
            website, how it is used and with whom it may be shared.
          </li>
          <li>What choices are available to you regarding the use of your data.</li>
          <li>
            The security procedures in place to protect the misuse of your
            information.
          </li>
          <li>How you can correct any inaccuracies in the information.</li>
        </ol>

        <h4 className="pt-4">Information Collection, Use, and Sharing</h4>

        <p>
          We are the sole owners of the information collected on this site. We only
          have access to/collect information that you voluntarily give us via email or
          other direct contact from you. We will not sell or rent this information to
          anyone.
        </p><br />
        <p>
          We will use your information to respond to you, regarding the reason you
          contacted us. We will not share your information with any third party
          outside of our organization, other than as necessary to fulfill your
          request, e.g. provide services.
        </p><br />
        <p>
          Unless you ask us not to, we may contact you via email in the future to tell
          you about specials, new products or services, or changes to this privacy
          policy.
        </p>

        <h4 className="pt-4">Your Access to and Control Over Information</h4>

        <p>
          You may opt out of any future contacts from us at any time. You can do the
          following at any time by contacting us via the email address or phone number
          given on our website:
        </p><br />

        <ul className="list-disc list-inside">
          <li>See what data we have about you, if any.</li>
          <li>Change/correct any data we have about you.</li>
          <li>Have us delete any data we have about you.</li>
          <li>Express any concern you have about our use of your data.</li>
        </ul>

        <h4 className="pt-4">Security</h4>

        <p>
          We take precautions to protect your information. When you submit sensitive
          information via the website, your information is protected both online and
          offline.
        </p><br />

        <p>
          Wherever we collect sensitive information (such as credit card data), that
          information is encrypted and transmitted to us in a secure way. You can
          verify this by looking for a lock icon in the address bar and looking for
          &ldquo;https&rdquo; at the beginning of the address of the Web page.
        </p><br />

        <p>
          While we use encryption to protect sensitive information transmitted online,
          we also protect your information offline. Only employees who need the
          information to perform a specific job (for example, billing or customer
          service) are granted access to personally identifiable information. The
          computers/servers in which we store personally identifiable information are
          kept in a secure environment.
        </p><br />

        <p>
          If you feel that we are not abiding by this privacy policy, you should
          contact us immediately via telephone at 956-687-6263 or via email at
          info@ahsti.org.
        </p>
      </div>

      {/* cta section */}
      <CTASection />

      {/* Contact Section */}
      <div className="max-w-[1140px] w-full py-10 px-4 mx-auto flex flex-col text-center">
        <h4>GET STARTED</h4>
        <h2 className="mt-2">
          Contact Us
        </h2>
        <ContactSection />
      </div>

      {/* Carousel Section */}
      <div className="py-10">
        <ContinuousCarousel />
      </div>


    </div>
  );
}