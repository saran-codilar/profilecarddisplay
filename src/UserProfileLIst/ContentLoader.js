import React from "react"
import ContentLoader from "react-content-loader"

const Loader = (props) => (
  <ContentLoader 
    speed={2}
    width={400}
    height={400}
    viewBox="0 0 400 400"
    backgroundColor="grey"
    foregroundColor="white"
    {...props}
  >
    <rect x="75" y="50" rx="3" ry="3" width="200" height="2" /> 
    <rect x="75" y="325" rx="3" ry="3" width="200" height="2" /> 
    <rect x="75" y="50" rx="3" ry="3" width="2" height="277" /> 
    <rect x="272.5" y="50" rx="3" ry="3" width="2" height="277" /> 
    <circle cx="175" cy="125" r="45" />
    <rect x="125" y="275" rx="3" ry="3" width="100" height="5" /> 
    
  </ContentLoader>
)

export default Loader