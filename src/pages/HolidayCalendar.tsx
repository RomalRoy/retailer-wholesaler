import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Calendar as CalendarIcon, Clock, Users } from "lucide-react";
import { useState } from "react";

const HolidayCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const holidays = [
    {
      id: 1,
      name: "New Year's Day",
      date: "2024-01-01",
      type: "Public Holiday",
      impact: "Store Closed",
      affectedStores: 5
    },
    {
      id: 2,
      name: "Martin Luther King Jr. Day",
      date: "2024-01-15",
      type: "Public Holiday",
      impact: "Limited Operations",
      affectedStores: 3
    },
    {
      id: 3,
      name: "Presidents Day",
      date: "2024-02-19",
      type: "Public Holiday",
      impact: "Store Closed",
      affectedStores: 5
    },
    {
      id: 4,
      name: "Spring Break",
      date: "2024-03-25",
      type: "Seasonal",
      impact: "Extended Hours",
      affectedStores: 2
    },
    {
      id: 5,
      name: "Memorial Day",
      date: "2024-05-27",
      type: "Public Holiday",
      impact: "Store Closed",
      affectedStores: 5
    }
  ];

  const upcomingHolidays = holidays.slice(0, 3);

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "Store Closed":
        return "destructive";
      case "Limited Operations":
        return "secondary";
      case "Extended Hours":
        return "default";
      default:
        return "outline";
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Holiday Calendar</h1>
          <p className="text-muted-foreground">Manage holidays and their impact on operations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Total Holidays</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">24</div>
              <p className="text-xs text-muted-foreground">This year</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Store Closures</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">12</div>
              <p className="text-xs text-muted-foreground">Full closure days</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Limited Operations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">8</div>
              <p className="text-xs text-muted-foreground">Reduced hours</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Extended Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">4</div>
              <p className="text-xs text-muted-foreground">Special events</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Holiday Schedule</CardTitle>
                    <CardDescription>All scheduled holidays and their operational impact</CardDescription>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>
                        <Plus className="h-4 w-4 mr-2" />
                        Add Holiday
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Add New Holiday</DialogTitle>
                        <DialogDescription>
                          Create a new holiday entry and define its operational impact.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                          <Label htmlFor="name">Holiday Name</Label>
                          <Input id="name" placeholder="Enter holiday name" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="date">Date</Label>
                          <Input id="date" type="date" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="type">Type</Label>
                          <Input id="type" placeholder="e.g., Public Holiday, Seasonal" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="impact">Operational Impact</Label>
                          <Input id="impact" placeholder="e.g., Store Closed, Limited Operations" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="notes">Notes</Label>
                          <Textarea id="notes" placeholder="Additional notes or instructions" />
                        </div>
                      </div>
                      <div className="flex justify-end gap-2">
                        <Button variant="outline">Cancel</Button>
                        <Button>Add Holiday</Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {holidays.map((holiday) => (
                    <div key={holiday.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                          <CalendarIcon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">{holiday.name}</h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            {holiday.date}
                            <span>•</span>
                            <Users className="h-3 w-3" />
                            {holiday.affectedStores} stores affected
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{holiday.type}</Badge>
                        <Badge variant={getImpactColor(holiday.impact)}>
                          {holiday.impact}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Calendar View</CardTitle>
                <CardDescription>Navigate holidays by date</CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Upcoming Holidays</CardTitle>
                <CardDescription>Next 3 scheduled holidays</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {upcomingHolidays.map((holiday) => (
                    <div key={holiday.id} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <div>
                        <div className="font-medium text-sm">{holiday.name}</div>
                        <div className="text-xs text-muted-foreground">{holiday.date}</div>
                      </div>
                      <Badge variant={getImpactColor(holiday.impact)} className="text-xs">
                        {holiday.impact}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HolidayCalendar;