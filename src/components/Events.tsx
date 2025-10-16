import Event from "./event";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Events() {

    return (
        <div>
        <Tabs defaultValue="upcoming" className="w-full pt-5">

        <TabsList className="mx-auto">
            <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
            <TabsTrigger value="previous">Previous Events</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming">
            <div className="flex flex-row gap-3 mt-5 mb-3">
                <Event />
                <Event />
            </div>
            </TabsContent>

        <TabsContent value="previous">
            <div className="flex flex-row gap-3 mt-5 mb-3">
                <Event />
                <Event />
            </div>
        </TabsContent>

        </Tabs>

        </div>
    );


}