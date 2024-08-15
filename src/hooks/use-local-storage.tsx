"use client";
import LocalStorage from "@/lib/local-storage";
import { useState } from "react";

export default function useLocalStorage<T>(key: string, initialValue: T) {
  const storage = new LocalStorage<T>();

  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      return storage.get(key) || initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      storage.save(key, valueToStore);
    } catch (error) {}
  };

  return [storedValue, setValue] as const;
}
