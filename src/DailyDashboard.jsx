import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function DailyDashboard() {
  const [step1, setStep1] = useState(null);
  const [fuelType, setFuelType] = useState(null);
  const [step3, setStep3] = useState(null);
  const [step4, setStep4] = useState(null);
  const [suggestion, setSuggestion] = useState("");

  useEffect(() => {
    if (fuelType === "Deficit") {
      setSuggestion("Today: Light mobility + core activation (DDPY, cat-cow, breathing, wall stretch)");
    } else if (fuelType === "Refeed") {
      setSuggestion("Today: Light resistance or walk-based session (bodyweight squats, incline walk, Bionic Gym)");
    } else if (fuelType === "Flex") {
      setSuggestion("Today: Low-impact flow or intuitive movement (walk, stretch, breath reset)");
    } else {
      setSuggestion("");
    }
  }, [fuelType]);

  return (
    <div className="p-4 max-w-md mx-auto space-y-4">
      <Card>
        <CardContent className="space-y-4">
          <h2 className="text-xl font-semibold">Lance's Daily 4 Dashboard</h2>

          <div>
            <p className="font-medium">1. Lock the First Win</p>
            <ToggleGroup type="single" onValueChange={setStep1} value={step1}>
              <ToggleGroupItem value="yes">Yes</ToggleGroupItem>
              <ToggleGroupItem value="no">No</ToggleGroupItem>
            </ToggleGroup>
          </div>

          <div>
            <p className="font-medium">2. What kind of day is it?</p>
            <ToggleGroup type="single" onValueChange={setFuelType} value={fuelType}>
              <ToggleGroupItem value="Deficit">Deficit</ToggleGroupItem>
              <ToggleGroupItem value="Refeed">Refeed</ToggleGroupItem>
              <ToggleGroupItem value="Flex">Flex</ToggleGroupItem>
            </ToggleGroup>
          </div>

          <div>
            <p className="font-medium">3. Reset Done?</p>
            <ToggleGroup type="single" onValueChange={setStep3} value={step3}>
              <ToggleGroupItem value="yes">Yes</ToggleGroupItem>
              <ToggleGroupItem value="no">No</ToggleGroupItem>
            </ToggleGroup>
          </div>

          <div>
            <p className="font-medium">4. Maintain the Machine</p>
            <ToggleGroup type="single" onValueChange={setStep4} value={step4}>
              <ToggleGroupItem value="yes">Yes</ToggleGroupItem>
              <ToggleGroupItem value="no">No</ToggleGroupItem>
            </ToggleGroup>
            {suggestion && (
              <p className="mt-2 text-sm text-gray-700">{suggestion}</p>
            )}
          </div>

        </CardContent>
      </Card>
    </div>
  );
}
