
import { useState } from "react";
import ContentSaveComponnent from "../../../dashboard/addrecord/ContentSaveComponnent";
import Divider from "../../../dashboard/addrecord/Divider";
import Field from "../../../dashboard/addrecord/Field";
import SelectField from "../../../dashboard/addrecord/SelectField";
import TextInput from "../../../dashboard/addrecord/TextInput";
import useFocus from "../../../dashboard/addrecord/useFocus";

const inputBase = "w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white text-gray-800 outline-none transition-all placeholder:text-gray-400";

function GeneralTab() {
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

            <Field label="Name" required>
                <TextInput value={form.name} onChange={set("name")} />
            </Field>
            <Field label="Acronym">
                <TextInput value={form.acronym} onChange={set("acronym")} />
            </Field>


            <Field label="Category (1)">
                <SelectField placeholder="Select from the list" />
            </Field>

            <Field label="Category (2)">
                <SelectField placeholder="Select from the list" />
            </Field>

            <Field label="Education Level">
                <SelectField placeholder="Select from the list" />
            </Field>


            <Field label="Description" required>
                <TextInput value={""} onChange={(e) => { }} />
            </Field>


            <Divider />

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

export default GeneralTab;