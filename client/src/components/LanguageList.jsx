import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { langs } from "./data.js";

export const LanguageList = ({ language, onSelect }) => {
  return (
    <div className="flex justify-start mb-5">
      <Select value={language} onValueChange={onSelect}>
        <SelectTrigger className="w-[180px] bg-stone-800 capitalize text-gray-200 border border-gray-700 font-dot">
          <SelectValue placeholder="Select a Language" />
        </SelectTrigger>
        <SelectContent className="bg-stone-900 font-dot text-gray-200 border border-stone-700">
          <SelectGroup>
            <SelectLabel className="text-gray-400">Languages</SelectLabel>
            {Object.entries(langs).map(([value, label]) => (
              <SelectItem
                key={value}
                value={value}
                className="text-gray-200 hover:bg-stone-700 focus:text-green-500 focus:bg-gray-700 capitalize"
              >
                {value}
                <span className="text-xs text-gray-600">{label}</span>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
