import { create } from "zustand";

const useCountryStore = create((set) => ({
    selectedCountry: null,
    setSelectedCountry: (country) => set({ selectedCountry: country }),
}));

export default useCountryStore;