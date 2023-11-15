import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ShoppingCartIcon = ({
        size = 30,
        color = "#00A36E",
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={size}
    height={size}
  >
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.5 5h13.777a1 1 0 0 1 .868 1.496l-2.57 4.496A2 2 0 0 1 14.84 12H8m0 0-1.544 2.47A1 1 0 0 0 7.304 16H18M8 12 4.053 4.106A2 2 0 0 0 2.263 3H2m6 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
    />
  </Svg>
)
export default ShoppingCartIcon