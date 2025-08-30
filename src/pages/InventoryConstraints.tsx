import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CalendarDays, Package, Save } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface InventoryItem {
  id: string;
  name: string;
  sku: string;
  category: string;
}

interface DayConstraints {
  isHoliday: boolean;
}

interface ProductConstraints {
  minOrderValue: string;
  availability: string;
  isDisabled: boolean;
}

const InventoryConstraints = () => {
  // Mock inventory items
  const [items] = useState<InventoryItem[]>([
    { id: "1", name: "Premium Coffee Beans", sku: "PCB-001", category: "Beverages" },
    { id: "2", name: "Organic Tea Leaves", sku: "OTL-002", category: "Beverages" },
    { id: "3", name: "Artisan Bread", sku: "AB-003", category: "Bakery" },
    { id: "4", name: "Fresh Pastries", sku: "FP-004", category: "Bakery" },
    { id: "5", name: "Seasonal Fruits", sku: "SF-005", category: "Produce" },
    { id: "6", name: "Local Vegetables", sku: "LV-006", category: "Produce" },
  ]);

  // Generate next 7 days
  const getNext7Days = () => {
    const days = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      days.push({
        date,
        key: date.toISOString().split('T')[0],
        dayName: date.toLocaleDateString('en-US', { weekday: 'short' }),
        dayNumber: date.getDate(),
        month: date.toLocaleDateString('en-US', { month: 'short' })
      });
    }
    return days;
  };

  const [days] = useState(getNext7Days());
  
  // Initialize constraints for each day
  const [dayConstraints, setDayConstraints] = useState<Record<string, DayConstraints>>(() => {
    const initial: Record<string, DayConstraints> = {};
    days.forEach(day => {
      initial[day.key] = {
        isHoliday: false
      };
    });
    return initial;
  });

  // Initialize product constraints for each day and item
  const [productConstraints, setProductConstraints] = useState<Record<string, Record<string, ProductConstraints>>>(() => {
    const initial: Record<string, Record<string, ProductConstraints>> = {};
    days.forEach(day => {
      initial[day.key] = {};
      items.forEach(item => {
        initial[day.key][item.id] = {
          minOrderValue: "",
          availability: "100",
          isDisabled: false
        };
      });
    });
    return initial;
  });

  const updateDayConstraint = (dayKey: string, field: keyof DayConstraints, value: boolean) => {
    setDayConstraints(prev => ({
      ...prev,
      [dayKey]: {
        ...prev[dayKey],
        [field]: value
      }
    }));
  };

  const updateProductConstraint = (dayKey: string, itemId: string, field: keyof ProductConstraints, value: string | boolean) => {
    setProductConstraints(prev => ({
      ...prev,
      [dayKey]: {
        ...prev[dayKey],
        [itemId]: {
          ...prev[dayKey][itemId],
          [field]: value
        }
      }
    }));
  };

  const handleSave = () => {
    toast({
      title: "Constraints Saved",
      description: "Inventory constraints have been updated successfully.",
    });
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CalendarDays className="h-6 w-6" />
          <h1 className="text-3xl font-bold">Inventory Constraints</h1>
        </div>
        <Button onClick={handleSave} className="flex items-center gap-2">
          <Save className="h-4 w-4" />
          Save Changes
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="h-5 w-5" />
            7-Day Inventory Management
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <div className="min-w-full">
              {/* Header row with days */}
              <div className="grid grid-cols-8 gap-4 mb-4 pb-4 border-b">
                <div className="font-semibold text-muted-foreground">Items</div>
                {days.map(day => (
                  <div key={day.key} className="text-center">
                    <div className="font-semibold">{day.dayName}</div>
                    <div className="text-sm text-muted-foreground">{day.month} {day.dayNumber}</div>
                  </div>
                ))}
              </div>

              {/* Global controls row */}
              <div className="grid grid-cols-8 gap-4 mb-6 pb-4 border-b bg-muted/20 rounded-lg p-4">
                <div className="font-medium">Day Settings</div>
                {days.map(day => (
                  <div key={day.key} className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={dayConstraints[day.key]?.isHoliday || false}
                        onCheckedChange={(checked) => updateDayConstraint(day.key, 'isHoliday', checked)}
                      />
                      <Label className="text-xs">Holiday</Label>
                    </div>
                  </div>
                ))}
              </div>

              {/* Items rows */}
              {items.map(item => (
                <div key={item.id} className="grid grid-cols-8 gap-4 py-3 border-b hover:bg-muted/10">
                  <div className="flex flex-col">
                    <div className="font-medium text-sm">{item.name}</div>
                    <div className="text-xs text-muted-foreground">{item.sku}</div>
                    <div className="text-xs text-muted-foreground">{item.category}</div>
                  </div>
                  
                  {days.map(day => (
                    <div key={day.key} className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Switch
                          checked={!productConstraints[day.key]?.[item.id]?.isDisabled}
                          onCheckedChange={(checked) => updateProductConstraint(day.key, item.id, 'isDisabled', !checked)}
                          disabled={dayConstraints[day.key]?.isHoliday}
                        />
                        <Label className="text-xs">
                          {productConstraints[day.key]?.[item.id]?.isDisabled ? "Disabled" : "Enabled"}
                        </Label>
                      </div>
                      
                      <div className="space-y-1">
                        <Label className="text-xs">Min Order ($)</Label>
                        <Input
                          type="number"
                          placeholder="0"
                          value={productConstraints[day.key]?.[item.id]?.minOrderValue || ""}
                          onChange={(e) => updateProductConstraint(day.key, item.id, 'minOrderValue', e.target.value)}
                          className="h-8 text-xs"
                          disabled={dayConstraints[day.key]?.isHoliday || productConstraints[day.key]?.[item.id]?.isDisabled}
                        />
                      </div>
                      
                      <div className="space-y-1">
                        <Label className="text-xs">Availability (%)</Label>
                        <Input
                          type="number"
                          placeholder="100"
                          value={productConstraints[day.key]?.[item.id]?.availability || ""}
                          onChange={(e) => updateProductConstraint(day.key, item.id, 'availability', e.target.value)}
                          className="h-8 text-xs"
                          max="100"
                          disabled={dayConstraints[day.key]?.isHoliday || productConstraints[day.key]?.[item.id]?.isDisabled}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="text-sm text-muted-foreground">
        <p>• Toggle holidays to automatically disable all items for that day</p>
        <p>• Set minimum order values and availability percentages per product per day</p>
        <p>• Individual items can be disabled for specific days</p>
      </div>
    </div>
  );
};

export default InventoryConstraints;