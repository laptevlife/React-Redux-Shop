import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader className ='pizza-block'
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="116" cy="140" r="107" /> 
    <rect x="5" y="263" rx="6" ry="6" width="223" height="26" /> 
    <rect x="6" y="304" rx="6" ry="6" width="221" height="79" /> 
    <rect x="154" y="307" rx="0" ry="0" width="3" height="27" /> 
    <rect x="8" y="401" rx="10" ry="10" width="108" height="40" /> 
    <rect x="134" y="402" rx="17" ry="17" width="90" height="39" />
  </ContentLoader>
)

export default MyLoader