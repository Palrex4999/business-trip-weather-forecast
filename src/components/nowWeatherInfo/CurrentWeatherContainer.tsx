"use client";

import NowWeatherInfo from "./NowWeatherInfo";
import { RainyIcon } from "@/components/icons";

export default function CurrentWeatherContainer() {
  return (
    <div className="flex justify-center items-center">
      <NowWeatherInfo
        weatherIcon={<RainyIcon />}
        temperature={25}
        unit="C"
        weatherCondition="Heavy Rain"
      />
    </div>
  );
}
