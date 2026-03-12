import CountryCondition from "@/components/about/Condition"
import WhatKindOfInformation from "@/components/about/Information"
import WhoProvides from "@/components/about/Provide"
import What from "@/components/about/What"
import List from "@/components/about/List"
export default function about() {
  return (
    <>
      <What />
      <WhatKindOfInformation />
      <WhoProvides />
      <CountryCondition />
      <List/>
    </>
  )
}
