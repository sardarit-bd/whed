import CountryCondition from "@/components/about/Condition"
import GlobalID from "@/components/about/GlobalID"
import WhatKindOfInformation from "@/components/about/Information"
import List from "@/components/about/List"
import WhoProvides from "@/components/about/Provide"
import What from "@/components/about/What"
export default function about() {
  return (
    <>
      <What />
      <WhatKindOfInformation />
      <WhoProvides />
      <CountryCondition />
      <List />
      <GlobalID />
    </>
  )
}
