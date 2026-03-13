import InstitutionClasicList from "@/components/InstitutionClasicList";
import InstitutionList from "@/components/InstitutionList";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Home() {

  const institutions = [
    {
      id: "IAU-021547",
      name: "University of Calgary",
      country: "Canada",
      region: "Alberta",
      image: "https://res.cloudinary.com/dg83pvgls/image/upload/v1773308829/img_qjq9v3.png",
      logo: "https://res.cloudinary.com/dg83pvgls/image/upload/v1773310592/image_2_jjkklf.png",
      logo2: "https://res.cloudinary.com/dg83pvgls/image/upload/v1773310592/IAU_Member_logo_1_s66ock.png",
      member: true,
      website: "https://www.ucalgary.ca/",
    },
    {
      id: "IAU-021599",
      name: "Saint Mary's University",
      country: "Canada",
      region: "Nova Scotia",
      image: "https://res.cloudinary.com/dg83pvgls/image/upload/v1773310591/img_1_dw0lmr.png",
      logo: "https://res.cloudinary.com/dg83pvgls/image/upload/v1773310591/image_3_jtuact.png",
      logo2: "https://res.cloudinary.com/dg83pvgls/image/upload/v1773310592/IAU_Member_logo_1_s66ock.png",
      member: true,
      website: "https://www.smu.ca/",
    },
    {
      id: "IAU-021678",
      name: "Concordia University",
      country: "Canada",
      region: "Alberta",
      image: "https://res.cloudinary.com/dg83pvgls/image/upload/v1773310566/img_2_gfptdg.png",
      logo: "https://res.cloudinary.com/dg83pvgls/image/upload/v1773311387/03-l_1_g59t4w.png",
      logo2: "https://res.cloudinary.com/dg83pvgls/image/upload/v1773310592/IAU_Member_logo_1_s66ock.png",
      member: true,
      website: "https://www.ucalgary.ca/",
    },
    {
      id: "IAU-021599",
      name: "McMaster University",
      country: "Canada",
      region: "Nova Scotia",
      image: "https://res.cloudinary.com/dg83pvgls/image/upload/v1773311388/img_3_kmbfyc.png",
      logo: "https://res.cloudinary.com/dg83pvgls/image/upload/v1773311388/03-l_1_1_jeva6a.png",
      logo2: "https://res.cloudinary.com/dg83pvgls/image/upload/v1773310592/IAU_Member_logo_1_s66ock.png",
      member: true,
      website: "https://www.smu.ca/",
    },
    {
      id: "IAU-021547",
      name: "University of Ottawa",
      country: "Canada",
      region: "Alberta",
      image: "https://res.cloudinary.com/dg83pvgls/image/upload/v1773308829/img_qjq9v3.png",
      logo: "https://res.cloudinary.com/dg83pvgls/image/upload/v1773310592/image_2_jjkklf.png",
      logo2: "https://res.cloudinary.com/dg83pvgls/image/upload/v1773310592/IAU_Member_logo_1_s66ock.png",
      member: true,
      website: "https://www.ucalgary.ca/",
    },
    {
      id: "IAU-021599",
      name: "Laval University",
      country: "Canada",
      region: "Nova Scotia",
      image: "https://res.cloudinary.com/dg83pvgls/image/upload/v1773310591/img_1_dw0lmr.png",
      logo: "https://res.cloudinary.com/dg83pvgls/image/upload/v1773310591/image_3_jtuact.png",
      logo2: "https://res.cloudinary.com/dg83pvgls/image/upload/v1773310592/IAU_Member_logo_1_s66ock.png",
      member: true,
      website: "https://www.smu.ca/",
    },
  ];

  return (
    <main className="cs-container mx-auto py-10 px-4">

      {/* Title */}
      <h1 className="lg:text-5xl text-4xl font-bold text-[var(--secondary-color)] mb-6">
        Canada
      </h1>

      {/* Tabs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-10">
        <button className="bg-[var(--primary-color)] text-white px-6 py-3 lg:text-2xl text-lg rounded-lg font-semibold">
          Higher Education Institutions (HEIs)
        </button>

        <button className="bg-[#B3B3B3] text-white px-6 py-3 lg:text-2xl text-lg rounded-lg font-semibold">
          Education System & Credentials
        </button>
      </div>

      {/* Results */}
      <div className="flex flex-col lg:flex-row gap-10 justify-between lg:items-center mb-6 mt-20">
        <h2 className="lg:text-[30px] text-2xl text-[var(--secondary-color)]  font-bold">
          Institutions Results
        </h2>

        <div className="flex gap-4 items-center">
          <p className="text-[var(--text-primary)] text-sm">
            148 Results Found For (Country = Canada)
          </p>
            <div className="h-[28px] border-l border-[var(--text-gray)]"></div>
          <div className="relative my-5 w-[150px]">
            <Select>
              <SelectTrigger
                className="
        w-full 
        h-[42px]
        text-sm 
        border-gray-200 
        focus:ring-1 
        focus:ring-[var(--primary-color)]
        text-[var(--text-primary)]
      "
              >
                <SelectValue placeholder="Search By IBM" />
              </SelectTrigger>

              <SelectContent>
               <SelectItem  value={0}>
                    Item 1
                  </SelectItem>
              </SelectContent>
            </Select>
          </div>

        </div>
      </div>

      <InstitutionList institutions={institutions} />
      <InstitutionClasicList institutions={institutions} />
    </main>
  );
}