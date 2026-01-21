import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "./ui/button"
import Link from "next/link"

export function RepairsAccordion() {
  const items = [
    {
      title: "Project Imagine Tomorrow - McAllen homeowners only",
      content:
        "In a partnership between AHSTI and The City of McAllen, Project Imagine Tomorrow encourages homeowners to repair or demolish their dilapidated homes through tax incentives and practical home mortgage financing solutions. Restricted to households at 80% of the area median income or below.",
    },
    {
      title: "New Beginnings - McAllen homeowners only",
      content:
        "New Beginnings is a home replacement program for 60 years of age (or older) and/or for disabled clients who are currently living in substandard living conditions that are beyond repair. Restricted to households at 80% of the area median income or below.",
    },
    {
      title: "Programs for Pharr homeowners only",
      content:
        "Neighborhood Housing Program is a home rehab/replacement program that is available for Pharr residents that have lived in Pharr at least one year. Applicants must be low or moderate income at the time of application (means total gross earnings equal to or less than 80% of median family income). There are no age restrictions and the property must be current on taxes and with no liens. The home must also be the primary residence of the homeowner.",
    },
    {
      title: "All Other Programs",
      content:
        "There are several other rehab programs available to homeowners from Hidalgo County. Contact us.",
    },
  ]

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full flex flex-col gap-3 mt-5"
      defaultValue="item-1"
    >
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          value={`item-${index + 1}`}
          className="bg-white shadow-md rounded-2xl p-4 transition-all hover:shadow-lg hover:translate-x-1"
        >
          <AccordionTrigger>
            <p>{item.title}</p>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>{item.content}</p>
            <Link href="https://www.myahstihome.org"><Button>Next Steps</Button></Link>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
