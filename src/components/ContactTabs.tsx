"use client"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import ContactSectionCustom from "./contactsection-custom"

const locations = [
  {
    value: "homeownership",
    label: "Homeownership Center",
    address: "500 S. 15th St. McAllen, TX 78501",
    phone: "956-687-6263",
    fax: "956-682-9751",
    mapLocation:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5383.858766992808!2d-98.2392642233273!3d26.199395090378538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8665a7446c82d9c7%3A0x9583eefb6e9d2ca!2s500%20S%2015th%20St%2C%20McAllen%2C%20TX%2078501!5e1!3m2!1sen!2sus!4v1762459144215!5m2!1sen!2sus"
  },
  {
    value: "admin",
    label: "Administration Building",
    address: "1420 Erie Ave, McAllen, TX 78501",
    phone: "956-687-6263",
    fax: "956-682-9751",
    mapLocation:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6572.473830292434!2d-98.23853922514284!3d26.199910290360314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8665a74439510a23%3A0xe163a9df2481af67!2s1420%20Erie%20Ave%2C%20McAllen%2C%20TX%2078501!5e1!3m2!1sen!2sus!4v1760553115173!5m2!1sen!2sus"
  },
  {
    value: "construction",
    label: "Construction Services Building",
    address: "514 S. 16th St. McAllen, TX 78501",
    phone: "956-687-6263",
    fax: "956-682-9751",
    mapLocation:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5383.860459221999!2d-98.24046802332728!3d26.199358490380188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8665a7438b1dcd8f%3A0x906353d1aeb25178!2s514%20S%2016th%20St%2C%20McAllen%2C%20TX%2078501!5e1!3m2!1sen!2sus!4v1762459200943!5m2!1sen!2sus"
  },
  {
    value: "weslaco",
    label: "Weslaco Branch",
    address: "134 W. 5th St. Weslaco, TX 78596",
    phone: "956-447-8909",
    fax: "956-447-8904",
    mapLocation:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5385.8091709807495!2d-97.99615420915148!3d26.15717963312938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866577a5ee208b29%3A0x1b78aff75d677548!2s134%205th%20St%2C%20Weslaco%2C%20TX%2078596!5e1!3m2!1sen!2sus!4v1762459407788!5m2!1sen!2sus"
  },
  {
    value: "fred",
    label: "Fred Munguia Training House",
    address: "510 S. 10th St. McAllen, TX 78501",
    phone: "",
    fax: "",
    mapLocation:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5383.894793430634!2d-98.23377302332725!3d26.198615890411247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8665a74f7535953d%3A0xa84f9b9632b5807c!2s510%20S%2010th%20St%2C%20McAllen%2C%20TX%2078501!5e1!3m2!1sen!2sus!4v1762459264229!5m2!1sen!2sus"
  },
]

export function ContactTabs() {
  return (
    <div className="w-full">
      {/* Desktop/tablet (Tabs) */}
      <div className="hidden md:block">
        <Tabs defaultValue="admin" variant="blue" className="w-full">
          <TabsList className="mx-auto">
            {locations.map((location) => (
              <TabsTrigger key={location.value} value={location.value}>
                {location.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {locations.map((location) => (
            <TabsContent key={location.value} value={location.value}>
              <h4 className="pt-5">CONTACT US</h4>
              <h2>{location.label}</h2>
              <ContactSectionCustom location={location} />
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Mobile (Accordion) */}
      <div className="block p-2 md:hidden ">
        <Accordion type="single" defaultValue="admin" collapsible className="w-full">
          {locations.map((location) => (
            <AccordionItem key={location.value} value={location.value}>
              <AccordionTrigger>{location.label}</AccordionTrigger>
              <AccordionContent>
                <h4 className="pt-3 text-sm font-medium">CONTACT US</h4>
                <h2 className="text-lg font-semibold">{location.label}</h2>
                <ContactSectionCustom location={location} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
