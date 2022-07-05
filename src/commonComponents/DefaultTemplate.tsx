import { ReactNode } from "react"
import HomeHeader from "../modules/home/components/HomeHeader"

type DefaultTemplateProps = {
  children: ReactNode;
}

const DefaultTemplate = (props: DefaultTemplateProps) => {
  return (
    <>
      <HomeHeader />
      {props.children}
    </>
  )
}

export default DefaultTemplate;