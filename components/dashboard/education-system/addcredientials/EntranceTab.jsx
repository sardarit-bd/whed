
import { useState } from "react";
import ContentSaveComponnent from "../../../dashboard/addrecord/ContentSaveComponnent";
import Divider from "../../../dashboard/addrecord/Divider";
import Field from "../../../dashboard/addrecord/Field";
import Label from "../../../dashboard/addrecord/Label";
import RadioGroup from "../../../dashboard/addrecord/RadioGroup";
import SelectField from "../../../dashboard/addrecord/SelectField";
import TextInput from "../../../dashboard/addrecord/TextInput";
import useFocus from "../../../dashboard/addrecord/useFocus";

const inputBase = "w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white text-gray-800 outline-none transition-all placeholder:text-gray-400";

function EntranceTab() {
    const [form, setForm] = useState({
        nameEn: "ABC University",
        name: "ABC University",
        acronym: "",
        altName: "",
        street: "123 North Street",
        city: "Oranjestad",
        province: "",
        postalCode: "",
        tel: "",
        fax: "",
        email: "",
        www: "https://northuaruba.net",
        otherLocations: "",
        learning: "Traditional",
        typeOfInstitution: "International level",
        funding: "Private",
        religion: "",
        news: "Member",
        iau: "Member",
        membershipListing: "Yes",
        yearCreation: "2016",
        yearSuspended: "",
        history: "Created 2015",
        academicYear: "",
        admissionReq: "",
        tuitionFees: "",
        languages: "",
        accreditingBody: "ACNUR",
        accreditationDate: "",
    });

    const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));
    const setR = (key) => (val) => setForm((f) => ({ ...f, [key]: val }));
    const focus = useFocus();

    return (
        <div>
            {/* Name in English row — with Upload Logo */}
            <div className="grid grid-cols-1 sm:grid-cols-[200px_1fr_auto] gap-2 sm:gap-4 items-start sm:items-center py-2">
                <Label required>Name in English</Label>
                <input className={inputBase} value={form.nameEn} onChange={set("nameEn")} {...focus} />
                <button className="flex flex-col items-center gap-1.5 border border-gray-200 rounded-lg px-4 py-2 text-xs text-gray-500 hover:bg-gray-50 transition-colors bg-white cursor-pointer mt-1 sm:mt-0" style={{ minWidth: 90 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" strokeWidth="2">
                        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                        <polyline points="17 8 12 3 7 8" />
                        <line x1="12" y1="3" x2="12" y2="15" />
                    </svg>
                    Upload Logo
                </button>
            </div>

            <Field label="Name" required>
                <TextInput value={form.name} onChange={set("name")} />
            </Field>
            <Field label="Branch of">
                <SelectField placeholder="Choose Parent Institution" />
            </Field>
            <Field label="Acronym">
                <TextInput value={form.acronym} onChange={set("acronym")} />
            </Field>
            <Field label="Alternative Name">
                <TextInput value={form.altName} onChange={set("altName")} />
            </Field>

            <Divider title="Address" />

            <Field label="Street">
                <TextInput value={form.street} onChange={set("street")} />
            </Field>
            <Field label="City" required>
                <TextInput value={form.city} onChange={set("city")} />
            </Field>
            <Field label="Province">
                <TextInput value={form.province} onChange={set("province")} />
            </Field>
            <Field label="Postal Code">
                <TextInput value={form.postalCode} onChange={set("postalCode")} />
            </Field>
            <Field label="Tel">
                <TextInput value={form.tel} onChange={set("tel")} />
            </Field>
            <Field label="Fax">
                <TextInput value={form.fax} onChange={set("fax")} />
            </Field>
            <Field label="Email">
                <TextInput value={form.email} onChange={set("email")} type="email" />
            </Field>
            <Field label="WWW">
                <TextInput value={form.www} onChange={set("www")} />
            </Field>

            <Divider />

            <Field label="Other Physical Locations">
                <TextInput value={form.otherLocations} onChange={set("otherLocations")} />
            </Field>
            <Field label="Learning miscellanea">
                <RadioGroup name="learning" options={["Traditional", "Online", "Both"]} value={form.learning} onChange={setR("learning")} />
            </Field>
            <Field label="Type of institution">
                <TextInput value={form.typeOfInstitution} onChange={set("typeOfInstitution")} />
            </Field>
            <Field label="Institutional funding">
                <TextInput value={form.funding} onChange={set("funding")} />
            </Field>
            <Field label="Religion (Members only)">
                <TextInput value={form.religion} onChange={set("religion")} />
            </Field>
            <Field label="News (Members only)">
                <RadioGroup name="news" options={["Member", "Former Member", "Not a Member"]} value={form.news} onChange={setR("news")} />
            </Field>
            <Field label="IAU membership">
                <RadioGroup name="iau" options={["Member", "Former Member", "Not a Member"]} value={form.iau} onChange={setR("iau")} />
            </Field>
            <Field label="Membership listing-other">
                <RadioGroup name="membershipListing" options={["Yes", "No"]} value={form.membershipListing} onChange={setR("membershipListing")} />
            </Field>
            <Field label="Year of creation">
                <TextInput value={form.yearCreation} onChange={set("yearCreation")} />
            </Field>
            <Field label="Year suspended status">
                <TextInput value={form.yearSuspended} onChange={set("yearSuspended")} />
            </Field>
            <Field label="History (dates, status...)">
                <TextInput value={form.history} onChange={set("history")} />
            </Field>
            <Field label="Academic Year">
                <TextInput value={form.academicYear} onChange={set("academicYear")} />
            </Field>
            <Field label="Admission requirements">
                <TextInput value={form.admissionReq} onChange={set("admissionReq")} />
            </Field>
            <Field label="Tuition fees">
                <TextInput value={form.tuitionFees} onChange={set("tuitionFees")} />
            </Field>
            <Field label="National Students (network)">
                <SelectField placeholder="Select from the list" />
            </Field>
            <Field label="International Students (network)">
                <SelectField placeholder="Select from the list" />
            </Field>
            <Field label="Language(s) of instruction">
                <TextInput value={form.languages} onChange={set("languages")} />
            </Field>
            <Field label="Name of your national competent accrediting body">
                <TextInput value={form.accreditingBody} onChange={set("accreditingBody")} />
            </Field>
            <Field label="Date of the accreditation last used">
                <TextInput value={form.accreditationDate} onChange={set("accreditationDate")} type="date" />
            </Field>
            <Field label="Religious affiliation">
                <SelectField placeholder="Select from the list" />
            </Field>
            <Field label="Student body">
                <SelectField placeholder="Select from the list" />
            </Field>

            <ContentSaveComponnent />
        </div>
    );
}

export default EntranceTab;