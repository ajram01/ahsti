import ContinuousCarousel from "@/components/carousels/SliderImages";
import ContactSection from "@/components/contactsection";
import { CTASection } from "@/components/cta";

export default function CivilRights() {
    return (
        <div className="bg-[#F5F7FA]">
            <div className="max-w-[1140px] w-full py-10 px-4 mx-auto flex flex-col">
                <h1>Non-Discrimination Notice</h1>

                <h4>
                    Notice of Rights Under Title VI of the Civil Rights Act of 1964 and Section
                    504 of the Rehabilitation Act of 1973
                </h4>

                <p>
                    Affordable Homes of South Texas, Inc. is committed to ensuring that all
                    individuals have equal access to our programs, services, and activities. As
                    a recipient of federal financial assistance, Affordable Homes of South
                    Texas, Inc. complies with Title VI of the Civil Rights Act of 1964, which
                    prohibits discrimination on the basis of race, color, or national origin,
                    and Section 504 of the Rehabilitation Act of 1973, which prohibits
                    discrimination on the basis of disability.
                </p>
                <br />

                <p>Under Title VI and Section 504, you have the right to:</p>
                <ul className="list-disc list-inside">
                    <li>
                        Not be subjected to discrimination on the basis of race, color, or
                        national origin (Title VI) or disability (Section 504) in the provision of
                        our programs, services, and activities.
                    </li>
                    <li>
                        Access services and facilities that are accessible to and usable by
                        individuals with disabilities.
                    </li>
                    <li>
                        Request reasonable accommodations or modifications to policies and
                        procedures to ensure equal access.
                    </li>
                    <li>
                        File a complaint if you believe you have been subjected to discrimination.
                    </li>
                </ul>

                <h4 className="pt-4">Internal Complaint Submission</h4>
                <p>
                    Complaints should be submitted to:
                    <br />
                    <br />
                    Myra L. Martinez, Deputy Executive Director
                    <br />
                    1420 Erie Ave., McAllen, TX 78501
                    <br />
                    mmartinez@ahsti.org
                    <br />
                    Ph: 956-687-6263
                </p>
                <br />

                <p>
                    Complaints must be filed within 180 days of the alleged discrimination. You
                    may also file a complaint directly with the appropriate federal agency:
                </p>

                <h4 className="pt-4">For Title VI:</h4>
                <p>
                    Office for Civil Rights
                    <br />
                    U.S. Department of Justice
                    <br />
                    950 Pennsylvania Avenue, NW
                    <br />
                    Washington, DC 20530-0001
                    <br />
                    1-855-856-1247
                    <br />
                    Telephone Device for the Deaf (TTY) (202) 514-0716
                    <br />
                    Online report can be filed at https://civilrights.justice.gov/report/
                </p>

                <h4 className="pt-4">For Section 504:</h4>
                <p>
                    Office for Civil Rights
                    <br />
                    U.S. Department of Health and Human Services
                    <br />
                    200 Independence Avenue, SW
                    <br />
                    Room 509F, HHH Building
                    <br />
                    Washington, DC 20201
                    <br />
                    1-800-368-1019
                    <br />
                    Telephone device for the deaf (TDD) 1-800-537-7697
                    <br />
                    ocrmail@hhs.gov
                    <br />
                    Online report can filed at https://ocrportal.hhs.gov/ocr/smartscreen/main.jsf
                </p>
                <br />

                <p>
                    Affordable Homes of South Texas, Inc. is committed to promptly and
                    thoroughly investigating all complaints and taking appropriate action to
                    address any instances of discrimination.
                </p>
                <br />

                <h4 className="pt-4">Additional Information</h4>
                <p>
                    If you require additional information or assistance in understanding your
                    rights under Title VI and Section 504, please contact:
                    <br />
                    <br />
                    Myra L. Martinez, Executive Vice President/Chief Operating Officer
                    <br />
                    1420 Erie Ave., McAllen, TX 78501
                    <br />
                    mmartinez@ahsti.org
                    <br />
                    Ph: 956-687-6263
                </p>
                <br />

                <p>
                    Thank you for your attention to this important matter. We strive to create
                    an inclusive and accessible environment for all individuals.
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